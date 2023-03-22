<template>
    <v-card flat class="pa-6 rounded-t-xl" color="#f8fafb" height="100%">
        <tool-bar />

        <div class="mt-12">
            <v-row>
                <v-col cols="3" v-for="(project, ind) in projects" :key="ind">
                    <base-card  :color="project.color">
                        <template v-slot:card-title> {{ project.title }}  </template>
                        <template v-slot:card-content> {{ project.description }} </template>
                    </base-card>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "PageProjects",

    setup() {
        const projects = ref([
            {
                title: "Video Campaign",
                subtitle: "Subtitle",
                description:
                    "This is a test description. For Practice purposes",
                contributors: ["John", "Jane", "Doe"],
                status: "Inprogress",
                startDate: "June 12, 2022",
                favorite: false,
                category: 'local',
                color: '#E9EDC9',
                client: 1
            },
            {
                title: "Facebook Market",
                subtitle: "Subtitle",
                description:
                    "This is a test description. For Practice purposes",
                contributors: ["John", "Jane", "Doe"],
                status: "Inprogress",
                startDate: "June 12, 2022",
                favorite: false,
                category: 'international',
                color: '#FAEDCD',
                client: 1
            },
            {
                title: "Firm System",
                subtitle: "Subtitle",
                description:
                    "This is a test description. For Practice purposes",
                contributors: ["John", "Jane", "Doe"],
                status: "Inprogress",
                startDate: "June 12, 2022",
                favorite: false,
                category: 'international',
                color: '#E49393',
                client: 2
            },
            {
                title: "Security System",
                subtitle: "Subtitle",
                description:
                    "This is a test description. For Practice purposes",
                contributors: ["John", "Jane", "Doe"],
                status: "Inprogress",
                startDate: "June 12, 2022",
                favorite: false,
                category: 'international',
                color: '#FFFFFF',
                client: 3
            },
        ]);

        return {
            projects,
        };
    },
});
</script>

<style scoped></style>
