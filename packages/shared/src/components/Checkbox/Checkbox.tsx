import React from 'react';

import s from './Checkbox.module.scss';

type Props = {
  label: string;
  name: string;
};

const Checkbox: React.FC<Props> = ({ label, name }) => {
  return (
    <div className={s.container}>
      <input className={s.checkbox} type="checkbox" id={name} />
      <span className={s.label} />
      <label htmlFor={name} className={s.text}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
