"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2, Cpu, Server } from "lucide-react";

const LAUNCH_DATE = new Date("2026-04-26T00:00:00Z");

function useCountdown(target: Date) {
    const calc = () => {
        const diff = Math.max(0, target.getTime() - Date.now());
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };
    const [time, setTime] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div style={{ textAlign: "center", minWidth: 64 }}>
            <div
                style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                    fontFamily: "'Instrument Serif', serif",
                    fontWeight: 400,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 8,
                }}
            >
                {String(value).padStart(2, "0")}
            </div>
            <div
                style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                }}
            >
                {label}
            </div>
        </div>
    );
}

function CountdownTimer() {
    const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
    const sep = (
        <span
            style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontFamily: "'Instrument Serif', serif",
                color: "var(--accent)",
                opacity: 0.35,
                alignSelf: "flex-start",
                paddingTop: 2,
                lineHeight: 1,
            }}
        >
            :
        </span>
    );
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "20px 40px",
                border: "1px solid var(--accent-border)",
                background: "rgba(201,185,122,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                marginBottom: 0,
            }}
        >
            <CountdownUnit value={days} label="Days" />
            {sep}
            <CountdownUnit value={hours} label="Hours" />
            {sep}
            <CountdownUnit value={minutes} label="Minutes" />
            {sep}
            <CountdownUnit value={seconds} label="Seconds" />
        </div>
    );
}

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
                display: "flex",
                flexDirection: "column",
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
            <ul style={{ listStyle: "none", marginBottom: 32, flex: 1 }}>
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
                    <div className="label" style={{ marginBottom: 20 }}>Waitlist</div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 400,
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        Be the first to know{" "}
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>when we launch.</em>
                    </h2>
                    <p
                        style={{
                            fontSize: 15,
                            color: "var(--text-secondary)",
                            maxWidth: 480,
                            margin: "0 auto 48px",
                            lineHeight: 1.75,
                            fontWeight: 300,
                        }}
                    >
                        Join the waitlist and get notified the moment Distribute goes live. Early members unlock exclusive lifetime benefits and priority access.
                    </p>

                    {/* Countdown */}
                    <CountdownTimer />
                </motion.div>

                {/* Cards */}
                <div
                    style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignItems: "stretch",
                    }}
                >
                    <WaitlistCard
                        id="waitlist-client"
                        role="client"
                        icon={Cpu}
                        title="I want GPU power"
                        subtitle="Run AI models, fine-tune LLMs, and render projects — without paying AWS prices."
                        perks={[
                            "No platform fees for your entire first year — keep every rupee you save",
                            "Jump the queue — early members get first pick of the best GPUs at launch",
                            "Your price is locked in forever, even as demand grows",
                            "Cancel any session instantly — you only pay for the seconds you actually use",
                        ]}
                    />
                    <WaitlistCard
                        id="waitlist-provider"
                        role="provider"
                        icon={Server}
                        title="I have a gaming PC"
                        subtitle="Your GPU sits idle most of the day. Let it earn money while you sleep, game, or study."
                        perks={[
                            "Earn 2× the normal rate during the entire launch month",
                            "Get paid instantly to your UPI — no waiting, no minimum withdrawal",
                            "We handle all the networking and security — you just leave it on",
                            "Your listing appears at the top of search results before anyone else's",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
