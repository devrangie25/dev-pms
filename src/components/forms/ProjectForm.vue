<template>
    <v-form @submit.prevent="submitForm">
        <v-row class="mb-4">
            <v-col cols="12">
                <v-text-field
                    v-model="form.title"
                    label="Title"
                    hide-details="auto"
                    variant="outlined"
                    counter="25"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea
                    v-model="form.description"
                    label="Description"
                    hide-details="auto"
                    variant="outlined"
                    rows="3"
                    counter="300"
                ></v-textarea>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    v-model="form.startDate"
                    label="Start Date"
                    hide-details="auto"
                    variant="outlined"
                    type="date"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    v-model="form.endDate"
                    label="Deadline"
                    hide-details="auto"
                    variant="outlined"
                    type="date"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="form.client"
                    :items="projectClients"
                    label="Client"
                    hide-details="auto"
                    variant="outlined"
                ></v-select>
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="form.category"
                    :items="projectCategories"
                    label="Category"
                    hide-details="auto"
                    variant="outlined"
                ></v-select>
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="form.status"
                    :items="projectStatuses"
                    label="Status"
                    hide-details="auto"
                    variant="outlined"
                ></v-select>
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="form.contributors"
                    :items="projectContributors"
                    hide-details="auto"
                    label="Contributors"
                    variant="outlined"
                    multiple
                ></v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6">
                <base-button
                    color="#6B728E"
                    variant="flat"
                    block
                    height="50"
                    @click="onCancel"
                >
                    <template v-slot:content>
                        <span class="text-none text-white text-button">
                            Cancel
                        </span>
                    </template>
                </base-button>
            </v-col>
            <v-col cols="6">
                <base-button
                    color="#3aafae"
                    variant="flat"
                    block
                    height="50"
                    type="submit"
                >
                    <template v-slot:content>
                        <span class="text-none text-white text-button">
                            Save
                        </span>
                    </template>
                </base-button>
            </v-col>
        </v-row>
    </v-form>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import {
    projectClients,
    projectStatuses,
    projectCategories,
    projectContributors,
} from "../../static";

export default defineComponent({
    name: "ProjectForm",

    props: {
        form: {
            type: Object,
            default: null,
            required: true,
        },
    },

    setup(props) {
        const emitter: any = inject("emitter");

        function onCancel(): void {
            emitter.emit("project-form-on-cancel", true);
        }

        function submitForm(): void {
            emitter.emit("project-form-on-submit", props.form);
        }

        return {
            submitForm,
            onCancel,
            projectStatuses,
            projectCategories,
            projectClients,
            projectContributors,
        };
    },
});
</script>

<style scoped></style>
