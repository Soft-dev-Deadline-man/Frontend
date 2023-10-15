import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ModalUploadProfileProps {
  visibles: boolean;
  onClose: () => void;
  onUpload: (image: File) => void;
}

const ModalUploadProfile: React.FC<ModalUploadProfileProps> = ({ visibles, onClose, onUpload }) => {
  if (!visibles) return null;

  const addImage = useRef<HTMLInputElement>(null);
  const Exit = "https://cdn.pic.in.th/file/picinth/Vector04a37f88069b4510.png";

  const handleUpload = async () => {
    if (addImage.current && addImage.current.files) {
      const image = addImage.current.files[0];
      onUpload(image); // เรียกใช้ prop onUpload ด้วยรูปที่เลือก
      onClose(); // ปิด modal หลังจากอัปโหลด
    }
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30">
      <div className="rounded-lg w-2/6 mx-auto mb-16 bg-gray-100 h-128 mb-5">
        <div className="flex justify-end me-4 mt-4">
          <button onClick={onClose}>
            <img src={Exit}/>
          </button>
        </div>
        <div className='flex justify-center items-center text-gray-500 mb-8'>
          <input
            type="file"
            accept="image/*"
            ref={addImage}
            style={{ display: 'none' }}
            onChange={handleUpload}
          />
          Choose the image file you want.
        </div>
        <div className="flex mx-auto w-24 h-10 mb-8 rounded border-2 border-gray-400">
          <button onClick={() => addImage.current?.click()} className='mx-auto text-gray-500'>Choose file</button>
        </div>
      </div>
    </div>
  );
};

export default ModalUploadProfile;
