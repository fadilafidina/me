import Link from "next/link";
import React, { useState } from "react";
// import Resume from '../public/Fadila Fidina Resume 2022 1.8.pdf'

export default function Navbar() {
    return (
        // <div className="px-4 sticky top-0 z-50 bg-[url('../public/images/bg1.jpg')]">
        <div className='grid justify-center'>
            <div className="px-4 pt-7 text-lg flex flex-row">
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <Link href="/">
                        <a>
                            🌸
                        </a>
                    </Link>
                </div>
                {/* <div className="px-8 hover:text-indigo-700 w-30"> */}
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <Link href="/about">
                        <a>
                            about ☁️
                        </a>
                    </Link>
                </div>
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <Link href="/projects">
                        <a>
                            projects 💻
                        </a>
                    </Link>
                </div>
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <Link href="/creative-stuff">
                        <a>
                            other stuff 🍕
                        </a>
                    </Link>
                </div>
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <a
                        href="Fadila Fidina Resume 2022 2.0.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                    >resume 📄</a>

                </div>
            </div>
        </div>
    )
}