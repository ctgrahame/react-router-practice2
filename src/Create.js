import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [date, setDate] = useState('Apr2021');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, contents, date };

    setIsPending(true);

    fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(task),
    }).then(() => {
      console.log('new task added');
      setIsPending(false);

      navigate('/'); //to homepage
    });
  };

  return (
    <div className='create'>
      <h2>add a new task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>details:</label>
        <textarea
          type='text'
          required
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></textarea>
        <label>date:</label>
        <select required value={date} onChange={(e) => setDate(e.target.value)}>
          <option value='Apr2021'>April 2021</option>
          <option value='Aug2021'>August 2021</option>
        </select>
        {!isPending && <button>add task</button>}
        {isPending && <button disabled>loading...</button>}
      </form>
      <span>{title}</span>
      <p>{contents}</p>
      <span>Date: {date}</span>
    </div>
  );
};

export default Create;
