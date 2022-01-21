import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    return (
        <div class="font-mono">
            <div class="flex flex-row">
                <div class="basis-1/4">
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
                    <Link href="/blog">
                        <a>
                            blog
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