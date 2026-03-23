import { Layout } from "./components/layout";
import styles from "./styles/main.css";

export function renderEmbedContent(args, view) {

    return `
        <style>
            ${styles}
        </style>
        ${Layout(view, args.events)}
    `
}