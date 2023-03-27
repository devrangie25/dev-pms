<template>
    <v-card flat class="pa-6 rounded-t-xl" color="#f8fafb" height="100%">
        <tool-bar />

        <div class="mt-12">
            <v-row>
                <v-col cols="3" v-for="(project, ind) in projects" :key="ind">
                    <base-card :color="project.color">
                        <template v-slot:card-title>
                            {{ project.title }}
                        </template>
                        <template v-slot:card-content>
                            {{ project.description }}
                        </template>
                    </base-card>
                </v-col>
            </v-row>
        </div>

        <base-modal
            v-model="dialog"
            :persistent="true"
            width="800"
            height="700"
        >
            <template v-slot:content>
                <v-card rounded="lg" class="pa-8" width="100%" height="100%">
                    <div class="text-h6 mb-4">New Project</div>
                    <div>
                        <project-form :form="form" />
                    </div>
                </v-card>
            </template>
        </base-modal>
    </v-card>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    Ref,
    inject,
    onBeforeMount,
    onBeforeUnmount,
} from "vue";
import { Project } from "../../types/global";

export default defineComponent({
    name: "PageProjects",

    setup() {
        const emitter: any = inject("emitter");
        const dialog: Ref<Boolean> = ref(false);
        const form: Ref<Project> = ref({
            title: "",
            description: "",
            contributors: [],
            status: "Pending",
            startDate: "",
            endDate: "",
            favorite: false,
            category: "",
            color: "",
            client: "",
        });
        const projects: Ref<Array<Project>> = ref([]);

        onBeforeMount((): void => {
            emitter.on("on-show-modal-for-new-project", (value: any) => {
                dialog.value = value;
            });

            emitter.on("project-form-on-submit", (value: any) => {
                onSubmit(value);
            });

            emitter.on("project-form-on-cancel", (value: any) => {
                onCancel();
            });
        });

        async function onSubmit(formData: Project): Promise<void> {
            const submittingProject = new Promise(
                (resolve: any, reject: any) => {
                    if (!formData.title) {
                        reject("Please fill up form");
                    } else {
                        setTimeout(() => {
                            projects.value.push(formData);
                            resolve(projects.value);
                        }, 2000);
                    }
                }
            );

            try {
                await submittingProject;
                dialog.value = false;
                resetForm();
            } catch (error: any) {
                console.error("error", error);
            }
        }

        function resetForm(): void {
            form.value = {
                title: "",
                description: "",
                contributors: [],
                status: "Pending",
                startDate: "",
                endDate: "",
                favorite: false,
                category: "",
                color: "",
                client: "",
            };
        }

        function onCancel(): void {
            dialog.value = false;
            resetForm();
        }

        onBeforeUnmount((): void => {
            emitter.off("project-form-on-cancel");
            emitter.off("project-form-on-submit");
            emitter.off("on-show-modal-for-new-project");
        });

        return {
            projects,
            dialog,
            form,
            resetForm,
            onSubmit,
            onCancel,
        };
    },
});
</script>

<style scoped></style>
