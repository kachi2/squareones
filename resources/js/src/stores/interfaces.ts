export type tasksPriorityTypes = 'high' | 'medium' | 'low';

export interface taskFormInterface {
    task_id?: string,
    user_id?: string,
    title: string,
    priority: tasksPriorityTypes,
    content: '',
    due_date: Date,
    isSaving: boolean
}