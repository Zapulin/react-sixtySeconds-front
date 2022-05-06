import React from 'react';

function CategoryBtn({ text, categoryFilter }) {
    return (
      <button 
        onClick={() => categoryFilter(text)}>
        {text}
      </button>
    );
  }
  
  export default CategoryBtn;