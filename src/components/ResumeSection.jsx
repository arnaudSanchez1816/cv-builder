import "../styles/ResumeSection.css"

function ResumeSection({ title, children }) {
    return (
        <section className="resume-section">
            <h3 className="resume-section-title">{title}</h3>
            <div className="resume-section-content">{children}</div>
        </section>
    )
}

export default ResumeSection
