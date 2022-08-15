import React from 'react';
import Search from "../../assets/images/Search.svg";
import '../Services/servicesStyle.css';
export default function services() {
  return (
    <div className='services'>
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách gói vé</h1>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <section className='check'>
        <button>Xuất file</button>
        <button>Thêm gói vé </button>
        </section>
    </div>
    </div>
  )
}
