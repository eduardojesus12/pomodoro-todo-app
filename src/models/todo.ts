import {Status} from './enum'

export class TodoModel {
    id: string;
    text: string;
    status: Status;
    dateStart: Date;
    dateEnd: Date | null;
    pomodoro: number;


    constructor(id: string, text: string) {
        this.id = id;
        this.text = text;
        this.status = Status.Todo;
        this.dateStart = new Date();
        this.dateEnd = null;
        this.pomodoro = 0;
    }

}