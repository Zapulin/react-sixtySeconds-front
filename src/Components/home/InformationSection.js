function InformationSection() {
  return (
    <div className="container p-5">
      <div className="row m-2">
        <div className="col-6">
          <h3 style={{ color:'#FF8638'}}>¿Por qué 60"?</h3>
          <ul style={{'list-style': 'none'}}>
            <li>
              <span>La nueva red social de audio 60" ¡Es la última moda!</span>
            </li>
            <li>
              <span>Comparte tu contenido con tus propias palabras</span>
            </li>
            <li>
              <span>¡No te lo pierdas!</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h3 style={{ color:'#FF8638'}}>¿Cómo funciona?</h3>
          <ul style={{'list-style': 'none'}}>
            <li>
              <span>Graba lo que te apetezca</span>
            </li>
            <li>
              <span>Aplica un tema para aumentar visibilidad</span>
            </li>
            <li>
              <span>Elige quien puede verlo</span>
            </li>
            <li>
              <span>Comparte</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
