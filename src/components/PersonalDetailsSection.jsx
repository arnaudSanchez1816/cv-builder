import "../styles/PersonalDetailsSection.css"
import { EditForm, EditFormInput } from "./EditForm"
import EditSection from "./EditSection"
import { Icon } from "@iconify/react/dist/iconify.js"
import EditButton from "./EditButton"
import { useContext } from "react"
import { ResumeContext } from "../contexts/ResumeContext"

const sectionIcon = "material-symbols:id-card-outline-rounded"

function PersonalDetailsEditSection({ resume, onSubmit, onCancel }) {
    return (
        <EditSection
            sectionTitle="Edit Personal details"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <div className="personal-section-content">
                <EditForm onSubmit={onSubmit} onCancel={onCancel}>
                    <EditFormInput
                        id="full-name"
                        value={resume.fullname}
                        label="Full name"
                    />
                    <EditFormInput
                        id="job-title"
                        value={resume.jobTitle}
                        label="Job title"
                    />
                    <EditFormInput
                        id="email"
                        value={resume.email}
                        label="Email"
                        options={{ recommended: true }}
                    />
                    <EditFormInput
                        id="phone"
                        value={resume.phone}
                        label="Phone number"
                        options={{ recommended: true }}
                    />
                    <EditFormInput
                        id="address"
                        value={resume.address}
                        label="Address"
                        options={{ recommended: true }}
                    />
                </EditForm>
            </div>
        </EditSection>
    )
}

function PersonalDetailsSection({ onEdit, onEditDone }) {
    const resume = useContext(ResumeContext)

    const onEditDetails = () => {
        const onSubmitEdit = () => {
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        onEdit(
            <PersonalDetailsEditSection
                resume={resume}
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
            />
        )
    }

    return (
        <EditSection
            sectionIcon={sectionIcon}
            sectionTitle="Personal details"
            options={{ showHeader: false, headerFoldable: false }}
        >
            <div className="personal-section-content preview">
                <div className="group">
                    <p className="fullname">{resume.fullname}</p>
                    <p className="job-title">{resume.jobTitle}</p>
                </div>
                <div className="group">
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="ic:round-email"
                        />
                        {resume.email}
                    </p>
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="ic:round-phone"
                            strokeWidth="1"
                            stroke="currentcolor"
                        />
                        {resume.phone}
                    </p>
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="mdi:location"
                        />
                        {resume.address}
                    </p>
                </div>
                <EditButton onClick={onEditDetails} />
            </div>
        </EditSection>
    )
}

export default PersonalDetailsSection
