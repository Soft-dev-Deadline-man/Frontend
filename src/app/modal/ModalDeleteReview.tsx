import React from 'react';

interface ModalEditProps {
  visible: boolean;
  onClose: () => void;
}

const ModalDeleteReview: React.FC<ModalEditProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleDelete = () => {
  }

  return (
    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30'>
      <div className="rounded-lg w-2/6 mx-auto mb-16 bg-gray-100 h-128 mb-5">
        <div className='flex mt-8 mb-8 text-xl justify-center'>Are you sure to delete your review ?</div>
        <div className='flex justify-center'>
            <div className='flex space-x-8'>
                <button onClick={handleDelete} className='w-24 h-10 rounded mb-4 text-white border-2 bg-[#276968]'>Yes</button>
                <button onClick={onClose} className='w-24 h-10 rounded mb-4 text-white border-2 bg-[#276968]'>Cancle</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDeleteReview;
