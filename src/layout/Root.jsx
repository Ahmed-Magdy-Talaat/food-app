import { Outlet } from 'react-router-dom'
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';
const Root = () => {

  // const menuItem = [
  //   {
  //     path: '/dashboard',
  //     name: "Dashboard",
  //     icon: <LuLayoutDashboard />
  //   },
  //   {
  //     path: "/analystic",
  //     name: "Analysitic",
  //     icon: <FiBookOpen />
  //   },
  //   {
  //     path: "/customer",
  //     name: "Customer",
  //     icon: <SlHandbag />
  //   },
  //   {
  //     path: "/message",
  //     name: "Message",
  //     icon: <TiMessages />
  //   },
  //   {
  //     path: "/setting",
  //     name: "Setting",
  //     icon: <FiSettings />
  //   },

  // ]

  return (
    <div className='d-flex main-div container'>
      <Sidebar/>
      <div fluid='md ' className="overflow-hidden">
      <Navbar/>
        <main className=' mt-2 mb-2'><Outlet /></main>
      </div>
    </div>
  )
}

export default Root