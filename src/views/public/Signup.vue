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
                        Create an account
                    </v-card-title>
                    <v-card-subtitle>
                        Select a method to create your free account.
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
                                btnClass="mr-4"
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
                                <span class="px-2 text-grey text-caption">or</span>
                                <div class="line"></div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <BaseInput 
                                name="name"
                                placeholder="Name"
                                prependInnerIcon="mdi-account-outline" 
                                :errorMessages="errorMessage.name"
                            />
                        </v-col>
                        <v-col cols="12">
                            <BaseInput 
                                name="email"
                                placeholder="Email"
                                prependInnerIcon="mdi-email-outline" 
                                :errorMessages="errorMessage.email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <BaseInput 
                                name="password"
                                placeholder="Password"
                                :type="showPassword ? 'text' : 'password'"
                                prependInnerIcon="mdi-lock-outline" 
                                :errorMessages="errorMessage.password"
                                :appendInnerIcon="showPassword ? 'mdi-eye-off' : 'mdi-eye-outline'"
                                @click:click-append-inner-icon="() => showPassword = !showPassword"
                            />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <base-button
                                color="#3aafae"
                                variant="flat"
                                width="100%"
                                height="56"
                                @click="onCreatingAccount"
                                :disabled="isSubmittingDetails"
                            >
                                <template v-slot:content>
                                    <span
                                        class="text-white text-none text-button d-flex align-center"
                                    >
                                        <base-loader
                                            v-if="isSubmittingDetails"
                                            size="sm"
                                        />
                                        <span class="ml-2">
                                            {{
                                                isSubmittingDetails
                                                    ? "Creating Account..."
                                                    : "Create Account"
                                            }}
                                        </span>
                                    </span>
                                </template>
                            </base-button>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <div class="text-center">
                                <span class="text-body-2">
                                    Already have an account?
                                    <router-link
                                        to="/login"
                                        class="text-decoration-none"
                                    >
                                        Login
                                    </router-link>
                                </span>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" class="image-section" />
    </v-row>
</template>

<script lang="ts" setup>
import { defineComponent, ref, Ref, computed, reactive } from 'vue'
import useValidate from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";

defineComponent({
    name: 'PageSignup'
})

const showPassword = ref(false)
const isSubmittingDetails = ref(false)

const state = reactive({
    name: "",
    email: "",
    password: "",
});

const errorMessage: Ref<any> = ref({
    name: "",
    email: "",
    password: "",
});

const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage(
                "Name is required",
                required
            ),
        },
        email: {
            required: helpers.withMessage(
                "Email is required",
                required
            ),
            email: helpers.withMessage("Invalid email address", email)
        },
        password: {
            required: helpers.withMessage(
                "Password is required",
                required
            ),
            minLength: helpers.withMessage(
                "Password should at least 8 characters",
                minLength(8)
            ),
        },
    };
});

const v$ = useValidate(rules, state);

const onCreatingAccount = async() => {
    try {
        isSubmittingDetails.value = true;
        const isFormValid = await v$.value.$validate();
        if (!isFormValid) {
            console.log("v$.value.$errors", v$.value.$errors)
            if (v$.value.$errors.length > 0) {
                v$.value.$errors.forEach((error: any) => {
                    errorMessage.value[error.$property] = error.$message;
                });
            }
            return (isSubmittingDetails.value = false);
        } else {
            const checkUser: any = new Promise(
                (resolve: any, reject: any) => {
                    setTimeout(() => {
                        resolve();
                    }, 3000);
                }
            );

            // checkUser.then(() => {
            //     isCheckingUserCredentials = false;
            //     authStore.login();
            //     router.push({ name: "projects" });
            // });
        }
    } catch (error) {
        isSubmittingDetails.value = false;
        console.error("An Error Occured", error);
    }
}
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
    background-color: #D3D3D3;
}
</style>