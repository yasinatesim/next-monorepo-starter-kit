import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

// Routes
import { Link } from 'next/link';

// Styles
import s from './index.module.scss';

function Button({ children, className, to, variant, onClick }) {
  if (to) {
    return (
      <Link className={cls(s.btn, cls(s.base, s?.[variant]), className)} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls(s.btn, cls(s.base, s?.[variant]), className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
