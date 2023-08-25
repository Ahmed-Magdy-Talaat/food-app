import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { FiBookOpen } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import logo from '../../assets/logo.png'
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className={`sidebar-div ${sidebarOpen ? "sidebar-open" : "sidebar-close"
        } shadow bg-body-tertiary rounded`}
    >
      <div>
      <div className="logo" style={{ display: sidebarOpen ? "block" : "none" }}>
        <img src={logo} alt='logo' className='pb-3'/> <br /> Food Delivery
      </div >
        <Link to="/ " className='mt-4'>
          <LuLayoutDashboard /> <p>Dashboard</p>
        </Link>
        <Link to="/analystic">
          <FiBookOpen /> <p>Analysitic</p>
        </Link>
        <Link to="/customer ">
          <SlHandbag /> <p>Customer </p>
        </Link>
        <Link to="/message">
          <TiMessages />
          <p>Message </p>
        </Link>
        <Link to="/setting">
          <FiSettings />
          <p>Setting </p>
        </Link>
      </div>
      <div>

        <Link to="/logout">
          <BiLogOutCircle /> <p>Log out</p>
        </Link>
        <div
          style={{ marginLeft: "auto" }}
          onClick={() => setSidebarOpen((pre) => !pre)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

    </div>
  )
}

export default Sidebar