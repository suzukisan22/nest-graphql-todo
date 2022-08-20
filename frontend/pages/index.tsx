import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import { TODOS_QUERY, TodosData } from '../graphql/queries/todos.query';

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<TodosData>(TODOS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const todos = data?.todos;
  if (!todos) return null;

  return (
    <div className={styles.container}>
      {todos[0]?.id}
      {todos[0]?.name}
    </div>
  )
}

export default Home
