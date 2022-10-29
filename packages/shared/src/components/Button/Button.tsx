import React from 'react';
import Link from 'next/link';

import cls from 'classnames';

import { ButtonProps } from './types';

import s from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, className, to, variant = 'primary', onClick }) => {
  if (to) {
    return (
      <Link href={to} className={cls(s?.[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls(s.btn, s?.[variant], className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
