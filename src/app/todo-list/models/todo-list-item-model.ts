export class TodoListItemModel{
    Title!: string;
    Status!: TodoListItemStatus;

    constructor(title: string, status: TodoListItemStatus){
        this.Title = title;
        this.Status = status;
    }
}
export enum TodoListItemStatus{
    Completed,
    InProgress,
    Removed
}