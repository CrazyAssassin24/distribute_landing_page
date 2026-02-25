"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Server, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

type Role = "client" | "provider";

function WaitlistCard({
    id,
    role,
    icon: Icon,
    title,
    subtitle,
    accent,
    perks,
}: {
    id: string;
    role: Role;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    accent: string;
    perks: string[];
}) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <motion.div
            id={id}
            {...fadeUp}
            className="glass-card animated-border"
            style={{
                padding: "40px 36px",
                flex: 1,
                minWidth: 300,
                maxWidth: 520,
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 24,
                }}
            >
                <div
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Icon size={24} color="white" />
                </div>
                <div>
                    <h3
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: 20,
                            color: "#f8fafc",
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Perks */}
            <ul style={{ listStyle: "none", marginBottom: 28 }}>
                {perks.map((perk) => (
                    <li
                        key={perk}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 10,
                            fontSize: 14,
                            color: "var(--text-secondary)",
                        }}
                    >
                        <CheckCircle2 size={15} color="#22c55e" />
                        {perk}
                    </li>
                ))}
            </ul>

            {/* Form */}
            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        textAlign: "center",
                        padding: "24px 0",
                    }}
                >
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            background: "rgba(34, 197, 94, 0.1)",
                            border: "1px solid rgba(34, 197, 94, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 16px",
                        }}
                    >
                        <CheckCircle2 size={28} color="#22c55e" />
                    </div>
                    <p
                        style={{
                            fontWeight: 700,
                            fontSize: 16,
                            color: "#f8fafc",
                            marginBottom: 8,
                        }}
                    >
                        You&apos;re on the list! 🎉
                    </p>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                        We&apos;ll reach out as soon as your early access slot opens.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id={`email-${role}`}
                        className="input-field"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: error ? 6 : 12 }}
                    />
                    {error && (
                        <p style={{ fontSize: 13, color: "#f87171", marginBottom: 12 }}>
                            {error}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                        style={{
                            width: "100%",
                            justifyContent: "center",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading ? (
                            <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                        ) : (
                            <>
                                Reserve My Spot <ArrowRight size={16} />
                            </>
                        )}
                    </button>
                    <style>{`
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}</style>
                </form>
            )}
        </motion.div>
    );
}

export default function WaitlistSection() {
    return (
        <section
            id="waitlist"
            className="section-padding"
            style={{ position: "relative" }}
        >
            <div className="container-xl">
                {/* Section header */}
                <motion.div
                    {...fadeUp}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <div className="badge" style={{ display: "inline-flex" }}>
                        🔐 Limited early access
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                        }}
                    >
                        Join the{" "}
                        <span className="gradient-text">Early Adopter</span> Waitlist
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
                        We&apos;re onboarding a select group of clients and compute providers
                        before our public launch. Pick your role below.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    style={{
                        display: "flex",
                        gap: 32,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <WaitlistCard
                        id="waitlist-client"
                        role="client"
                        icon={Cpu}
                        title="I Need Compute"
                        subtitle="Access affordable, scalable compute on demand"
                        accent="linear-gradient(135deg, #3b82f6, #7c3aed)"
                        perks={[
                            "Priority access to early inventory",
                            "Up to 70% off vs. major cloud providers",
                            "Dedicated onboarding support",
                            "Locked-in early-adopter pricing forever",
                        ]}
                    />
                    <WaitlistCard
                        id="waitlist-provider"
                        role="provider"
                        icon={Server}
                        title="I Have Compute"
                        subtitle="Monetize your idle GPUs, CPUs, or data center capacity"
                        accent="linear-gradient(135deg, #06b6d4, #3b82f6)"
                        perks={[
                            "Start earning from day one of launch",
                            "Set your own availability & pricing",
                            "Automated billing & instant payouts",
                            "Provider dashboard with real-time analytics",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
