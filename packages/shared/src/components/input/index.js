import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

// Styles
import s from './index.module.scss';

function Input({ error, name, label, ...props }) {
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
}

Input.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
