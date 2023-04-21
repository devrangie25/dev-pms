<template>
    <v-card
        flat
        class="pa-6 rounded-t-xl card-container"
        color="#f8fafb"
        height="100%"
    >
        <tool-bar />

        <div class="no-projects-container" v-if="store.projects.length === 0">
            <div class="mb-n6">
                <img src="../../assets/folder.png" alt="" style="width: 200px;">
            </div>
            <base-button color="#3aafae" variant="flat" btnClass="rounded-xl" @click="onStartNewProject">
                <template v-slot:content>
                    <span class="text-none text-white text-button">
                        Start new project
                    </span>
                </template>
            </base-button>
        </div>

        <div v-if="store.projects.length > 0" class="mt-12 inner-projects-container">
            <div
                v-for="(project, ind) in store.projects"
                :key="ind"
                :class="getCardClass(project.description)"
                class="project-card-container"
            >
                <div class="project-title mb-2">
                    {{ project.title }}
                </div>

                <div class="text-body-2">
                    {{ project.description }}
                </div>

                <div class="bottom-action">
                    <div>
                        <v-avatar class="avatar-contributor" size="25">
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                            ></v-img>
                        </v-avatar>
                        <v-avatar class="avatar-contributor" size="25">
                            <v-img
                                src="https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="John"
                            ></v-img>
                        </v-avatar>
                        <v-avatar class="avatar-contributor" size="25">
                            <v-img
                                src="https://images.pexels.com/photos/3988680/pexels-photo-3988680.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="John"
                            ></v-img>
                        </v-avatar>
                    </div>
                    <div class="d-flex justify-space-between align-center">
                        <div class="text-caption font-weight-bold text-grey">
                            1 week ago
                        </div>
                        <div class="d-flex align-center">
                            <div>
                                <v-icon class="favorite-icon" color="#f9b018">
                                    mdi-star
                                </v-icon>
                            </div>
                            <div>
                                <v-icon
                                    class="favorite-icon"
                                    color="grey"
                                    size="20"
                                >
                                    mdi-dots-vertical
                                </v-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <base-card
                v-for="(project, ind) in store.projects"
                :key="ind"
                :minHeight="'100'"
                rounded="xl"
                :cardClass="getCardClass(project.description)"
            >
                <template v-slot:card-title>
                    {{ project.title }}
                </template>
                <template v-slot:card-content>
                    {{ project.description }}
                </template>
            </base-card> -->
        </div>
        <base-modal
            v-model="dialog"
            :persistent="true"
            width="800"
            height="750"
        >
            <template v-slot:content>
                <v-card rounded="lg" class="pa-8" width="100%" height="90%">
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
import { useProjectStore } from "../../stores/project";

export default defineComponent({
    name: "PageProjects",

    setup() {
        const store = useProjectStore();
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

        const onStartNewProject = () => {
            dialog.value = true
        }

        const getCardClass = (description: any) => {
            let str = description.trim();
            // Split the string into an array of words
            const wordsArr = str.split(" ");
            // Filter out any empty strings
            const filteredArr = wordsArr.filter((word: any) => word !== "");

            return getClass(filteredArr.length);
        }

        const getClass = (length: number): any => {
            console.log("length", length);
            if (length < 20) {
                return "card card_small";
            }
            if (length >= 20 && length <= 40) {
                return "card card_medium";
            }
            if (length > 40 && length <= 60) {
                return "card card_large";
            }
        }

        const onSubmit = async (formData: Project): Promise<void> => {
            const submittingProject = new Promise(
                (resolve: any, reject: any) => {
                    if (!formData.title) {
                        reject("Please fill up form");
                    } else {
                        setTimeout(() => {
                            store.addProject({
                                ...formData,
                                id: Math.floor(Math.random() * 100),
                            });
                            resolve();
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

        const resetForm = (): void => {
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

        const onCancel = (): void => {
            dialog.value = false;
            resetForm();
        }

        onBeforeUnmount((): void => {
            emitter.off("project-form-on-cancel");
            emitter.off("project-form-on-submit");
            emitter.off("on-show-modal-for-new-project");
        });

        return {
            dialog,
            form,
            resetForm,
            onSubmit,
            onCancel,
            store,
            getCardClass,
            onStartNewProject
        };
    },
});
</script>

<style scoped>

.inner-projects-container {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
    justify-content: center;
}

.card {
    padding: 18px;
    margin: 10px 10px;
    border-radius: 16px;
    background-color: #ffffffff;
}

.card_small {
    grid-row-end: span 25;
}

.card_medium {
    grid-row-end: span 33;
}

.card_large {
    grid-row-end: span 43;
}

.card-container {
    overflow: auto;
}

.project-title {
    font-size: 18px;
    font-weight: 600px;
}

.bottom-action {
    position: absolute;
    width: 85%;
    bottom: 12px;
}

.project-card-container {
    position: relative;
}

.favorite-icon {
    cursor: pointer;
}

.avatar-contributor {
    margin-right: -7px;
}

.no-projects-container {
    height: 90%;
    display: grid;
    place-content: center;
}
</style>
