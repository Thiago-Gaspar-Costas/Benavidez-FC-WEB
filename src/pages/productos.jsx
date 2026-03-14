import { useState } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pages/productos.css";

export default function Productos() {
  const [showMessage, setShowMessage] = useState(false);

  const handleComingSoonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2500);
  };

  return (
    <main className="productos-container">
      <hr className="divisor" />

      <section className="coming-soon-section container my-5">
        <motion.div
          className="coming-soon-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="icono-bolsa"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShoppingBag size={48} />
          </motion.div>

          <motion.h1
            className="titulo-productos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Productos Oficiales
          </motion.h1>

          <motion.div
            className="badge-proximamente"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120 }}
          >
            <Sparkles size={18} className="me-2" />
            PRÓXIMAMENTE
          </motion.div>

          <motion.p
            className="descripcion-coming"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Estamos preparando la tienda oficial del club con camisetas,
            indumentaria y mucho más.
            <br />
            Muy pronto vas a poder conocer todos nuestros productos exclusivos.
          </motion.p>

          <motion.button
            className="btn-coming-soon"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(200, 16, 46, 0.45)" }}
            whileTap={{ scale: 0.96 }}
            onClick={handleComingSoonClick}
          >
            Ver novedades
          </motion.button>

          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="mensaje-coming"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                🔥 La tienda oficial estará disponible muy pronto
              </motion.div>
            )}
          </AnimatePresence>

          <div className="luces-fondo">
            <span className="luz luz-roja"></span>
            <span className="luz luz-blanca"></span>
            <span className="luz luz-gris"></span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}