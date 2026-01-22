import { useState } from 'react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { infoModalContent } from '../../constants/infoModalContent';

export default function RegulatoryRadar() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Regulatory Radar"
        content={infoModalContent.regulatoryRadar}
      />
      <h1>
        Regulatory Radar
        <InformationButton
          tooltip="Learn about this page"
          ariaLabel="Information about Regulatory Radar"
          onClick={() => setShowInfo(true)}
        />
      </h1>
    </div>
  );
}
