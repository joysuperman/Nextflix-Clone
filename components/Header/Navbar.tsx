"use client";
import  Link  from 'next/link'
import Image from 'next/image'
import { Bell, Search } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import MobileMenu from './Mobile-Menu';

const NavItem =[
    {title: 'Home', slag: "/"},
    {title: 'Movies', slag: "/movies"},
    {title: 'Tv Shows', slag: "/tvshows"},
    {title: 'Latest', slag: "/latest"},
]

export default function Navbar() {
    return (
        <nav className="bg-transparent shadow-sm">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="flex-none">
                        <Link href={"/"}>
                            <Image
                                src="/Netflix_Logo_RGB.png"
                                alt="Logo"
                                width={150}
                                height={80}
                            />
                        </Link>
                    </div>

                    <div className="flex-1 flex items-center justify-between">
                        {/* Mobile Menu */}
                        <div className="menu menu-horizontal px-1 md:hidden">
                            {<MobileMenu items={NavItem}/>}
                        </div>
                        {/* Desktop Menu */}
                        <ul className="menu md:menu-horizontal px-1 hidden">
                            {NavItem.map((item) => (
                                <li key={item.title}>
                                    <Link href={item.slag}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Search, Kids, Notifications, User Button */}
                        <div className='menu menu-horizontal items-center'>
                            <Search className="hidden md:inline h-6 w-6 px-1 cursor-pointer" />
                            <p className="hidden md:inline test-sm px-1 cursor-pointer">Kids</p>
                            <Bell className="h-6 w-6 px-1 cursor-pointer" />
                            <Link href={"/account"} className="px-1 cursor-pointer">
                                <UserButton />
                                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}