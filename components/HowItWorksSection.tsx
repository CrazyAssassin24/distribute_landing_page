"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Connect & Earn",
        desc: "Run the agent on your gaming PC or laptop. We handle the discovery and matching for you.",
    },
    {
        num: "02",
        title: "Search & Select",
        desc: "Find the exact GPU or CPU power you need at a price that fits your budget.",
    },
    {
        num: "03",
        title: "Deploy Instantly",
        desc: "Get instant secure access to machines via SSH. Scale up or down without any long-term contracts.",
    },
    {
        num: "04",
        title: "Seamless Payouts",
        desc: "Providers get paid instantly via UPI or stripe. Users only pay for the exact seconds the job is running.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
};

export default function HowItWorksSection() {
    return (
        <section
            id="how-it-works"
            className="section-padding"
            style={{ position: "relative" }}
        >
            <div className="divider" />

            <div className="container-xl">
                {/* Header */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", paddingTop: 80, marginBottom: 80 }}
                >
                    <div className="label" style={{ marginBottom: 20 }}>Process</div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 400,
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        From idle to{" "}
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>earning in minutes.</em>
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
                        The entire journey — from listing hardware to deploying a training cluster — takes under two minutes.
                    </p>
                </motion.div>

                {/* Steps grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 0,
                        border: "1px solid var(--border)",
                    }}
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="card"
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{
                                padding: "40px 32px",
                                border: "none",
                                borderRight: "1px solid var(--border)",
                                borderRadius: 0,
                            }}
                        >
                            {/* Step number */}
                            <div
                                style={{
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                    color: "var(--accent)",
                                    marginBottom: 24,
                                    opacity: 0.7,
                                }}
                            >
                                {step.num}
                            </div>
                            <h3
                                style={{
                                    fontSize: 18,
                                    fontWeight: 400,
                                    marginBottom: 12,
                                    color: "var(--text-primary)",
                                    fontFamily: "'Instrument Serif', serif",
                                    lineHeight: 1.2,
                                }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 13,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.75,
                                    fontWeight: 300,
                                }}
                            >
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
