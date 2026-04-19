
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function VisionMission() {
    const visionRef = useRef(null);
    const missionRef = useRef(null);
    const headerRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
    const visionInView = useInView(visionRef, { once: true, margin: "-80px" });
    const missionInView = useInView(missionRef, { once: true, margin: "-80px" });

    const pillars = ["Empowerment", "Family Support", "Evidence-Based", "Compassion"];

    return (
        <section
            className="relative overflow-hidden py-20"
            style={{
                background: "linear-gradient(160deg, #fdf8f2 0%, #fef3e8 40%, #fff9f5 100%)",
            }}
        >
            {/* Decorative background blobs */}
            <div
                className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(234,166,112,0.12) 0%, transparent 70%)" }}
            />
            <div
                className="pointer-events-none absolute bottom-20 -left-24 w-80 h-80 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(201,130,80,0.09) 0%, transparent 70%)" }}
            />

            <div className="max-w-5xl mx-auto px-6">

                {/* ── Header ── */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2.5 mb-4">
                        <span className="block w-8 h-px" style={{ background: "#c47b3c" }} />
                        <p
                            style={{
                                fontFamily: "'Courier New', Courier, monospace",
                                fontSize: "0.62rem",
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                color: "#c47b3c",
                                margin: 0,
                                fontWeight: 700,
                            }}
                        >
                            Vision &amp; Mission
                        </p>
                        <span className="block w-8 h-px" style={{ background: "#c47b3c" }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontSize: "clamp(1.85rem, 4vw, 3rem)",
                            fontWeight: 700,
                            color: "#2d1a0e",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            marginBottom: "1rem",
                        }}
                    >
                        Our Purpose &amp;{" "}
                        <span style={{ color: "#e8721c", fontStyle: "italic", fontWeight: 400 }}>
                            Commitment
                        </span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.75,
                            maxWidth: "460px",
                            margin: "0 auto",
                            color: "#7a5c44",
                        }}
                    >
                        Driven by compassion and excellence, we aim to create meaningful
                        impact in every life we touch.
                    </p>
                </motion.div>

                {/* ── Vision ── */}
                <motion.div
                    ref={visionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={visionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap items-center gap-10 mb-12"
                >
                    {/* Image */}
                    <div className="flex-none relative flex justify-center items-center">
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: "400px",
                                height: "400px",
                                border: "1.5px dashed rgba(196,123,60,0.35)",
                                top: "-20px",
                                left: "-20px",
                            }}
                        />
                        <img
                            src="/vision.png"
                            alt="Vision"
                            className="rounded-full border-4 border-white object-cover relative z-10"
                            style={{
                                width: "360px",
                                height: "360px",
                                boxShadow: "0 12px 40px rgba(180,100,40,0.14), 0 2px 10px rgba(0,0,0,0.06)",
                            }}
                        />
                        <div
                            className="absolute bottom-3 -right-3 z-20 text-white rounded-full px-4 py-1.5 shadow-md"
                            style={{
                                background: "#c47b3c",
                                fontFamily: "'Courier New', Courier, monospace",
                                fontSize: "0.6rem",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 700,
                            }}
                        >
                            Our Vision
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-[280px]">
                        <div
                            className="w-10 h-0.5 rounded mb-5"
                            style={{ background: "#c47b3c" }}
                        />
                        <h3
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                                fontWeight: 700,
                                color: "#2d1a0e",
                                lineHeight: 1.25,
                                letterSpacing: "-0.015em",
                                marginBottom: "1rem",
                            }}
                        >
                            A world of dignity &amp; independence
                        </h3>
                        <p
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "0.95rem",
                                lineHeight: 1.75,
                                color: "#7a5c44",
                                marginBottom: "1.5rem",
                            }}
                        >
                            To build a world where every individual, regardless of ability,
                            can live with dignity, independence, and confidence. We strive to
                            be a globally trusted center for autism care and rehabilitation.
                        </p>
                        <blockquote
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                                lineHeight: 1.65,
                                borderLeft: "3px solid #c47b3c",
                                paddingLeft: "1.1rem",
                                color: "#b86830",
                                margin: 0,
                            }}
                        >
                            "Every individual deserves a life lived fully."
                        </blockquote>
                    </div>
                </motion.div>

                {/* ── Divider ── */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex-1 h-px" style={{ background: "rgba(196,123,60,0.18)" }} />
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#c47b3c", opacity: 0.5 }}
                    />
                    <div className="flex-1 h-px" style={{ background: "rgba(196,123,60,0.18)" }} />
                </div>

                {/* ── Mission ── */}
                <motion.div
                    ref={missionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="flex flex-row-reverse flex-wrap items-center gap-10"
                >
                    {/* Image */}
                    <div className="flex-none relative flex justify-center items-center">
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: "400px",
                                height: "400px",
                                border: "1.5px dashed rgba(196,123,60,0.35)",
                                top: "-20px",
                                left: "-20px",
                            }}
                        />
                        <img
                            src="/mission.png"
                            alt="Mission"
                            className="rounded-full border-4 border-white object-cover relative z-10"
                            style={{
                                width: "360px",
                                height: "360px",
                                boxShadow: "0 12px 40px rgba(180,100,40,0.14), 0 2px 10px rgba(0,0,0,0.06)",
                            }}
                        />
                        <div
                            className="absolute bottom-3 -left-3 z-20 rounded-full px-4 py-1.5 shadow-md"
                            style={{
                                background: "#2d1a0e",
                                color: "#f5e6d5",
                                fontFamily: "'Courier New', Courier, monospace",
                                fontSize: "0.6rem",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 700,
                            }}
                        >
                            Our Mission
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-[280px]">
                        <div
                            className="w-10 h-0.5 rounded mb-5"
                            style={{ background: "#2d1a0e" }}
                        />
                        <h3
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                                fontWeight: 700,
                                color: "#2d1a0e",
                                lineHeight: 1.25,
                                letterSpacing: "-0.015em",
                                marginBottom: "1rem",
                            }}
                        >
                            Personalized care for every journey
                        </h3>
                        <p
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "0.95rem",
                                lineHeight: 1.75,
                                color: "#7a5c44",
                                marginBottom: "1.5rem",
                            }}
                        >
                            To deliver personalized, evidence-based rehabilitation services
                            that empower individuals, support families, and enhance quality of
                            life. We are committed to guiding every step of the recovery
                            journey.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {pillars.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontFamily: "'Courier New', Courier, monospace",
                                        fontSize: "0.68rem",
                                        letterSpacing: "0.08em",
                                        padding: "0.28rem 0.9rem",
                                        borderRadius: "999px",
                                        background: "rgba(196,123,60,0.1)",
                                        border: "1px solid rgba(196,123,60,0.25)",
                                        color: "#b86830",
                                        fontWeight: 600,
                                        display: "inline-block",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default VisionMission;