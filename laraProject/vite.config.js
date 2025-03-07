import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/laraProject.css', 'resources/js/laraProject.js'],
            refresh: true,
        }),
    ],
});
