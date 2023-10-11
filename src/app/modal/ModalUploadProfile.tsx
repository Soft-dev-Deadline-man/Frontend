import React from 'react';

interface ModalUploadProfileProps {
  visibles: boolean;
  onCloses: () => void;
}

const ModalUploadProfile: React.FC<ModalUploadProfileProps> = ({ visibles, onCloses }) => {
  if (!visibles) return null;

    const Exit = "https://cdn.pic.in.th/file/picinth/Vector04a37f88069b4510.png";
    const handleUpload = async () => {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;

    if (input && input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('image', input.files[0]);

      try {
        const response = await fetch('YOUR_UPLOAD_URL', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Upload successful');
        } else {
          console.error('Upload failed');
        }
      } catch (error) {
        console.error('Error uploading:', error);
      }
    }
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30">
      <div className="rounded-lg w-2/6 mx-auto mb-16 bg-gray-100 h-128 mb-5">
        <div className="flex justify-end me-4 mt-4">
          <button onClick={onCloses}>
            <img src={Exit}></img>
          </button>
        </div>
        <div className='flex justify-center items-center text-gray-500 mb-8'>
          Choose your file.
        </div>
        <div className="flex mx-auto w-24 h-10 mb-8 rounded border-2 border-gray-400">
          <button onClick={handleUpload} className='mx-auto text-gray-500'>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default ModalUploadProfile;
