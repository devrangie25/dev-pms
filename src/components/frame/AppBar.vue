<template>
    <v-app-bar title="Projects" flat height="80">
        <base-button color="#3aafae" variant="flat" btnClass="rounded-xl">
            <template v-slot:content>
                <span class="text-none text-white text-button">
                    Start new project
                </span>
            </template>
        </base-button>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppBar",
});
</script>

<style scoped></style>
