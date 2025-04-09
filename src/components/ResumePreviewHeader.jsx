function ResumePreviewHeader({ fullName, jobTitle, email, phone, address }) {
    return (
        <div>
            <h1>{fullName}</h1>
            <h2>{jobTitle}</h2>
            <div>
                <span>{email}</span>
                <span>{phone}</span>
                <span>{address}</span>
            </div>
        </div>
    )
}

export default ResumePreviewHeader
