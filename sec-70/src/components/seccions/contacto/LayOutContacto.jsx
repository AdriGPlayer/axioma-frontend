import { useState } from "react";

export default function LayOutContacto() {
  // Más adelante esto puede venir del backend
  const contacto = {
    direccion: "Av. del Saber 123, Col. Centro",
    telefono: "(55) 1234 5678",
    correo: "hola@raicesdelsaber.edu",
    mapa:
      "https://www.openstreetmap.org/export/embed.html?bbox=-99.1700%2C19.4200%2C-99.1300%2C19.4400&layer=mapnik",
  };

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formulario);

    // Más adelante:
    // await ContactoService.enviar(formulario);
  };

  return (
    <section id="contacto" className="section section--alt">
      <div className="container">
        <header className="section__head">
          <span className="section__eyebrow">
            Estamos para ti
          </span>

          <h2 className="section__title">
            Contacto
          </h2>

          <p className="section__subtitle">
            Escríbenos o visítanos, con gusto te atendemos.
          </p>
        </header>

        <div className="contacto-grid">
          <div className="mapa">
            <iframe
              title="Ubicación de la escuela"
              src={contacto.mapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <ul className="mapa__info">
              <li>
                <strong>Dirección:</strong>{" "}
                {contacto.direccion}
              </li>

              <li>
                <strong>Teléfono:</strong>{" "}
                {contacto.telefono}
              </li>

              <li>
                <strong>Correo:</strong>{" "}
                {contacto.correo}
              </li>
            </ul>
          </div>

          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="form__row">
              <label htmlFor="nombre">
                Nombre
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__row">
              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                value={formulario.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__row">
              <label htmlFor="asunto">
                Asunto
              </label>

              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="¿En qué te ayudamos?"
                value={formulario.asunto}
                onChange={handleChange}
              />
            </div>

            <div className="form__row">
              <label htmlFor="mensaje">
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Escribe tu mensaje..."
                value={formulario.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}