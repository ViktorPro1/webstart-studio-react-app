import React, { useState } from 'react';
import './Skills.css';
import './Skills.mobile.css';

interface Skill {
  name: string;
  desc: string;
  time: string;
  icon: string; // ✅ string замість ReactNode
}

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [description, setDescription] = useState<string>('');

const skillsData: Skill[] = [
  { name: 'HTML', desc: 'Мова, якою створюють структуру веб-сторінок.', time: '1.2 роки', icon: '🔥' },
  { name: 'CSS', desc: 'Мова, що додає стиль і оформлення веб-сторінкам.', time: '1.2 роки', icon: '🎨' },
  { name: 'JavaScript', desc: 'Мова програмування для динаміки веб-сторінок.', time: '1 рік', icon: '⚡' },
  { name: 'Git', desc: 'Система контролю версій для командної роботи.', time: '1.6 роки', icon: '📂' },
  { name: 'React', desc: 'Фреймворк для створення сучасних інтерфейсів.', time: '1 рік', icon: '⚛️' },
  { name: 'Node.js', desc: 'Платформа для серверного JavaScript.', time: '1 рік', icon: '🟨' },
  { name: 'MongoDB', desc: 'База даних NoSQL для гнучкого зберігання даних.', time: '2 тижні', icon: '🟢' },
  { name: 'SQL', desc: 'Мова запитів для роботи з реляційними базами даних.', time: '2 тижні', icon: '🗄️' },
  { name: 'Data Analytics', desc: 'Аналіз даних для прийняття бізнес-рішень.', time: '1 тиждень', icon: '📊' },
  { name: 'C++', desc: 'Мова програмування для створення швидких і ефективних програм.', time: '2 тижні', icon: '⚙️' },
  { name: 'Вебдизайн (Canva)', desc: 'Створення банерів та шаблонів для соц.мережі за допомогою програмки Canva.', time: '1.4 роки', icon: '🖌️' },
  { name: 'Таргетована реклама', desc: 'Реклама у Facebook та Instagram. Ніша: робота за кордоном та пасажирські перевезення.', time: '1.8 роки', icon: '📣' }
];

  const openModal = (skill: Skill): void => setSelectedSkill(skill);
  const closeModal = (): void => setSelectedSkill(null);

  const handleSkillHover = (skill: Skill): void => setDescription(skill.desc);
  const handleSkillLeave = (): void => setDescription('');

  return (
    <>

      <div className="skills-page">
        <section className="skills-hero">
          <h1>Наші навички в дії</h1>
        </section>

        <section className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onMouseEnter={() => handleSkillHover(skill)}
              onMouseLeave={handleSkillLeave}
              onFocus={() => handleSkillHover(skill)}
              onBlur={handleSkillLeave}
              onClick={() => openModal(skill)}
              role="button"
              tabIndex={0}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-time">Вивчаємо: {skill.time}</div>
            </div>
          ))}
        </section>

        {description && (
          <div className="skills-hover-description">
            {description}
          </div>
        )}

        <section className="skills-philosophy">
          <p>Навички — це інвестиція в майбутнє. Кожен крок наближає до мети.</p>
        </section>

        {selectedSkill && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="modal-icon">{selectedSkill.icon}</div>
              <h2>{selectedSkill.name}</h2>
              <p>{selectedSkill.desc}</p>
              <div className="modal-time">Тривалість навчання: {selectedSkill.time}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;


