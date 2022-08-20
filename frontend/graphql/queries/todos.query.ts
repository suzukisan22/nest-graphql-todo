import { gql } from '@apollo/client';
import { Todo } from '../../../server/src/todo';

export const TODOS_QUERY = gql`
  query {
    todos {
      id
      name
    }
  }
`;

export interface TodosData {
  todos: Todo[];
}