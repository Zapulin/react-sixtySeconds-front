function InformationSection() {
  return (
    <div className="container p-4 mb-5">
      <div className="row justify-content-around">
        <div className="col-6">
          <h2
            className="font-monospace fw-bold text-start"
            style={{ color: "#FF8638" }}
          >
            ¿Por qué 60"?
          </h2>
          <section className="font-monospace fw-bold fs-5">
            <span>La nueva red social de audio 60"</span>
            <pre />
            ¡Es la última moda!
            <pre />
            <span>Comparte tu contenido con tus propias palabras</span>
            <pre />
            <span>¡No te lo pierdas!</span>
          </section>
        </div>
        <div className="col-6">
          <h2
            className="font-monospace fw-bold text-start"
            style={{ color: "#FF8638" }}
          >
            ¿Cómo funciona?
          </h2>
          <section className="font-monospace fw-bold fs-5">
            <span>1. Graba lo que te apetezca</span>
            <pre />
            <span> 2. Aplica un tema para aumentar visibilidad</span>
            <pre />
            <span> 3. Elige quien puede verlo</span>
            <pre />
            <span>4. Comparte</span>
          </section>
        </div>
      </div>
    </div>
  );
}
export default InformationSection;
