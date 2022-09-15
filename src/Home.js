import React from 'react';
//import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import TaskList from './TaskList';

const Home = () => {
  const {
    data: tasks,
    isLoading,
    errorMessage,
  } = useFetch('http://localhost:8000/tasks');

  return (
    <div className='task-list-wrap'>
      {isLoading && <span>loading...</span>}
      {errorMessage && <span>{errorMessage}</span>}
      {tasks &&
        tasks.map((task, index) => {
          return <TaskList task={task} key={index} />;
        })}
    </div>
  );
};
export default Home;
