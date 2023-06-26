import { useState } from 'react'
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai'

function Sidebar({isOpen, onClose}) {
    return (
        <div>
            <div className={`w-64 h-screen -translate-x-64 fixed bg-gray-800 ${isOpen ? 'translate-x-0' : ''}`}>
                <ul className='space-y-2 font-medium'>
                    <li className='px-5 py-5 text-left rounded-md flex'>
                        <a href="/" className='flex items-center p-5 text-gray-900 rounded-lg px-10 dark:text-white dark:hover:bg-gray-700'>
                            <svg aria-hidden="true" className="mt-2 mr-4 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className='text-lg'>Home</span>
                        </a>
                    </li>
                    <li className='px-5 py-5 text-left rounded-md flex'>
                        <a href="/cadastro" className='flex items-center p-5 text-gray-900 rounded-lg px-10 dark:text-white dark:hover:bg-gray-700'>
                            <svg aria-hidden="true" className="mt-2 mr-4 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className='text-lg'>Cadastro</span>
                        </a>
                    </li>
                    <li className='px-5 py-5 text-left rounded-md flex'>
                        <a href="/dashboard" className='flex items-center p-5 text-gray-900 rounded-lg px-10 dark:text-white dark:hover:bg-gray-700'>
                            <svg aria-hidden="true" className="mt-2 mr-4 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className='text-lg'>Dashboard</span>
                        </a>
                    </li>
                    <li className='px-5 py-5 text-left rounded-md flex'>
                        <a href="/produtos" className='flex items-center p-5 text-gray-900 rounded-lg px-10 dark:text-white dark:hover:bg-gray-700'>
                            <svg aria-hidden="true" className="mt-2 mr-4 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className='text-lg'>Produtos</span>
                        </a>
                    </li>
                    <li className='rounded-md flex justify-center hover:bg-gray-700 m-5'>
                        <button className='px-5 py-5 text-2xl text-white' onClick={onClose}>X</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;