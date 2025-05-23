import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/ResumeHeader.css"

function ResumeHeader({ fullName, jobTitle, email, phone, address }) {
    return (
        <div className="resume-header">
            <h1 className="fullname">{fullName}</h1>
            <h2 className="job-title italic">{jobTitle}</h2>
            <div className="resume-header-details">
                <span className="email flex flex-row align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-email"
                    />
                    {email}
                </span>
                <span className="phone flex flex-row align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-phone"
                        strokeWidth="1"
                        stroke="currentcolor"
                    />
                    {phone}
                </span>
                <span className="address flex flex-row align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="mdi:location"
                    />
                    {address}
                </span>
            </div>
        </div>
    )
}

export default ResumeHeader
