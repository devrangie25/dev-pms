import { defineStore } from "pinia";
import { Project } from "../types/global";
import { parse, stringify } from "zipson";

export const useProjectStore = defineStore("project", {
    state: () => ({
        projects: [] as Project[],
    }),
    getters: {
        getProjects(): Project[] {
            return this.projects;
        },
    },
    actions: {
        addProject(project: Project) {
            this.projects = [...this.projects, project];
        },
    },
    persist: {
        storage: sessionStorage,
        key: "project",
        paths: ["projects"],
        serializer: {
            deserialize: parse,
            serialize: stringify,
        },
    },
});
