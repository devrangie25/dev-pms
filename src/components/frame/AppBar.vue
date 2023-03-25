<template>
    <v-app-bar title="Projects" flat height="80">
        <base-button
            v-if="showAppBarActionButton"
            color="#3aafae"
            variant="flat"
            btnClass="rounded-xl"
            @click="onNewProject"
        >
            <template v-slot:content>
                <span class="text-none text-white text-button">
                    Start new project
                </span>
            </template>
        </base-button>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "AppBar",

    setup() {
        const route: any = useRoute();
        const emitter: any = inject("emitter");

        const showAppBarActionButton: Ref<Boolean> = computed(() => {
            if (route.name) {
                const path: any = {
                    projects: true,
                };
                return path[route.name];
            } else {
                return false;
            }
        });

        function onNewProject() {
            emitter.emit("on-show-modal-for-new-project", true);
        }

        return {
            onNewProject,
            showAppBarActionButton,
        };
    },
});
</script>

<style scoped></style>
