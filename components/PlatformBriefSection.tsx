"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
    {
        title: "Democratizing Compute",
        body: "Research teams, indie developers, and startups in emerging markets can't afford hyperscaler rates. Meanwhile, enterprises and data centers run at 40% utilization. Distribute closes this gap — making serious compute accessible to anyone.",
    },
    {
        title: "Security Without Compromise",
        body: "Every workload runs inside a hardware-enforced, fully isolated environment. Providers can never inspect client code or data. Clients get cryptographic attestation. All traffic is end-to-end encrypted.",
    },
    {
        title: "Built for Speed",
        body: "Traditional cloud procurement takes hours. Our matching engine operates in sub-second cycles. Submit a job spec and your environment is live in under 60 seconds.",
    },
    {
        title: "Transparent Pricing",
        body: "Providers set their own rates. Market competition keeps them fair. Clients see a full breakdown before committing. No surprises. No hidden deductions. Providers get paid weekly.",
    },
];

const bullets = [
    "NVIDIA A100, H100, RTX 4090, and L40S supported",
    "SSH, Jupyter, and REST API access modes",
    "Automated hardware benchmarking",
    "SLA-backed uptime with reputation scoring",
    "Private clusters for enterprise teams",
    "Carbon-aware routing to renewable providers",
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
};

export default function PlatformBriefSection() {
    return (
        <section
            className="section-padding"
            id="platform"
            style={{ position: "relative" }}
        >
            <div className="divider" />

            <div className="container-xl">
                {/* Header */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", paddingTop: 80, marginBottom: 72 }}
                >
                    <div className="label" style={{ marginBottom: 20 }}>Mission</div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 400,
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        Why{" "}
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Distribute</em>{" "}
                        exists.
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
                        A deeper look at our mission, security model, and what it means to democratize compute.
                    </p>
                </motion.div>

                {/* Pillars */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
                        gap: 0,
                        border: "1px solid var(--border)",
                        marginBottom: 1,
                    }}
                >
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            style={{
                                padding: "36px 32px",
                                background: "var(--bg-card)",
                                borderRight: "1px solid var(--border)",
                                borderBottom: "1px solid var(--border)",
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "'Instrument Serif', serif",
                                    fontWeight: 400,
                                    fontSize: 20,
                                    marginBottom: 14,
                                    color: "var(--text-primary)",
                                }}
                            >
                                {p.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 13,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                    fontWeight: 300,
                                }}
                            >
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bullet highlights */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    style={{
                        padding: "40px 36px",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderTop: "1px solid var(--accent-border)",
                    }}
                >
                    <div className="label" style={{ marginBottom: 28, textAlign: "center" }}>
                        Platform Highlights
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "12px 32px",
                        }}
                    >
                        {bullets.map((b) => (
                            <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <CheckCircle2
                                    size={14}
                                    color="var(--accent)"
                                    style={{ flexShrink: 0, marginTop: 3, opacity: 0.8 }}
                                />
                                <span
                                    style={{
                                        fontSize: 13,
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                    }}
                                >
                                    {b}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
