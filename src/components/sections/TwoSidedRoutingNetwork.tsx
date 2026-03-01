// @ts-nocheck
"use client"

import * as React from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */

export default function TwoSidedRoutingNetwork(props) {
    const {
        eyebrow,
        heading,
        subheading,
        footnote,

        // colors (default = reference vibe)
        bg,
        panelBg,
        panelBg2,
        border,
        borderStrong,
        text,
        muted,
        accent,
        danger,

        // typography
        headingFont,
        uiFont,
        bodyFont,

        // layout
        maxWidth,
        paddingY,
        gap,
        radius,
    } = props

    const buyerItems = [
        { title: "Enterprise Buyers", subtitle: "Active RFP", pill: "ROUTABLE", state: "ok" },
        { title: "Growth Stage", subtitle: "Budget Approved", pill: "ROUTABLE", state: "ok" },
        { title: "Strategic Partners", subtitle: "Qualified Intent", pill: "ROUTABLE", state: "ok" },
        { title: "Early Stage", subtitle: "Exploratory", pill: null, state: "off" },
    ]

    const sellerItems = [
        { title: "Solution Providers", subtitle: "High Volume", pill: "ACTIVE", state: "ok" },
        { title: "Service Partners", subtitle: "Mid-Market Focus", pill: "ACTIVE", state: "ok" },
        { title: "Enterprise Vendors", subtitle: "Strategic Only", pill: "ACTIVE", state: "ok" },
        { title: "Early Vendors", subtitle: "Unverified", pill: null, state: "bad" },
    ]

    const rootRef = React.useRef<HTMLElement | null>(null)
    const gridRef = React.useRef<HTMLDivElement | null>(null)
    const leftColRef = React.useRef<HTMLDivElement | null>(null)
    const rightColRef = React.useRef<HTMLDivElement | null>(null)
    const boxRef = React.useRef<HTMLDivElement | null>(null)
    const [containerWidth, setContainerWidth] = React.useState(1200)

    const layoutMode = containerWidth <= 600 ? "mobile" : containerWidth <= 980 ? "tablet" : "desktop"
    const isTablet = layoutMode === "tablet"
    const isMobile = layoutMode === "mobile"
    const isStacked = isTablet || isMobile

    const [arrowGeometry, setArrowGeometry] = React.useState({
        show: false,
        width: 1,
        height: 1,
        y: 0,
        leftX1: 0,
        leftX2: 0,
        rightX1: 0,
        rightX2: 0,
    })

    const boxW = 210

    React.useLayoutEffect(() => {
        const root = rootRef.current
        if (!root) return

        const updateWidth = () => setContainerWidth(root.getBoundingClientRect().width)
        updateWidth()

        let observer: ResizeObserver | null = null
        if (typeof ResizeObserver !== "undefined") {
            observer = new ResizeObserver(() => updateWidth())
            observer.observe(root)
        } else {
            window.addEventListener("resize", updateWidth)
        }

        return () => {
            if (observer) observer.disconnect()
            else window.removeEventListener("resize", updateWidth)
        }
    }, [])

    const updateArrowGeometry = React.useCallback(() => {
        const grid = gridRef.current
        const leftCol = leftColRef.current
        const rightCol = rightColRef.current
        const box = boxRef.current

        if (!grid || !leftCol || !rightCol || !box) return

        if (layoutMode !== "desktop") {
            setArrowGeometry((prev) => (prev.show ? { ...prev, show: false } : prev))
            return
        }

        const gridRect = grid.getBoundingClientRect()
        const leftRect = leftCol.getBoundingClientRect()
        const rightRect = rightCol.getBoundingClientRect()
        const boxRect = box.getBoundingClientRect()

        const leftX1 = leftRect.right - gridRect.left
        const leftX2 = boxRect.left - gridRect.left
        const rightX1 = boxRect.right - gridRect.left
        const rightX2 = rightRect.left - gridRect.left
        const y = boxRect.top + boxRect.height / 2 - gridRect.top

        const leftWidth = Math.max(0, leftX2 - leftX1)
        const rightWidth = Math.max(0, rightX2 - rightX1)
        const show = leftWidth > 8 && rightWidth > 8

        setArrowGeometry({ show, width: gridRect.width, height: gridRect.height, y, leftX1, leftX2, rightX1, rightX2 })
    }, [layoutMode])

    React.useLayoutEffect(() => {
        updateArrowGeometry()
        const onResize = () => updateArrowGeometry()
        window.addEventListener("resize", onResize)

        let observer: ResizeObserver | null = null
        if (typeof ResizeObserver !== "undefined") {
            observer = new ResizeObserver(() => updateArrowGeometry())
            if (gridRef.current) observer.observe(gridRef.current)
            if (leftColRef.current) observer.observe(leftColRef.current)
            if (rightColRef.current) observer.observe(rightColRef.current)
            if (boxRef.current) observer.observe(boxRef.current)
        }

        return () => {
            window.removeEventListener("resize", onResize)
            if (observer) observer.disconnect()
        }
    }, [updateArrowGeometry])

    return (
        <section
            ref={rootRef}
            style={{
                width: "100%",
                background: bg,
                color: text,
                padding: `${paddingY}px 0`,
                fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
            }}
        >
            {/* Header */}
            <div
                className="tsrn-header"
                style={{
                    maxWidth,
                    margin: "0 auto",
                    padding: isMobile ? "0 16px" : isTablet ? "0 20px" : "0 24px",
                    textAlign: "center",
                }}
            >
                <EyebrowPill label={eyebrow} accent={accent} border={border} uiFont={uiFont} />

                <h2
                    className="tsrn-title"
                    style={{
                        margin: "18px 0 10px 0",
                        fontSize: isMobile ? 34 : isTablet ? 44 : containerWidth <= 1200 ? 50 : 56,
                        lineHeight: 1.14,
                        letterSpacing: "-0.02em",
                        fontWeight: 380,
                        display: "block",
                        paddingBottom: "0.06em",
                        fontFamily: `${headingFont}, "Clash Grotesk", "Helvetica Neue", Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                        color: "rgba(224,224,224,0.95)",
                        background:
                            "linear-gradient(180deg, rgba(242,242,242,0.96) 0%, rgba(212,212,212,0.9) 58%, rgba(138,138,138,0.78) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "none",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                    }}
                >
                    {heading}
                </h2>

                <p
                    className="tsrn-subtitle"
                    style={{
                        margin: 0,
                        maxWidth: isMobile ? "92vw" : 720,
                        marginInline: "auto",
                        color: muted,
                        fontSize: 14,
                        lineHeight: 1.7,
                        fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                    }}
                >
                    {subheading}
                </p>
            </div>

            {/* Main */}
            <div
                className="tsrn-grid"
                ref={gridRef}
                style={{
                    maxWidth,
                    margin: "52px auto 0 auto",
                    padding: isMobile ? "0 16px" : isTablet ? "0 20px" : "0 24px",
                    display: "grid",
                    gridTemplateColumns: isStacked ? "1fr" : "1fr auto 1fr",
                    alignItems: "center",
                    gap: isStacked ? 28 : gap,
                    position: "relative",
                }}
            >
                {arrowGeometry.show ? (
                    <svg
                        className="tsrn-arrows-dynamic"
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            zIndex: 1,
                        }}
                        viewBox={`0 0 ${Math.max(1, arrowGeometry.width)} ${Math.max(1, arrowGeometry.height)}`}
                        preserveAspectRatio="none"
                    >
                        <line
                            x1={arrowGeometry.leftX1}
                            y1={arrowGeometry.y}
                            x2={arrowGeometry.leftX2}
                            y2={arrowGeometry.y}
                            stroke="rgba(0,255,200,0.30)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d={`M ${arrowGeometry.leftX2 - 8} ${arrowGeometry.y - 6} L ${arrowGeometry.leftX2} ${arrowGeometry.y} L ${arrowGeometry.leftX2 - 8} ${arrowGeometry.y + 6}`}
                            fill="none"
                            stroke="rgba(0,255,200,0.30)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle cx={arrowGeometry.leftX2} cy={arrowGeometry.y} r={2.5} fill={accent} opacity={0.9} />

                        <line
                            x1={arrowGeometry.rightX1}
                            y1={arrowGeometry.y}
                            x2={arrowGeometry.rightX2}
                            y2={arrowGeometry.y}
                            stroke="rgba(0,255,200,0.30)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d={`M ${arrowGeometry.rightX2 - 8} ${arrowGeometry.y - 6} L ${arrowGeometry.rightX2} ${arrowGeometry.y} L ${arrowGeometry.rightX2 - 8} ${arrowGeometry.y + 6}`}
                            fill="none"
                            stroke="rgba(0,255,200,0.30)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle cx={arrowGeometry.rightX2} cy={arrowGeometry.y} r={2.5} fill={accent} opacity={0.9} />
                    </svg>
                ) : null}

                {/* Left */}
                <div
                    className="tsrn-col"
                    ref={leftColRef}
                    style={isStacked ? { width: "100%", maxWidth: 720, margin: "0 auto" } : undefined}
                >
                    <SideHeader
                        title="Buyer Nodes"
                        subtitle="Inbound signal sources"
                        icon={<IconBuyerNodes color={accent} />}
                        uiFont={uiFont}
                    />
                    <div
                        className="tsrn-list"
                        style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: isMobile ? 10 : 14 }}
                    >
                        {buyerItems.map((it) => (
                            <NodeRow
                                key={it.title}
                                title={it.title}
                                subtitle={it.subtitle}
                                pill={it.pill}
                                state={it.state}
                                accent={accent}
                                danger={danger}
                                panelBg={panelBg}
                                border={border}
                                borderStrong={borderStrong}
                                muted={muted}
                                uiFont={uiFont}
                                bodyFont={bodyFont}
                            />
                        ))}
                    </div>
                </div>

                {/* Center routing */}
                <div
                    className="tsrn-center"
                    style={{
                        position: "relative",
                        width: isStacked ? "100%" : 260,
                        height: isMobile ? 220 : isTablet ? 260 : 340,
                        overflow: "visible",
                        display: isStacked ? "grid" : undefined,
                        placeItems: isStacked ? "center" : undefined,
                    }}
                >
                    <div
                        className="tsrn-box"
                        ref={boxRef}
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: boxW,
                            borderRadius: radius,
                            background: panelBg2,
                            border: `1px solid ${borderStrong}`,
                            boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 30px 80px rgba(0,0,0,0.65), 0 0 70px rgba(0, 255, 200, 0.06)`,
                            padding: 18,
                            textAlign: "center",
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                width: 54,
                                height: 54,
                                borderRadius: "50%",
                                margin: "0 auto 12px auto",
                                background: `radial-gradient(circle at 30% 30%, rgba(0,255,200,0.30), rgba(0,0,0,0) 60%), rgba(0,255,200,0.10)`,
                                border: `1px solid rgba(0,255,200,0.22)`,
                                display: "grid",
                                placeItems: "center",
                                boxShadow: `0 0 20px rgba(0,255,200,0.12)`,
                            }}
                        >
                            <IconArrowRightCircle color={accent} />
                        </div>

                        <div
                            style={{
                                fontSize: 11,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: accent,
                                fontWeight: 700,
                                marginBottom: 6,
                                fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                            }}
                        >
                            ROUTING LAYER
                        </div>
                        <div
                            style={{
                                fontSize: 12,
                                color: muted,
                                marginBottom: 14,
                                fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                            }}
                        >
                            Match • Filter • Route
                        </div>

                        <div
                            style={{
                                fontSize: 11,
                                color: "rgba(255,255,255,0.55)",
                                fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                            }}
                        >
                            87% of signals qualify
                            <br />
                            for routing
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div
                    className="tsrn-col"
                    ref={rightColRef}
                    style={isStacked ? { width: "100%", maxWidth: 720, margin: "0 auto" } : undefined}
                >
                    <SideHeader
                        title="Seller Nodes"
                        subtitle="Destination endpoints"
                        icon={<IconSellerNodes color={accent} />}
                        align={isStacked ? "left" : "right"}
                        uiFont={uiFont}
                    />
                    <div
                        className="tsrn-list"
                        style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: isMobile ? 10 : 14 }}
                    >
                        {sellerItems.map((it) => (
                            <NodeRow
                                key={it.title}
                                title={it.title}
                                subtitle={it.subtitle}
                                pill={it.pill}
                                state={it.state}
                                accent={accent}
                                danger={danger}
                                panelBg={panelBg}
                                border={border}
                                borderStrong={borderStrong}
                                muted={muted}
                                uiFont={uiFont}
                                bodyFont={bodyFont}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer note */}
            <div style={{ maxWidth, margin: "46px auto 0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        borderRadius: radius + 6,
                        border: `1px solid rgba(255,255,255,0.06)`,
                        background: "rgba(255,255,255,0.02)",
                        padding: "18px 18px",
                        color: "rgba(255,255,255,0.62)",
                        fontSize: 13,
                        lineHeight: 1.7,
                        textAlign: "center",
                        fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                    }}
                >
                    {footnote}
                </div>
            </div>

        </section>
    )
}

