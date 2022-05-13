import React, { useState } from 'react';
import '../stylesheets/Publish.css';

//Components
import CategoryBtn from './CategoryBtn';
import Recorder from './Recorder';


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
        <div className="modal fade" id="publishModal" >
          <div className="modal-dialog">
            <div className="modal-content" >
              <div className="modal-header text-center" style={{ backgroundColor: "#403D3D"}}>
                <h5 className="modal-title w-100 font-monospace fw-bold text-light">Publicar</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal">
                </button>
              </div>
              <div className="modal-body mx-3">
              <label className="font-monospace fw-bold">Añade un titulo</label>
              <input className="form-control validate" onChange={(e)=> handleEvent(e)} id="title" value={title} placeholder="Titulo..." type="text"></input>
              <div className="divCategorias">
                <CategoryBtn 
                  style={{ backgroundColor: "#B55BDB", cursor: "pointer" }}
                  text='Humor'
                  fnOnClick={getCategory}/>
                <CategoryBtn 
                  style={{ backgroundColor: "#D66B5F", cursor: "pointer" }}
                  text='Deportes'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#5F7BD6", cursor: "pointer" }}
                  text='Noticias'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#3FB252", cursor: "pointer" }}
                  text='Ciencia'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#000000", cursor: "pointer", color: "#fff" }}
                  text='Musica'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#5BC9DB", cursor: "pointer" }}
                  text='Cultura'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#69E5AB", cursor: "pointer" }}
                  text='Politica'
                  fnOnClick={getCategory} />
                <CategoryBtn 
                  style={{ backgroundColor: "#CAD946", cursor: "pointer" }}
                  text='Ocio'
                  fnOnClick={getCategory} /> 
              </div>
                <Recorder title={title} category={category}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Publish;