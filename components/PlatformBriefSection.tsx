"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";

const pillars = [
    {
        emoji: "🌍",
        title: "Democratizing Access to Compute",
        body: `The global compute gap is real. Research teams at universities, indie developers building the next wave of AI tools, and startups in emerging markets simply cannot afford to pay hyperscaler rates. Meanwhile, enterprises, crypto miners cooling down, and data centers operating at 40% utilization sit on enormous reserves of idle hardware. ComputeLink closes this gap by creating a liquid, two-sided market where supply meets demand at fair prices — making serious compute accessible to anyone, anywhere.`,
    },
    {
        emoji: "🔐",
        title: "Security Without Compromise",
        body: `Every workload on ComputeLink runs inside a hardware-enforced, fully isolated container environment. Providers can never inspect client code or data. Clients get cryptographic attestation that their job ran on the declared hardware. All network traffic is end-to-end encrypted. Our compliance layer supports SOC 2 Type II requirements and GDPR data residency controls — enterprise-grade security, without the enterprise price tag.`,
    },
    {
        emoji: "⚡",
        title: "Built for Speed at Every Layer",
        body: `Traditional cloud procurement takes hours or days. ComputeLink's matching engine operates in sub-second cycles. The moment you submit a job spec — GPU type, VRAM, region preference, max price — our routing layer evaluates hundreds of available nodes and provisions your environment in under 60 seconds. For providers, listing a machine takes five minutes through our desktop agent, after which your hardware is live on the marketplace.`,
    },
    {
        emoji: "💡",
        title: "Transparent, Competitive Pricing",
        body: `We do not set prices. Providers set their own rates; market competition keeps them honest. Clients see a full cost breakdown before committing: runtime cost per hour, estimated total, platform fee (a flat 8%), and network egress charges. No surprises on your bill. Providers get paid weekly via bank transfer, PayPal, or USDC — whichever they prefer — with zero hidden deductions.`,
    },
];

const bullets = [
    "Spot & reserved market modes for both burst and sustained workloads",
    "GPU families supported: NVIDIA A100, H100, RTX 4090, L40S and more",
    "SSH, Jupyter, and REST API access modes for clients",
    "Automated hardware benchmarking and fraud detection",
    "SLA-backed uptime guarantees with provider reputation scoring",
    "Private clusters available for enterprise teams requiring dedicated tenancy",
    "Carbon-aware routing — route jobs to providers on renewable energy",
    "Discord + Slack community for both providers and clients",
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
};

export default function PlatformBriefSection() {
    return (
        <section
            className="section-padding"
            id="platform"
            style={{
                background:
                    "linear-gradient(180deg, rgba(10,15,30,0.6) 0%, var(--bg-primary) 100%)",
                position: "relative",
            }}
        >
            <div className="gradient-divider" style={{ marginBottom: 0 }} />

            <div className="container-xl" style={{ paddingTop: 80 }}>
                {/* Header */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 72 }}
                >
                    <div className="badge" style={{ display: "inline-flex" }}>
                        <Users size={13} />
                        About ComputeLink
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                        }}
                    >
                        Why <span className="gradient-text">ComputeLink</span> Exists
                    </h2>
                    <p
                        style={{
                            fontSize: 17,
                            color: "var(--text-secondary)",
                            maxWidth: 560,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        A deeper look at the platform — our mission, how we think about
                        security, pricing, and what it means to democratize compute.
                    </p>
                </motion.div>

                {/* Pillar paragraphs */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
                        gap: 28,
                        marginBottom: 72,
                    }}
                >
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            className="glass-card"
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            style={{ padding: "32px 28px" }}
                        >
                            <div style={{ fontSize: 36, marginBottom: 14 }}>{p.emoji}</div>
                            <h3
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    marginBottom: 14,
                                    color: "#f8fafc",
                                }}
                            >
                                {p.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14.5,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                }}
                            >
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bullet list */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    className="glass-card"
                    style={{
                        padding: "40px 36px",
                        borderColor: "rgba(59, 130, 246, 0.2)",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: 20,
                            marginBottom: 28,
                            color: "#f8fafc",
                            textAlign: "center",
                        }}
                    >
                        Platform Highlights at a Glance
                    </h3>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "14px 32px",
                        }}
                    >
                        {bullets.map((b) => (
                            <div
                                key={b}
                                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                            >
                                <CheckCircle2
                                    size={17}
                                    color="#3b82f6"
                                    style={{ flexShrink: 0, marginTop: 2 }}
                                />
                                <span
                                    style={{
                                        fontSize: 14.5,
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
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
