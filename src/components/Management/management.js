import React, { useState } from 'react'
import Search from "../../assets/images/Search.svg";
import Filter from '../../assets/images/Filter.svg';
import '../Management/managementStyle.css'
import Data from './Data.js';
import Popup from './Popup.js';

  
export default function Management() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <section className='Filter'>
            <button onClick={toggleModal}><img src={Filter} />Lọc vé</button>
            <button>Xuất file </button>
        </section>
        {modal && (
            <Popup >
            </Popup>
        )}
            <Data />
    </div>
  );
}
