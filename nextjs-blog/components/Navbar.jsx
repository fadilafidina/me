import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className='grid justify-center'>
            <div className="px-4 pt-7 text-lg flex flex-row">
                <div className="text-center px-8 w-48 hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-wavy">
                    <Link href="/">
                        <a>
                            fadila fidina 🌸
                        </a>
                    </Link>
                </div>
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