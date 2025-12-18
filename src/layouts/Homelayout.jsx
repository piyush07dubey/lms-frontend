import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Homelayout = ({ children }) => {

  function changeWidth() {
    const drawerside = document.getElementsByClassName("drawer-side")
    drawerside[0].style.width = "auto"
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle")
    element[0].checked = false
    const drawerside = document.getElementsByClassName("drawer-side")
    drawerside[0].style.width = "0"
  }

  return (
    <>
      <div className='min-h-[90vh]'>
        <div className='drawer absolute left-0 z-50 w-fit'>

          <input className='drawer-toggle' id='my-drawer' type="checkbox" />

          <div className='drawer-content'>
            <label htmlFor='my-drawer' className='cursor-pointer relative'>
              <FiMenu
                size={"32px"}
                onClick={changeWidth}
                className='font-bold text-white m-4'
              />
            </label>
          </div>

          {/* ✅ FIX: menu moved INSIDE drawer-side */}
          <div className="drawer-side w-0">
            <label htmlFor='my-drawer' className='drawer-overlay'></label>

            <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
              <li className='w-fit absolute right-2 z-50'>
                <button>
                  <AiFillCloseCircle
                    size={"24px"}
                    onClick={hideDrawer}
                    className='font-bold text-white m-4'
                  />
                </button>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

        </div>

        {children}
        <Footer />
      </div>
    </>
  )
}

export default Homelayout
