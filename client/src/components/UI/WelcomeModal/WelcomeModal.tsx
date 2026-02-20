import { useEffect, useState, useCallback } from 'react';
import './WelcomeModal.css';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  autoCloseDuration?: number;
}

export const WelcomeModal = ({ 
  isOpen, 
  onClose, 
  autoCloseDuration = 4000 
}: WelcomeModalProps) => {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(onClose, 400);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const showTimer = setTimeout(() => {
        setShow(true);
      }, 100);

      const closeTimer = setTimeout(() => {
        handleClose();
      }, autoCloseDuration);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isOpen, autoCloseDuration, handleClose]);

  if (!isOpen) return null;

  return (
    <div className={`welcomeBanner ${show ? 'welcomeBanner--show' : ''}`}>
      <span className="welcomeBanner__emoji">👋</span>
      <span className="welcomeBanner__text">Вітаємо Вас у нашій платформі!</span>
      <span className="welcomeBanner__emoji">✨</span>
    </div>
  );
};

export default WelcomeModal;