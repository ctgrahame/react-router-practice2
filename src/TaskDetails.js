import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: tasks,
    isLoading,
    errorMessage,
  } = useFetch('http://localhost:8000/tasks/' + id);

  const handleClick = () => {
    fetch('http://localhost:8000/tasks/' + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className='task-details'>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <span>{errorMessage}</span>}
      {tasks && (
        <article>
          <h2>{tasks.title}</h2>
          <p>{tasks.date}</p>
          <p>{tasks.contents}</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default TaskDetails;
