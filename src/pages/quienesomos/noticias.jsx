import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/pages/noticias.css";

const noticiasData = [
  {
    id: 1,
    titulo: "Nueva camiseta edición 10 Años",
    resumen: "Presentamos los modelos conmemorativos por los 10 años de historia del club.",
    contenido:
      "Benavidez Fútbol Club lanza su camiseta edición especial por los 10 años. Inspirada en los primeros colores del club, combina detalles dorados con el tradicional verde y amarillo. Disponible desde este mes en la tienda oficial.",
    imagen: "/images/pages/primernoticia.png",
  },
  {
    id: 2,
    titulo: "Arrancan las inscripciones",
    resumen: "¡Te esperamos! Sumate a nuestra gran familia futbolera.",
    contenido:
      "El club abre las inscripciones para las categorías infantiles, juveniles y mayores. Vení a entrenar, disfrutar y crecer con nosotros. ¡Tu lugar está en Benavidez FC!",
    imagen: "/images/pages/segundanoticia.jpg",
  },
  {
    id: 3,
    titulo: "17 años de su partida",
    resumen: 'Recordando en este día a 17 años de la partida del "MAGO GASPAR".',
    contenido:
      "Hoy recordamos al querido Mago Gaspar, símbolo eterno del club. Su pasión, humildad y amor por los colores siguen vivos en cada entrenamiento y partido.",
    imagen: "/images/pages/terceranoticia.jpeg",
  },
];

function Noticias() {
  const [noticiaActiva, setNoticiaActiva] = useState(null);

  return (
    <main className="noticias container py-5">
      <h1 className="text-center mb-5 fw-bold">Últimas Noticias</h1>
      <div className="row g-4">
        {noticiasData.map((n) => (
          <div className="col-md-4" key={n.id}>
            <motion.div
              className={`card noticia-card ${noticiaActiva === n.id ? "activa" : ""}`}
              whileHover={{ scale: 1.03 }}
              onClick={() => setNoticiaActiva(noticiaActiva === n.id ? null : n.id)}
            >
              <img src={n.imagen} className="card-img-top" alt={n.titulo} />
              <div className="card-body">
                <h5 className="card-title">{n.titulo}</h5>
                <p className="card-text">{n.resumen}</p>
                <p className="leer-mas">
                  {noticiaActiva === n.id ? "Cerrar" : "Leer más"}{" "}
                  <i className={`bi bi-chevron-${noticiaActiva === n.id ? "up" : "down"}`}></i>
                </p>
              </div>
              <AnimatePresence>
                {noticiaActiva === n.id && (
                  <motion.div
                    className="card-expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="px-3 pb-3">{n.contenido}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Noticias;
