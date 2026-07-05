
export default function LayOutOferta() {
  // Más adelante esto vendrá del backend
  const talleres = [
    {
      id: 1,
      nombre: "Arte y Pintura",
      descripcion:
        "Exploramos color, formas y creatividad con técnicas variadas.",
      imagen:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      alt: "Materiales de pintura en un taller de arte",
    },
    {
      id: 2,
      nombre: "Música",
      descripcion:
        "Guitarra, piano y canto para descubrir el ritmo interior.",
      imagen:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200",
      alt: "Instrumentos musicales en un taller de música",
    },
    {
      id: 3,
      nombre: "Robótica",
      descripcion:
        "Construimos y programamos robots con pensamiento lógico.",
      imagen:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200",
      alt: "Kits de robótica sobre una mesa",
    },
    {
      id: 4,
      nombre: "Deportes",
      descripcion:
        "Fútbol, básquet y trabajo en equipo para cuerpo y mente.",
      imagen:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
      alt: "Balones en una cancha deportiva",
    },
  ];

  return (
    <section id="oferta" className="section">
      <div className="container">
        <header className="section__head">
          <span className="section__eyebrow">
            Talleres
          </span>

          <h2 className="section__title">
            Oferta académica
          </h2>

          <p className="section__subtitle">
            Actividades para desarrollar el talento de cada estudiante.
          </p>
        </header>

        <div className="oferta-grid">
          {talleres.map((taller) => (
            <article
              key={taller.id}
              className="taller"
            >
              <img
                className="taller__img"
                src={taller.imagen}
                alt={taller.alt}
              />

              <div className="taller__body">
                <h3 className="taller__title">
                  {taller.nombre}
                </h3>

                <p className="taller__text">
                  {taller.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}