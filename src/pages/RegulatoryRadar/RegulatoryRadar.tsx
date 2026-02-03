import { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  CheckCircle,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { StatCard } from '../../components/common';
import { infoModalContent } from '../../constants/infoModalContent';
import './RegulatoryRadar.css';

// Mock data - in a real app this would come from an API
const REGULATORY_STATS = {
  compliantMarkets: {
    title: 'COMPLIANT MARKETS',
    value: 12,
    subtitle: 'Across EU, UK, and NAM',
  },
  upcomingDeadlines: {
    title: 'UPCOMING DEADLINES',
    value: 5,
    subtitle: 'Action required in next 90 days',
  },
  criticalAlerts: {
    title: 'CRITICAL ALERTS',
    value: 2,
    subtitle: 'New mandates in APAC region',
  },
};

export default function RegulatoryRadar() {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // In a real app, this data would come from props or an API
  const stats = REGULATORY_STATS;

  const handleStatCardClick = (statType: string) => {
    console.log(`Clicked on ${statType} stat card`);
    // TODO: Navigate to detailed view or open modal
  };

  return (
    <div className="regulatory-radar">
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Regulatory Radar"
        content={infoModalContent.regulatoryRadar}
      />

      {/* Header section */}
      <header className="regulatory-radar__header">
        <div className="regulatory-radar__header-left">
          <h2 className="regulatory-radar__heading">
            Regulatory Radar
            <InformationButton
              tooltip="Learn about this page"
              ariaLabel="Information about Regulatory Radar"
              onClick={() => setShowInfo(true)}
            />
          </h2>
          <p className="regulatory-radar__subheading">
            Track, monitor, and prepare for global compliance changes.
          </p>
        </div>

        {/* Search bar */}
        <div className="regulatory-radar__search-wrapper">
          <div className="regulatory-radar__search-bar">
            <Search size={18} className="regulatory-radar__search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search regulations..."
              className="regulatory-radar__search-input"
            />
          </div>
          <button className="regulatory-radar__filter-btn" aria-label="Filter">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </header>

      {/* Stats cards grid */}
      <div className="regulatory-radar__stats-grid">
        <StatCard
          title={stats.compliantMarkets.title}
          value={stats.compliantMarkets.value}
          subtitle={stats.compliantMarkets.subtitle}
          variant="success"
          icon={<CheckCircle size={18} />}
          onClick={() => handleStatCardClick('compliantMarkets')}
          testId="stat-compliant-markets"
        />
        <StatCard
          title={stats.upcomingDeadlines.title}
          value={stats.upcomingDeadlines.value}
          subtitle={stats.upcomingDeadlines.subtitle}
          variant="warning"
          icon={<Clock size={18} />}
          onClick={() => handleStatCardClick('upcomingDeadlines')}
          testId="stat-upcoming-deadlines"
        />
        <StatCard
          title={stats.criticalAlerts.title}
          value={stats.criticalAlerts.value}
          subtitle={stats.criticalAlerts.subtitle}
          variant="danger"
          icon={<AlertTriangle size={18} />}
          onClick={() => handleStatCardClick('criticalAlerts')}
          testId="stat-critical-alerts"
        />
      </div>

      {/* Placeholder for future content */}
      <div className="regulatory-radar__content">
        {/* Regulations list, timeline, or other content will go here */}
      </div>
    </div>
  );
}
