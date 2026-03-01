// @ts-nocheck
"use client"

import * as React from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function OldWayVsNewWaySection(props) {
    const {
        eyebrow,
        heading,
        subheading,
        shiftTag,
        shiftText,
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

    const leftItems = [
        "Search for prospects",
        "Run campaigns",
        "Hire teams to prospect",
        "Pay per contact",
        "Chase conversations",
        "Hope to be discovered",
    ]

    const rightItems = [
        "Prospects route to you",
        "Introductions flow automatically",
        "Infrastructure handles routing",
        "Pay for infrastructure access",
        "Conversations come to you",
        "ICP routes through you",
    ]

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
                        margin: "20px 0 12px 0",
                        fontSize: "clamp(40px, 6vw, 56px)",
                        lineHeight: 1.14,
                        letterSpacing: "-0.02em",
                        fontWeight: 360,
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

                <p style={{ margin: 0, color: muted, fontSize: 14, lineHeight: 1.7, maxWidth: 760, marginInline: "auto" }}>{subheading}</p>
            </div>

            <div
                className="ovn-grid"
                style={{
                    maxWidth,
                    margin: "52px auto 0 auto",
                    padding: "0 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                }}
            >
                <ComparisonPanel
                    title="Traditional Methods"
                    subtitle="Manual outreach and searching"
                    icon={<IconOld color="rgba(255,255,255,0.55)" />}
                    items={leftItems}
                    levelLeft="OPERATING LEVEL"
                    levelRight="Individual"
                    accent={accent}
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                    bodyFont={bodyFont}
                    border={border}
                    borderStrong="rgba(255,255,255,0.08)"
                    bg={panelBg}
                />

                <ComparisonPanel
                    title="myoProcess"
                    subtitle="Routing infrastructure"
                    icon={<IconNew color={accent} />}
                    items={rightItems}
                    levelLeft="OPERATING LEVEL"
                    levelRight="Systems"
                    accent={accent}
                    text={text}
                    muted={muted}
                    uiFont={uiFont}
                    bodyFont={bodyFont}
                    border={border}
                    borderStrong={borderStrong}
                    bg={`linear-gradient(90deg, ${panelBgStrong} 0%, rgba(0,255,200,0.08) 100%)`}
                    isPositive
                />
            </div>

            <div style={{ maxWidth, margin: "20px auto 0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        borderRadius: radius,
                        border: `1px solid ${border}`,
                        background: "linear-gradient(90deg, rgba(0,255,200,0.05) 0%, rgba(0,255,200,0.02) 100%)",
                        padding: "26px 22px",
                        textAlign: "center",
                    }}
                >
                    <EyebrowPill label={shiftTag} accent={accent} border={border} uiFont={uiFont} />
                    <p style={{ margin: "14px 0 0 0", color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.7, fontWeight: 420 }}>{shiftText}</p>
                </div>
            </div>

            <style>{`
                @media (max-width: 980px) {
                    .ovn-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}

function ComparisonPanel({
    title,
    subtitle,
    icon,
    items,
    levelLeft,
    levelRight,
    accent,
    text,
    muted,
    uiFont,
    bodyFont,
    border,
    borderStrong,
    bg,
    isPositive = false,
}) {
    return (
        <div
            style={{
                borderRadius: 14,
                border: `1px solid ${borderStrong}`,
                background: bg,
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                padding: 22,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9,
                        border: `1px solid ${border}`,
                        background: "rgba(0,255,200,0.05)",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    {icon}
                </div>
                <div>
                    <div style={{ fontSize: 17, lineHeight: 1.2, fontWeight: 650, color: text, fontFamily: `${uiFont}, Inter, system-ui, sans-serif` }}>{title}</div>
                    <div style={{ marginTop: 3, fontSize: 12, color: isPositive ? accent : muted }}>{subtitle}</div>
                </div>
            </div>

            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                    <div
                        key={item}
                        style={{
                            borderRadius: 8,
                            border: `1px solid ${isPositive ? border : "rgba(255,255,255,0.08)"}`,
                            background: isPositive ? "rgba(0,255,200,0.06)" : "rgba(255,255,255,0.01)",
                            padding: "12px 14px",
                            color: isPositive ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.64)",
                            fontSize: 14,
                            lineHeight: 1.45,
                            fontWeight: isPositive ? 580 : 460,
                            fontFamily: `${bodyFont}, Inter, system-ui, sans-serif`,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: isPositive ? accent : "rgba(255,255,255,0.4)" }} />
                        {item}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 18, borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 14, display: "flex", justifyContent: "space-between", gap: 12 }}>
                <span style={{ fontSize: 12, letterSpacing: "0.12em", fontWeight: 700, color: isPositive ? accent : "rgba(255,255,255,0.55)" }}>{levelLeft}</span>
                <span style={{ fontSize: 12, color: isPositive ? accent : "rgba(255,255,255,0.55)", fontWeight: isPositive ? 700 : 500 }}>{levelRight}</span>
            </div>
        </div>
    )
}

function EyebrowPill({ label, accent, border, uiFont }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(0,255,200,0.22)",
                background: "linear-gradient(90deg, rgba(0,165,255,0.12) 0%, rgba(0,255,200,0.12) 100%)",
                color: "#18E0FF",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: `${uiFont}, Inter, system-ui, sans-serif`,
                boxShadow: "0 0 0 1px rgba(0,255,200,0.06), inset 0 0 18px rgba(0,255,200,0.1)",
            }}
        >
            {label}
        </div>
    )
}

function IconOld({ color = "rgba(255,255,255,0.55)" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="2.6" stroke={color} strokeWidth="2" />
            <path d="M4.4 17.4c0-2.2 2.1-4 4.6-4s4.6 1.8 4.6 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

function IconNew({ color = "#00FFC8" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="2.2" stroke={color} strokeWidth="2" />
            <circle cx="6.5" cy="16.5" r="2.2" stroke={color} strokeWidth="2" />
            <circle cx="17.5" cy="16.5" r="2.2" stroke={color} strokeWidth="2" />
            <path d="M10.4 7.7 8 14.2m5.6-6.5 2.4 6.5M8.8 16.5h6.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}





