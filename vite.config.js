import { defineConfig } from "vite";
import{ resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve (__dirname, "index.html"),
                addmenu: resolve(__dirname, "addmenu.html"),
                updatemenu: resolve(__dirname, "updatemenu.html"),
                deletemenu: resolve(__dirname, "deletemenu.html"),
                login: resolve(__dirname, "login.html"),
                register: resolve(__dirname, "register.html"),
                bookings: resolve(__dirname, "bookings.html"),
                messages: resolve(__dirname, "messages.html")

            }
        }
    }
});