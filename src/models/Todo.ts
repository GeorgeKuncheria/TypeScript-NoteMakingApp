export interface Todo {
    id : number;
    todo: string;
    isDone : boolean;
}

export const list : Todo[]= [
    {
        id:1,
        todo:"is not playing around",
        isDone:false
    },
    {
        id:2,
        todo:"Playing around",
        isDone:true
    },
    {
        id:3,
        todo:"Playing",
        isDone:false
    }

]