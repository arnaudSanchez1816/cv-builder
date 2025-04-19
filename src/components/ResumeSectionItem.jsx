import "../styles/ResumeSectionItem.css"

function ResumeSectionItem({
    title,
    subTitle,
    startDate,
    endDate,
    location,
    description,
}) {
    return (
        <div className="resume-section-item">
            <div className="group pr-[1rem]">
                <div>
                    {startDate && startDate}
                    {endDate && " - "}
                    {endDate && endDate}
                </div>
                <div>{location}</div>
            </div>
            <div className="group">
                {title && <div className="title bold">{title}</div>}
                {subTitle && <div className="sub-title italic">{subTitle}</div>}
                {description && <p className="description">{description}</p>}
            </div>
        </div>
    )
}

export default ResumeSectionItem
