type Props = {
  variant?: 'default' | 'icon';
  size?: number;
  color?: string;
};

export const Logo = ({
  variant = 'default',
  size = 28,
  color = 'var(--primary)',
}: Props) => {
  if (variant === 'default') {
    return (
      <svg
        data-logo='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 180 32'
        height={size}
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={{ color }}
      >
        {/* Dashboard Icon */}
        <g transform='translate(0, 4)'>
          <rect
            width='7'
            height='9'
            x='3'
            y='3'
            rx='1'
          />
          <rect
            width='7'
            height='5'
            x='14'
            y='3'
            rx='1'
          />
          <rect
            width='7'
            height='9'
            x='14'
            y='12'
            rx='1'
          />
          <rect
            width='7'
            height='5'
            x='3'
            y='16'
            rx='1'
          />
        </g>

        {/* Text */}
        <text
          x='34'
          y='22'
          fill='currentColor'
          stroke='none'
          fontSize='18'
          fontWeight='600'
          fontFamily='system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
        >
          NoobHub
        </text>
      </svg>
    );
  }

  // ICON ONLY
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect
        width='7'
        height='9'
        x='3'
        y='3'
        rx='1'
      />
      <rect
        width='7'
        height='5'
        x='14'
        y='3'
        rx='1'
      />
      <rect
        width='7'
        height='9'
        x='14'
        y='12'
        rx='1'
      />
      <rect
        width='7'
        height='5'
        x='3'
        y='16'
        rx='1'
      />
    </svg>
  );
};
