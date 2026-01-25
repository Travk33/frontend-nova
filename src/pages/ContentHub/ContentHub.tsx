import { useState } from 'react';
import { Upload } from 'lucide-react';
import { InformationButton } from '../../components/common/InformationButton/InformationButton';
import { Button } from '../../components/common/Button/Button';
import { UploadDocumentModal } from '../../components/common/UploadDocumentModal/UploadDocumentModal';
import type { DocumentFormData } from '../../components/common/UploadDocumentModal/UploadDocumentModal.types';
import './ContentHub.css';

export default function ContentHub() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  /**
   * Handle document upload submission
   */
  const handleUpload = (file: File, formData: DocumentFormData) => {
    // TODO: Implement actual upload logic (API call)
    console.log('Uploading document:', { file, formData });
    alert(`Document "${formData.title}" uploaded successfully!`);
  };

  return (
    <div className="content-hub">
      <div className="content-hub__header">
        <div className="content-hub__header-left">
          <h2 className="content-hub__heading">
            Content Hub
            <InformationButton
              tooltip="More information"
              ariaLabel="Information"
            />
          </h2>
          <p className="content-hub__subheading">
            Central repository for all your global market intelligence documents
          </p>
        </div>
        <div className="content-hub__header-right">
          <Button
            text="Upload Document"
            icon={<Upload size={16} />}
            variant="primary"
            onClick={() => setIsUploadModalOpen(true)}
          />
        </div>
      </div>

      {/* Upload Document Modal */}
      <UploadDocumentModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
        defaultAuthor="Current User"
      />
    </div>
  );
}
