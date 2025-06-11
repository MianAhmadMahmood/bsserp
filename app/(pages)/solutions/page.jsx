'use client'
import { FaUsers, FaTools, FaChartLine, FaWarehouse, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { BiCalculator, BiBarChart, BiQuestionMark, BiCart, BiClipboard, BiSupport, BiBitcoin } from 'react-icons/bi';
import Link from 'next/link';

const Page = ({ }) => {
    const cards = [
        {
            title: 'Manufacturing ERP',
            desc: ' Manufacturing ERP is a comprehensive software solution designed to streamline and optimize manufacturing processes.',
            icon: <BiCalculator className="text" size={50} />,
            link: '/solutions/manufacturing-erp'
        },
        {
            title: 'Distribution ERP Software',
            desc: ' Distribution ERP software is a comprehensive solution designed to streamline and optimize distribution processes.',
            icon: <BiBarChart className="text" size={50} />,
            link: '/solutions/supply-chain'
        },
    ];

    return (
        <section className="overflow-hidden">
            {/* Hero Section */}
            <div className="container-fluid px-0">
                <div
                    className="text py-lg-5 py-4"
                    style={{
                        backgroundImage: "url('/BACKGROUND-LINES.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-lg-10 col-md-12 text-center py-4 py-lg-5">
                                <h1 className="display-4 fw-bolder mb-4">
                                    Transforming best
                                    <span className="text-highlight"> Quality Control </span>
                                    with <span className="text-highlight"> Manufacturing </span>
                                    ERP software in Pakistan
                                </h1>
                                <p className="text-secondary fs-4 mb-5">
                                    BSSERP offers a cutting-edge cloud-based <span className="text-highlight fw-bold"> manufacturing ERP software in Pakistan </span>. It streamlines production processes, accurately monitors material use, ensures effective capacity planning, manages subcontracting efficiently, and much more. This software is designed to enhance your business operations significantly!
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-theme btn-lg rounded-5 px-4 py-3 fs-5 fw-semibold">
                                        Request a Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="bg-yellow">
                <div className="container py-5 my-md-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center mb-5">
                            <span className="badge bg-white shadow text-dark rounded-5 px-3 py-2 mb-3 fs-6 fw-semibold">
                                Solutions
                            </span>
                            <h2 className="display-5 fw-bold mb-3">
                                Everything Your Business Needs
                            </h2>
                            <p className="lead text-secondary mb-0 px-lg-5">
                                Trusted by businesses across Pakistan, BSSERP provides comprehensive modules to streamline and enhance your operations.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {cards.map((card, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="rounded-5 custom-card shadow-lg h-100 border-0 bg-light">
                                    <div className="card-body p-4 custom-card-content">
                                        <div className="mb-4 custom-card-icon">
                                            {card.icon}
                                        </div>
                                        <h3 className="h4 text mb-3 custom-card-title">{card.title}</h3>
                                        <p className="card-text text-muted mb-4 custom-card-desc">{card.desc}</p>
                                        <Link href={card.link} className="nav-link">
                                            <div className="mt-3 text-secondary fw-semibold custom-card-link">
                                                Learn more →
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;