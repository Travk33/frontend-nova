import { ReactNode } from 'react';

export type StatCardVariant =
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';

export interface StatCardProps {
  /**
   * The title displayed at the top of the card (uppercase)
   */
  title: string;

  /**
   * The main value/number to display
   */
  value: string | number;

  /**
   * Descriptive subtitle below the value
   */
  subtitle?: string;

  /**
   * Icon to display next to the title
   */
  icon?: ReactNode;

  /**
   * Visual variant determining the color scheme
   * @default 'default'
   */
  variant?: StatCardVariant;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Click handler for making the card interactive
   */
  onClick?: () => void;

  /**
   * Test id for testing purposes
   */
  testId?: string;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}
