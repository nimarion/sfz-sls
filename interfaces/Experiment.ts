export interface Answer {
    answer: string;
    img: string;
}

export interface Experiment {
    name: string;
    experiment: boolean;
    materials?: string[];
    implementation?: string[];
    answers?: Answer[];
    component?: string;
    materialVideo?: string;
    implementationVideo: string;
    solutionVideo?: string;
}
