"use client";

import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "72px 32px 40px",
                position: "relative",
                zIndex: 1,
            }}
        >
            <div className="container-xl">
                {/* CTA strip */}
                <div
                    style={{
                        borderTop: "1px solid var(--border)",
                        borderBottom: "1px solid var(--border)",
                        padding: "64px 32px",
                        textAlign: "center",
                        marginBottom: 56,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                            marginBottom: 16,
                            lineHeight: 1.1,
                        }}
                    >
                        Ready to join the<br />
                        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>future of compute?</em>
                    </h2>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 14,
                            marginBottom: 32,
                            maxWidth: 420,
                            margin: "0 auto 32px",
                            lineHeight: 1.75,
                            fontWeight: 300,
                        }}
                    >
                        Whether you&apos;re a student looking for GPU power or a gamer with an idle PC, Distribute is built for you. No contracts, no gatekeeping.
                    </p>
                    <a
                        href="#waitlist"
                        className="btn-primary"
                        style={{ textDecoration: "none" }}
                    >
                        Join the Waitlist <ArrowRight size={14} />
                    </a>
                </div>

                {/* Bottom row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 32,
                    }}
                >
                    {/* Logo */}
                    <span
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                            fontSize: 22,
                            color: "var(--text-primary)",
                            letterSpacing: "0.04em",
                        }}
                    >
                        distribute
                    </span>

                    {/* Links */}
                    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
                        {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
                            <a
                                key={l}
                                href="#"
                                style={{
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--text-secondary)")
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
                    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                        {[
                            { Icon: Twitter, label: "X" },
                            // { Icon: Github, label: "GitHub" },
                            // { Icon: Linkedin, label: "LinkedIn" },
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                style={{
                                    width: 38,
                                    height: 38,
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
                                    el.style.borderColor = "var(--accent-border)";
                                    el.style.color = "var(--accent)";
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
                        fontSize: 10,
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        marginTop: 48,
                        textTransform: "uppercase",
                    }}
                >
                    &copy; {new Date().getFullYear()} Distribute, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
