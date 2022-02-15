import Link from "next/link";
import React, { useState } from "react";
// import Resume from '../public/Fadila Fidina Resume 2022 1.8.pdf'

export default function Navbar() {
    return (
        // <div className="px-4 sticky top-0 z-50 bg-[url('../public/images/bg1.jpg')]">
        <div className="font-mono px-4 pt-7 text-lg">
            <div className="px-8 text-indigo-700 hover:text-black w-30">
                <Link href="/">
                    <a>
                        ffs
                    </a>
                </Link>
            </div>
            <div className="px-8 hover:text-indigo-700 w-30">
                <Link href="/about">
                    <a>
                        about 🌸
                    </a>
                </Link>
            </div>
            <div className="px-8 hover:text-indigo-700 w-30">
                <Link href="/projects">
                    <a>
                        projects 💻
                    </a>
                </Link>
            </div>
            <div className="px-8 hover:text-indigo-700 w-30">
                <Link href="/creative-stuff">
                    <a>
                        other stuff 🍕
                    </a>
                </Link>
            </div>
            <div className="px-8 hover:text-indigo-700 w-30">
                <a
                    href="Fadila Fidina Resume 2022 2.0.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                >resume 📄</a>

            </div>
        </div>
    )
}