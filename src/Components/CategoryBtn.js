import React from 'react';
import '../stylesheets/Publish.css'

function CategoryBtn({ text, fnOnClick, style }) {
    return (
      <button 
        className="categoryBtn"
        style={style}
        onClick={() => fnOnClick(text)}>
        {text}
      </button>
    );
  }
  
  export default CategoryBtn;