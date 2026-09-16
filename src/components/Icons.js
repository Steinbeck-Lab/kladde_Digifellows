import React from 'react';

const base = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export function ArrowLeft(props) {
  return (
    <svg {...base} strokeWidth={1.75} {...props}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} strokeWidth={1.75} {...props}>
      <path d="M7 17L17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...base} strokeWidth={1.75} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
