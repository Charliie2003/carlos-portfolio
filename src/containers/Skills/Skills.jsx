import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { useTheme } from "../../hooks/useTheme";
import {
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFigma,
  SiKotlin,
  SiAndroid,
  SiJirasoftware,
  SiGithub,
  SiGooglecloud,
  SiFirebase,
  SiSpringboot,
} from "react-icons/si";

const skillsData = [
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
  { name: "Android", Icon: SiAndroid, color: "#3DDC84" },
  { name: "Jira", Icon: SiJirasoftware, color: "#0052CC" },
  { name: "GitHub", Icon: SiGithub, color: "#d8810eff" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
];

const experiencesData = [
  { year: "2025", role: "Tech Architecture", company: "Accenture Song" },
  { year: "2024", role: "Tech Architecture", company: "Accenture Song" },
  { year: "2023", role: "Commerce Developer", company: "Accenture Song" },
];

const certificationsData = [
    {
    title: "Google Cloud Professional Cloud Architect",
    institution: "Google",
    period: "2025",
  },
  {
    title: "Google UX Design Certificate",
    institution: "Google",
    period: "2025",
  },
  {
    title: "Grado Medio en Sistemas Informáticos y Redes",
    institution: "Colegio Retamar",
    period: "2020 - 2022",
  },
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "Universidad Francisco de Vitoria",
    period: "2022 - 2024",
  },
];

const Skills = () => {
  const { mode } = useTheme();

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        Experiencia, Certificaciones
        <br /> & <span>skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsData.map(({ name, Icon, color }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item ${mode} app__flex`}
              key={name}
              style={{ color: "#E0FFFF" }}
              whileHover={{ color }}
            >
              <div className="app__flex">
                <Icon size={36} />
              </div>
              <p className="p-text-skill">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          <div className="app__skills-exp-header">
            <FaBriefcase className={`app__skills-exp-icon ${mode}`} />
            <h3 className={`bold-text ${mode}`}>Experiencia</h3>
          </div>
          {experiencesData.map(({ year, role, company }) => (
            <motion.div className="app__skills-exp-item" key={`${year}-${role}`}>
              <div className="app__skills-exp-year">
                <p className={`bold-text-exp`}>{year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                >
                  <h4 className={`bold-text-exp`}>{role}</h4>
                  <p className={`p-text ${mode}`}>{company}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          <div className="app__skills-exp-header">
            <FaGraduationCap className={`app__skills-exp-icon ${mode}`} />
            <h3 className={`bold-text ${mode}`}>Certificaciones</h3>
          </div>
          <div className="app__skills-certifications">
            {certificationsData.map(({ title, institution, period }) => (
              <motion.div className="app__skills-exp-item" key={title}>
                <div className="app__skills-exp-year">
                  <p className={`bold-text ${mode}`}>{period}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                  >
                    <h4 className={`bold-text ${mode}`}>{title}</h4>
                    <p className={`p-text ${mode}`}>{institution}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
