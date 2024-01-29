import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    const completedTodo = updatedTodos.splice(index, 1)[0];
    setTodos(updatedTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Rubesh-LPU 12115752 MERN Assignment 1</h1>

      <div className="add-todo-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter New Task"
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="todo-container">
        <h2>Active Tasks</h2>
        {todos.map((todo, index) => (
          <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span>{todo.text}</span>
            {!todo.completed && (
              <button className="complete-btn" onClick={() => completeTodo(index)}>
                Complete
              </button>
            )}
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              Delete
            </button>
            <button
              className="update-btn"
              onClick={() => {
                const newText = prompt('Enter updated text:', todo.text);
                if (newText !== null) {
                  updateTodo(index, newText);
                }
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>

      {completedTodos.length > 0 && (
        <div className="completed-tasks">
          <h2>Completed Tasks</h2>
          <div className="completed-task-container">
            {completedTodos.map((completedTodo, index) => (
              <div key={index} className="completed-task">
                <span>{completedTodo.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
