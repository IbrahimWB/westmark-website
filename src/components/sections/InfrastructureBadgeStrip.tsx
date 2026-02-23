// @ts-nocheck
"use client"

import * as React from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function InfrastructureBadgeStrip(props) {
    const { text, uiFont, bg, border, textColor, dotColor, maxWidth, paddingY, radius } = props

    return (
        <section
            style={{
                width: "100%",
                background: bg,
                padding: `${paddingY}px 0`,
                fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
            }}
        >
            <div style={{ maxWidth, margin: "0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        borderRadius: radius,
                        border: `1px solid ${border}`,
                        background: "rgba(5,7,8,0.98)",
                        minHeight: 34,
                        display: "grid",
                        placeItems: "center",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
                        padding: "0 12px",
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 9,
                            color: textColor,
                            fontSize: 16,
                            fontWeight: 420,
                            lineHeight: 1.1,
                            letterSpacing: "-0.005em",
                            fontFamily: `Inter, ${uiFont}, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                        }}
                    >
                        <Dot color={dotColor} />
                        <span>{text}</span>
                        <Dot color={dotColor} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Dot({ color }) {
    return (
        <span
            style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: color,
                boxShadow: "0 0 12px rgba(255,184,0,0.45)",
                flexShrink: 0,
            }}
        />
    )
}





