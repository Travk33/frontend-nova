import React, { KeyboardEvent } from 'react';
import { StatCardProps } from './StatCard.types';
import './StatCard.css';

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  variant = 'default',
  className = '',
  onClick,
  testId,
  ariaLabel,
}) => {
  const isClickable = !!onClick;

  const classNames = [
    'stat-card',
    `stat-card--${variant}`,
    isClickable && 'stat-card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  const cardProps = {
    className: classNames,
    'data-testid': testId,
    'aria-label': ariaLabel,
    ...(isClickable && {
      role: 'button',
      tabIndex: 0,
      onClick,
      onKeyDown: handleKeyDown,
    }),
  };

  return (
    <div {...cardProps}>
      <div className="stat-card__header">
        {icon && <span className="stat-card__icon">{icon}</span>}
        <h3 className="stat-card__title">{title}</h3>
      </div>
      <p className="stat-card__value">{value}</p>
      {subtitle && <p className="stat-card__subtitle">{subtitle}</p>}
    </div>
  );
};
