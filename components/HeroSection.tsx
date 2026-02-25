"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Cpu } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.15 } },
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
            {/* Background image */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/hero_bg.png"
                    alt="Compute network background"
                    fill
                    style={{ objectFit: "cover", opacity: 0.45 }}
                    priority
                />
                {/* Gradient overlays */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.6) 60%, rgba(3,7,18,1) 100%)",
                    }}
                />
            </div>

            {/* Grid pattern */}
            <div
                className="grid-bg"
                style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.5 }}
            />

            {/* Content */}
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    maxWidth: 760,
                    margin: "0 auto",
                }}
            >
                {/* Badge */}
                <motion.div variants={fadeUp}>
                    <div className="badge" style={{ display: "inline-flex" }}>
                        <span className="pulse-dot" />
                        Now accepting early access applications
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    style={{
                        fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: 24,
                        color: "#f8fafc",
                    }}
                >
                    Your Idle Compute,{" "}
                    <span className="gradient-text">Someone&apos;s Superpower</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={fadeUp}
                    style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        maxWidth: 580,
                        margin: "0 auto 40px",
                    }}
                >
                    ComputeLink is the marketplace that connects people with spare GPU &
                    CPU power to developers, researchers, and teams who need it —
                    affordably, instantly, and securely.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    style={{
                        display: "flex",
                        gap: 16,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a href="#waitlist-client" className="btn-primary" style={{ textDecoration: "none" }}>
                        <Cpu size={18} />
                        I Need Compute
                        <ArrowRight size={16} />
                    </a>
                    <a href="#waitlist-provider" className="btn-secondary" style={{ textDecoration: "none" }}>
                        <Server size={18} />
                        I Have Compute
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    variants={fadeUp}
                    style={{
                        display: "flex",
                        gap: 12,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginTop: 56,
                    }}
                >
                    {[
                        { label: "Avg. 73% cheaper than cloud", icon: "💸" },
                        { label: "Sub-60s provisioning", icon: "⚡" },
                        { label: "500+ providers ready", icon: "🌐" },
                    ].map((stat) => (
                        <div key={stat.label} className="stat-pill">
                            <span>{stat.icon}</span>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    Scroll to explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: 24,
                        height: 38,
                        border: "2px solid rgba(255,255,255,0.15)",
                        borderRadius: 12,
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 6,
                    }}
                >
                    <div
                        style={{
                            width: 4,
                            height: 8,
                            background: "var(--accent-blue)",
                            borderRadius: 2,
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