/* ---------- pieces ---------- */

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
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                boxShadow: "0 0 0 1px rgba(0,255,200,0.06), inset 0 0 18px rgba(0,255,200,0.1)",
            }}
        >
            {label}
        </div>
    )
}

function SideHeader({ title, subtitle, icon, align = "left", uiFont }) {
    const right = align === "right"
    return (
        <div style={{ display: "flex", flexDirection: right ? "row-reverse" : "row", alignItems: "center", gap: 12 }}>
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    border: "1px solid rgba(0,255,200,0.18)",
                    background: "rgba(0,255,200,0.06)",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 0 30px rgba(0,255,200,0.06)",
                }}
            >
                {icon}
            </div>

            <div style={{ textAlign: right ? "right" : "left" }}>
                <div
                    style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.92)",
                        fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        marginTop: 2,
                        fontSize: 12,
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                    }}
                >
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

function NodeRow({
    title,
    subtitle,
    pill,
    state, // ok | off | bad
    accent,
    danger,
    panelBg,
    border,
    borderStrong,
    muted,
    uiFont,
    bodyFont,
}) {
    const isOff = state === "off"
    const isBad = state === "bad"
    const iconColor = isBad ? danger : isOff ? "rgba(255,255,255,0.20)" : accent

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 14,
                padding: "16px 16px",
                borderRadius: 14,
                background: isOff ? "rgba(255,255,255,0.01)" : panelBg,
                border: `1px solid ${isOff ? "rgba(255,255,255,0.05)" : borderStrong}`,
                boxShadow: isOff ? "none" : "0 20px 60px rgba(0,0,0,0.55)",
                opacity: isOff ? 0.75 : 1,
            }}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ marginTop: 2 }}>{isBad ? <IconX color={iconColor} /> : <IconCheck color={iconColor} />}</div>

                <div>
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: isOff ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.90)",
                            fontFamily: `${bodyFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            marginTop: 3,
                            fontSize: 12,
                            color: muted,
                            fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>
            </div>

            {pill ? (
                <span
                    style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.10em",
                        borderRadius: 8,
                        padding: "7px 10px",
                        border: `1px solid ${border}`,
                        background: "rgba(0,255,200,0.07)",
                        color: accent,
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        fontFamily: `${uiFont}, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                    }}
                >
                    {pill}
                </span>
            ) : null}
        </div>
    )
}

