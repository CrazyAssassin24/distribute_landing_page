"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Performance", href: "#performance" },
    { label: "Features", href: "#features" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: "0 40px",
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: scrolled
                        ? "rgba(6, 5, 10, 0.92)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(24px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    transition: "all 0.4s ease",
                }}
            >
                {/* Logo */}
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 0, textDecoration: "none" }}>
                    <span
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                            fontSize: 22,
                            letterSpacing: "0.04em",
                            color: "#f0ede8",
                        }}
                    >
                        distribute
                    </span>
                </a>

                {/* Desktop Nav */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 40,
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--text-primary)")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#waitlist"
                        className="btn-primary"
                        style={{ padding: "10px 24px", fontSize: 11 }}
                    >
                        Join Waitlist
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                        display: "none",
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                            position: "fixed",
                            top: 64,
                            left: 0,
                            right: 0,
                            zIndex: 99,
                            background: "rgba(6, 5, 10, 0.98)",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            padding: "24px 40px",
                            backdropFilter: "blur(24px)",
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: "block",
                                    color: "var(--text-secondary)",
                                    textDecoration: "none",
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    padding: "14px 0",
                                    borderBottom: "1px solid var(--border)",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
