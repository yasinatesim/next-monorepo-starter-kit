import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

// Styles
import s from './index.module.scss';

function Input({ error, id, label, ...props }) {
  return (
    <div className={s.container}>
      <div className={s.label}>
        <label htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        type="text"
        className={cls(s.input, {
          [s.error]: error,
        })}
        id={id}
        {...props}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
