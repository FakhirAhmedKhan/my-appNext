

import React from 'react'

export const FooterInput = () => {
    return (
        <form >
            <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-lg border border-neutral-600 bg-neutral-900/80 px-4 py-4 text-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
                id="footer-email"
                name="footer-email"
            />
{/* 
            {status === "success" && (
                <div className=" flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-400"
                >
                    We will Connect
                </div>
            )
            } */}
            <p className="mx-auto max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-neutral-400"
            >
                Built with 💖 using React & Tailwind CSS.
            </p>
        </form >
    )
}

