// @ts-nocheck
"use client"

import * as React from "react"

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
        panelBg,
        panelBgStrong,
        border,
        borderStrong,
        maxWidth,
        paddingY,
        radius,
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
                <EyebrowPill label={eyebrow} accent={accent} border={border} uiFont={uiFont} />

                <h2
                    style={{
                        margin: "22px 0 14px 0",
                        fontSize: "clamp(34px, 5.1vw, 54px)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                        fontWeight: 380,
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
                        fontSize: 14,
                        lineHeight: 1.7,
                    }}
                >
                    {subheading}
                </p>
            </div>

            <div
                className="arl-stats"
                style={{
                    maxWidth,
                    margin: "44px auto 0 auto",
                    padding: "0 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 18,
                }}
            >
                <StatCard
                    icon={<IconPulse color={accent} />}
                    label={stat1Label}
                    value={stat1Value}
                    border={border}
                    borderStrong={borderStrong}
                    panelBg={`linear-gradient(90deg, ${panelBg} 0%, rgba(0,255,200,0.06) 100%)`}
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />

                <StatCard
                    icon={<IconBolt color={accent} />}
                    label={stat2Label}
                    value={stat2Value}
                    border={border}
                    borderStrong={borderStrong}
                    panelBg={`linear-gradient(90deg, ${panelBgStrong} 0%, rgba(0,255,200,0.08) 100%)`}
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />

                <StatCard
                    icon={<IconNodes color={accent} />}
                    label={stat3Label}
                    value={stat3Value}
                    border={border}
                    borderStrong={borderStrong}
                    panelBg={`linear-gradient(90deg, ${panelBg} 0%, rgba(0,120,255,0.08) 100%)`}
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                />
            </div>

            <div style={{ maxWidth, margin: "20px auto 0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        maxWidth: 860,
                        margin: "0 auto",
                        borderRadius: radius,
                        border: `1px solid ${borderStrong}`,
                        background: "linear-gradient(90deg, rgba(0,255,200,0.06) 0%, rgba(0,255,200,0.02) 100%)",
                        padding: "24px 24px",
                        textAlign: "left",
                    }}
                >
                    <div style={{ fontSize: 17, fontWeight: 650, color: text, marginBottom: 10, fontFamily: `${uiFont}, Inter, system-ui, sans-serif` }}>
                        {infoTitle}
                    </div>
                    <p style={{ margin: 0, color: muted, fontSize: 14, lineHeight: 1.85, whiteSpace: "pre-line" }}>{infoBody}</p>
                </div>
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

function StatCard({ icon, label, value, border, borderStrong, panelBg, text, muted, uiFont }) {
    return (
        <div
            style={{
                borderRadius: 10,
                border: `1px solid ${borderStrong}`,
                background: panelBg,
                padding: "18px 16px",
                textAlign: "left",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            }}
        >
            <div
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    border: `1px solid ${border}`,
                    background: "rgba(0,255,200,0.04)",
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
                    color: muted,
                    fontWeight: 700,
                    fontFamily: `${uiFont}, Inter, system-ui, sans-serif`,
                }}
            >
                {label}
            </div>
            <div style={{ marginTop: 6, fontSize: 24, lineHeight: 1.15, fontWeight: 700, color: text }}>{value}</div>
        </div>
    )
}

function EyebrowPill({ label, accent, border, uiFont }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                border: `1px solid ${border}`,
                background: "rgba(0,255,200,0.06)",
                color: accent,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: `${uiFont}, Inter, system-ui, sans-serif`,
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





