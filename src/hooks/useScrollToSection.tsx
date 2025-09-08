// hooks/useAnchorNav.ts
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type GoToOpts = { replace?: boolean; behavior?: ScrollBehavior };

export const useScrollToSection = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToEl = (id: string, behavior: ScrollBehavior = "smooth") => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior, block: "start" });
    };

    const goTo = (id: string, opts?: GoToOpts) => {
        const hash = `#${id}`;
        const url = `/${hash}`;

        if (location.pathname !== "/") {
            // С другой страницы — сначала уходим на главную с нужным hash.
            navigate(url, { replace: opts?.replace });
            return; // скролл сделает эффект ниже
        }

        // Уже на главной: ОБЯЗАТЕЛЬНО обновим hash…
        if (location.hash !== hash) {
            const method = opts?.replace ? "replaceState" : "pushState";
            window.history[method](null, "", url);
        }
        // …и ВСЕГДА проскроллим (даже если hash не изменился).
        scrollToEl(id, opts?.behavior ?? "smooth");
    };

    // Обработка прямого захода или перехода по ссылке /#id
    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const id = location.hash.slice(1);
            // ждём кадр, чтобы секции точно смонтировались
            requestAnimationFrame(() => scrollToEl(id, "auto"));
        }
    }, [location.pathname, location.hash]);

    // По желанию: поддержка back/forward без перезагрузки
    useEffect(() => {
        const onPop = () => {
            const id = window.location.hash.replace("#", "");
            if (id) scrollToEl(id, "auto");
            else window.scrollTo({ top: 0, behavior: "auto" });
        };
        window.addEventListener("popstate", onPop);
        return () => window.removeEventListener("popstate", onPop);
    }, []);

    return goTo;
};
