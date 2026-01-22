import { useState } from 'react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { infoModalContent } from '../../constants/infoModalContent';

export default function ContentHub() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Content Hub"
        content={infoModalContent.contentHub}
      />
      <h1>
        Content Hub
        <InformationButton
          tooltip="Learn about this page"
          ariaLabel="Information about Content Hub"
          onClick={() => setShowInfo(true)}
        />
      </h1>
    </div>
  );
}
