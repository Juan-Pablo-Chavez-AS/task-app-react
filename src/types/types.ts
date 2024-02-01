export interface Task {
  isCompleted: boolean;
  title: string;
  dueDate: string;
  imageUrl?: string;
  image?: File;
  userId?: string;
  id?: string;
}