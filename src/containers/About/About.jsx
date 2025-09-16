import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
const About = () => {
  const { mode } = useTheme();
  const abouts = [
    {
      title: "1. Estructuras de datos escalables",
      description:
        "Certificado por Google en arquitectura cloud. Experto en notificaciones push, almacenamiento y bases de datos para soluciones seguras, eficientes y escalables.",
      imgUrl: images.about01,
    },
    {
      title: "2. Tecnología móvil multiplataforma",
      description:
        "Desarrollo apps en Flutter (iOS/Android) y nativas en Kotlin para Android. Soluciones flexibles, híbridas o nativas, según la necesidad del proyecto.",
      imgUrl: images.about02,
    },
    {
      title: "3. Diseños UX/UI modernos",
      description:
        "Certificado en UX/UI por Google. Diseño interfaces profesionales, atractivas e intuitivas con Figma, siguiendo las guías oficiales de App Store y Google Play.",
      imgUrl: images.about03,
    },
    {
      title: "4. Desarrollo a medida",
      description:
        "Transformo ideas en apps reales. Acompaño cada etapa, desde la arquitectura hasta el diseño final, para ofrecer soluciones efectivas y funcionales.",
      imgUrl: images.about04,
    },
  ];


  return (
    <>
      <h2 className={`head-text ${mode}`}>
        El buen <span>Desarrollo</span> <br /> impulsa el{" "}
        <span>Buen Negocio.</span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={`app__profile-item `}
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className={`bold-text ${mode}`} style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className={`p-text ${mode}`} style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
