import { ResumeContext } from "../contexts/ResumeContext"
import {
    RESUME_LAYOUT_LEFT,
    RESUME_LAYOUT_RIGHT,
    RESUME_LAYOUT_TOP,
} from "../data"
import "../styles/CustomizationPanel.css"
import EditSection from "./EditSection"
import { useContext } from "react"

const ACCENT_COLOR_VARIABLE = "--resume-accent-color"
const TEXT_ACCENT_COLOR_VARIABLE = "--resume-text-accent-color"

function CustomizationColorPicker({ id, label, value, onChange }) {
    return (
        <div className="customization-color-picker">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="color" value={value} onChange={onChange} />
        </div>
    )
}

function CustomizationColors() {
    const root = document.documentElement

    const { resume, setResume } = useContext(ResumeContext)
    const customization = resume.customization

    return (
        <EditSection sectionTitle="Colors" options={{ headerFoldable: false }}>
            <div className="color-pickers">
                <CustomizationColorPicker
                    id="accent-color"
                    label="Accent color"
                    value={customization.accentColor}
                    onChange={(e) => {
                        const newColor = e.target.value

                        root.style.setProperty(ACCENT_COLOR_VARIABLE, newColor)
                        setResume({
                            ...resume,
                            customization: {
                                ...customization,
                                accentColor: newColor,
                            },
                        })
                    }}
                />
                <CustomizationColorPicker
                    id="text-accent-color"
                    label="Text accent color"
                    value={customization.textAccentColor}
                    onChange={(e) => {
                        const newColor = e.target.value

                        root.style.setProperty(
                            TEXT_ACCENT_COLOR_VARIABLE,
                            newColor
                        )
                        setResume({
                            ...resume,
                            customization: {
                                ...customization,
                                textAccentColor: newColor,
                            },
                        })
                    }}
                />
            </div>
        </EditSection>
    )
}

function CustomizationLayout() {
    const { resume, setResume } = useContext(ResumeContext)
    const customization = resume.customization

    const updateResumeLayout = (layout) => {
        setResume({
            ...resume,
            customization: {
                ...customization,
                layout: layout,
            },
        })
    }

    return (
        <EditSection sectionTitle="Layout" options={{ headerFoldable: false }}>
            <h2 className="text-[1.25rem]">Header position</h2>
            <div className="layout-options">
                <button
                    data-selected={customization.layout === RESUME_LAYOUT_TOP}
                    onClick={() => updateResumeLayout(RESUME_LAYOUT_TOP)}
                >
                    <div className={`layout-option ${RESUME_LAYOUT_TOP}`}></div>
                    <span>Top</span>
                </button>
                <button
                    data-selected={customization.layout === RESUME_LAYOUT_LEFT}
                    onClick={() => updateResumeLayout(RESUME_LAYOUT_LEFT)}
                >
                    <div
                        className={`layout-option ${RESUME_LAYOUT_LEFT}`}
                    ></div>
                    <span>Left</span>
                </button>
                <button
                    data-selected={customization.layout === RESUME_LAYOUT_RIGHT}
                    onClick={() => updateResumeLayout(RESUME_LAYOUT_RIGHT)}
                >
                    <div
                        className={`layout-option ${RESUME_LAYOUT_RIGHT}`}
                    ></div>
                    <span>Right</span>
                </button>
            </div>
        </EditSection>
    )
}

function CustomizationPanel() {
    return (
        <main className="customization-panel">
            <div className="customization-panel-content">
                <CustomizationLayout />
                <CustomizationColors />
            </div>
        </main>
    )
}

export default CustomizationPanel
