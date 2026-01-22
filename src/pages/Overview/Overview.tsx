import { useState } from 'react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { infoModalContent } from '../../constants/infoModalContent';

export default function Overview() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Overview Dashboard"
        content={infoModalContent.overview}
      />
      <h2>
        Overview
        <InformationButton
          tooltip="Learn about this page"
          ariaLabel="Information about Overview Dashboard"
          onClick={() => setShowInfo(true)}
        />
      </h2>
    </div>
  );
}
