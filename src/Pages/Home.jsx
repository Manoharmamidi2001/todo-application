import React, { useState, useEffect } from 'react';
import InputPlace from '../Components/InputPlace';
import List from '../Components/List';
import { message } from 'antd';

const Home = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Load from localStorage on mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItem(storedItems);
  }, []);

  // Save to localStorage on item change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(item));
  }, [item]);

  // Add or update item
  const handleSubmit = () => {
    if (input.trim() === '') {
      message.warning('Please enter a task before submitting!');
      return;
    }

    if (editIndex !== null) {
      // Update existing task
      setItem((prev) =>
        prev.map((task, index) => (index === editIndex ? input : task))
      );
      setEditIndex(null);
    } else {
      // Add new task
      setItem((prev) => [...prev, input]);
    }

    setInput('');
  };

  // Edit selected task
  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(item[index]);
  };

  // Delete task
  const handleDelete = (index) => {
    setItem((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='ttl'>
      <InputPlace
        inp={input}
        change={handleChange}
        onAdd={handleSubmit}
        btnText={editIndex !== null ? 'Update' : 'Add'}
      />
      <List data={item} onEdit={handleEdit} onDelete={handleDelete} editIndex={editIndex} />
  </div>
  );
};

export default Home;