import { Link } from 'react-router-dom';

const TaskList = (props) => {
  const task = props.task;
  return (
    <div className='task-list' key={task.id}>
      <Link className='task-link' to={`/tasks/${task.id}`}>
        <span>{task.title}</span>
      </Link>
    </div>
  );
};

export default TaskList;
