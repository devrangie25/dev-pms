<template>
    <v-navigation-drawer width="90" color="surface" style="border-style: none">
        <v-list class="mt-16 px-4 pt-4">
            <v-list-item
                v-for="(navigation, ind) in navigations"
                :key="ind"
                class="d-flex justify-center mb-2 nav-item rounded-lg"
                :to="navigation.link || '/'"
            >
                <base-icon :icon="navigation.icon" />
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "NavBarLeft",

    setup() {
        const navigations = ref<Array<any>>([
            {
                title: "Projects",
                icon: "mdi-view-dashboard-outline",
                link: "/projects",
            },
            {
                title: "Users",
                icon: "mdi-chart-line-variant",
                link: "/",
            },
            {
                title: "Calendar",
                icon: "mdi-calendar-outline",
                link: "/calendar",
            },
            {
                title: "Profile",
                icon: "mdi-account-outline",
                link: "/user",
            },
            {
                title: "Revenue",
                icon: "mdi-currency-usd",
                link: "/revenue",
            },
            {
                title: "Settings",
                icon: "mdi-cog-outline",
                link: "/settings",
            },
        ]);

        return {
            navigations,
        };
    },
});
</script>

<style scoped>
.nav-item {
    cursor: pointer;
}
</style>
