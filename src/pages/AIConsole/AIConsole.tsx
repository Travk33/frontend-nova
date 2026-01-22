import { useState } from 'react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { InfoModal } from '../../components/features/common/InfoModal';
import { infoModalContent } from '../../constants/infoModalContent';

export default function AIConsole() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <InfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="AI Console"
        content={infoModalContent.aiConsole}
      />
      <h1>
        AI Console
        <InformationButton
          tooltip="Learn about this page"
          ariaLabel="Information about AI Console"
          onClick={() => setShowInfo(true)}
        />
      </h1>
    </div>
  );
}
