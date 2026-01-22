import { useState } from 'react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { infoModalContent } from '../../constants/infoModalContent';

export default function MarketPulse() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Market Pulse"
        content={infoModalContent.marketPulse}
      />
      <h1>
        Market Pulse
        <InformationButton
          tooltip="Learn about this page"
          ariaLabel="Information about Market Pulse"
          onClick={() => setShowInfo(true)}
        />
      </h1>
    </div>
  );
}
