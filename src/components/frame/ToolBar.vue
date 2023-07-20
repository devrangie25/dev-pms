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
            variant="outlined"
            density="compact"
            label="Client"
            @selected-value="onChangeSelectClient"
        />
        <base-select
            :items="selectStatusOptions"
            class="mr-4"
            variant="outlined"
            density="compact"
            label="Label"
        />
        <base-select
            :items="selectCategoryOptions"
            class="mr-4"
            variant="outlined"
            density="compact"
            label="Category"
        />
        <base-select
            :items="selectSortOptions"
            class="mr-4"
            variant="outlined"
            density="compact"
            label="Sort by"
        />

        <base-button
            color="#6B728E"
            variant="flat"
            density="default"
            height="40"
        >
            <template v-slot:content>
                <base-icon size="23" color="white" icon="mdi-restore"></base-icon>
            </template>
        </base-button>
    </v-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
    projectClients,
    projectStatuses,
    projectCategories,
    projectSort
} from "../../static/options";

export default defineComponent({
    name: "ToolBar",
    setup() {
        const selectClientOptions = ref(projectClients);
        const selectStatusOptions = ref(projectStatuses);
        const selectCategoryOptions = ref(projectCategories);
        const selectSortOptions = ref(projectSort);

        return {
            selectClientOptions,
            selectStatusOptions,
            selectCategoryOptions,
            selectSortOptions,
        };
    },

    methods: {
        onChangeSelectClient(value: any) {
            console.log('Client Selected for Filter', value);
        }
    }
});
</script>

<style scoped></style>
