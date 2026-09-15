import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
    Menu,
    Home,
    Settings,
    Package,
    Users,
    MapPin,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: Home,
        },
        {
            name: "My Parcels",
            path: "/dashboard/my-parcels",
            icon: Package,
        },
        {
            name: "Users",
            path: "/dashboard/users",
            icon: Users,
        },
        {
            name: "Coverage",
            path: "/dashboard/coverage",
            icon: MapPin,
        },
        {
            name: "Settings",
            path: "/dashboard/settings",
            icon: Settings,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">

            {/* ================= MOBILE OVERLAY ================= */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`
                    fixed top-0 left-0 z-50 h-screen
                    bg-secondary text-white
                    transition-all duration-300 ease-in-out

                    ${isOpen ? "w-64" : "w-16"}

                    ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                    lg:translate-x-0
                `}
            >

                {/* ================= SIDEBAR HEADER ================= */}
                <div
                    className={`
                        flex h-16 items-center
                        border-b border-white/10
                        ${isOpen
                            ? "justify-between px-4"
                            : "justify-center"
                        }
                    `}
                >

                    {/* Logo */}
                    {isOpen && (
                        <Link
                            to="/"
                            onClick={() => setMobileOpen(false)}
                            className="shrink-0"
                        >
                            <h1 className="text-xl font-bold whitespace-nowrap">
                                Zap
                                <span className="text-primary">
                                    Shift
                                </span>
                            </h1>
                        </Link>
                    )}

                    {/* Desktop Collapse Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            hidden lg:flex
                            items-center justify-center
                            w-8 h-8
                            rounded-lg
                            hover:bg-white/10
                            transition
                        "
                    >
                        {isOpen ? (
                            <ChevronLeft size={20} />
                        ) : (
                            <ChevronRight size={20} />
                        )}
                    </button>

                    {/* Mobile Close */}
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="
                            lg:hidden
                            flex items-center justify-center
                            w-8 h-8
                            rounded-lg
                            hover:bg-white/10
                            transition
                        "
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* ================= NAVIGATION ================= */}
                <nav className="p-3">
                    <ul className="space-y-2">

                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                        title={
                                            !isOpen
                                                ? item.name
                                                : ""
                                        }
                                        className={`
                                            flex items-center gap-3
                                            rounded-lg
                                            px-3 py-3
                                            text-sm font-medium

                                            hover:bg-primary
                                            hover:text-secondary

                                            transition-all duration-200

                                            ${!isOpen
                                                ? "justify-center"
                                                : ""
                                            }
                                        `}
                                    >

                                        <Icon
                                            size={20}
                                            strokeWidth={2}
                                        />

                                        {isOpen && (
                                            <span>
                                                {item.name}
                                            </span>
                                        )}

                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </nav>

            </aside>

            {/* ================= MAIN CONTENT ================= */}
            <div
                className={`
                    min-h-screen
                    transition-all duration-300

                    ${isOpen
                        ? "lg:ml-64"
                        : "lg:ml-16"
                    }
                `}
            >

                {/* ================= NAVBAR ================= */}
                <header
                    className="
                        sticky top-0 z-30
                        h-16
                        bg-white
                        border-b border-gray-200
                    "
                >
                    <div
                        className="
                            flex items-center
                            h-full
                            px-4
                        "
                    >

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setMobileOpen(true)
                            }
                            className="
                                lg:hidden
                                flex items-center justify-center
                                w-10 h-10
                                rounded-lg
                                hover:bg-gray-100
                                transition
                            "
                        >
                            <Menu size={22} />
                        </button>

                        {/* Navbar Title */}
                        <h2
                            className="
                                ml-3 lg:ml-0
                                text-xl
                                font-semibold
                                text-secondary
                            "
                        >
                            Dashboard
                        </h2>

                    </div>
                </header>

                {/* ================= PAGE CONTENT ================= */}
                <main className="p-4 md:p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;