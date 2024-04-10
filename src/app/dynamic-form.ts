export interface DynamicForm {
  [key: string]: {
    type: string;
    params?: any[];
  };
}
