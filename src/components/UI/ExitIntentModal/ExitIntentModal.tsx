import { X, MessageCircle } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExitIntentModal.css';

interface ExitIntentModalProps {
  enabled?: boolean;
}

export const ExitIntentModal = ({ enabled = true }: ExitIntentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleContact = useCallback(() => {
    handleClose();
    navigate('/contact');
  }, [navigate, handleClose]);

  useEffect(() => {
    if (!enabled || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Перевіряємо чи курсор йде вгору (до хрестика закриття)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, hasShown]);

  if (!isOpen) return null;

  return (
    <div className="exitIntent">
      <div className="exitIntent__overlay" onClick={handleClose}></div>
      
      <div className="exitIntent__modal">
        <button 
          className="exitIntent__close" 
          onClick={handleClose}
          aria-label="Закрити"
        >
          <X size={24} />
        </button>

        <div className="exitIntent__icon">
          <MessageCircle size={64} />
        </div>

        <h2 className="exitIntent__title">
          Зачекайте! 🙏
        </h2>

        <p className="exitIntent__text">
          Не знайшли відповідь на своє питання?
        </p>

        <p className="exitIntent__subtitle">
          Напишіть нам і ми обов'язково допоможемо!
        </p>

        <div className="exitIntent__buttons">
          <button 
            className="exitIntent__button exitIntent__button--primary"
            onClick={handleContact}
          >
            <MessageCircle size={20} />
            Напишіть нам
          </button>

          <button 
            className="exitIntent__button exitIntent__button--secondary"
            onClick={handleClose}
          >
            Ні, дякую
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;