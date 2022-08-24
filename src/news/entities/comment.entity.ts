import { SubComment } from "./subcomment.entity";

export class Comment {
    id: number;
    author: string;
    text: string;
    date;
    subcomment: SubComment[];
}
