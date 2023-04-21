import { defineStore } from "pinia";
import { Project } from "../types/global";
import { parse, stringify } from "zipson";
import { supabase } from "../lib/supabaseClient";

export const useProjectStore = defineStore("project", {
    state: () => ({
        projects: [] as Project[],
        error: null as Error | null,
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
        deleteProject(projectId: number | string) {
            this.projects = this.projects.filter((p) => p.id !== projectId);
        },
        updateProject(project: Project) {
            this.projects = this.projects.map((p, i) =>
                p.id === project.id ? project : p
            );
        },
        getSingleProject(projectId: number | string): Project {
            return this.projects.filter((p) => p.id === projectId)[0];
        },
        async insertProject(project: Project) {
            try {
                const { data: insertedData, error } = await supabase
                    .from("tbl_projects")
                    .insert(project);

                if (error) {
                    throw new Error(error.message);
                }

                if (insertedData && insertedData[0]) {
                    this.projects = [...this.projects, insertedData[0]];
                }
            } catch (error) {
                this.error = error as Error;
            }
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
