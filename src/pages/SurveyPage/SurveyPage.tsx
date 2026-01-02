import { useState } from 'react';
import { Send, Star, MessageSquare, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
import './SurveyPage.css';
import './SurveyPage.mobile.css';

interface SurveyData {
  rating: number;
  feedback: string;
  suggestions: string;
  improvements: string;
  email?: string;
}

export const SurveyPage = () => {
  const [formData, setFormData] = useState<SurveyData>({
    rating: 0,
    feedback: '',
    suggestions: '',
    improvements: '',
    email: ''
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyZqQER_dSRy1FRjL0HS-uCX42eqxPyyrBhj65PTGDxXylsltNY4nYC9P3JPAQoF0T8/exec';

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      alert('Будь ласка, оцініть нашу платформу');
      return;
    }

    setIsSubmitting(true);

    try {
      if (!navigator.onLine) {
        throw new Error('Немає підключення до інтернету');
      }

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          rating: formData.rating,
          feedback: formData.feedback,
          suggestions: formData.suggestions,
          improvements: formData.improvements,
          email: formData.email || 'Не вказано'
        })
      });

      setShowThankYou(true);
      setFormData({
        rating: 0,
        feedback: '',
        suggestions: '',
        improvements: '',
        email: ''
      });

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('Виникла помилка при відправці. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="surveyPage">
      <div className="surveyPage__container">
        
        <div className="surveyPage__header">
          <h1 className="surveyPage__title">
            Ваша думка важлива для нас! 💙
          </h1>
          <p className="surveyPage__subtitle">
            Допоможіть нам стати кращими - поділіться своїми враженнями
          </p>
        </div>

        <form className="surveyPage__form" onSubmit={handleSubmit}>
          
          <div className="surveyPage__section">
            <div className="surveyPage__section-header">
              <Star className="surveyPage__section-icon" size={24} />
              <h2 className="surveyPage__section-title">
                Як вам наша платформа?
              </h2>
            </div>
            
            <div className="surveyPage__rating" role="group" aria-label="Оцінка платформи">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`surveyPage__star ${
                    star <= (hoveredStar || formData.rating) ? 'surveyPage__star--active' : ''
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  aria-label={`Оцінити на ${star} зірок`}
                >
                  <Star 
                    size={40} 
                    fill={star <= (hoveredStar || formData.rating) ? 'currentColor' : 'none'}
                  />
                </button>
              ))}
            </div>
            
            {formData.rating > 0 && (
              <p className="surveyPage__rating-text" aria-live="polite">
                {formData.rating === 1 && 'Дуже погано 😞'}
                {formData.rating === 2 && 'Погано 😕'}
                {formData.rating === 3 && 'Нормально 😐'}
                {formData.rating === 4 && 'Добре 😊'}
                {formData.rating === 5 && 'Чудово! 🤩'}
              </p>
            )}
          </div>

          <div className="surveyPage__section">
            <div className="surveyPage__section-header">
              <MessageSquare className="surveyPage__section-icon" size={24} />
              <label htmlFor="feedback" className="surveyPage__section-title">
                Ваші враження
              </label>
            </div>
            
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              className="surveyPage__textarea"
              placeholder="Розкажіть, що вам сподобалось або не сподобалось..."
              rows={4}
              required
              autoComplete="off"
            />
          </div>

          <div className="surveyPage__section">
            <div className="surveyPage__section-header">
              <Lightbulb className="surveyPage__section-icon" size={24} />
              <label htmlFor="suggestions" className="surveyPage__section-title">
                Що б ви хотіли додати?
              </label>
            </div>
            
            <textarea
              id="suggestions"
              name="suggestions"
              value={formData.suggestions}
              onChange={handleInputChange}
              className="surveyPage__textarea"
              placeholder="Які нові функції або можливості вам цікаві?"
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="surveyPage__section">
            <div className="surveyPage__section-header">
              <TrendingUp className="surveyPage__section-icon" size={24} />
              <label htmlFor="improvements" className="surveyPage__section-title">
                Що б ви хотіли покращити?
              </label>
            </div>
            
            <textarea
              id="improvements"
              name="improvements"
              value={formData.improvements}
              onChange={handleInputChange}
              className="surveyPage__textarea"
              placeholder="Які аспекти платформи потребують покращення?"
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="surveyPage__section">
            <label htmlFor="email" className="surveyPage__label">
              Email (необов'язково)
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="surveyPage__input"
              placeholder="your@email.com"
              autoComplete="email"
            />
            <p className="surveyPage__hint">
              Залиште email, якщо хочете отримати відповідь
            </p>
          </div>

          <button
            type="submit"
            className="surveyPage__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Відправка...</>
            ) : (
              <>
                <Send size={20} />
                Відправити відгук
              </>
            )}
          </button>
        </form>

        {showThankYou && (
          <div className="surveyPage__thankYou">
            <div className="surveyPage__thankYou-overlay" onClick={() => setShowThankYou(false)}></div>
            <div className="surveyPage__thankYou-modal">
              <div className="surveyPage__thankYou-icon">
                <CheckCircle size={64} />
              </div>
              <h2 className="surveyPage__thankYou-title">
                Дякуємо за ваш час! 🙏
              </h2>
              <p className="surveyPage__thankYou-text">
                Ваші відгуки дуже важливі для нас і допомагають робити платформу кращою.
                Ми обов'язково врахуємо ваші побажання!
              </p>
              <button 
                type="button"
                className="surveyPage__thankYou-button"
                onClick={() => setShowThankYou(false)}
              >
                Чудово!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyPage;