import React from 'react';

const Test = () => {
  console.log('Test component loaded!');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p>If you can see this, React is working!</p>
      <button 
        onClick={() => {
          console.log('Test button clicked!');
          alert('Test button works!');
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Test Button
      </button>
    </div>
  );
};

export default Test; 