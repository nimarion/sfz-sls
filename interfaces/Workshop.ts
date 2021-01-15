export interface Workshop {
    name: string;
    schoolSubject: string[];
    image: string;
    description: string;
    duration: number;
    minClass: number;
    maxParticipants?: number;
    video?: string;
    lab?: string;
}
