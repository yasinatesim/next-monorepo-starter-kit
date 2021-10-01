import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

// Routes
import Link from 'next/link';

// Styles
import s from './index.module.scss';

function Button({ children, className, to, variant = 'primary', onClick }) {
  if (to) {
    return (
      <Link href={to}>
        <a className={cls(s?.[variant], className)}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={cls(s.btn, s?.[variant], className)} type="button" onClick={onClick}>
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
