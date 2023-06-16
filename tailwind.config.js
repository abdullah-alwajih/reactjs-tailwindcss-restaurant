/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js, jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#B45B35",
                "primary-container": "#FCE3A0",
                secondary: "#D4D4D5",
                "secondary-container": '#EFEDEE',
            },
        },
    },
    plugins: [],
}

