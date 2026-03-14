import React, { useState } from "react";
import "../../styles/pages/galeria.css";
/* Esto no lo pude hacer solo, ṕedi ayuda, mi idea es que qude algo muy lindo y apta para un club de verdad, agregue funciones que nunca habia visto, de todas maneras tuve ayuda. */
const sections = [
  {
    id: "equipo",
    title: "Equipos",
    intro:
      "El corazón del club. Nuestros equipos representa la pasión, el compromiso y el esfuerzo de cada entrenamiento y partido.",
    carousels: [
      [
        { src: "/images/pages/galeria/equipos/equipo1.jpg", caption: "Reserva Final" },
        { src: "/images/pages/galeria/equipos/equipo2.jpg", caption: "Equipo Reserva Campeon" },
        { src: "/images/pages/galeria/equipos/equipo3.jpg", caption: "Capitan" }
      ],
      [
        { src: "/images/pages/galeria/equipos/equipo4.jpg", caption: "Jugadores en acción" },
        { src: "/images/pages/galeria/equipos/equipo5.jpg", caption: "Indumentaria" },
        { src: "/images/pages/galeria/equipos/equipo6.jpg", caption: "Equipo De Primera" }
      ],
      [
        { src: "/images/pages/galeria/equipos/equipo7.jpg", caption: "Alineacion" },
        { src: "/images/pages/galeria/equipos/equipo8.jpg", caption: "Tecnico" },
        { src: "/images/pages/galeria/equipos/equipo9.jpg", caption: "Benavidez Infantiles" }
      ]
    ]
  },
  {
    id: "logros",
    title: "Logros y Reconocimientos",
    intro:
      "A lo largo de nuestra historia, Benavidez Fútbol Club ha conseguido importantes logros y momentos inolvidables.",
    carousels: [
      [
        { src: "/images/pages/galeria/logros/logro1.jpg", caption: "Campeones Infantiles" },
        { src: "/images/pages/galeria/logros/logro2.jpg", caption: "Festejos" },
        { src: "/images/pages/galeria/logros/logro3.jpg", caption: "Mas Festejos" }
      ],
      [
        { src: "/images/pages/galeria/logros/logro4.jpg", caption: "Campeon Reserva" },
        { src: "/images/pages/galeria/logros/logro5.jpg", caption: "Foto Grupal" },
        { src: "/images/pages/galeria/logros/logro6.png", caption: "Abrazos y Felicidad" }
      ],
      [
        { src: "/images/pages/galeria/logros/logro7.jpg", caption: "Femenino Campeon" },
        { src: "/images/pages/galeria/logros/logro8.jpg", caption: "Equipo" },
        { src: "/images/pages/galeria/logros/logro9.jpg", caption: "Foto Grupal" }
      ]
    ]
  },
  {
    id: "juveniles",
    title: "Entrenamientos",
    intro:
      "Entrenamientos de alta intensidad.",
    carousels: [
      [
        { src: "/images/pages/galeria/entrenamientos/e1.jpg", caption: "Charla introductoria" },
        { src: "/images/pages/galeria/entrenamientos/e2.jpg", caption: "Equipos en accion" },
        { src: "/images/pages/galeria/entrenamientos/e3.jpg", caption: "Mas entrenamiento" }
      ],
      [
        { src: "/images/pages/galeria/entrenamientos/e4.png", caption: "Juveniles" },
        { src: "/images/pages/galeria/entrenamientos/e5.jpg", caption: "Mas accion Juvenil" },
        { src: "/images/pages/galeria/entrenamientos/e6.jpg", caption: "Charla Final" }
      ],
      [
        { src: "/images/pages/galeria/entrenamientos/e7.png", caption: "Entrenador con el grupo" },
        { src: "/images/pages/galeria/entrenamientos/e8.jpg", caption: "Drills de coordinación" },
        { src: "/images/pages/galeria/entrenamientos/e9.jpg", caption: "Velocidad Y Explosividad" }
      ]
    ]
  },
  {
    id: "comunidad",
    title: "Comunidad y Eventos",
    intro:
      "Más allá del fútbol, somos una familia. Actividades solidarias, encuentros deportivos y jornadas culturales.",
    carousels: [
      [
        { src: "/images/pages/galeria/comunidad/c1.jpg", caption: "Proyecto Senda Aerobica" },
        { src: "/images/pages/galeria/comunidad/c2.jpg", caption: "Un espacio para la Gente De Benavidez" },
        { src: "/images/pages/galeria/comunidad/c3.jpg", caption: "La senda Felix Gaspar Costas" }
      ],
      [
        { src: "/images/pages/galeria/comunidad/c4.jpg", caption: "Jugadores Senior" },
        { src: "/images/pages/galeria/comunidad/c5.jpg", caption: "Futbol Solidario" },
        { src: "/images/pages/galeria/comunidad/c6.jpg", caption: "Alimentos No Perecederos" }
      ],
      [
        { src: "/images/pages/galeria/comunidad/c7.jpg", caption: "Futbol Estudiantil" },
        { src: "/images/pages/galeria/comunidad/c8.png", caption: "Alumnos y Futbol" },
        { src: "/images/pages/galeria/comunidad/c9.jpg", caption: "Comidas Compartida" }
      ]
    ]
  },
  {
    id: "historiaimagenes",
    title: "Historia en Imágenes",
    intro:
      "Momentos que nos definen. Desde los primeros partidos hasta los grandes hitos, un recorrido visual por nuestra historia.",
    carousels: [
      [
        { src: "/images/pages/galeria/historia/h1.jpg", caption: "Infantiles Atlas Por AFA" },
        { src: "/images/pages/galeria/historia/h2.jpg", caption: "Entrenamientos Virtuales" },
        { src: "/images/pages/galeria/historia/h3.jpg", caption: "Estadio De Atlas" }
      ],
      [
        { src: "/images/pages/galeria/historia/h4.jpg", caption: "Nuestros colores" },
        { src: "/images/pages/galeria/historia/h5.png", caption: "Indumentaria" },
        { src: "/images/pages/galeria/historia/h6.png", caption: "Nuestra piel" }
      ],
      [
        { src: "/images/pages/galeria/historia/h7.jpg", caption: "BFC" },
        { src: "/images/pages/galeria/historia/h8.png", caption: "Nuestro Escudo" },
        { src: "/images/pages/galeria/historia/h9.jpg", caption: "El Bena" }
      ]
    ]
  }
];

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const initIndexes = sections.map(() => [0, 0, 0]);
  const [indexes, setIndexes] = useState(initIndexes);

  const goPrev = (sectionIdx, carouselIdx) => {
    setIndexes(prev => {
      const copy = prev.map(arr => arr.slice());
      const images = sections[sectionIdx].carousels[carouselIdx];
      copy[sectionIdx][carouselIdx] =
        (copy[sectionIdx][carouselIdx] + images.length - 1) % images.length;
      return copy;
    });
  };

  const goNext = (sectionIdx, carouselIdx) => {
    setIndexes(prev => {
      const copy = prev.map(arr => arr.slice());
      const images = sections[sectionIdx].carousels[carouselIdx];
      copy[sectionIdx][carouselIdx] = (copy[sectionIdx][carouselIdx] + 1) % images.length;
      return copy;
    });
  };

  const goSection = idx => {
    setCurrentSection(idx);
    const el = document.getElementById(`section-${sections[idx].id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="gallery-main">
      <nav className="gallery-nav">
        <ul>
          {sections.map((s, i) => (
            <li key={s.id} className={i === currentSection ? "active" : ""}>
              <button onClick={() => goSection(i)} aria-label={`Ir a ${s.title}`}>
                <span>{s.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="gallery-content">
        {sections.map((sec, sIdx) => (
          <section
            id={`section-${sec.id}`}
            className={`gallery-section ${sIdx === currentSection ? "visible" : ""}`}
            key={sec.id}
          >
            <div className="section-header">
              <h2>{sec.title}</h2>
              <p className="intro">{sec.intro}</p>
            </div>

            <div className="carousels">
              {sec.carousels.map((carousel, cIdx) => {
                const activeIndex = indexes[sIdx][cIdx] || 0;
                const item = carousel[activeIndex];
                return (
                  <div className="carousel" key={cIdx}>
                    <div className="carousel-media">
                      <img
                        src={item.src}
                        alt={item.caption}
                        onError={e => {
                          e.currentTarget.src = "/images/placeholder.png";
                        }}
                      />
                      <div className="overlay">
                        <div className="overlay-text">{item.caption}</div>
                      </div>
                    </div>

                    <div className="carousel-controls">
                      <button
                        className="btn-prev"
                        onClick={() => goPrev(sIdx, cIdx)}
                        aria-label="Anterior"
                      >
                        ‹
                      </button>
                      <div className="carousel-dots">
                        {carousel.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            className={dotIdx === activeIndex ? "dot active" : "dot"}
                            onClick={() =>
                              setIndexes(prev => {
                                const copy = prev.map(arr => arr.slice());
                                copy[sIdx][cIdx] = dotIdx;
                                return copy;
                              })
                            }
                            aria-label={`Ir a imagen ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        className="btn-next"
                        onClick={() => goNext(sIdx, cIdx)}
                        aria-label="Siguiente"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
