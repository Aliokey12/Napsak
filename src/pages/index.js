import Image from 'next/image';
import Head from 'next/head';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsQuestionCircle } from 'react-icons/bs';
import Modal from 'react-modal';
import Content from '../../component/Content';

import { MdPerson, MdEmail, MdSubject } from 'react-icons/md';



export default function Home() {
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

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  const renderMenu = () => {
    if (isMenuOpen) {
      return (
        <div className="menu " onClick={closeMenu}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return (
      <>
       <Head>
      <title>Napsak Biz</title>
      <meta name='description ' content='Generated by create next app'  />
      <link rel="icon" href="https://napsak.biz/img/amean_logo_main.png" />
    </Head>
    <header>
<div className="border-b-2">
        <div id="header" className="container mx-auto flex items-center justify-between h-32">
          <button onClick={toggleMenu} className='flex items-center gap-x-2 header-button'>
            <RxHamburgerMenu className='h-6 w-6'/>
          </button>

          <div id='logo' className='flex justify-center items-center ml-24 pl-2'>
            <a href="#">
              <img src="https://napsak.biz/img/amean_logo_main.png" alt="logo" className='w-24 h-auto  ' />
            </a>
          </div>

          <nav className="flex gap-x-8 text-sm font-semibold">
            <a href="https://www.youtube.com/channel/UCOecpeCWdkms2r9y6ASj4QA" target='_blank' className="flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100 social">
              <FaYoutube size={20} />
            </a>
            <a href="#" target='_blank' className="flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100 social">
              <BsTwitter size={20}/>
            </a>
            <a  href="https://www.instagram.com/ameandanismanlik/" target='_blank' className="flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100 social">
              <FaInstagram size={20}/>
            </a>
          </nav>
        </div>
      </div>
      {renderMenu()}
</header>
<Content/>


<footer className="bg-gray-800 pt-10 ">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Sol Taraf */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Logo */}
          <div className="text-white font-bold">
            <a className="text-xl tracking-wide" href="/">
              NAPSAK
            </a>
          </div>
          <p className="my-4 text-gray-400 text-sm">
            Canın sıkıldığında hızlı ve rastgele eğlenceli öneriler!
          </p>
          {/* Sosyal Medya Bağlantıları */}
          <div className="flex items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
        {/* Orta Taraf */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">Duyurular</div>
          <a href="#" className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            Yeni Öneriler Eklendi
          </a>
          <a href="#" className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            Yeni Kategoriler Eklendi
          </a>
          <a href="#" className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            lorem ipsum dolor
          </a>
          <a href="#" className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
          sit amet, consectetur adipiscing elit
          </a>
        </div>
        {/* Sağ Taraf */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">İletişim</div>
          <p className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            <span className="text-white mr-2">
              <i className="fa fa-map-marker"></i>
            </span>{" "}
            1234 Caddesi, No: 56/78, İstanbul, Turkey
          </p>
          <p className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            <span className="text-white mr-2">
              <i className="fa fa-envelope"></i>
            </span>{" "}
            info@napsak.com
          </p>
          <p className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
            <span className="text-white mr-2">
              <i className="fa fa-phone"></i>
            </span>{" "}
            +90 123 456 7890
          </p>
        </div>
</div>

</footer>
<footerr>
<div className='footer-container'>
      <h1 className='footer-text'>
        © 2021 AMEAN Danışmanlık | AMEAN A.Ş | Tüm Fikri Haklar AMEAN Danışmanlığa Aittir
      </h1>
      <button className='contact-button' onClick={handleOpenModal}>
        <BsQuestionCircle className='contact-icon' />
        İletişim
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel='İletişim Modal'
        style={customStyles}
      >
       
<div >
  <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
    <MdPerson className="inline-block mr-2 mb-1" />
    Ad Soyad
  </label>
  <input placeholder='Adınızı Ve Soyadınızı girin'
    type="text"
    name="name"
    id="name"
    className="form-input block w-96 shadow-sm border-gray-300 rounded-md"
  />
</div>
<div>
  <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
    <MdEmail className="inline-block mr-2 mb-1" />
    E-posta
  </label>
  <input placeholder='E-posta adresinizi girin'
    type="email"
    name="email"
    id="email"
    className="form-input block w-full shadow-sm border-gray-300 rounded-md"
  />
</div>
<div className="col-span-2">
  <label htmlFor="subject" className="block font-medium text-gray-700 mb-2">
    <MdSubject className="inline-block mr-2 mb-1" />
    Konu
  </label>
  <textarea placeholder='Bizle iletişime geçmenizi gerektiren konuyu yazın...'
    type="text"
    name="subject"
    id="subject"
    className="form-input block w-full shadow-sm border-gray-300 rounded-md"
  />
   <button id='modalhelp' type="submit" className="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Gönder
          </button>
</div>
      </Modal>
    </div>
</footerr>

    
    </>
  )
}
