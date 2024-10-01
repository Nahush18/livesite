import React, { useState } from 'react';

const RecAssignment = ({  onClose, sendAssignment }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSendAssignment = () => {
    sendAssignment(description, deadline); // Call the parent function
  };

  return (
    <div className="assignment-modal">
      <h2 className="text-xl mb-4">New Assignment</h2>

      <div className="mb-4">
        <label className="block">Assignment Description:</label>
        <textarea rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border-2 rounded-lg"
          placeholder="Enter the assignment description..."
        />
      </div>

      <div className="mb-4">
        <label className="block">Deadline:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border-2 rounded-lg"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleSendAssignment}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Send Assignment
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RecAssignment;
