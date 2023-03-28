<template>
    <v-card class="rounded-0">
        <v-layout>

            <nav-bar-left />

            <nav-bar-right />

            <app-bar />

            <v-main style="height: 100vh;">
                <slot />
            </v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AuthenticatedLayout",
    setup() {},
});
</script>