/* ---------- icons ---------- */

function IconBuyerNodes({ color = "#00FFC8" }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="2.6" stroke={color} strokeWidth="2" />
            <path d="M4.4 17.4c0-2.2 2.1-4 4.6-4s4.6 1.8 4.6 4" stroke={color} strokeWidth="2" strokeLinecap="round" />

            <circle cx="16.2" cy="8.8" r="2" stroke={color} strokeWidth="2" opacity="0.95" />
            <path d="M13.3 16.9c.5-1.7 2-2.9 3.8-2.9 1 0 1.9.3 2.6.8" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.95" />
        </svg>
    )
}

function IconSellerNodes({ color = "#00FFC8" }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M7 3.8h7.5L19 8.3V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.8a2 2 0 0 1 2-2Z"
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M14.5 3.8V7a1.3 1.3 0 0 0 1.3 1.3H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.2 11h7.6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.95" />
            <path d="M8.2 14.5h7.6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.95" />
            <path d="M8.2 18h4.6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.95" />
        </svg>
    )
}

function IconArrowRightCircle({ color = "#00FFC8" }) {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M10 8l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function IconCheck({ color = "#00FFC8" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" opacity="0.9" />
            <path d="M8 12.5l2.6 2.6L16.5 9.2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function IconX({ color = "#FF5252" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" opacity="0.9" />
            <path d="M9 9l6 6M15 9l-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

/* ---------- controls ---------- */





