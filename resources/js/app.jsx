import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap";
import "../css/app.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/tokens.css";
import "@radix-ui/themes/components.css";
import "@radix-ui/themes/utilities.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import "datatables.net-select-dt";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Theme } from "@radix-ui/themes";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Theme>
                <App {...props} />
            </Theme>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
