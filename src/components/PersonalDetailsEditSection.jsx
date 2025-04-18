import "../styles/PersonalDetailsEditSection.css"
import EditForm from "./EditForm"
import EditFormInput from "./EditFormItem"
import EditSection from "./EditSection"
import { exampleResume } from "../data"
import { Icon } from "@iconify/react/dist/iconify.js"
import EditButton from "./EditButton"
import { useState } from "react"

function PersonalDetailsEditForm({ onSubmit, onCancel }) {
    const resumeData = exampleResume

    return (
        <div className="personal-section-content">
            <EditForm onSubmit={onSubmit} onCancel={onCancel}>
                <EditFormInput
                    id="full-name"
                    value={resumeData.fullname}
                    label="Full name"
                />
                <EditFormInput
                    id="job-title"
                    value={resumeData.jobTitle}
                    label="Job title"
                />
                <EditFormInput
                    id="email"
                    value={resumeData.email}
                    label="Email"
                    options={{ recommended: true }}
                />
                <EditFormInput
                    id="phone"
                    value={resumeData.phone}
                    label="Phone number"
                    options={{ recommended: true }}
                />
                <EditFormInput
                    id="address"
                    value={resumeData.address}
                    label="Address"
                    options={{ recommended: true }}
                />
            </EditForm>
        </div>
    )
}

function PersonalDetailsPreviewSection({ onEditClicked }) {
    const resumeData = exampleResume

    return (
        <div className="personal-section-content preview">
            <div className="group">
                <p className="fullname">{resumeData.fullname}</p>
                <p className="job-title">{resumeData.jobTitle}</p>
            </div>
            <div className="group">
                <p className="flex align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-email"
                    />
                    {resumeData.email}
                </p>
                <p className="flex align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-phone"
                        strokeWidth="1"
                        stroke="currentcolor"
                    />
                    {resumeData.phone}
                </p>
                <p className="flex align-i-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="mdi:location"
                    />
                    {resumeData.address}
                </p>
            </div>
            <EditButton onClick={onEditClicked} />
        </div>
    )
}

function PersonalDetailsEditSection() {
    const [isEditing, setIsEditing] = useState(false)

    const onSubmitEdit = () => {
        setIsEditing(false)
        // Update resume data
    }

    const onCancelEdit = () => {
        setIsEditing(false)
    }

    const onEditDetails = () => {
        setIsEditing(true)
    }

    return (
        <EditSection
            sectionIcon="material-symbols:id-card-outline-rounded"
            sectionTitle="Personal details"
            options={{ showHeader: isEditing, headerFoldable: false }}
        >
            {isEditing && (
                <PersonalDetailsEditForm
                    onCancel={onCancelEdit}
                    onSubmit={onSubmitEdit}
                />
            )}
            {isEditing === false && (
                <PersonalDetailsPreviewSection onEditClicked={onEditDetails} />
            )}
        </EditSection>
    )
}

export default PersonalDetailsEditSection
