import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';

interface FormData {
  name: string;
  email: string;
  password: string;
  bio: string;
}

interface ModalEditProps {
  visible: boolean;
  onClose: () => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const Exit = "https://cdn.pic.in.th/file/picinth/Vector04a37f88069b4510.png";
  const handleSubmit = async (values: FormData, actions: FormikHelpers<FormData>) => {
    try {
      const response = await fetch('https://example.com/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log('Response from server:', data);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data. Please try again later.');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30'>
      <div className="rounded-3xl w-5/6 mx-auto mb-16 border-2 border-[#276968] bg-gray-100 h-128 mb-5">
        <div className="flex justify-end me-8 mt-8">
            <button onClick={onClose}>
              <img src={Exit}></img>
            </button>
        </div>
        <Formik
          initialValues={{
            name: 'Tommy',
            email: 'tommychalon@gmail.com',
            password: '********',
            bio: 'Lorem ipsum dolor sit amet...'
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col mr-auto p-8">
              <a className="text-gray-500 mb-1">Name</a>
              <Field name="name" type="text" className="text-lg mb-4" />

              <a className="text-gray-500 mb-1">Email</a>
              <Field name="email" type="email" className="text-lg mb-4" />

              <a className="text-gray-500 mb-1">Password</a>
              <Field name="password" type="password" className="text-lg mb-4" />

              <a className="text-gray-500 mb-1">Bio</a>
              <Field name="bio" as="textarea" className="text-gray-500 p-7" />
            </div>
            <div className="flex justify-center py-4">
                <button type="submit" className="rounded-lg bg-[#276968] text-white w-96 h-12 py-auto">Save</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ModalEdit;
