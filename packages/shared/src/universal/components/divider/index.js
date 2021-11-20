import React from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './index.module.scss';

function Divider({ displayText }) {
  return <div className={s.divider}>{displayText && <span className={s.dividerTitle}>{displayText}</span>}</div>;
}

Divider.propTypes = {
  displayText: PropTypes.bool,
};

export default Divider;
