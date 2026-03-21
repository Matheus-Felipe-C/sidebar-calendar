import Layout from "./components/layout";
import styles from "./styles/main.css";

export function renderEmbedContent(args) {
    return `
        <style>
            ${styles}
        </style>
        ${Layout()}
    `
}