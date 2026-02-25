"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Globe, DollarSign, Clock, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Zap,
        color: "#3b82f6",
        title: "Instant Provisioning",
        desc: "Access compute resources in under 60 seconds. No contracts, no waiting — capacity fires up the moment you need it.",
    },
    {
        icon: DollarSign,
        color: "#22c55e",
        title: "Up to 73% Cost Savings",
        desc: "Pay only for what you use, at prices set by competitive market forces — not by hyperscaler pricing committees.",
    },
    {
        icon: ShieldCheck,
        color: "#7c3aed",
        title: "End-to-End Security",
        desc: "All workloads run in isolated, encrypted environments. Your data and models never leave your control.",
    },
    {
        icon: Globe,
        color: "#06b6d4",
        title: "Global Provider Network",
        desc: "Tap into a distributed network of vetted compute providers across 30+ countries for low-latency access anywhere.",
    },
    {
        icon: Clock,
        color: "#f59e0b",
        title: "Flexible On-Demand Scaling",
        desc: "Burst from 1 GPU to 1,000 in minutes. Scale down when done — no overprovisioning, no idle costs.",
    },
    {
        icon: BarChart3,
        color: "#ec4899",
        title: "Unified Dashboard",
        desc: "Monitor usage, costs, and performance across all your workloads in one real-time analytics dashboard.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
};

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(10,15,30,0.6) 100%)",
                position: "relative",
            }}
        >
            {/* Radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600,
                    height: 600,
                    background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <div className="badge" style={{ display: "inline-flex" }}>
                        ⚡ Platform capabilities
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                        }}
                    >
                        Everything you need,{" "}
                        <span className="gradient-text-cyan">nothing you don&apos;t</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 17,
                            color: "var(--text-secondary)",
                            maxWidth: 500,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        ComputeLink is engineered for both sides of the marketplace —
                        rigorous infrastructure for providers, frictionless UX for clients.
                    </p>
                </motion.div>

                {/* Feature grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
                        gap: 24,
                    }}
                >
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            className="glass-card"
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            style={{ padding: "32px 28px" }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 14,
                                    background: `${feat.color}18`,
                                    border: `1px solid ${feat.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 20,
                                }}
                            >
                                <feat.icon size={22} color={feat.color} />
                            </div>
                            <h3
                                style={{
                                    fontSize: 17,
                                    fontWeight: 700,
                                    marginBottom: 10,
                                    color: "#f8fafc",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                {feat.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
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
