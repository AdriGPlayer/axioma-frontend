

export default function LayOutEventos() {
  // Más adelante esto vendrá del backend
  const eventos = [
    {
      id: 1,
      fecha: "15 Abr",
      titulo: "Festival de Primavera",
      descripcion:
        "Música, arte y comida en el patio central. Toda la comunidad está invitada.",
      horaLugar: "10:00 a.m. · Patio central",
    },
    {
      id: 2,
      fecha: "28 Abr",
      titulo: "Feria de Ciencias",
      descripcion:
        "Los alumnos presentan sus proyectos de robótica y experimentos.",
      horaLugar: "9:00 a.m. · Gimnasio",
    },
    {
      id: 3,
      fecha: "10 May",
      titulo: "Festival del Día de las Madres",
      descripcion:
        "Una mañana especial con presentaciones de cada grupo.",
      horaLugar: "11:00 a.m. · Auditorio",
    },
    {
      id: 4,
      fecha: "22 May",
      titulo: "Torneo Deportivo",
      descripcion:
        "Competencias amistosas entre grados. ¡Ven a apoyar a tu equipo!",
      horaLugar: "8:30 a.m. · Cancha",
    },
  ];

  return (
    <section id="eventos" className="section">
      <div className="container">
        <header className="section__head">
          <span className="section__eyebrow">Agenda</span>

          <h2 className="section__title">
            Próximos eventos
          </h2>

          <p className="section__subtitle">
            Sigue nuestra línea del tiempo y no te pierdas nada.
          </p>
        </header>

        <ol className="timeline">
          {eventos.map((evento) => (
            <li
              key={evento.id}
              className="timeline__item"
            >
              <span
                className="timeline__node"
                aria-hidden="true"
              ></span>

              <article className="event-card">
                <span className="event-card__date">
                  {evento.fecha}
                </span>

                <h3 className="event-card__title">
                  {evento.titulo}
                </h3>

                <p className="event-card__text">
                  {evento.descripcion}
                </p>

                <span className="event-card__time">
                  {evento.horaLugar}
                </span>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}