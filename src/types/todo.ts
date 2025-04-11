import { Priority } from "./priority";

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    priority: Priority;
    createdAt: number;
}
  