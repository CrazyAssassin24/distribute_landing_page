"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
};

export default function VideoSection() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <section
            style={{
                padding: "0 32px 120px",
                position: "relative",
            }}
        >
            <div className="container-xl">
                {/* Label + line */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 60, marginTop: 100 }}
                >
                    <p
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontStyle: "italic",
                            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                            color: "var(--text-secondary)",
                            fontWeight: 400,
                        }}
                    >
                        See Distribute in action.
                    </p>
                </motion.div>

                {/* Video frame */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    onClick={() => setVideoOpen(true)}
                    className="card"
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 860,
                        margin: "0 auto",
                        aspectRatio: "16/9",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                    whileHover={{
                        borderColor: "var(--accent-border)",
                    }}
                >
                    {/* Subtle grid */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />

                    {/* Radial glow */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,185,122,0.04) 0%, transparent 70%)",
                        }}
                    />

                    {/* Play button */}
                    <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                                width: 72,
                                height: 72,
                                border: "1px solid var(--accent-border)",
                                background: "rgba(201,185,122,0.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 20px",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <Play size={26} color="var(--accent)" fill="var(--accent)" style={{ marginLeft: 3 }} />
                        </motion.div>
                        <p
                            className="label"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Watch the demo
                        </p>
                    </div>


                </motion.div>
            </div>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.92)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                    }}
                    onClick={() => setVideoOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            width: "100%",
                            maxWidth: 920,
                            position: "relative",
                            aspectRatio: "16/9",
                            background: "#000",
                            border: "1px solid var(--border-hover)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Distribute Demo"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ border: "none", display: "block" }}
                        />
                        <button
                            onClick={() => setVideoOpen(false)}
                            style={{
                                position: "absolute",
                                top: -40,
                                right: 0,
                                background: "none",
                                border: "none",
                                color: "var(--text-muted)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontFamily: "'Inter', sans-serif",
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            <X size={14} /> Close
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
