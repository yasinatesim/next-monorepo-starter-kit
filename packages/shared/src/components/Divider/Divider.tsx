import React from 'react';

import s from './Divider.module.scss';

type Props = {
  displayText?: string;
};

const Divider: React.FC<Props> = ({ displayText }) => {
  return <div className={s.divider}>{displayText && <span className={s.dividerTitle}>{displayText}</span>}</div>;
};

export default Divider;
