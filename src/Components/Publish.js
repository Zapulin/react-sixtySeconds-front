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
        <div className="modal fade" id="exampleModalLong" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="modal-title w-100 font-monospace fw-bold">Publicar</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal">
                </button>
              </div>
              <div className="modal-body mx-3">
              <label className="font-monospace fw-bold">Añade un titulo</label>
              <input className="form-control validate" onChange={(e)=> handleEvent(e)} id="title" value={title} placeholder="Titulo..." type="text"></input>
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default Publish;