import React from 'react';

interface AlertProps {
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'default', children }) => {
  const baseStyles = "p-4 rounded-md mb-4";
  const variantStyles = {
    default: "bg-blue-100 text-blue-800",
    destructive: "bg-red-100 text-red-800"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`} role="alert">
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-sm">{children}</p>;
};