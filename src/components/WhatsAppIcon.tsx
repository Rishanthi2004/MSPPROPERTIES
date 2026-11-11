import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  alt?: string;
}

/** Brand WhatsApp speech-bubble icon asset. */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  alt = '',
}) => (
  <img
    src="/assets/whatsapp-icon.png"
    alt={alt}
    aria-hidden={alt === ''}
    className={`object-contain shrink-0 select-none ${className}`}
  />
);

