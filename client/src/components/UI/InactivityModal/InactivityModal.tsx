import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Heart } from 'lucide-react';
import './InactivityModal.css';
import './InactivityModal.mobile.css';

interface InactivityModalProps {
  enabled?: boolean;
  inactivityTime?: number; // в мілісекундах
}

export const InactivityModal = ({ 
  enabled = true,
  inactivityTime = 40000 // 90 секунд
}: InactivityModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCareEmoji, setShowCareEmoji] = useState(false);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNeedHelp = useCallback(() => {
    handleClose();
    navigate('/contact');
  }, [navigate, handleClose]);

  const handleAllGood = useCallback(() => {
    handleClose();
    setShowCareEmoji(true);
    
    // Сховати смайлик через 3 секунди
    setTimeout(() => {
      setShowCareEmoji(false);
    }, 3000);
  }, [handleClose]);

  useEffect(() => {
    if (!enabled) return;

    let inactivityTimer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      
      // Запустити новий таймер
      inactivityTimer = setTimeout(() => {
        setIsOpen(true);
      }, inactivityTime);
    };

    // Події користувача
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    // Додати слухачі подій
    events.forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });

    // Запустити початковий таймер
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [enabled, inactivityTime]);

  if (!isOpen && !showCareEmoji) return null;

  return (
    <>
      {/* Inactivity Modal */}
      {isOpen && (
        <div className="inactivityModal">
          <div className="inactivityModal__overlay" onClick={handleClose}></div>
          
          <div className="inactivityModal__content">
            {/* Аватар Джона */}
            <div className="inactivityModal__avatar">
              <img 
                  src="/nasha_komanda/assistant.webp"  
                  alt="Jond" 
                />
            </div>

            {/* Повідомлення */}
            <div className="inactivityModal__message">
              <h2 className="inactivityModal__title">
                Привіт! Це Джон 👋
              </h2>
              <p className="inactivityModal__text">
                Помітив, що ви тут вже деякий час, неактивні. Все гаразд?
              </p>
            </div>

            {/* Кнопки */}
            <div className="inactivityModal__buttons">
              <button 
                className="inactivityModal__button inactivityModal__button--primary"
                onClick={handleNeedHelp}
              >
                <HelpCircle size={20} />
                Потрібна допомога
              </button>

              <button 
                className="inactivityModal__button inactivityModal__button--secondary"
                onClick={handleAllGood}
              >
                Все добре
              </button>
            </div>

            {/* Підказка */}
            <p className="inactivityModal__hint">
              Завжди готовий допомогти! 😊
            </p>
          </div>
        </div>
      )}

      {/* Care Emoji */}
      {showCareEmoji && (
        <div className="inactivityModal__careEmoji">
          <div className="inactivityModal__careEmoji-content">
            <Heart className="inactivityModal__careEmoji-icon" size={48} />
            <p className="inactivityModal__careEmoji-text">
              Дякую! Я тут, якщо знадоблюсь! 💙
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default InactivityModal;