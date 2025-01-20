/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                sora: ["Sora-Regular", "sans-serif"],
                "sora-bold": ["Sora-Bold", "sans-serif"],
                "sora-extrabold": ["Sora-ExtraBold", "sans-serif"],
                "sora-extralight": ["Sora-ExtraLight", "sans-serif"],
                "sora-light": ["Sora-Light", "sans-serif"],
                "sora-medium": ["Sora-Medium", "sans-serif"],
                "sora-semibold": ["Sora-SemiBold", "sans-serif"],
                "sora-thin": ["Sora-Thin", "sans-serif"],
            },
            colors: {
                secondary: "#C67C4E",
                third: "#EDD6C8",
                primary: "#313131",
                neutral: "#E3E3E3",
                fourth: "#F9F2ED",
                success: "#4caf50",
                error: "#f44336",
                warning: "#ff9800",
                info: "#2196f3",
            },
        },
    },
    plugins: [],
};
