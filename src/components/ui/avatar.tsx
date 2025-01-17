import React, { useRef, useEffect, useState } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  trigger, 
  children, 
  align = 'left' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <div 
          className={`absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 
            ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          <div 
            className="py-1 rounded-md bg-white dark:bg-gray-800 shadow-xs"
            role="menu" 
            aria-orientation="vertical" 
            aria-labelledby="dropdown-menu"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ 
  children, 
  onClick, 
  className = '' 
}) => {
  return (
    <div
      className={`px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 
        cursor-pointer ${className}`}
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const DropdownDivider: React.FC = () => {
  return <div className="h-px my-1 bg-gray-200 dark:bg-gray-700" />;
};

export const DropdownLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
};

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = '', 
  fallback,
  size = 'md',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const renderFallback = () => {
    return (
      <div 
        className={`${sizeClasses[size]} flex items-center justify-center bg-purple-100 dark:bg-purple-900 
          text-purple-600 dark:text-purple-400 rounded-full font-medium ${className}`}
      >
        {fallback.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  if (!src || imageError) {
    return renderFallback();
  }

  return (
    <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setImageError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'error';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
    secondary: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    success: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
    error: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
  };

  return (
    <span 
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};