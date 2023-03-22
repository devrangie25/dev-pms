<template>
    <v-card color="blue">
        <v-layout>
            <v-app-bar
                color="surface-variant"
                title="Application bar"
            ></v-app-bar>

            <v-navigation-drawer color="surface">
                <v-list>
                    <v-list-item title="Drawer left"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-navigation-drawer color="surface" location="right">
                <v-list>
                    <v-list-item title="Drawer right"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 100vh">
                <slot />
            </v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlankLayout",
    setup() {},
});
</script>
