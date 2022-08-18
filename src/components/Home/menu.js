import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import '../Home/HomeStyle.css';
import HomeIcon from "../../assets/images/Vector.svg";
import ManagementIcon from "../../assets/images/Vector2.svg";
import Check from "../../assets/images/Vector3.svg";
import Setting from "../../assets/images/Vector4.svg";
import EventList from '../../assets/images/event.svg'

export default function menu() {

  return (
    <div className="Menu">
      <nav>
        <img className='Logo' src={logo} alt="Logo"/>
        <ul>
          <li className='active'>
            <NavLink to="/" >
              <img className="icon" src={HomeIcon} />
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/management"  >
              <img className="icon" src={ManagementIcon} />
                Quản lý vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-ticket" >
              <img className="icon" src={Check} />
                Đối soát vé
            </NavLink>
          </li>
          <li style={{opacity:0.6}}>
              <img className="icon" src={Setting}/>
            Cài đặt
          </li>
          <ul>
            <li>
            <NavLink to="/services" >
              Gói dịch vụ
            </NavLink>
            </li>
          </ul>
        </ul>
        </nav>
        </div>
  )
}
