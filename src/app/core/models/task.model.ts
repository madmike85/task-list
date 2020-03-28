export interface ITask {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdDate: string;
  deadlineDate: string;
  completedDate: string;
  completed: boolean;
}
