<template>
    <v-toolbar prominent color="transparent" height="70" >
        <v-app-bar-nav-icon>
            <v-icon> mdi-dots-grid </v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer v-for="spacer in 3"></v-spacer>

        <base-select
            :items="selectClientOptions"
            class="mr-4"
            variant="plain"
            label="Client"
        />
        <base-select
            :items="selectLabelOptions"
            class="mr-4"
            variant="plain"
            label="Label"
        />
        <base-select
            :items="selectCategoryOptions"
            class="mr-4"
            variant="plain"
            label="Category"
        />
        <base-select
            :items="selectSortOptions"
            class="mr-4"
            variant="plain"
            label="Sort by"
        />
    </v-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "ToolBar",
    setup() {
        const selectClientOptions = ref(["Google", "Facebook", "Apple", "Youtube"]);
        const selectLabelOptions = ref(["In progress", "Pending", "Done"]);
        const selectCategoryOptions = ref(["International", "Local", "Personal"]);
        const selectSortOptions = ref(["Date", "Created"]);

        return {
            selectClientOptions,
            selectLabelOptions,
            selectCategoryOptions,
            selectSortOptions,
        };
    },
});
</script>

<style scoped></style>
