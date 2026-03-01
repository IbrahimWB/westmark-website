// @ts-nocheck
"use client"

import * as React from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function ThroughputCapacityStrip(props) {
    const {
        pill,
        value1,
        suffix1,
        label1,
        value2,
        suffix2,
        label2,
        value3,
        suffix3,
        label3,
        headingFont,
        uiFont,
        bodyFont,
        bg,
        panelBg,
        border,
        text,
        muted,
        accent1,
        accent2,
        accent3,
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
            <div className="tcs-wrap" style={{ maxWidth, margin: "0 auto" }}>
                <div
                    className="tcs-shell"
                    style={{
                        borderRadius: radius,
                        border: `1px solid ${border}`,
                        background: panelBg,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                        padding: "28px 28px 26px 28px",
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            borderRadius: 999,
                            padding: "6px 14px",
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
                        {pill}
                    </div>

                    <div
                        className="tcs-grid"
                        style={{
                            marginTop: 16,
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: 28,
                            alignItems: "start",
                        }}
                    >
                        <Metric value={value1} suffix={suffix1} label={label1} color={accent1} headingFont={headingFont} muted={muted} />
                        <Metric value={value2} suffix={suffix2} label={label2} color={accent2} headingFont={headingFont} muted={muted} />
                        <Metric value={value3} suffix={suffix3} label={label3} color={accent3} headingFont={headingFont} muted={muted} />
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .tcs-grid {
                        grid-template-columns: 1fr !important;
                        gap: 18px !important;
                    }
                    .tcs-shell {
                        padding: 22px 20px !important;
                    }
                }
                .tcs-wrap {
                    padding: 0 16px;
                }
                @media (min-width: 768px) {
                    .tcs-wrap {
                        padding: 0 20px;
                    }
                }
                @media (min-width: 1024px) {
                    .tcs-wrap {
                        padding: 0 24px;
                    }
                }
            `}</style>
        </section>
    )
}

function Metric({ value, suffix, label, color, headingFont, muted }) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    fontFamily: `${headingFont}, "Clash Grotesk", "Helvetica Neue", Inter, system-ui, sans-serif`,
                }}
            >
                <span style={{ fontSize: 32, lineHeight: 1.05, fontWeight: 700, color }}>{value}</span>
                <span style={{ fontSize: 28, lineHeight: 1.05, fontWeight: 600, color, opacity: 0.9 }}>{suffix}</span>
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: muted, fontWeight: 500 }}>{label}</div>
        </div>
    )
}





