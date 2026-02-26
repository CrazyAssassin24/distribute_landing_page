"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2, Cpu, Server } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
};

type Role = "client" | "provider";

function WaitlistCard({
    id,
    role,
    icon: Icon,
    title,
    subtitle,
    perks,
}: {
    id: string;
    role: Role;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    perks: string[];
}) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError("Enter a valid email address.");
            return;
        }
        setError("");
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <motion.div
            id={id}
            {...fadeUp}
            className="card"
            style={{
                flex: 1,
                minWidth: 300,
                maxWidth: 500,
                padding: "40px 36px",
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        border: "1px solid var(--accent-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Icon size={18} color="var(--accent)" />
                </div>
                <div>
                    <h3
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                            fontSize: 20,
                            color: "var(--text-primary)",
                            marginBottom: 4,
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 300 }}>
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Perks */}
            <ul style={{ listStyle: "none", marginBottom: 32 }}>
                {perks.map((perk) => (
                    <li
                        key={perk}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            marginBottom: 10,
                            fontSize: 13,
                            color: "var(--text-secondary)",
                            fontWeight: 300,
                            lineHeight: 1.5,
                        }}
                    >
                        <CheckCircle2 size={14} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0, opacity: 0.8 }} />
                        {perk}
                    </li>
                ))}
            </ul>

            {/* Form */}
            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "20px 0" }}
                >
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            border: "1px solid var(--accent-border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 16px",
                        }}
                    >
                        <CheckCircle2 size={22} color="var(--accent)" />
                    </div>
                    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "var(--text-primary)", marginBottom: 8 }}>
                        You&apos;re on the list.
                    </p>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 300 }}>
                        We&apos;ll reach out when your access slot opens.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id={`email-${role}`}
                        className="input-field"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: error ? 8 : 12 }}
                    />
                    {error && (
                        <p style={{ fontSize: 12, color: "#e07070", marginBottom: 12, fontWeight: 300 }}>
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
                            <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                        ) : (
                            <>
                                Reserve My Spot <ArrowRight size={14} />
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
            <div className="divider" />

            <div className="container-xl">
                {/* Section header */}
                <motion.div
                    {...fadeUp}
                    style={{ textAlign: "center", paddingTop: 80, marginBottom: 72 }}
                >
                    <div className="label" style={{ marginBottom: 20 }}>Early Access</div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 400,
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        Join the{" "}
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>waitlist.</em>
                    </h2>
                    <p
                        style={{
                            fontSize: 15,
                            color: "var(--text-secondary)",
                            maxWidth: 480,
                            margin: "0 auto",
                            lineHeight: 1.75,
                            fontWeight: 300,
                        }}
                    >
                        Join our foundation cohort. Early adopters receive exclusive lifetime benefits, zero-fee trading for 12 months, and priority support.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <WaitlistCard
                        id="waitlist-client"
                        role="client"
                        icon={Cpu}
                        title="I Need Power"
                        subtitle="Rent GPUs for training or rendering on a minimal budget."
                        perks={[
                            "0% platform fees for your first 12 months",
                            "Free tier priority for high-demand nodes",
                            "Exclusive 'Founding Client' profile badge",
                            "Locked-in early adopter rates for life",
                        ]}
                    />
                    <WaitlistCard
                        id="waitlist-provider"
                        role="provider"
                        icon={Server}
                        title="I Have a PC"
                        subtitle="Turn your idle GPU/CPU into passive income today."
                        perks={[
                            "Double earning multipliers for launch month",
                            "Instant UPI payouts with zero withdrawal fees",
                            "Complimentary hardware health audit service",
                            "Priority listing in the global directory",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
