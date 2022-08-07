import React from 'react'
import Search from "../../assets/images/Search.svg";
import Filter from '../../assets/images/Filter.svg';
import '../Management/managementStyle.css'
import Data from './Data.js';
  
export default function management() {
  return (
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
        
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <ul className='Filter'>
            <li><button><img src={Filter} />Lọc vé</button></li>
            <li><button>Xuất file </button></li>
        </ul>
            <Data />
    </div>
  )
}
