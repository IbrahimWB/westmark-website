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
                        background: "linear-gradient(90deg, rgba(5,7,8,0.98) 0%, rgba(7,12,14,0.98) 100%)",
                        minHeight: 36,
                        display: "grid",
                        placeItems: "center",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
                        padding: "0 14px",
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            color: textColor,
                            fontSize: 13,
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "0",
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





