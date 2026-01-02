import { useEffect, useState, useCallback } from 'react';
import { Copy, Share2, AlertCircle } from 'lucide-react';
import './CopyProtectionModal.css';

interface CopyProtectionModalProps {
  enabled?: boolean;
  showShareButton?: boolean;
}

export const CopyProtectionModal = ({ 
  enabled = true,
  showShareButton = true 
}: CopyProtectionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      // Fallback - копіювати посилання
      navigator.clipboard.writeText(window.location.href);
      alert('Посилання скопійовано!');
    }
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (!enabled) return;

    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString();
      
      if (selection && selection.length > 50) {
        e.preventDefault();
        setCopiedText(selection);
        setIsOpen(true);

        // Автоматично закрити через 5 секунд
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      }
    };

    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, [enabled]);

  if (!isOpen) return null;

  return (
    <div className="copyProtection">
      <div className="copyProtection__overlay" onClick={handleClose}></div>
      
      <div className="copyProtection__modal">
        <div className="copyProtection__icon copyProtection__icon--warning">
          <AlertCircle size={48} />
        </div>

        <h2 className="copyProtection__title">
          Захист авторських прав ⚠️
        </h2>

        <p className="copyProtection__text">
          Цей контент захищений авторськими правами
        </p>

        <div className="copyProtection__info">
          <Copy size={16} />
          <span>Скопійовано: {copiedText.substring(0, 50)}...</span>
        </div>

        <p className="copyProtection__subtitle">
          Натомість ви можете поділитись посиланням на цю сторінку
        </p>

        <div className="copyProtection__buttons">
          {showShareButton && (
            <button 
              className="copyProtection__button copyProtection__button--primary"
              onClick={handleShare}
            >
              <Share2 size={20} />
              Поділитися
            </button>
          )}

          <button 
            className="copyProtection__button copyProtection__button--secondary"
            onClick={handleClose}
          >
            Зрозумів
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyProtectionModal;