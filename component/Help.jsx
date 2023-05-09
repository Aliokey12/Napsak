import React from 'react'
import  { useState } from 'react';
import { BsTwitter, BsQuestionCircle  } from 'react-icons/bs';
import Modal from 'react-modal';
import { MdPerson, MdEmail, MdSubject } from 'react-icons/md';

function Help() {

     const customStyles = {
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      
        
        const [modalIsOpen, setModalIsOpen] = useState(false);
 
   const openModal = () => {
     setModalIsOpen(true);
   };
 
   const closeModal = () => {
     setModalIsOpen(false);
   };
  return (
    <div>
        <button className='help ' onClick={openModal}>
      <BsQuestionCircle className='contact-icon' />
      Sizce ¿NAPSAK?
    </button>
    <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel='İletişim Modal'
  style={customStyles}
>
  <div className="container mx-auto py-12 ">
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Öneri</h2>
      <form className="grid grid-cols-2 gap-4">
        <div>
          
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2 w-96">
          <MdPerson className="inline-block mr-2 mb-1" />

            Ad Soyad</label>
          
          <input type="text" name="name" id="name" className="form-input block w-full rounded-md  border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="Adınız ve Soyadınızı girin" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          <MdEmail className="inline-block mr-2 mb-1" />

            E-posta</label>
          <input type="email" name="email" id="email" className="form-input block w-full rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="E-posta adresinizi girin" />
        </div>
        <div className="col-span-2">
          <label id='' htmlFor="message" className="block font-medium text-gray-700 mb-2 text-center">

            Öneri</label> 
          <textarea name="message" id="message" rows="4" className="form-textarea block w-full rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="Önerinizi yazın"></textarea>
        </div>
        <div className="col-span-2">
          <button id='modalhelp' type="submit" className="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Gönder
          </button>
        </div>
      </form>
    </div>
  </div>

</Modal>
    </div>
  )
}

export default Help
