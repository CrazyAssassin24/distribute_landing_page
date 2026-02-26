"use client";

import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Network, Server, Code2, Bot } from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "One-Click Onboarding",
        desc: "Install the agent and connect instantly. No manual setup, networking, or configuration required.",
    },
    {
        icon: Network,
        title: "Instant Global GPU Access",
        desc: "Securely access GPUs worldwide in seconds, without relying on centralized cloud providers.",
    },
    {
        icon: ShieldCheck,
        title: "Secure VM Isolation",
        desc: "Every workload runs inside dedicated isolated virtual machines, protecting both users and providers.",
    },
    {
        icon: Wallet,
        title: "Fair Marketplace Economics",
        desc: "Affordable compute for users and transparent, instant payouts for providers contributing hardware.",
    },
    {
        icon: Server,
        title: "Monetize any hardware",
        desc: "Turn your gaming PC, office laptop, or old workstation into a revenue stream. Every GPU counts.",
    },
    {
        icon: Code2,
        title: "Developer-First Experience",
        desc: "SSH into machines instantly and use familiar tools like VS Code, Jupyter, and existing workflows.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
};

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="section-padding"
            style={{ position: "relative" }}
        >
            <div className="divider" style={{ marginBottom: 0 }} />

            <div className="container-xl">
                {/* Header */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", paddingTop: 80, marginBottom: 72 }}
                >
                    <div className="label" style={{ marginBottom: 20 }}>Platform</div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 400,
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        Everything you need,{" "}
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>nothing you don&apos;t.</em>
                    </h2>
                    <p
                        style={{
                            fontSize: 15,
                            color: "var(--text-secondary)",
                            maxWidth: 440,
                            margin: "0 auto",
                            lineHeight: 1.75,
                            fontWeight: 300,
                        }}
                    >
                        Built for both sides of the marketplace — rigorous for providers, frictionless for clients.
                    </p>
                </motion.div>

                {/* Feature grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 1,
                        border: "1px solid var(--border)",
                    }}
                >
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            className="card"
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            style={{
                                padding: "36px 32px",
                                border: "none",
                                borderRight: "1px solid var(--border)",
                                borderBottom: "1px solid var(--border)",
                                borderRadius: 0,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(201,185,122,0.05)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                            }}
                        >
                            <feat.icon
                                size={18}
                                color="var(--accent)"
                                style={{ marginBottom: 20, opacity: 0.8 }}
                            />
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 400,
                                    marginBottom: 10,
                                    color: "var(--text-primary)",
                                    fontFamily: "'Instrument Serif', serif",
                                }}
                            >
                                {feat.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 13,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.75,
                                    fontWeight: 300,
                                }}
                            >
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
