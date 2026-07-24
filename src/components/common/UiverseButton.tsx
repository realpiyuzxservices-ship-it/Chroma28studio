import React from 'react';

interface UiverseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  textSize?: string;
}

export const UiverseButton: React.FC<UiverseButtonProps> = ({
  text,
  onClick,
  className = '',
  textSize = 'text-xl sm:text-2xl',
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`btn-uiverse group cursor-pointer ${className}`}
      aria-label={text}
    >
      <p data-text={text} className={textSize}>
        {text}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
};

export default UiverseButton;
