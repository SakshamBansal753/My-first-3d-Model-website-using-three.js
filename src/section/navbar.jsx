import React, { useState } from 'react'


const Navbar  = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    const Navitems=()=>{
        return(<ul className='nav-ul'>
            


        </ul>
        )
    }
  return (
    <header className='fixed  top-0  left-0 right-0 z-50 '  >
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space  '>
                <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors  '>
                saksham</a>
                <button onClick={toggleMenu} className='text-neutral-400 mr-0 hover:text-white focus:outline-none    flex '>
                <i className={`fa-solid ${isOpen ? "fa-x" : "fa-ellipsis-vertical"}`}></i>
               
                </button>
             <ul className={`absolute right-12 mr-30 mt-38 bg-black text-white rounded-md   list-none ${isOpen?"block":"hidden"}`}>
                <li className=' list-disc shadow-none hover:bg-gray-700  cursor-pointer rounded-md  hover:shadow-[21px_4px_10px_rgba(0,0,255,0.5)]'>Home</li>
                <li className='  list-disc shadow-none hover:bg-gray-700  cursor-pointer rounded-md  hover:shadow-[21px_4px_10px_rgba(0,0,255,0.5)]'>Contact</li>
                <li className='   list-disc shadow-none hover:bg-gray-700  cursor-pointer rounded-md  hover:shadow-[21px_4px_10px_rgba(0,0,255,0.5)]'>Skills</li>
                <li className='  list-disc shadow-none hover:bg-gray-700  cursor-pointer rounded-md  hover:shadow-[21px_4px_10px_rgba(0,0,255,0.5)]'>NICE </li>
             </ul>
            </div>

        </div>
    </header>
   
  )
}

export default Navbar