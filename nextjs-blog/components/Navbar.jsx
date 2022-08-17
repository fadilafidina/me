import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    const useNewNavBar = true; // imaginary feature flag :~)

    if (useNewNavBar) {
        return (

            <nav class='bg-slate-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
                <div class='container flex flex-wrap justify-between items-center mx-auto'>
                    <Link href='/' class='flex items-center'>
                        <span class='self-center text-base font-semibold whitespace-nowrap dark:text-white'>Fadila Fidina 💫</span>
                    </Link>
                    <button data-toggle='navbar' data-bs-target="#navbar" data-bs-toggle='colapse' type='button' class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
                        <span class='sr-only'>Open main menu</span>
                        <svg class='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
                    </button>
                    <div class='colapse hidden w-full md:block md:w-auto' id='navbar'>
                        <ul class='flex flex-col p-4 mt-4 
                        rounded-lg border border-gray-100 
                        md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                <Link href='/'>
                                    home 🌸
                                </Link>
                            </li>
                            <li class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                <Link href='/about'>
                                    about ☁️
                                </Link>
                            </li>
                            <li class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                <Link href='/projects'>
                                    projects 💻
                                </Link>
                            </li>
                            <li class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                <Link href='/stalk'>
                                    stalk me 😼
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
    return (
        <div className='grid justify-center'>
            <div className='px-4 pt-7 text-lg flex flex-row'>
                <div className='text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy'>
                    <Link href='/'>
                        <a>
                            fadila fidina 🌸
                        </a>
                    </Link>
                </div>
                <div className='text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy'>
                    <Link href='/about'>
                        <a>
                            about ☁️
                        </a>
                    </Link>
                </div>
                <div className='text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy'>
                    <Link href='/projects'>
                        <a>
                            projects 💻
                        </a>
                    </Link>
                </div>
                <div className='text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy'>
                    <Link href='/stalk'>
                        <a>
                            stalk me 😼
                        </a>
                    </Link>
                </div>
                {/* <div className='text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy'>
                    <a
                        href='Fadila Fidina Resume 2022 2.0.pdf'
                        alt='alt text'
                        target='_blank'
                        rel='noopener noreferrer'
                    >resume 📄</a>

                </div> */}
            </div>
        </div>
    )
}