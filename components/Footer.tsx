"use client";

import { Zap, Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                background: "var(--bg-primary)",
                padding: "60px 24px 32px",
            }}
        >
            <div className="container-xl">
                {/* CTA strip */}
                <div
                    style={{
                        borderRadius: 24,
                        background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(124,58,237,0.12))",
                        border: "1px solid rgba(59,130,246,0.2)",
                        padding: "48px 32px",
                        textAlign: "center",
                        marginBottom: 56,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                            marginBottom: 12,
                        }}
                    >
                        Ready to transform how the world uses compute?
                    </h2>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 16,
                            marginBottom: 28,
                            maxWidth: 440,
                            margin: "0 auto 28px",
                            lineHeight: 1.6,
                        }}
                    >
                        Join thousands of early adopters already on our waitlist.
                        Spots are limited — lock in your early-adopter perks today.
                    </p>
                    <a
                        href="#waitlist"
                        className="btn-primary glow-blue"
                        style={{ textDecoration: "none" }}
                    >
                        Join the Waitlist <ArrowRight size={16} />
                    </a>
                </div>

                {/* Bottom row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 20,
                    }}
                >
                    {/* Logo + tagline */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 9,
                                background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Zap size={16} color="white" fill="white" />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: 17,
                                color: "#f8fafc",
                            }}
                        >
                            Compute<span className="gradient-text">Link</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                        {["Privacy Policy", "Terms of Service", "Contact Us"].map((l) => (
                            <a
                                key={l}
                                href="#"
                                style={{
                                    fontSize: 13,
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color =
                                    "var(--text-secondary)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--text-muted)")
                                }
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div style={{ display: "flex", gap: 12 }}>
                        {[
                            { Icon: Twitter, label: "Twitter" },
                            { Icon: Github, label: "GitHub" },
                            { Icon: Linkedin, label: "LinkedIn" },
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    border: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = "var(--border-accent)";
                                    el.style.color = "var(--accent-blue)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = "var(--border)";
                                    el.style.color = "var(--text-muted)";
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <p
                    style={{
                        textAlign: "center",
                        fontSize: 13,
                        color: "var(--text-muted)",
                        marginTop: 32,
                    }}
                >
                    © {new Date().getFullYear()} ComputeLink, Inc. All rights reserved.
                    Made with ⚡ for the builders.
                </p>
            </div>
        </footer>
    );
}
