<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts">

import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "AppLayout",
    setup() {
        const route = useRoute();
        /**
         *  This is a computed property that will return the name
         *  of the current route
         */
        const layout = computed(() => {
            const layout = route?.meta?.layout;

            if (layout) {
                return layout;
            }
            return "div";
        });
        return {
            layout,
        };
    },
});
</script>