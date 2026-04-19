


import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "../ui/Section";

const VALUES = [
    {
        id: "01",
        title: "Compassionate Care",
        desc: "Every interaction rooted in empathy and genuine human connection.",
        image: "/val-compassion.jpg",
    },
    {
        id: "02",
        title: "Individual Empowerment",
        desc: "Unlocking potential unique to every person we serve.",
        image: "/val-empowerment.jpg",
    },
    {
        id: "03",
        title: "Evidence-Based Practice",
        desc: "Science-led methods that deliver real, measurable outcomes.",
        image: "/val-evidence.jpg",
    },
    {
        id: "04",
        title: "Family Partnership",
        desc: "Healing journeys are strongest when families walk alongside.",
        image: "/val-family.jpg",
    },
];

const CORNER_ANGLES = [225, 315, 45, 135];
const ORBIT_RADIUS = 360;
const CARD_WIDTH = 260;
const CARD_HEIGHT = 180;



function DesktopOrbit() {
    const [angle, setAngle] = useState(0);
    const startTime = useRef(null);

    useAnimationFrame((t) => {
        if (startTime.current === null) startTime.current = t;
        const elapsed = t - startTime.current;
        setAngle((elapsed / 34000) * 360);
    });

    return (
        <div
            className="hidden md:block relative mx-auto"
            style={{ width: 860, height: 860 }}
        >
            {/* Orbit Rings */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 860 860"
            >
                <circle
                    cx="430"
                    cy="430"
                    r={ORBIT_RADIUS}
                    fill="none"
                    stroke="rgba(232,114,28,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="5 9"
                />
                <circle
                    cx="430"
                    cy="430"
                    r={ORBIT_RADIUS + 32}
                    fill="none"
                    stroke="rgba(232,114,28,0.08)"
                    strokeWidth="1"
                />
            </svg>

            {/* Orbiting Cards */}
            {VALUES.map((item, i) => {
                const baseAngle = CORNER_ANGLES[i];
                const currentAngle = baseAngle + angle;
                const rad = (currentAngle * Math.PI) / 180;

                const x = Math.cos(rad) * ORBIT_RADIUS;
                const y = Math.sin(rad) * ORBIT_RADIUS;

                // Each card gets a slightly different dark bg tone like the hero overlay
                const cardBgs = [
                    "linear-gradient(135deg, #1c0e05ee, #2a1506dd)",  // deep brown
                    "linear-gradient(135deg, #0d1a1cee, #122228dd)",  // dark teal-black
                    "linear-gradient(135deg, #1c0e05ee, #3d1a08dd)",  // warm umber
                    "linear-gradient(135deg, #0d1a1cee, #1a2e32dd)",  // cool dark teal
                ];

                const borderColors = [
                    "rgba(232,114,28,0.7)",   // orange
                    "rgba(61,184,200,0.7)",   // teal
                    "rgba(232,114,28,0.7)",   // orange
                    "rgba(61,184,200,0.7)",   // teal
                ];

                return (
                    <motion.div
                        key={item.id}
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            x: x - CARD_WIDTH / 2,
                            y: y - CARD_HEIGHT / 2,
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT,
                            rotate: 0,
                            borderRadius: "18px",
                            overflow: "hidden",
                            border: `2px solid ${borderColors[i]}`,
                            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                            cursor: "pointer",
                            background: cardBgs[i],
                        }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="group"
                    >
                        <div
                            className="absolute inset-0 flex flex-col justify-center px-5"
                        >
                            {/* ID badge */}
                            <span
                                style={{
                                    fontFamily: "'Courier New', Courier, monospace",
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.25em",
                                    color: i % 2 === 0 ? "#e8721c" : "#3db8c8",
                                    marginBottom: "6px",
                                    display: "block",
                                    fontWeight: 700,
                                }}
                            >
                                {item.id}
                            </span>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: "'Georgia', 'Times New Roman', serif",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#f5f0ea",
                                    margin: "0 0 7px 0",
                                    lineHeight: 1.25,
                                }}
                            >
                                {item.title}
                            </h3>

                            {/* Divider */}
                            <div style={{
                                width: 32,
                                height: 1.5,
                                background: i % 2 === 0 ? "#e8721c" : "#3db8c8",
                                marginBottom: 8,
                                borderRadius: 2,
                            }} />

                            {/* Desc */}
                            <p
                                style={{
                                    fontFamily: "'Georgia', 'Times New Roman', serif",
                                    fontSize: "0.7rem",
                                    color: "rgba(245,240,234,0.68)",
                                    lineHeight: 1.55,
                                    margin: 0,
                                }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                );
            })}

            {/* Center Image */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden"
                style={{
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    border: "5px solid rgba(232,114,28,0.85)",
                    boxShadow: "0 0 0 8px rgba(232,114,28,0.12), 0 20px 60px rgba(0,0,0,0.3)",
                }}
            >
                <img
                    src="/center.png"
                    alt="center"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

function MobileStack() {
    const cardStyles = [
        {
            bg: "linear-gradient(135deg, #1c0e05, #2a1506)",
            border: "rgba(232,114,28,0.6)",
            accent: "#e8721c",
        },
        {
            bg: "linear-gradient(135deg, #0d1a1c, #122228)",
            border: "rgba(61,184,200,0.6)",
            accent: "#3db8c8",
        },
        {
            bg: "linear-gradient(135deg, #1c0e05, #3d1a08)",
            border: "rgba(232,114,28,0.6)",
            accent: "#e8721c",
        },
        {
            bg: "linear-gradient(135deg, #0d1a1c, #1a2e32)",
            border: "rgba(61,184,200,0.6)",
            accent: "#3db8c8",
        },
    ];

    return (
        <div className="flex md:hidden flex-col gap-5 px-2">
            {VALUES.map((item, i) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="p-5"
                    style={{
                        borderRadius: "16px",
                        background: cardStyles[i].bg,
                        border: `1.5px solid ${cardStyles[i].border}`,
                        boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
                    }}
                >
                    {/* ID */}
                    <span
                        style={{
                            fontFamily: "'Courier New', Courier, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.22em",
                            color: cardStyles[i].accent,
                            display: "block",
                            marginBottom: "6px",
                            fontWeight: 700,
                        }}
                    >
                        {item.id}
                    </span>

                    {/* Title */}
                    <h3
                        style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#f5f0ea",
                            margin: "0 0 8px 0",
                            lineHeight: 1.25,
                        }}
                    >
                        {item.title}
                    </h3>

                    {/* Accent divider */}
                    <div style={{
                        width: 36,
                        height: 2,
                        background: cardStyles[i].accent,
                        marginBottom: 10,
                        borderRadius: 2,
                    }} />

                    {/* Desc */}
                    <p
                        style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontSize: "0.78rem",
                            color: "rgba(245,240,234,0.68)",
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

function ValuesSection() {
    return (
        <section className="relative py-16 overflow-hidden">

            {/* Blurred background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/namefous.png"
                    alt="background"
                    className="w-full h-full object-cover scale-110"
                    style={{ filter: "blur(5px)" }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(160deg, rgba(253,248,242,0.72) 0%, rgba(254,243,232,0.68) 50%, rgba(255,249,245,0.72) 100%)",
                        backdropFilter: "blur(2px)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Container>

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span
                                className="block h-px w-9"
                                style={{ background: "#e8721c" }}
                            />
                            <p
                                style={{
                                    fontFamily: "'Courier New', Courier, monospace",
                                    fontSize: "0.62rem",
                                    letterSpacing: "0.28em",
                                    textTransform: "uppercase",
                                    color: "#e8721c",
                                    margin: 0,
                                    fontWeight: 700,
                                }}
                            >
                                Our Values
                            </p>
                            <span
                                className="block h-px w-9"
                                style={{ background: "#e8721c" }}
                            />
                        </div>

                        <h2
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "clamp(1.85rem, 4vw, 3rem)",
                                fontWeight: 700,
                                color: "#2d1a0e",
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                marginBottom: "0.85rem",
                            }}
                        >
                            Principles That Guide{" "}
                            <span style={{ color: "#e8721c", fontStyle: "italic", fontWeight: 400 }}>
                                Everything We Do
                            </span>
                        </h2>

                        <p
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                fontSize: "0.92rem",
                                color: "#7a5c44",
                                lineHeight: 1.75,
                                maxWidth: "460px",
                                margin: "0 auto",
                            }}
                        >
                            Four pillars that shape every decision, every care plan,
                            and every relationship we build.
                        </p>
                    </motion.div>

                    {/* Desktop Orbit */}
                    <div className="flex justify-center">
                        <DesktopOrbit />
                    </div>

                    {/* Mobile Stack */}
                    <MobileStack />

                </Container>
            </div>
        </section>
    );
}

export default ValuesSection;