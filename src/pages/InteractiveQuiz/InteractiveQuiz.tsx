import React, { useState } from 'react';
import './InteractiveQuiz.css';
import './InteractiveQuiz.mobile.css';

interface Weight {
  landing: number;
  portfolio: number;
  resume: number;
}

interface Option {
  value: string;
  label: string;
  weight: Weight;
  timeline?: string;
  budget?: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface ResultData {
  resultType: string;
  recommendation: string;
  features: string[];
  timelineText: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Яка основна мета вашого проєкту?",
    options: [
      { value: "business", label: "Просування бізнесу та залучення клієнтів", weight: { landing: 3, portfolio: 1, resume: 0 } },
      { value: "portfolio", label: "Демонстрація робіт та досягнень", weight: { landing: 0, portfolio: 3, resume: 1 } },
      { value: "career", label: "Пошук роботи та кар'єрне зростання", weight: { landing: 0, portfolio: 1, resume: 3 } },
      { value: "personal", label: "Особистий бренд та самопрезентація", weight: { landing: 1, portfolio: 2, resume: 2 } }
    ]
  },
  {
    id: 2,
    question: "Який обсяг інформації ви плануєте розміщувати?",
    options: [
      { value: "minimal", label: "Мінімум: контакти та основна інформація", weight: { landing: 3, portfolio: 0, resume: 2 } },
      { value: "medium", label: "Середній: кілька розділів з описами", weight: { landing: 2, portfolio: 2, resume: 3 } },
      { value: "large", label: "Великий: багато проєктів та деталей", weight: { landing: 0, portfolio: 3, resume: 1 } },
      { value: "variable", label: "Змінний: буду регулярно оновлювати", weight: { landing: 1, portfolio: 3, resume: 0 } }
    ]
  },
  {
    id: 3,
    question: "Хто ваша цільова аудиторія?",
    options: [
      { value: "clients", label: "Потенційні клієнти та партнери", weight: { landing: 3, portfolio: 1, resume: 0 } },
      { value: "employers", label: "Роботодавці та рекрутери", weight: { landing: 0, portfolio: 1, resume: 3 } },
      { value: "creative", label: "Креативні агенції та студії", weight: { landing: 1, portfolio: 3, resume: 1 } },
      { value: "mixed", label: "Змішана аудиторія", weight: { landing: 2, portfolio: 2, resume: 2 } }
    ]
  },
  {
    id: 4,
    question: "Як швидко вам потрібен результат?",
    options: [
      { value: "urgent", label: "Дуже терміново (до 1 тижня)", weight: { landing: 2, portfolio: 1, resume: 3 }, timeline: "urgent" },
      { value: "fast", label: "Швидко (1-2 тижні)", weight: { landing: 3, portfolio: 2, resume: 2 }, timeline: "fast" },
      { value: "normal", label: "Стандартно (2-4 тижні)", weight: { landing: 2, portfolio: 3, resume: 1 }, timeline: "normal" },
      { value: "flexible", label: "Гнучко (якість важливіша за швидкість)", weight: { landing: 1, portfolio: 3, resume: 1 }, timeline: "flexible" }
    ]
  },
  {
    id: 5,
    question: "Який ваш бюджет на проєкт?",
    options: [
      { value: "minimal", label: "Мінімальний (до 5000 грн)", weight: { landing: 2, portfolio: 1, resume: 3 }, budget: "minimal" },
      { value: "moderate", label: "Середній (5000-15000 грн)", weight: { landing: 3, portfolio: 2, resume: 1 }, budget: "moderate" },
      { value: "high", label: "Високий (15000-30000 грн)", weight: { landing: 2, portfolio: 3, resume: 0 }, budget: "high" },
      { value: "premium", label: "Преміум (30000+ грн)", weight: { landing: 1, portfolio: 3, resume: 0 }, budget: "premium" }
    ]
  }
];

const timelineMap: Record<string, string> = {
  urgent: '⏰ Термін виконання: 5-7 днів. Швидке виконання може потребувати додаткової оплати.',
  fast: '⏰ Термін виконання: 7-14 днів. Оптимальний баланс швидкості та якості.',
  normal: '⏰ Термін виконання: 14-28 днів. Достатньо часу для детального опрацювання.',
  flexible: '⏰ Термін виконання: 28+ днів. Максимальна якість та увага до деталей.'
};

const InteractiveQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [resultData, setResultData] = useState<ResultData>({ resultType: '', recommendation: '', features: [], timelineText: '' });

  const selectOption = (questionId: number, value: string): void => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = (): void => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = (): void => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  const calculateResults = (): void => {
    const tempScores: Weight = { landing: 0, portfolio: 0, resume: 0 };
    let timeline = '';
    let budget = '';

    questions.forEach(q => {
      const answer = answers[q.id];
      const option = q.options.find(opt => opt.value === answer);
      if (option && option.weight) {
        tempScores.landing += option.weight.landing || 0;
        tempScores.portfolio += option.weight.portfolio || 0;
        tempScores.resume += option.weight.resume || 0;
      }
      if (option?.timeline) timeline = option.timeline;
      if (option?.budget) budget = option.budget;
    });

    showResults(timeline, budget, tempScores);
  };

  const showResults = (timeline: string, budget: string, scores: Weight): void => {
    const maxScore = Math.max(scores.landing, scores.portfolio, scores.resume);
    let resultType = '';
    let recommendation = '';
    let features: string[] = [];

    if (scores.landing === maxScore) {
      resultType = 'Лендінг (Landing Page)';
      recommendation = 'Ідеальний вибір для швидкого залучення клієнтів! Лендінг - це односторінковий сайт, який концентрує увагу відвідувачів на одній цільовій дії.';
      features = [
        'Яскравий та привабливий дизайн',
        'Оптимізація для конверсій',
        'Швидке завантаження',
        'Адаптивність під всі пристрої',
        'Інтеграція з аналітикою',
        'Форми зворотного зв\'язку'
      ];
    } else if (scores.portfolio === maxScore) {
      resultType = 'Портфоліо';
      recommendation = 'Професійна демонстрація ваших робіт! Портфоліо допоможе вам показати свої найкращі проєкти та виділитися серед конкурентів.';
      features = [
        'Галерея проєктів з детальними описами',
        'Категорії для різних типів робіт',
        'Можливість завантажувати зображення',
        'Розділ "Про мене" та досвід',
        'Контактна форма',
        'Інтеграція з соціальними мережами'
      ];
    } else {
      resultType = 'Онлайн-резюме';
      recommendation = 'Сучасне цифрове резюме для успішної кар\'єри! Виділіться серед інших кандидатів з професійним онлайн-резюме.';
      features = [
        'Структурована інформація про досвід',
        'Секція навичок та компетенцій',
        'Освіта та сертифікати',
        'Можливість завантажити PDF',
        'Контактна інформація',
        'Посилання на соціальні мережі'
      ];
    }

    setResultData({ 
      resultType, 
      recommendation, 
      features, 
      timelineText: timelineMap[timeline] || timelineMap.normal 
    });
    setShowResult(true);
  };

  const restartQuiz = (): void => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResultData({ resultType: '', recommendation: '', features: [], timelineText: '' });
  };

  return (
    <div className="InteractiveQuiz-container">
      {!showResult && (
        <div className="InteractiveQuiz-quizScreen">
          <div className="InteractiveQuiz-progressContainer">
            <div 
              className="InteractiveQuiz-progressBar" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} 
            />
          </div>
          <div className="InteractiveQuiz-progressText">
            Крок {currentQuestion + 1} з {questions.length}
          </div>

          <div className="InteractiveQuiz-questionContainer">
            <h3 className="InteractiveQuiz-questionTitle">
              {questions[currentQuestion].question}
            </h3>
            <div className="InteractiveQuiz-options">
              {questions[currentQuestion].options.map((opt, idx) => (
                <div 
                  key={idx} 
                  className={`InteractiveQuiz-option ${
                    answers[questions[currentQuestion].id] === opt.value 
                      ? 'InteractiveQuiz-selected' 
                      : ''
                  }`} 
                  onClick={() => selectOption(questions[currentQuestion].id, opt.value)}
                >
                  <input 
                    type="radio" 
                    name={`q${questions[currentQuestion].id}`} 
                    value={opt.value} 
                    checked={answers[questions[currentQuestion].id] === opt.value} 
                    readOnly 
                  />
                  <label>{opt.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="InteractiveQuiz-buttonGroup">
            {currentQuestion > 0 && (
              <button className="InteractiveQuiz-btn Secondary" onClick={prevQuestion}>
                Назад
              </button>
            )}
            <button 
              className="InteractiveQuiz-btn Primary" 
              onClick={nextQuestion} 
              disabled={!answers[questions[currentQuestion].id]}
            >
              {currentQuestion === questions.length - 1 ? 'Завершити' : 'Далі'}
            </button>
          </div>
        </div>
      )}

      {showResult && (
        <div className="InteractiveQuiz-resultScreen">
          <div className="InteractiveQuiz-resultCard">
            <h2>🎉 Ваші результати готові!</h2>
            <p className="InteractiveQuiz-resultType">{resultData.resultType}</p>
            <p>{resultData.recommendation}</p>
            <ul className="InteractiveQuiz-featuresList">
              {resultData.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="InteractiveQuiz-timelineInfo">
              <strong>{resultData.timelineText}</strong>
            </div>
            <div className="InteractiveQuiz-buttonGroup">
              <button className="InteractiveQuiz-btn Secondary" onClick={restartQuiz}>
                Пройти знову
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;
