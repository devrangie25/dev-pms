export interface Credentials {
    email?: string | undefined;
    password?: string | undefined;
    provider?: "bitbucket" | "github" | "gitlab" | "google" | undefined;
}

export interface Project {
    title?: string | undefined;
    description?: string | undefined;
    contributors?: Array<string> | undefined;
    status?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    favorite?: Boolean | undefined;
    category?: string | undefined;
    color?: string | undefined;
    client?: string | undefined;
}
