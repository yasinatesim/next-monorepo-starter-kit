import React from 'react';

import cls from 'classnames';

import s from './Input.module.scss';

type Props = {
  error?: string;
  name: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ error, name, label, ...props }) => {
  return (
    <div className={s.container}>
      <div className={s.label}>
        <label htmlFor={name}>
          {label}
        </label>
      </div>
      <input
        type="text"
        className={cls(s.input, {
          [s.error]: error,
        })}
        id={name}
        name={name}
        {...props}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};

export default Input;
