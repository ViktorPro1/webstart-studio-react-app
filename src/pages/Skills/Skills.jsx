import React, { useState } from 'react';
import SEO from '../../SEO/SEO';
import './Skills.css';
import './Skills.mobile.css';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiCanva, SiFacebook, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [description, setDescription] = useState('');

  const skillsData = [
    { name: 'HTML', desc: 'Мова, якою створюють структуру веб-сторінок.', time: '1.2 роки', icon: <FaHtml5 color="#E34F26" size={48} /> },
    { name: 'CSS', desc: 'Мова, що додає стиль і оформлення веб-сторінкам.', time: '1.2 роки', icon: <FaCss3Alt color="#1572B6" size={48} /> },
    { name: 'JavaScript', desc: 'Мова програмування для динаміки веб-сторінок.', time: '1 рік', icon: <FaJsSquare color="#F7DF1E" size={48} /> },
    { name: 'Git', desc: 'Система контролю версій для командної роботи.', time: '1.6 роки', icon: <FaGitAlt color="#F05033" size={48} /> },
    { name: 'React', desc: 'Фреймворк для створення сучасних інтерфейсів.', time: '1 рік', icon: <FaReact color="#61DAFB" size={48} /> },
    { name: 'Node.js', desc: 'Платформа для серверного JavaScript.', time: '1 рік', icon: <FaNodeJs color="#43853D" size={48} /> },
    { name: 'MongoDB', desc: 'База даних NoSQL для гнучкого зберігання даних.', time: '2 тижні', icon: <SiMongodb color="#4DB33D" size={48} /> },
    { name: 'C++', desc: 'Мова програмування для створення швидких і ефективних програм.', time: '2 тижні', icon: <SiCplusplus color="#00599C" size={48} /> },
    { name: 'Вебдизайн (Canva)', desc: 'Створення банерів та шаблонів для соц.мережі за допомогою програмки Canva.', time: '1.4 роки', icon: <SiCanva color="#00C4CC" size={48} /> },
    { name: 'Таргетована реклама', desc: 'Реклама у Facebook та Instagram. Ніша: робота за кордоном та пасажирські перевезення.', time: '1.8 роки', icon: <SiFacebook color="#1877F2" size={48} /> }
  ];

  const openModal = (skill) => setSelectedSkill(skill);
  const closeModal = () => setSelectedSkill(null);
  const handleSkillHover = (skill) => setDescription(skill.desc);
  const handleSkillLeave = () => setDescription('');

  return (
    <div className="skills-page">
      <SEO
        title="Наші навички — Креативний колаж"
        description="Ознайомтеся з навичками WebStart Studio через креативний колаж: дизайн, веб-розробка, маркетинг та інші сфери експертизи."
        keywords="навички, креативний колаж, дизайн, веб-розробка, маркетинг, WebStart Studio, портфоліо"
      />
      <main className="skills-main">
        <h1 className="skills-h1">Наші навички в дії</h1>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skills-skill"
              tabIndex={0}
              onMouseEnter={() => handleSkillHover(skill)}
              onMouseLeave={handleSkillLeave}
              onFocus={() => handleSkillHover(skill)}
              onBlur={handleSkillLeave}
              onClick={() => openModal(skill)}
            >
              <div className="skills-icon">
                {skill.icon}
              </div>
              <div className="skills-text">
                {skill.name}
                <div className="skills-time">Вивчаємо: {skill.time}</div>
              </div>
            </div>
          ))}
        </div>
        {description && <div className="skills-description" aria-live="polite">{description}</div>}
        <blockquote className="skills-quote">
          Навички — це інвестиція в майбутнє. Кожен крок наближає до мети.
        </blockquote>
      </main>

      {selectedSkill && (
        <div className="skills-modal" role="dialog" aria-modal="true">
          <div className="skills-modal-content">
            <button className="skills-close-modal" onClick={closeModal} aria-label="Закрити">×</button>
            <h2>{selectedSkill.name}</h2>
            <p>{selectedSkill.desc}</p>
            <p className="skills-modal-time">Тривалість навчання: {selectedSkill.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;

