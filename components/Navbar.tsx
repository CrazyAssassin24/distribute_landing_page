"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Join Waitlist", href: "#waitlist" },
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
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: "0 24px",
                    height: 68,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: scrolled
                        ? "rgba(3, 7, 18, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    transition: "all 0.4s ease",
                    maxWidth: "100vw",
                }}
            >
                {/* Logo */}
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Zap size={18} color="white" fill="white" />
                    </div>
                    <span
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: 20,
                            color: "#f8fafc",
                        }}
                    >
                        Compute<span className="gradient-text">Link</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 32,
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
                                fontSize: 14,
                                fontWeight: 500,
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--text-primary)")
                            }
                            onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color =
                                "var(--text-secondary)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#waitlist"
                        className="btn-primary"
                        style={{ padding: "10px 20px", fontSize: 13, borderRadius: 10, textDecoration: "none" }}
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
                        color: "white",
                        cursor: "pointer",
                        display: "none",
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: "fixed",
                            top: 68,
                            left: 0,
                            right: 0,
                            zIndex: 99,
                            background: "rgba(3, 7, 18, 0.97)",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            padding: "20px 24px",
                            backdropFilter: "blur(20px)",
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
                                    fontSize: 16,
                                    fontWeight: 500,
                                    padding: "12px 0",
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
