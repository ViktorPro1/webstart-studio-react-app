import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Share2, Check } from 'lucide-react';

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const currentUrl = `${window.location.origin}${location.pathname}`;
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '') return 'WebStart Studio - Головна';
    if (path.includes('/services')) return 'WebStart Studio - Послуги';
    if (path.includes('/about')) return 'WebStart Studio - Про нас';
    if (path.includes('/contact')) return 'WebStart Studio - Контакти';
    if (path.includes('/portfolio')) return 'WebStart Studio - Портфоліо';
    return 'WebStart Studio';
  };

  const shareData = {
    title: getPageTitle(),
    text: `Подивіться цю сторінку: ${getPageTitle()}`,
    url: currentUrl
  };

  // 👇 ВИПРАВЛЕНО: закриваємо меню при кліку, а не в useEffect
  const handleClick = async () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Користувач закрив меню - нічого не робимо
      }
    } else {
      setIsOpen(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Посилання скопійовано!');
    setIsOpen(false);
  };

  const shareToSocial = (platform: string) => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedText = encodeURIComponent(shareData.text);
    
    let shareUrl = '';
    
    switch(platform) {
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'viber':
        shareUrl = `viber://forward?text=${encodedText}%20${encodedUrl}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={handleClick}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
          padding: '0'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        aria-label="Поділитись сторінкою"
      >
        <Share2 size={20} />
      </button>

      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
          />
          
          <div style={{
            position: 'absolute',
            bottom: '100%',
            right: 0,
            marginBottom: '8px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            padding: '12px',
            minWidth: '220px',
            zIndex: 1000
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#6b7280', 
              marginBottom: '8px',
              padding: '0 8px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {currentUrl}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                <Check size={18} />
                Копіювати посилання
              </button>

              <button
                onClick={() => shareToSocial('telegram')}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                📱 Telegram
              </button>

              <button
                onClick={() => shareToSocial('facebook')}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                👍 Facebook
              </button>

              <button
                onClick={() => shareToSocial('whatsapp')}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                💬 WhatsApp
              </button>

              <button
                onClick={() => shareToSocial('viber')}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                📞 Viber
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}