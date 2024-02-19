<template>
  <v-row no-gutters>
    <v-col cols="6" class="login-card-section">
      <v-card color="transparent" class="mx-auto rounded-lg pa-4" width="450" flat>
        <v-card-item class="mb-4">
          <v-card-title class="py-2 login-title"> Create an account </v-card-title>
          <v-card-subtitle>
            Select a method to create your free account.
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row>
            <v-col cols="6">
              <base-button variant="flat" btnClass="mr-4" width="100%" height="56">
                <template v-slot:content>
                  <v-img src="/google.png" width="25" />
                  <span class="ml-2 text-none text-button"> Google </span>
                </template>
              </base-button>
            </v-col>
            <v-col cols="6">
              <base-button variant="flat" btnClass="mr-4" width="100%" height="56">
                <template v-slot:content>
                  <v-img src="/facebook.png" width="25" />
                  <span class="ml-2 text-none text-button"> Facebook </span>
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
              <v-text-field
                v-model="form.firstname"
                name="firstname"
                variant="outlined"
                placeholder="First name"
                hide-details="auto"
                prepend-inner-icon="mdi-account-outline"
                type="text"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.lastname"
                name="lastname"
                variant="outlined"
                placeholder="Last name"
                hide-details="auto"
                prepend-inner-icon="mdi-account-outline"
                type="text"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                name="email"
                variant="outlined"
                placeholder="Email"
                hide-details="auto"
                prepend-inner-icon="mdi-email-outline"
                type="text"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                name="password"
                variant="outlined"
                placeholder="Password"
                hide-details="auto"
                prepend-inner-icon="mdi-lock-outline"
                append-inner-icon="mdi-eye-outline"
                type="password"
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
                @click="handleRegisterUser"
              >
                <template v-slot:content>
                  <span class="text-white text-none text-button"> Create account </span>
                </template>
              </base-button>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <div class="text-center">
                <span class="text-body-2">
                  Already have an account?
                  <router-link to="/auth/login" class="text-decoration-none">
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
import { ref, inject } from "vue";

const authStore: any = inject("authStore");

const form = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

const handleRegisterUser = async () => {
  const response = await authStore.register(form.value);

  if (response?.status === "error") {
    return console.error("Error in Registering User", response);
  }

  console.log("Success Registered User", response?.data);
};
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
