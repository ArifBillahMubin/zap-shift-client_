import js from "@eslint/js";

export default [
    js.configs.recommended, // 1. Apply recommended global rules

    {
        files: ["src/**/*.js"], // 2. Target specific files
        rules: {
            "no-unused-vars": "warn",
            "semi": ["error", "always"] // 3. Override or add rules
        }
    }
];