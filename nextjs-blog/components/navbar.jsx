import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="font-mono">
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <Link href="/">
                        <a>
                            home
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="/about">
                        <a>
                            about
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/projects">
                        <a>
                            projects
                        </a>
                    </Link>
                </div>

                <div>
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