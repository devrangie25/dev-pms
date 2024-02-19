<template>
  <v-navigation-drawer location="right" width="350" style="border-style: none">
    <template v-slot:prepend>
      <div class="pa-4">
        <div class="d-flex justify-space-evenly mx-12 mt-2 pb-10">
          <div>
            <base-button
              size="x-small"
              isIcon
              color="grey-darken-2"
              variant="outlined"
              btnClass="rounded-xl"
            >
              <template v-slot:content>
                <v-icon size="16"> mdi-magnify </v-icon>
              </template>
            </base-button>
          </div>
          <div>
            <base-button
              size="x-small"
              isIcon
              color="grey-darken-2"
              variant="outlined"
              btnClass="rounded-xl"
            >
              <template v-slot:content>
                <v-icon size="16"> mdi-headphones </v-icon>
              </template>
            </base-button>
          </div>
          <div>
            <base-button
              size="x-small"
              isIcon
              color="grey-darken-2"
              variant="outlined"
              btnClass="rounded-xl"
            >
              <template v-slot:content>
                <v-icon size="16"> mdi-bell-outline </v-icon>
              </template>
            </base-button>
          </div>
        </div>

        <div class="d-flex justify-space-between mx-6 mb-10 align-center">
          <div class="text-h6">
            <span class="font-weight-light d-flex"> Hello, </span>
            <span class="font-weight-medium d-flex">
              {{ getUser.firstname || "NA" }}</span
            >
          </div>
          <div class="d-flex align-center">
            <div>
              <v-avatar size="90">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
              </v-avatar>
            </div>
            <div>
              <v-icon> mdi-dots-vertical </v-icon>
            </div>
          </div>
        </div>

        <div class="mx-6 mb-10">
          <v-divider thickness="1" />
        </div>

        <div class="mx-6 mb-10">
          <v-row>
            <v-col cols="6">
              <div class="text-caption font-weight-thin">Total Projects:</div>
              <div class="text-h5 d-flex">
                <v-divider color="error" inset thickness="3" vertical />
                <span class="ml-2"> 180 </span>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption font-weight-thin">Total Clients:</div>
              <div class="text-h5 d-flex">
                <v-divider color="primary" inset thickness="3" vertical />
                <span class="ml-2"> 180 </span>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption font-weight-thin">Completed</div>
              <div class="text-h5 d-flex">
                <v-divider color="info" inset thickness="3" vertical />
                <span class="ml-2"> 180 </span>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption font-weight-thin">In progress</div>
              <div class="text-h5 d-flex">
                <v-divider color="success" inset thickness="3" vertical />
                <span class="ml-2"> 180 </span>
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="mx-6 mb-10">
          <v-divider thickness="1" />
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const getUser = computed(() => {
  return authStore.getAuthenticatedUser();
});
</script>

<script lang="ts">
export default defineComponent({
  name: "NavBarRight",
});
</script>

<style scoped></style>
