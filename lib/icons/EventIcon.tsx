import React from "react";

interface EventIconProps {
  className?: string;
}

export const EventIcon: React.FC<EventIconProps> = ({ className }) => {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.71429 20C8.89942 20 7.91774 20 6.99971 20C5.34286 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.6075 19.5607L10.2942 11.0789C10.1805 10.6619 10.6137 10.3068 11.0002 10.5001L18.6966 14.3483C19.1224 14.5612 19.0379 15.1924 18.571 15.2858L15.2656 15.9469C15.0999 15.98 14.9622 16.0946 14.8994 16.2515L13.5541 19.6148C13.3759 20.0602 12.7337 20.0235 12.6075 19.5607Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
