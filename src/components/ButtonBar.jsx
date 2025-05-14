// components/ButtonBar.js
import React from 'react';

function ButtonBar({ onGenerate, onSort }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <button
        onClick={onGenerate}
        className='mx-2 px-5 py-2.5 bg-blue-600 text-white border-none rounded'>
        Generate Array
      </button>

      <button
        onClick={onSort}
        className='px-5 py-2.5 bg-green-500 text-white border-none border-r-4 mx-2 rounded'>
        {/* // style={{
        //   padding: '10px 20px',
        //   background: '#28a745',
        //   color: 'white',
        //   border: 'none',
        //   borderRadius: '4px',
        // }} */}
        Sort
      </button>
    </div>
  );
}

export default ButtonBar;
