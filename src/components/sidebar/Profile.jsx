import React,{useState} from 'react'
import Container from '../Container'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { CircleUser, LandmarkIcon, LayoutDashboard, Pen, ShoppingBag } from 'lucide-react'
import control from '../../assets/control.png'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'

const sidebar = [{

    to:'/profile/personal-information',
    icon:<CircleUser/>,
    name:'User Data'

},{

    to:'/profile/personal-information',
    icon:<CircleUser/>,
    name:'User Data'

}]

function PersonalDetails() {


  const [showSide, setShowSide] = useState(false)
  const [open, setOpen] = useState(true);

  const user = localStorage.getItem("user")
  const username = JSON.parse(user)
 
  const Menus = [
  { title: "Personal Information", src: <CircleUser/> , to:'' },
  { title: "My Orders", src: <ShoppingBag/> , to:'my-orders'},
  { title: "Manage Address", src: <LandmarkIcon/> , to:'manage-address' },
  ];

  return (

    <Container>

    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white text-black p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
            className={`cursor-pointer duration-500 h-[50px] w-[60px]   ${
              open && "rotate-[360deg] "
            }`}
          />
          <h1
            className={`text-black  origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          {username && username.username}
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink to={Menu.to}  >
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-black hover:text-white  text-black  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } 
              
              
              `}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className=" h-auto flex-1 p-7">
        <Outlet/>
      </div>
    </div>
  
</Container>

   

  );
}

export default PersonalDetails