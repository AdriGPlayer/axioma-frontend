import { useEffect, useState } from "react";


export default function HeroComponent() {
  const [slideActual, setSlideActual] = useState(0);

  const slides = [
    {
      id: 1,
      imagen:
        "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=948",
      titulo: "Bienvenidos a Raíces del Saber",
      descripcion: "Un lugar donde cada niño florece",
    },
    {
      id: 2,
      imagen:
        "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1172",
      titulo: "Aprender es una aventura",
      descripcion: "Educación cálida y cercana",
    },
    {
      id: 3,
      imagen:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170",
      titulo: "Crecemos juntos",
      descripcion: "Comunidad, valores y talento",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="hero">
      <div className="carrusel">
        <div
          className="carrusel__track"
          style={{
            transform: `translateX(-${slideActual * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <figure className="slide" key={slide.id}>
              <img src={slide.imagen} alt={slide.titulo} />

              <figcaption
                className={`slide__caption ${
                  index === slideActual
                    ? "slide__caption--activa"
                    : ""
                }`}
              >
                <h1>{slide.titulo}</h1>
                <p>{slide.descripcion}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="carrusel__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${
                index === slideActual ? "dot--activo" : ""
              }`}
              onClick={() => setSlideActual(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}