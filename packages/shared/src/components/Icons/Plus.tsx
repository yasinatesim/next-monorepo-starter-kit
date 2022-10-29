import * as React from 'react';

function SvgPlus(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  );
}

export default SvgPlus;
