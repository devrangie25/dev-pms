import { useAuthStore } from "../stores/auth";

export function authGuard(to: any, from: any, next: any) {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated) {
        next({ name: "login" });
    } else {
        next();
    }
}

export function guestGuard(to: any, from: any, next: any) {
    const authStore = useAuthStore();

    if (authStore.isAuthenticated) {
        next({ name: "home" });
    } else {
        next();
    }
}
