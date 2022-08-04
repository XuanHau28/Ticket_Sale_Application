import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import '../Home/HomeStyle.css';
import icon1 from "../../assets/images/Vector.svg";
import icon2 from "../../assets/images/Vector2.svg";
import icon3 from "../../assets/images/Vector3.svg";
import icon4 from "../../assets/images/Vector4.svg";

export default function menu() {

  return (
    <div className="Menu">
      <nav>
        <img className='Logo' src={logo} alt="Logo"/>
        <ul>
          <li className='active'>
            <NavLink to="/" >
              <img className="icon" src={icon1} />
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/management"  >
              <img className="icon" src={icon2} />
                Quản lý vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-ticket" >
              <img className="icon" src={icon3} />
                Đối soát vé
            </NavLink>
          </li>
          <li style={{opacity:0.6}}>
              <img className="icon" src={icon4}/>
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
