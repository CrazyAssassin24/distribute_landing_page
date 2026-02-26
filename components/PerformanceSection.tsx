"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, DollarSign, BarChart3, ArrowRight } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
};

const highlights = [
    { value: "< 2 min", label: "Cluster Provisioning" },
    { value: "50%+", label: "Cost vs. Cloud" },
    { value: "RTX 5090s", label: "SOTA GPU Access" },
];

const spotlightCards = [
    {
        icon: Zap,
        label: "Speed",
        watermark: "2m",
        title: "Set up LLM training in under 2 minutes.",
        desc: "From zero to running first epoch — no queues, no approvals, no cold starts. Our global peer network provisions clusters faster than any hyperscaler's control plane.",
        tag: "Provisioning in < 120s",
    },
    {
        icon: DollarSign,
        label: "Economics",
        watermark: "50%",
        title: "Cut your compute bill in half. Minimum.",
        desc: "Legacy cloud providers charge you for idle infrastructure, egress, and overhead. Distribute's peer-to-peer model eliminates the middleman — you pay for pure compute and nothing else.",
        tag: "50%+ cheaper than AWS / GCP",
    },
];

const detailCards = [
    {
        icon: Cpu,
        label: "SOTA Hardware",
        title: "RTX Cards and Server Clusters",
        desc: "Access the latest 50-series GPUs and datacenter-grade gpu nodes from a globally distributed network of providers.",
    },
    {
        icon: BarChart3,
        label: "Elastic Scale",
        title: "1 node to 512-node clusters",
        desc: "Scale up or down in real time. No long-term contracts, no minimum commitments — just raw compute on demand.",
    },
];

export default function PerformanceSection() {
    return (
        <section
            id="performance"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div className="divider" style={{ marginBottom: 0 }} />

            <div className="container-xl">
                {/* ── Section Header ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", paddingTop: 80, marginBottom: 64 }}
                >
                    <div className="label" style={{ marginBottom: 20 }}>Performance</div>
                    <h2
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                            fontWeight: 400,
                            marginBottom: 24,
                            lineHeight: 1.05,
                        }}
                    >
                        The fastest path from idea{" "}
                        <br />
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>to production.</em>
                    </h2>
                </motion.div>

                {/* ── Hero Banner ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        border: "1px solid var(--border)",
                        padding: "48px 48px",
                        marginBottom: "1px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 48,
                        background: "var(--bg-card)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                    }}
                >
                    <div style={{ flex: "1 1 300px" }}>
                        <p
                            style={{
                                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                                fontFamily: "'Instrument Serif', serif",
                                lineHeight: 1.3,
                                color: "var(--text-primary)",
                                fontWeight: 400,
                            }}
                        >
                            Spin up {" "}
                            <em style={{ color: "var(--accent)", fontStyle: "italic" }}> HPC Clusters</em>{" "}
                            and start training a production-grade LLM in{" "}
                            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>under 2 minutes</em>{" "}
                            — at a fraction of what AWS charges.
                        </p>
                    </div>

                    <div
                        style={{
                            flex: "1 1 340px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0,
                            borderLeft: "1px solid var(--border)",
                            paddingLeft: 48,
                        }}
                    >
                        {highlights.map((h, i) => (
                            <div
                                key={h.label}
                                style={{
                                    flex: "1 1 100px",
                                    padding: "0 24px",
                                    borderRight: i < highlights.length - 1 ? "1px solid var(--border)" : "none",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                        fontFamily: "'Instrument Serif', serif",
                                        color: "var(--accent)",
                                        lineHeight: 1,
                                        marginBottom: 8,
                                    }}
                                >
                                    {h.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    {h.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Spotlight Cards ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1px",
                        background: "var(--border)",
                        border: "1px solid var(--border)",
                        borderTop: "none",
                        marginBottom: "1px",
                    }}
                >
                    {spotlightCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            {...fadeUp}
                            transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                            style={{
                                position: "relative",
                                padding: "52px 40px",
                                background: "var(--bg-card)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                overflow: "hidden",
                                cursor: "default",
                                borderLeft: "2px solid transparent",
                                transition: "border-color 0.3s ease, background 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderLeftColor = "var(--accent)";
                                el.style.background = "rgba(201,185,122,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderLeftColor = "transparent";
                                el.style.background = "var(--bg-card)";
                            }}
                        >
                            {/* Gold watermark number */}
                            <div
                                aria-hidden="true"
                                style={{
                                    position: "absolute",
                                    right: -16,
                                    bottom: -24,
                                    fontSize: "clamp(6rem, 12vw, 10rem)",
                                    fontFamily: "'Instrument Serif', serif",
                                    fontStyle: "italic",
                                    color: "var(--accent)",
                                    opacity: 0.06,
                                    lineHeight: 1,
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                {card.watermark}
                            </div>

                            {/* Icon + label */}
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        background: "rgba(201,185,122,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <card.icon size={15} color="var(--accent)" />
                                </div>
                                <span
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: "var(--accent)",
                                        opacity: 0.65,
                                    }}
                                >
                                    {card.label}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
                                    fontFamily: "'Instrument Serif', serif",
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    marginBottom: 20,
                                    color: "var(--text-primary)",
                                    maxWidth: 320,
                                }}
                            >
                                {card.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: 14,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.75,
                                    fontWeight: 300,
                                    maxWidth: 380,
                                    marginBottom: 32,
                                }}
                            >
                                {card.desc}
                            </p>

                            {/* Inline tag */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "6px 14px",
                                    border: "1px solid var(--accent-border)",
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--accent)",
                                }}
                            >
                                <div className="pulse-dot" />
                                {card.tag}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Detail Cards ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1px",
                        background: "var(--border)",
                        border: "1px solid var(--border)",
                        borderTop: "none",
                        marginBottom: 64,
                    }}
                >
                    {detailCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 24,
                                padding: "36px 40px",
                                background: "var(--bg-card)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                borderLeft: "2px solid transparent",
                                transition: "border-color 0.3s ease, background 0.3s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderLeftColor = "var(--accent)";
                                el.style.background = "rgba(201,185,122,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderLeftColor = "transparent";
                                el.style.background = "var(--bg-card)";
                            }}
                        >
                            <div
                                style={{
                                    flexShrink: 0,
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    background: "rgba(201,185,122,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 2,
                                }}
                            >
                                <card.icon size={15} color="var(--accent)" style={{ opacity: 0.8 }} />
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: "var(--accent)",
                                        opacity: 0.6,
                                        marginBottom: 8,
                                    }}
                                >
                                    {card.label}
                                </div>
                                <h3
                                    style={{
                                        fontSize: 18,
                                        fontFamily: "'Instrument Serif', serif",
                                        fontWeight: 400,
                                        marginBottom: 10,
                                        color: "var(--text-primary)",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.75,
                                        fontWeight: 300,
                                    }}
                                >
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ textAlign: "center" }}
                >
                    <a href="#waitlist" className="btn-primary" style={{ borderRadius: 0, gap: 12 }}>
                        Join Our Waitlist <ArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
