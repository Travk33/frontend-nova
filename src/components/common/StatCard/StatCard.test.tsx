import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  describe('rendering', () => {
    it('renders with required props', () => {
      render(<StatCard title="Test Title" value={42} />);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('renders with string value', () => {
      render(<StatCard title="Revenue" value="$1.2M" />);

      expect(screen.getByText('$1.2M')).toBeInTheDocument();
    });

    it('renders with subtitle', () => {
      render(
        <StatCard
          title="Compliant Markets"
          value={12}
          subtitle="Across EU, UK, and NAM"
        />
      );

      expect(screen.getByText('Across EU, UK, and NAM')).toBeInTheDocument();
    });

    it('renders with icon', () => {
      render(
        <StatCard
          title="Test"
          value={5}
          icon={<span data-testid="custom-icon">✓</span>}
        />
      );

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders without icon wrapper when no icon provided', () => {
      const { container } = render(<StatCard title="Test" value={5} />);

      expect(
        container.querySelector('.stat-card__icon')
      ).not.toBeInTheDocument();
    });

    it('renders without subtitle when not provided', () => {
      const { container } = render(<StatCard title="Test" value={5} />);

      expect(
        container.querySelector('.stat-card__subtitle')
      ).not.toBeInTheDocument();
    });

    it('applies testId when provided', () => {
      render(<StatCard title="Test" value={5} testId="stat-card-test" />);

      expect(screen.getByTestId('stat-card-test')).toBeInTheDocument();
    });

    it('applies ariaLabel when provided', () => {
      render(
        <StatCard
          title="Test"
          value={5}
          ariaLabel="Stat card showing 5 items"
        />
      );

      expect(
        screen.getByLabelText('Stat card showing 5 items')
      ).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <StatCard title="Test" value={5} className="custom-class" />
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('variants', () => {
    it('renders with default variant', () => {
      const { container } = render(<StatCard title="Test" value={5} />);

      expect(container.firstChild).toHaveClass('stat-card--default');
    });

    it('renders with success variant', () => {
      const { container } = render(
        <StatCard title="Test" value={5} variant="success" />
      );

      expect(container.firstChild).toHaveClass('stat-card--success');
    });

    it('renders with warning variant', () => {
      const { container } = render(
        <StatCard title="Test" value={5} variant="warning" />
      );

      expect(container.firstChild).toHaveClass('stat-card--warning');
    });

    it('renders with danger variant', () => {
      const { container } = render(
        <StatCard title="Test" value={5} variant="danger" />
      );

      expect(container.firstChild).toHaveClass('stat-card--danger');
    });

    it('renders with info variant', () => {
      const { container } = render(
        <StatCard title="Test" value={5} variant="info" />
      );

      expect(container.firstChild).toHaveClass('stat-card--info');
    });
  });

  describe('click interaction', () => {
    it('is not clickable when onClick is not provided', () => {
      const { container } = render(<StatCard title="Test" value={5} />);

      expect(container.firstChild).not.toHaveClass('stat-card--clickable');
      expect(container.firstChild).not.toHaveAttribute('role', 'button');
    });

    it('is clickable when onClick is provided', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <StatCard title="Test" value={5} onClick={handleClick} />
      );

      expect(container.firstChild).toHaveClass('stat-card--clickable');
      expect(container.firstChild).toHaveAttribute('role', 'button');
      expect(container.firstChild).toHaveAttribute('tabIndex', '0');
    });

    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<StatCard title="Test" value={5} onClick={handleClick} />);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick when Enter key is pressed', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <StatCard title="Test" value={5} onClick={handleClick} />
      );

      fireEvent.keyDown(container.firstChild!, { key: 'Enter' });
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick when Space key is pressed', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <StatCard title="Test" value={5} onClick={handleClick} />
      );

      fireEvent.keyDown(container.firstChild!, { key: ' ' });
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick for other keys', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <StatCard title="Test" value={5} onClick={handleClick} />
      );

      fireEvent.keyDown(container.firstChild!, { key: 'Tab' });
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has proper heading structure', () => {
      render(<StatCard title="Test Title" value={5} />);

      expect(
        screen.getByRole('heading', { name: 'Test Title', level: 3 })
      ).toBeInTheDocument();
    });

    it('renders value in a paragraph', () => {
      render(<StatCard title="Test" value={42} />);

      const valueParagraph = screen.getByText('42');
      expect(valueParagraph.tagName).toBe('P');
      expect(valueParagraph).toHaveClass('stat-card__value');
    });

    it('renders subtitle in a paragraph', () => {
      render(<StatCard title="Test" value={5} subtitle="Test subtitle" />);

      const subtitleParagraph = screen.getByText('Test subtitle');
      expect(subtitleParagraph.tagName).toBe('P');
      expect(subtitleParagraph).toHaveClass('stat-card__subtitle');
    });
  });

  describe('real-world scenarios', () => {
    it('renders compliant markets card correctly', () => {
      render(
        <StatCard
          title="COMPLIANT MARKETS"
          value={12}
          subtitle="Across EU, UK, and NAM"
          variant="success"
          icon={<span>✓</span>}
        />
      );

      expect(screen.getByText('COMPLIANT MARKETS')).toBeInTheDocument();
      expect(screen.getByText('12')).toBeInTheDocument();
      expect(screen.getByText('Across EU, UK, and NAM')).toBeInTheDocument();
    });

    it('renders upcoming deadlines card correctly', () => {
      render(
        <StatCard
          title="UPCOMING DEADLINES"
          value={5}
          subtitle="Action required in next 90 days"
          variant="warning"
          icon={<span>⏰</span>}
        />
      );

      expect(screen.getByText('UPCOMING DEADLINES')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(
        screen.getByText('Action required in next 90 days')
      ).toBeInTheDocument();
    });

    it('renders critical alerts card correctly', () => {
      render(
        <StatCard
          title="CRITICAL ALERTS"
          value={2}
          subtitle="New mandates in APAC region"
          variant="danger"
          icon={<span>⚠</span>}
        />
      );

      expect(screen.getByText('CRITICAL ALERTS')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(
        screen.getByText('New mandates in APAC region')
      ).toBeInTheDocument();
    });
  });
});
