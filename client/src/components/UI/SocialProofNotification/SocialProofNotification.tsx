import { useEffect, useState, useCallback } from 'react';
import './SocialProofNotification.css';

interface Notification {
  id: number;
  text: string;
  emoji: string;
  time: string;
}

interface SocialProofNotificationProps {
  enabled?: boolean;
}

// Масив повідомлень від Джона
const JOND_MESSAGES = [
  // 👁️ Перегляди / онлайн
  { emoji: '👁️', text: '5 людей зараз переглядають цю сторінку' },
  { emoji: '👁️', text: '12 відвідувачів онлайн' },
  { emoji: '👁️', text: '8 користувачів активні зараз' },
  { emoji: '👁️', text: '3 нові відвідувачі за останню хвилину' },
  { emoji: '👁️', text: 'Хтось переглядає цей розділ просто зараз' },
  { emoji: '👁️', text: '7 користувачів читають цей матеріал' },

  // ✅ Дії користувачів
  { emoji: '✅', text: 'Тимофій щойно звʼязався з нами' },
  { emoji: '✅', text: 'Марія переглянула портфоліо' },
  { emoji: '✅', text: 'Олександр замовив консультацію' },
  { emoji: '✅', text: 'Таня надіслала відгук про нас' },
  { emoji: '✅', text: 'Іван залишив заявку' },
  { emoji: '✅', text: 'Катерина завершила реєстрацію' },
  { emoji: '✅', text: 'Андрій надіслав бриф' },
  { emoji: '✅', text: 'Юлія успішно надіслала форму' },
  { emoji: '✅', text: 'Михайло підтвердив email' },

  // 💬 Повідомлення / фідбек
  { emoji: '💬', text: 'Нове питання від відвідувачів' },
  { emoji: '💬', text: 'Отримано відгук про лендінг' },
  { emoji: '💬', text: '3 нові повідомлення' },
  { emoji: '💬', text: 'Користувач залишив коментар' },
  { emoji: '💬', text: 'Надійшло нове повідомлення в чат' },
  { emoji: '💬', text: 'Запит щодо співпраці' },
  { emoji: '💬', text: 'Отримано питання про пакети' },

  // 👥 Соціальний доказ / статистика
  { emoji: '👥', text: '7 користувачі сьогодні' },
  { emoji: '👥', text: '15+ активних відвідувачів' },
  { emoji: '👥', text: '13+ задоволених користувачів' },
  { emoji: '👥', text: '32+ людей вже скористались платформою' },
  { emoji: '👥', text: 'Нові користувачі переглядають щодня' },
  { emoji: '👥', text: 'Активність зросла за останню годину' },

  // ⭐ Довіра / результат
  { emoji: '⭐', text: 'Користувач оцінив платформу на 5 зірок' },
  { emoji: '⭐', text: 'Отримано позитивний відгук' },
  { emoji: '⭐', text: 'Платформу рекомендують іншим' },
];

export const SocialProofNotification = ({ 
  enabled = true
}: SocialProofNotificationProps) => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [usedMessages, setUsedMessages] = useState<Set<number>>(new Set());

  const getRandomUnusedMessage = useCallback(() => {
    // Якщо всі повідомлення використані - почати заново
    if (usedMessages.size >= JOND_MESSAGES.length) {
      setUsedMessages(new Set());
    }

    // Знайти невикористані повідомлення
    const availableIndices = JOND_MESSAGES
      .map((_, index) => index)
      .filter(index => !usedMessages.has(index));

    if (availableIndices.length === 0) {
      setUsedMessages(new Set());
      return JOND_MESSAGES[0];
    }

    // Вибрати випадкове
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedMessages(prev => {
      const newSet = new Set(Array.from(prev));
      newSet.add(randomIndex);
      return newSet;
    });
    
    return JOND_MESSAGES[randomIndex];
  }, [usedMessages]);

  const showNotification = useCallback(() => {
    // Показати індикатор набору
    setIsTyping(true);

    // Через 2 секунди показати повідомлення
    setTimeout(() => {
      const message = getRandomUnusedMessage();
      setIsTyping(false);
      
      setCurrentNotification({
        id: Date.now(),
        text: message.text,
        emoji: message.emoji,
        time: 'щойно'
      });

      // Сховати через 8 секунд
      setTimeout(() => {
        setCurrentNotification(null);
      }, 8000);
    }, 2000);
  }, [getRandomUnusedMessage]);

  useEffect(() => {
    if (!enabled) return;

    // Перше повідомлення через 1.5 хвилини (90000 мс)
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 90000);

    // Наступні повідомлення кожні 3 хвилини (180000 мс)
    const notificationInterval = setInterval(() => {
      showNotification();
    }, 180000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(notificationInterval);
    };
  }, [enabled, showNotification]);

  if (!isTyping && !currentNotification) return null;

  return (
    <div className="jondNotification">
      {/* Аватар Джона */}
      <div className="jondNotification__avatar">
        <img 
           src="/nasha_komanda/assistant.webp"  
           alt="Jond" 
          />
      </div>

      {/* Бульбашка повідомлення */}
      <div className="jondNotification__bubble">
        {isTyping ? (
          <div className="jondNotification__typing">
            <span className="jondNotification__name">Джон</span>
            <div className="jondNotification__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : currentNotification && (
          <>
            <div className="jondNotification__header">
              <span className="jondNotification__name">Джон</span>
              <span className="jondNotification__time">{currentNotification.time}</span>
            </div>
            <div className="jondNotification__message">
              <span className="jondNotification__emoji">{currentNotification.emoji}</span>
              {currentNotification.text}
            </div>
          </>
        )}
      </div>

      {/* Кнопка закриття */}
      {!isTyping && currentNotification && (
        <button 
          className="jondNotification__close"
          onClick={() => setCurrentNotification(null)}
          aria-label="Закрити"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SocialProofNotification;