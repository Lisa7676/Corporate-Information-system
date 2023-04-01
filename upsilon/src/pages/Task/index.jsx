import React, { useState, useEffect } from 'react'
import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '617',
  port: 5432,
});

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const res = await pool.query('SELECT t_name FROM task');
      setTasks(res.rows.map((row) => row.t_name));
    }
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;