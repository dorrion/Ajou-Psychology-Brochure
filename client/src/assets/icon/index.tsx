import * as React from 'react';

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={62}
      height={26}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        stroke='#252525'
        strokeWidth={0.8}
        strokeLinecap='round'
        d='M.4 14.6h49.2M49.643 14.602l-5.277-7.536'
      />
      <circle cx={49} cy={13} r={12.6} stroke='#252525' strokeWidth={0.8} />
    </svg>
  );
}

export { Arrow };
