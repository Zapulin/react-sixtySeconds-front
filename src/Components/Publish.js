import React, { useState } from 'react';

//Components
import CategoryBtn from './CategoryBtn';
import RecorderPublish from './RecorderPublish';


function Publish() {
  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  function handleEvent(e) {
    setTitle(e.target.value)
  }

  const getCategory = (categoryFromBtn) => {
   setCategory(categoryFromBtn)
  }

  return (
    <div>
        <a>delete</a>
        <label>Añade un titulo</label>
        <input onChange={(e)=> handleEvent(e)} id="title" value={title} placeholder="Titulo..." type="text"></input>
        <div>
          <CategoryBtn 
            text='Humor'
            fnOnClick={getCategory}/>
          <CategoryBtn 
            text='Deportes'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Noticias'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Ciencia'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Musica'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Cultura'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Politica'
            fnOnClick={getCategory} />
          <CategoryBtn 
            text='Ocio'
            fnOnClick={getCategory} /> 
        </div>
        <RecorderPublish title={title} category={category}/>
    </div>
  )
}

export default Publish;