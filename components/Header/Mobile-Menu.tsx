    "use client";
    import React from 'react'
    import { useState } from 'react';
    import Link from 'next/link';

    export default function MobileMenu({ items }: { items: { title: string; slag: string }[] }) {
        const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className='md:hidden'>
            <button className="btn btn-square btn-ghost" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current" onClick={() => setIsOpen(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                )}
            </button>

            {isOpen && (
                <ul className="absolute z-10 left-0 right-0 w-full top-16 bg-base-100 p-2">
                    {items.map((item) => (
                        <li key={item.title}>
                            <Link href={item.slag} onClick={() => setIsOpen(false)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
    }
