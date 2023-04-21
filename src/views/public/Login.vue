<template>
    <v-row no-gutters>
        <v-col cols="12" lg="6" class="login-card-section">
            <v-card
                color="transparent"
                class="mx-auto rounded-lg pa-4"
                width="450"
                flat
            >
                <v-card-item class="mb-4">
                    <v-card-title class="py-2 login-title">
                        Log in to your account
                    </v-card-title>
                    <v-card-subtitle>
                        Welcome back! Select a method to log in.
                    </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <base-button
                                variant="flat"
                                btnClass="mr-4"
                                width="100%"
                                height="56"
                                @click="loginWithProvider"
                            >
                                <template v-slot:content>
                                    <v-img src="/google.png" width="25" />
                                    <span class="ml-2 text-none text-button">
                                        Google
                                    </span>
                                </template>
                            </base-button>
                        </v-col>
                        <v-col cols="6">
                            <base-button
                                variant="flat"
                                width="100%"
                                height="56"
                            >
                                <template v-slot:content>
                                    <v-img src="/facebook.png" width="25" />
                                    <span class="ml-2 text-none text-button">
                                        Facebook
                                    </span>
                                </template>
                            </base-button>
                        </v-col>
                    </v-row>

                    <v-row class="py-2">
                        <v-col cols="12">
                            <div class="separator">
                                <div class="line"></div>
                                <span class="px-2 text-grey text-caption"
                                    >or continue with email</span
                                >
                                <div class="line"></div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                variant="outlined"
                                placeholder="Email"
                                hide-details="auto"
                                prepend-inner-icon="mdi-email-outline"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                variant="outlined"
                                placeholder="Password"
                                hide-details="auto"
                                prepend-inner-icon="mdi-lock-outline"
                                append-inner-icon="mdi-eye-outline"
                                type="password"
                            />
                        </v-col>
                        <v-col cols="12">
                            <div
                                class="mt-n6 mb-n4 d-flex justify-space-between"
                            >
                                <div>
                                    <v-checkbox hide-details="auto">
                                        <template v-slot:label>
                                            <span class="text-body-2">
                                                Remember me
                                            </span>
                                        </template>
                                    </v-checkbox>
                                </div>
                                <div class="d-flex align-center">
                                    <router-link
                                        to="/auth/login"
                                        class="text-decoration-none text-body-2"
                                    >
                                        Forgot Password?
                                    </router-link>
                                </div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <base-button
                                color="#3aafae"
                                variant="flat"
                                width="100%"
                                height="56"
                                @click="onLogin"
                            >
                                <template v-slot:content>
                                    <span
                                        class="text-white text-none text-button"
                                    >
                                        Login
                                    </span>
                                </template>
                            </base-button>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <div class="text-center">
                                <span class="text-body-2">
                                    Don't have an account?
                                    <router-link
                                        to="/auth/signup"
                                        class="text-decoration-none"
                                    >
                                        Create Account
                                    </router-link>
                                </span>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="image-section d-none d-lg-flex"> </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

export default defineComponent({
    name: "PageLogin",

    setup() {
        const supabase: any = inject("supabase");
        const authStore = useAuthStore();
        const router = useRouter();

        async function loginWithProvider() {
            try {
                const { data, error } = await supabase.auth.signInWithOAuth({
                    provider: "google",
                });

                console.log('data', data)
                debugger
            } catch (error: any) {
                console.error("Error captured", error);
            }
        }

        function onLogin() {
            authStore.login();
            router.push({ name: "projects" });
        }

        return {
            loginWithProvider,
            onLogin
        };
    },
});
</script>

<style scoped>
.login-title {
    font-size: 28px;
}
.login-card-section {
    height: 100vh;
    display: grid;
    place-content: center;
    background-color: #f5f5fc;
}

.image-section {
    background-image: url("../../../public/bg-img-2.jpg");
    background-color: #3c5a77 !important;
    background-blend-mode: multiply !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    opacity: 0.8 !important;
}

.separator {
    display: flex;
    align-items: center;
}

.separator .line {
    flex: 1;
    height: 1px;
    background-color: #d3d3d3;
}
</style>
