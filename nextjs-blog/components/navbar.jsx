import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    return (
            <div className="flex items-center justify-center">

                    <div className="px-8 hover:text-indigo-800 w-30">
                        <Link href="/">
                            <a>
                                ffs
                            </a>
                        </Link>
                    </div>
                        <div className="px-8 hover:text-indigo-800 w-30">
                            <Link href="/about">
                                <a>
                                    about
                                </a>
                            </Link>
                        </div>
                        <div className="px-8 hover:text-indigo-800 w-30">
                            <Link href="/projects">
                                <a>
                                    projects
                                </a>
                            </Link>
                        </div>
                        <div className="px-8 hover:text-indigo-800 w-30">
                            <Link href="/creative-stuff">
                                <a>
                                    other stuff
                                </a>
                            </Link>
                        </div>
                </div>
)
}