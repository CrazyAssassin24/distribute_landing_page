"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.18 } },
};

export default function HeroSection() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "120px 24px 80px",
            }}
        >


            {/* Content */}
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    maxWidth: 820,
                    margin: "0 auto",
                }}
            >
                {/* Label */}
                <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 40,
                        }}
                    >
                        <span className="pulse-dot" />
                        <span className="label">Now accepting early access</span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: "clamp(3rem, 7.5vw, 6rem)",
                        fontWeight: 400,
                        lineHeight: 1.0,
                        letterSpacing: "-0.015em",
                        marginBottom: 32,
                        color: "var(--text-primary)",
                        fontFamily: "'Instrument Serif', serif",
                    }}
                >
                    Unlock global GPUs.<br />
                    <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                        Train without limits.
                    </em>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                        maxWidth: 600,
                        margin: "0 auto 52px",
                        fontWeight: 300,
                    }}
                >
                    The first compute marketplace for everyone. Rent high-end power on a student budget, or turn your home PC into a revenue stream. No minimums, no gatekeeping.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: "flex",
                        gap: 16,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a href="#waitlist" className="btn-primary">
                        Get Early Access
                        <ArrowRight size={15} />
                    </a>
                    <a href="#how-it-works" className="btn-ghost">
                        How Distribute works
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                }}
            >

                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{
                        width: 1,
                        height: 40,
                        background: "linear-gradient(to bottom, rgba(201,185,122,0.4), transparent)",
                    }}
                />
            </motion.div>
        </section>
    );
}
