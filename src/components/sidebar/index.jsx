import { useState } from 'react'
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai'

function Sidebar({ isOpen, onClose }) {
    return (
        <div>
            <div className={`w-64 h-screen -translate-x-5 fixed bg-gray-800`}>
                <ul class="space-y-2 font-medium">
                    <li>
                        <div className='text-2xl p-10 text-center font-bold text-white cursor-pointer'>YohoSystem</div>
                    </li>
                    <li>
                        <a href="/dashboard" class="flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span class="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/cadastro" class="flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Entrada de Dados</span>
                        </a>
                    </li>
                    <li>
                        <a href="/produtos" class="flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Produtos</span>
                        </a>
                    </li>
                    <li>
                        <a href="/previsoes" class="flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Previsoes</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;


