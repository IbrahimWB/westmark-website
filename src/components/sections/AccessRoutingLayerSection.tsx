// @ts-nocheck
"use client"

import * as React from "react"
import { PrimaryButton } from "@/components/ui/PrimaryButton"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function AccessRoutingLayerSection(props) {
    const {
        eyebrow,
        heading,
        subheading,
        stat1Label,
        stat1Value,
        stat2Label,
        stat2Value,
        stat3Label,
        stat3Value,
        infoTitle,
        infoBody,
        headingFont,
        uiFont,
        bodyFont,
        bg,
        text,
        muted,
        accent,
        maxWidth,
        paddingY,
        radius,
        ctaText = "Request Network Access",
    } = props

    return (
        <section
            style={{
                width: "100%",
                background: bg,
                color: text,
                padding: `${paddingY}px 0`,
                fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
            }}
        >
            <div style={{ maxWidth, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
                <EyebrowPill label={eyebrow} uiFont={uiFont} />

                <h2
                    style={{
                        margin: "22px 0 12px 0",
                        fontSize: "clamp(42px, 5.2vw, 66px)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                        fontWeight: 380,
                        display: "block",
                        paddingBottom: "0.06em",
                        fontFamily: `${headingFont}, "Clash Grotesk", "Helvetica Neue", Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                        background:
                            "linear-gradient(180deg, rgba(242,242,242,0.96) 0%, rgba(212,212,212,0.9) 58%, rgba(138,138,138,0.78) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {heading}
                </h2>

                <p
                    style={{
                        margin: 0,
                        maxWidth: 700,
                        marginInline: "auto",
                        color: muted,
                        fontSize: 16,
                        lineHeight: 1.65,
                    }}
                >
                    {subheading}
                </p>
            </div>

            <div
                className="arl-stats"
                style={{
                    maxWidth,
                    margin: "42px auto 0 auto",
                    padding: "0 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 16,
                }}
            >
                <StatCard
                    icon={<IconPulse color={accent} />}
                    label={stat1Label}
                    value={stat1Value}
                    panelBg={`linear-gradient(90deg, rgba(6,22,30,0.92) 0%, rgba(8,52,58,0.74) 100%)`}
                    tone="cyan"
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />

                <StatCard
                    icon={<IconBolt color={accent} />}
                    label={stat2Label}
                    value={stat2Value}
                    panelBg={`linear-gradient(90deg, rgba(6,24,22,0.92) 0%, rgba(8,50,40,0.74) 100%)`}
                    tone="green"
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />

                <StatCard
                    icon={<IconNodes color={accent} />}
                    label={stat3Label}
                    value={stat3Value}
                    panelBg={`linear-gradient(90deg, rgba(7,14,30,0.92) 0%, rgba(7,28,58,0.74) 100%)`}
                    tone="blue"
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />
            </div>

            <div style={{ maxWidth, margin: "16px auto 0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        maxWidth: 770,
                        margin: "0 auto",
                        borderRadius: radius,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "linear-gradient(180deg, rgba(8,12,14,0.86) 0%, rgba(6,10,12,0.9) 100%)",
                        padding: "24px 28px",
                        textAlign: "left",
                    }}
                >
                    <div style={{ fontSize: 38, fontWeight: 380, color: text, marginBottom: 12, lineHeight: 1.08, letterSpacing: "-0.02em", fontFamily: `${headingFont}, "Clash Grotesk", "Helvetica Neue", Inter, system-ui, sans-serif` }}>
                        {infoTitle}
                    </div>
                    <p style={{ margin: 0, color: muted, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{infoBody}</p>
                </div>
            </div>

            <div style={{ marginTop: 26, textAlign: "center", padding: "0 24px" }}>
                <PrimaryButton
                    label={ctaText}
                    heroEffect
                    className="h-12 rounded-xl bg-[linear-gradient(90deg,#25bfee_0%,#29e2b4_100%)] px-8 text-[16px] font-medium shadow-[0_0_24px_rgba(0,255,200,0.28)]"
                    style={{ fontFamily: `${uiFont}, Inter, system-ui, sans-serif` }}
                />
            </div>

            <style>{`
                @media (max-width: 980px) {
                    .arl-stats {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}

function StatCard({ icon, label, value, panelBg, text, uiFont, tone = "cyan" }) {
    const toneBorder =
        tone === "blue"
            ? "rgba(64,150,255,0.32)"
            : tone === "green"
              ? "rgba(0,210,120,0.3)"
              : "rgba(0,220,255,0.3)"
    const toneChip =
        tone === "blue"
            ? "rgba(64,150,255,0.34)"
            : tone === "green"
              ? "rgba(0,210,120,0.34)"
              : "rgba(0,220,255,0.34)"

    return (
        <div
            style={{
                borderRadius: 14,
                border: `1px solid ${toneBorder}`,
                background: panelBg,
                padding: "20px 18px",
                textAlign: "left",
                boxShadow: "0 18px 44px rgba(0,0,0,0.33)",
            }}
        >
            <div
                style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    border: `1px solid ${toneChip}`,
                    background: "rgba(3,16,20,0.65)",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                {icon}
            </div>
            <div
                style={{
                    marginTop: 12,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 600,
                    fontFamily: `${uiFont}, Inter, system-ui, sans-serif`,
                }}
            >
                {label}
            </div>
            <div style={{ marginTop: 8, fontSize: 44, lineHeight: 1.05, fontWeight: 700, color: text }}>{value}</div>
        </div>
    )
}

function EyebrowPill({ label, uiFont }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(0,225,255,0.34)",
                background: "linear-gradient(90deg, rgba(2,34,44,0.82) 0%, rgba(2,52,62,0.74) 100%)",
                color: "#19DCFF",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                lineHeight: 1.15,
                textTransform: "uppercase",
                fontFamily: `${uiFont}, Inter, system-ui, sans-serif`,
                boxShadow: "inset 0 0 0 1px rgba(0,255,255,0.08)",
            }}
        >
            {label}
        </div>
    )
}

function IconPulse({ color = "#00FFC8" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h4l2-5 4 10 2-5h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function IconBolt({ color = "#00FFC8" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 5 13h6l-1 9 9-13h-6z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function IconNodes({ color = "#00FFC8" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="5" r="2.2" stroke={color} strokeWidth="2" />
            <circle cx="6.5" cy="17" r="2.2" stroke={color} strokeWidth="2" />
            <circle cx="17.5" cy="17" r="2.2" stroke={color} strokeWidth="2" />
            <path d="M10.8 6.8 8 14m5.2-7.2 2.8 7.2M8.7 17h6.6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}





