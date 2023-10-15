import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import ModalDeleteReview from '../modal/ModalDeleteReview';

interface ModalEditProps {
  visible: boolean;
  onClose: () => void;
}

const ModalEditReview: React.FC<ModalEditProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClose  = ()=>setIsVisible(false);
  const Exit = "https://cdn.pic.in.th/file/picinth/Vector04a37f88069b4510.png";

  return (
    <div>
      {!isVisible ? 
      <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30'>
        <div className="rounded-lg w-1/2 sm:w-2/6 mx-auto mb-16 bg-gray-100 h-128 mb-5">
          <div className="flex justify-end mt-4 me-6">
              <button onClick={onClose}>
                <img src={Exit}></img>
              </button>
          </div>
          <div className='flex text-xl ms-3 sm:ms-12 mb-4'>My Review</div>
          <div className='flex justify-center'>
            <div className='flex flex-col'>
                <button onClick={()=>router.push('/reviewEdit')} className='py-1 rounded mb-4 text-xl text-gray-500 border-2 border-gray-400'>Edit</button>
                <button onClick={()=>router.push('/reviewAddImage')} className='sm:px-10 py-1 rounded mb-4 text-xl text-gray-500 border-2 border-gray-400'>Add Image</button>
                <button onClick={()=>setIsVisible(true)} className='py-1 rounded mb-8 text-xl text-gray-500 border-2 border-gray-400'>Delete</button>
            </div>
          </div>
        </div>
      </div> : <ModalDeleteReview onClose={handleOnClose} visible={isVisible} />}
    </div>
  )
}

export default ModalEditReview;
