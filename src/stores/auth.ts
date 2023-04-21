import { defineStore } from "pinia";
import { parse, stringify } from "zipson";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
    }),
    getters: {
        getIsAuthenticated: (state) => state.isAuthenticated,
    },
    actions: {
        login() {
            this.isAuthenticated = true;
        },
        logout() {
            this.isAuthenticated = false;
        },
    },
    persist: {
        storage: sessionStorage,
        key: "auth",
        paths: ["isAuthenticated"],
        serializer: {
            deserialize: parse,
            serialize: stringify,
        },
    },
});
