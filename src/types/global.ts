export interface Credentials {
    email?: string | undefined;
    password?: string | undefined;
    provider?: "bitbucket" | "github" | "gitlab" | "google" | undefined;
}

export interface Project {
    id?: string | number | undefined;
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

export enum Breakpoints {
    XS = 0,
    SM = 600,
    MD = 960,
    LG = 1280,
    XL = 1920,
}

export interface ScreenSize {
    width: number;
    height: number;
}
