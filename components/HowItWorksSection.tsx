"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "List or Browse",
        desc: "Providers list available hardware with specs, pricing, and availability windows. Clients search and filter for exactly what they need.",
        color: "#3b82f6",
    },
    {
        num: "02",
        title: "Match & Verify",
        desc: "Our engine matches demand with supply in real time. Both sides are verified and hardware is benchmarked before any job runs.",
        color: "#7c3aed",
    },
    {
        num: "03",
        title: "Provision in Seconds",
        desc: "Clients receive secure SSH or API access to their allocated compute. Workloads run in isolated containers with guaranteed QoS.",
        color: "#06b6d4",
    },
    {
        num: "04",
        title: "Pay & Get Paid",
        desc: "Usage is metered to the second. Clients pay only for runtime; providers receive automated payouts weekly to their account.",
        color: "#22c55e",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
};

export default function HowItWorksSection() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <section
            id="how-it-works"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Top gradient divider */}
            <div className="gradient-divider" />

            <div
                className="container-xl"
                style={{ position: "relative", zIndex: 1, paddingTop: 80 }}
            >
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <div className="badge" style={{ display: "inline-flex" }}>
                        🎬 See it in action
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                        }}
                    >
                        How <span className="gradient-text">ComputeLink</span> Works
                    </h2>
                    <p
                        style={{
                            fontSize: 17,
                            color: "var(--text-secondary)",
                            maxWidth: 520,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        From listing spare hardware to spinning up a training cluster —
                        the whole journey takes under two minutes.
                    </p>
                </motion.div>

                {/* Video player */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="float-animation"
                    style={{ marginBottom: 80 }}
                >
                    <div
                        className="video-container"
                        style={{
                            maxWidth: 860,
                            margin: "0 auto",
                            background:
                                "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(124,58,237,0.1))",
                            border: "1px solid rgba(59,130,246,0.2)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 420,
                            position: "relative",
                            borderRadius: 24,
                            overflow: "hidden",
                        }}
                        onClick={() => setVideoOpen(true)}
                    >
                        {/* Gradient shimmer */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
                            }}
                        />
                        {/* Grid lines */}
                        <div
                            className="grid-bg"
                            style={{ position: "absolute", inset: 0, opacity: 0.4 }}
                        />

                        {/* Play button */}
                        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                style={{
                                    width: 84,
                                    height: 84,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 20px",
                                    boxShadow:
                                        "0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)",
                                }}
                            >
                                <Play size={34} color="white" fill="white" />
                            </motion.div>
                            <p
                                style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: "#f8fafc",
                                    marginBottom: 6,
                                }}
                            >
                                Watch the 90-second demo
                            </p>
                            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                                See how providers list and clients deploy in real time
                            </p>
                        </div>

                        {/* Corner labels (simulated UI elements) */}
                        {[
                            { top: 20, left: 20, label: "GPU Node A100 · Active" },
                            { top: 20, right: 20, label: "Latency 18 ms" },
                            { bottom: 20, left: 20, label: "Cost: $0.42/hr" },
                            { bottom: 20, right: 20, label: "Utilization 94%" },
                        ].map((el, i) => (
                            <div
                                key={i}
                                className="stat-pill"
                                style={{
                                    position: "absolute",
                                    ...(el.top !== undefined ? { top: el.top } : { bottom: el.bottom }),
                                    ...(el.left !== undefined ? { left: el.left } : { right: el.right }),
                                    fontSize: 12,
                                }}
                            >
                                {el.label}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Step-by-step */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 24,
                        position: "relative",
                    }}
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="glass-card"
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ padding: "28px 24px" }}
                        >
                            <div
                                style={{
                                    fontSize: 40,
                                    fontWeight: 800,
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    background: `linear-gradient(135deg, ${step.color}, ${step.color}66)`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    marginBottom: 12,
                                    lineHeight: 1,
                                }}
                            >
                                {step.num}
                            </div>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    marginBottom: 10,
                                    color: "#f8fafc",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video modal */}
            {videoOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                    }}
                    onClick={() => setVideoOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            width: "100%",
                            maxWidth: 900,
                            position: "relative",
                            borderRadius: 20,
                            overflow: "hidden",
                            aspectRatio: "16/9",
                            background: "#000",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="ComputeLink Demo Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ border: "none", display: "block" }}
                        />
                        <button
                            onClick={() => setVideoOpen(false)}
                            style={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                background: "rgba(0,0,0,0.7)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "white",
                            }}
                        >
                            <X size={18} />
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
