import type { ObjectDirective } from 'vue';

interface RevealOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    once?: boolean;
    // opcional: si once=false, decide si vuelve a ocultar al salir
    resetOnExit?: boolean;
}

type RevealHTMLElement = HTMLElement & {
    __revealObserver?: IntersectionObserver;
    __revealTriggered?: boolean;
    __revealOptionsKey?: string;
};

const BASE_CLASSES = [
    'transition-all',
    'duration-1000',   // antes 700 → más lento
    'ease-out',
    'will-change-transform',
    'delay-150'        // pequeño delay
];

const HIDDEN_CLASSES = [
    'opacity-0',
    'translate-y-12',  // antes translate-y-6 → más distancia
    'scale-95',        // entra un poquito más “chico”
    'blur-sm'          // opcional: desenfoque al inicio
];

const VISIBLE_CLASSES = [
    'opacity-100',
    'translate-y-0',
    'scale-100',
    'blur-0'
];


const addHiddenState = (el: HTMLElement) => {
    el.classList.add(...BASE_CLASSES, ...HIDDEN_CLASSES);
    el.classList.remove(...VISIBLE_CLASSES);
};

const addVisibleState = (el: HTMLElement) => {
    el.classList.add(...VISIBLE_CLASSES);
    el.classList.remove(...HIDDEN_CLASSES);
};

const buildOptionsKey = (o: RevealOptions) =>
    JSON.stringify({
        threshold: o.threshold ?? 0.15,
        rootMargin: o.rootMargin ?? '0px',
        once: o.once ?? true,
        resetOnExit: o.resetOnExit ?? false,
        // root no se serializa bien; asumimos que no cambia seguido
    });

const setupObserver = (el: RevealHTMLElement, opts: RevealOptions) => {
    const {
        threshold = 0.15,
        root = null,
        rootMargin = '0px',
        once = true,
        resetOnExit = false,
    } = opts;

    // Estado inicial
    if (!el.__revealTriggered) addHiddenState(el);

    // Por si existía uno anterior
    el.__revealObserver?.disconnect();

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (once && el.__revealTriggered) continue;

                    addVisibleState(el);
                    el.__revealTriggered = true;

                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once && resetOnExit) {
                    // Si quieres que se oculte de nuevo al salir (opcional)
                    el.__revealTriggered = false;
                    addHiddenState(el);
                }
            }
        },
        { threshold, root, rootMargin }
    );

    el.__revealObserver = observer;
    observer.observe(el);
};

const revealDirective: ObjectDirective<RevealHTMLElement, RevealOptions | undefined> = {
    mounted(el, binding) {
        const opts = binding.value || {};
        el.__revealOptionsKey = buildOptionsKey(opts);
        setupObserver(el, opts);
    },

    updated(el, binding) {
        const opts = binding.value || {};
        const nextKey = buildOptionsKey(opts);

        // Si cambian opciones, recrea el observer
        if (el.__revealOptionsKey !== nextKey) {
            el.__revealOptionsKey = nextKey;
            setupObserver(el, opts);
        }
    },

    beforeUnmount(el) {
        el.__revealObserver?.disconnect();
        delete el.__revealObserver;
    },
};

export default revealDirective;
