'use client'
import Link from "next/link"
import { useState } from "react";
import Image from "next/image"
import { FaWhatsapp, FaChevronDown, FaChevronUp, FaToggleOn } from 'react-icons/fa'
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const links = [
        { name: 'Home', path: '/', subLinks: [] },
        {name: 'Solutions',path: '/solutions',
            subLinks: [
                { name: "Manufacturing ERP", path: '/solutions/manufacturing-erp' },
                { name: "Distribution ERP Software", path: '/solutions/distribution-erp' },
                { name: "Web Development", path: '/solutions/web-development' },
                { name: "Digital Marketing", path: '/solutions/digital-marketing' },
                { name: "SEO Services", path: '/solutions/seo-services' },
                
            ]
        },
        {
            name: 'Modules', path: '/modules', 
            subLinks: [
                        {
                            name: 'Accounts',
                            path: '/modules/accounts',
                        },
                        {
                            name: 'Human Resource',
                            path: '/modules/human-resource'
                        },
                        {
                            name: 'Supply Chain Module',
                            path: '/modules/supply-chain'
                        },
                        {
                            name: 'Sales & Merchandizing',
                            path: '/modules/sales-merchandizing'
                        },
                        {
                            name: 'Work in Progress',
                            path: '/modules/wip'
                        },
                        {
                            name: 'Production',
                            path: '/modules/production'
                        },
                        {
                            name: 'Dashboard',
                            path: '/modules/dashboard'
                        },
                        {
                            name: 'Support',
                            path: '/modules/support'
                        },
            ]
        },
        { name: 'Services', path: '/services', 
            subLinks: [

            ] },
        {
            name: 'Resources', path: '/resources', 
            subLinks: [
                { name: "Blogs", path: '/resources/blogs' },
                { name: "Case Studies", path: '/resources/case-studies' },
                { name: "Client Stories", path: '/resources/client-stories' },
                { name: "Integration", path: '/resources/integration' },
            ]
        },
        { name: 'About Us', path: '/about-us', 
            subLinks: [

            ] },
        { name: 'Contact Us', path: '/contact-us',
             subLinks: [
                
             ] },
    ]

    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(false);

    const sendMessage = ()=>{
        redirect(`https://wa.me/+923004919926?text=${message}`)
    }

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.getElementById('navbar-toggler-icon').style.transform = mobileMenuOpen ? 'rotate(0deg)' : 'rotate(90deg)';
    }
    return (
        <header className="sticky-top bg-light navBar shadow-sm">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between py-0">
                    {/* Logo */}
                    <Link href="/" className="navbar-brand">
                        <Image
                            src="/logo.png"
                            height={150}
                            width={150}
                            alt="Company Logo"
                            className="img-fluid"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="d-none d-lg-block">
                        <div className="me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            {links.map((link, index) => (
                                <div
                                    key={index}
                                    className="nav-item position-relative mx-2"
                                    onMouseEnter={() => link.subLinks.length > 0 && setActiveSubmenu(index)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    <div className="d-flex align-items-center">
                                        <Link
                                            className={`text-decoration-none fw-medium px-3 py-2 text-nowrap ${pathname === link.path ? 'nav-active' : 'nav-link-dark'}`}
                                            href={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subLinks.length > 0 ? (
                                            <span className="ms-1 text-dark">
                                                {activeSubmenu === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </span>

                                        ) : ""}
                                    </div>

                                    {link.subLinks.length > 0 && activeSubmenu === index && (
                                        <div className="position-absolute bg-white p-3 rounded shadow-lg mt-0"
                                            style={{ minWidth: '220px', zIndex: 1000 }}>
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    className={`dropdown-item subLink d-block px-3 py-2 rounded text-nowrap ${pathname === subLink.path ? 'text-highlight' : 'text-dark'}`}
                                                    href={subLink.path}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="navbar shadow-sm p-2 d-lg-none border-0 d-flex align-items-center"
                        onClick={handleMobileMenuToggle}
                    >
                        <span className="navbar-toggler-icon text-secondary" id='navbar-toggler-icon'></span>
                    </button>

                    {/* CTA Buttons */}
                    <div className="d-none d-lg-flex align-items-center gap-3">
                        <div
                            onClick={()=>setModal(true)}
                            className="text-success whatsapp-icon"
                            >
                            <FaWhatsapp size={40} />
                        </div>
                        {modal&&(
                            <div className="absolute top-100 z-50 bg-white p-3 py-0 pb-3">
                                <div className="flex justify-end h3 mb-3">
                                    <span className="cursor-pointer" onClick={()=>setModal(false)}>X</span></div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                <label htmlFor="">Your Message</label>
                            </div>
                                <div className="btn btn-theme" onClick={sendMessage}>Send</div>
                            </div>
                        )}
                        <Link href="/demo" className="btn btn-theme px-4 py-2 rounded-pill fw-medium">
                            Try Out
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="d-lg-none bg-white p-3 rounded shadow-lg mt-2">
                        <ul className="navbar-nav">
                            {links.map((link, index) => (
                                <li key={index} className="nav-item mb-2">
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                                    >
                                        <Link
                                            className={`nav-link fw-medium ${pathname === link.path ? 'text-highlight' : 'text-dark'}`}
                                            href={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subLinks.length > 0 && (
                                            <span>
                                                {activeSubmenu === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </span>
                                        )}
                                    </div>

                                    {link.subLinks.length > 0 && activeSubmenu === index && (
                                        <div className="ps-3 mt-2">
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    className={`dropdown-item d-block py-2 ${pathname === subLink.path ? 'text-highlight' : 'text-dark'}`}
                                                    href={subLink.path}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                            <li className="nav-item mt-3">
                                <Link href="https://wa.me/+923004919926" className="d-flex align-items-center gap-2 text-dark nav-link">
                                    <FaWhatsapp size={30} className="text-success whatsapp-icon" />
                                    WhatsApp
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link href="/demo" className="btn btn-theme w-100 rounded-pill">
                                    Try Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar