import React from 'react';

export type ButtonVariant = 'default' | 'primary' | 'apple' | 'facebook' | 'link';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  to?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
};
