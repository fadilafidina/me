import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div className="font-mono flex flex-row justify-items-center content-center text-center">
                <div className="basis-1/4 text-indigo-600">
                    <Link href="/">
                        <a>
                            fadila fidina
                        </a>
                    </Link>
                </div>
                <div className="basis-1/4">
                    <Link href="/about">
                        <a>
                            about
                        </a>
                    </Link>
                </div>
                <div className="basis-1/4">
                    <Link href="/projects">
                        <a>
                            projects
                        </a>
                    </Link>
                </div>

                <div className="basis-1/4">
                    <Link href="/creative-stuff">
                        <a>
                            creative stuff
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}