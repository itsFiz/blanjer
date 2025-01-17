// navigation-menu.tsx
import React, { createContext, useContext, useState } from 'react';

interface NavigationMenuContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const NavigationMenuContext = createContext<NavigationMenuContextType>({
  activeIndex: null,
  setActiveIndex: () => {},
});

export const NavigationMenu: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <NavigationMenuContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={`relative ${className}`}>{children}</div>
    </NavigationMenuContext.Provider>
  );
};

export const NavigationMenuList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {children}
    </div>
  );
};

export const NavigationMenuItem: React.FC<{
  children: React.ReactNode;
  index?: number;
  className?: string;
}> = ({ children, index = 0, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const NavigationMenuTrigger: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const { activeIndex, setActiveIndex } = useContext(NavigationMenuContext);

  return (
    <button
      className={`flex items-center px-4 py-2 rounded-lg outline-none transition-colors ${className}`}
      onClick={onClick}
      onMouseEnter={() => setActiveIndex(0)}
    >
      {children}
    </button>
  );
};

export const NavigationMenuContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { activeIndex } = useContext(NavigationMenuContext);

  if (activeIndex === null) return null;

  return (
    <div
      className={`absolute left-0 top-full pt-2 opacity-100 transition-opacity ${className}`}
      onMouseLeave={() => {}}
    >
      {children}
    </div>
  );
};

export const NavigationMenuLink: React.FC<{
  children: React.ReactNode;
  href?: string;
  className?: string;
}> = ({ children, href = '#', className = '' }) => {
  return (
    <a
      href={href}
      className={`block outline-none ${className}`}
    >
      {children}
    </a>
  );
};