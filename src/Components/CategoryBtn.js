import React from 'react';

function CategoryBtn({ text, fnOnClick }) {
    return (
      <button 
        onClick={() => fnOnClick(text)}>
        {text}
      </button>
    );
  }
  
  export default CategoryBtn;