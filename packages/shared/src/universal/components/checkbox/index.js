import React from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './index.module.scss';

function Checkbox({ label, name }) {
  return (
    <div className={s.container}>
      <input className={s.checkbox} type="checkbox" id={name} />
      <span className={s.label} />
      <label htmlFor={name} className={s.text}>
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;