import React from 'react'
import  { useState } from 'react';
import { BsTwitter, BsQuestionCircle  } from 'react-icons/bs';
import Modal from 'react-modal';
import { AiFillHeart } from "react-icons/ai";
import { MdPerson, MdEmail, MdSubject } from 'react-icons/md';
import Help from './Help';

function Content(props) {

  const getRecommendation = async () => {
    const res = await fetch('https://www.boredapi.com/api/activity/');
    const data = await res.json();
    return data.activity;
  };
  


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
    <div className="bg-gray-100 ">
  <div className="container mx-auto px-4  py-12 ">
    <div className="flex justify-center items-center ">
      <h1  id='canın' className="text-3xl  font-bold text-gray-800 ">
        Canın sıkıldığında hızlı ve rastgele eğlenceli öneriler!
      </h1>
    </div>
    <div className="flex justify-center items-center mt-20 mb-28">
  <button id='napsak'  >
  <i className="fas fa-heart"></i>

  <h1>¿NAPSAK?</h1>
  </button>
</div>

<Help/>


  </div>
</div>

    </div>
  )
}

export default Content
