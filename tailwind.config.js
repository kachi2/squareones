import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                sidebar: {
                    100: "#F5F9FC",
                },
                blue: {
                    100: "#cee2fe",
                    200: "#9dc4fc",
                    300: "#6ba7fb",
                    400: "#3a89f9",
                    500: "#096cf8",
                    600: "#0756c6",
                    700: "#054195",
                    800: "#042b63",
                    900: "#021632",
                },
                header: {
                    100: "#d3d4d7",
                    200: "#a6a9ae",
                    300: "#7a7f86",
                    400: "#4d545d",
                    500: "#212935",
                    600: "#1a212a",
                    700: "#141920",
                    800: "#0d1015",
                    900: "#07080b",
                },
                primary: {
                    100: "#d5e1fc",
                    200: "#acc3f8",
                    300: "#82a5f5",
                    400: "#5987f1",
                    500: "#2f69ee",
                    600: "#2654be",
                    700: "#1c3f8f",
                    800: "#132a5f",
                    900: "#091530",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [forms, typography],
};
