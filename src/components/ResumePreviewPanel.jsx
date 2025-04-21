import "../styles/ResumePreviewPanel.css"
import { useEffect, useRef } from "react"
import ResumePreview from "./ResumePreview"

function ResumePreviewPanel({ onShowResumeModal }) {
    const resumePreviewRef = useRef(null)
    const pageRef = useRef(null)
    const scalerRef = useRef(null)
    const resizableRef = useRef(null)

    const scaleResumePreview = () => {
        const scaler = scalerRef.current
        const resizable = resizableRef.current
        resizable.style.removeProperty("width")
        resizable.style.removeProperty("height")
        scaler.style.removeProperty("scale")

        const previewRect = resumePreviewRef.current.getBoundingClientRect()
        const pageRect = pageRef.current.getBoundingClientRect()

        const wS = previewRect.width
        const hS = previewRect.height
        const wI = pageRect.width
        const hI = pageRect.height

        const rS = wS / hS
        const rI = wI / hI

        if (wS < wI) {
            if (rS > rI) {
                const scaleRatio = hS / hI
                scaler.style.scale = scaleRatio
                resizable.style.width = wI * scaleRatio + "px"
                resizable.style.height = hS + "px"
            } else {
                const scaleRatio = wS / wI
                console.log(scaleRatio)

                scaler.style.scale = scaleRatio
                resizable.style.width = wS + "px"
                resizable.style.height = hI * scaleRatio + "px"
            }
        } else {
            resizable.style.width = wI + "px"
            resizable.style.height = hI + "px"
            scaler.style.scale = 1
        }
    }

    useEffect(() => {
        const scaler = scalerRef.current
        const resizable = resizableRef.current

        scaleResumePreview()
        window.addEventListener("resize", scaleResumePreview)

        return () => {
            window.removeEventListener("resize", scaleResumePreview)
            resizable.style.removeProperty("width")
            resizable.style.removeProperty("height")
            scaler.style.removeProperty("scale")
        }
    })

    const onPreviewClick = () => {
        onShowResumeModal()
    }
    return (
        <>
            <div className={"resume-preview"} ref={resumePreviewRef}>
                <div
                    ref={resizableRef}
                    onClick={onPreviewClick}
                    style={onShowResumeModal && { cursor: "zoom-in" }}
                >
                    <div
                        style={{ transformOrigin: "top left" }}
                        ref={scalerRef}
                    >
                        <ResumePreview ref={pageRef} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumePreviewPanel
