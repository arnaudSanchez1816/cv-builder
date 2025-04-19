import "../styles/PersonalDetailsSection.css"
import { EditForm, EditFormInput } from "./EditForm"
import EditSection from "./EditSection"
import { Icon } from "@iconify/react/dist/iconify.js"
import EditButton from "./EditButton"
import { useContext, useState } from "react"
import { ResumeContext } from "../contexts/ResumeContext"

const sectionIcon = "material-symbols:id-card-outline-rounded"

function PersonalDetailsEditSection({
    personalDetailsValue,
    onSubmit,
    onCancel,
}) {
    const [personalDetails, setPersonalDetails] = useState(personalDetailsValue)

    const onFormSubmitted = () => {
        onSubmit(personalDetails)
    }

    return (
        <EditSection
            sectionTitle="Edit Personal details"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <div className="personal-section-content">
                <EditForm onSubmit={onFormSubmitted} onCancel={onCancel}>
                    <EditFormInput
                        id="full-name"
                        value={personalDetails.fullname}
                        label="Full name"
                        onChange={(e) => {
                            setPersonalDetails({
                                ...personalDetails,
                                fullname: e.target.value,
                            })
                        }}
                    />
                    <EditFormInput
                        id="job-title"
                        value={personalDetails.jobTitle}
                        label="Job title"
                        onChange={(e) => {
                            setPersonalDetails({
                                ...personalDetails,
                                jobTitle: e.target.value,
                            })
                        }}
                    />
                    <EditFormInput
                        id="email"
                        value={personalDetails.email}
                        label="Email"
                        options={{ recommended: true }}
                        onChange={(e) => {
                            setPersonalDetails({
                                ...personalDetails,
                                email: e.target.value,
                            })
                        }}
                    />
                    <EditFormInput
                        id="phone"
                        value={personalDetails.phone}
                        label="Phone number"
                        options={{ recommended: true }}
                        onChange={(e) => {
                            setPersonalDetails({
                                ...personalDetails,
                                phone: e.target.value,
                            })
                        }}
                    />
                    <EditFormInput
                        id="address"
                        value={personalDetails.address}
                        label="Address"
                        options={{ recommended: true }}
                        onChange={(e) => {
                            setPersonalDetails({
                                ...personalDetails,
                                address: e.target.value,
                            })
                        }}
                    />
                </EditForm>
            </div>
        </EditSection>
    )
}

function PersonalDetailsSection({ onEdit, onEditDone }) {
    const { resume, setResume } = useContext(ResumeContext)

    const onEditDetails = () => {
        const onSubmitEdit = (personalDetails) => {
            setResume({ ...resume, ...personalDetails })
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        const personalDetails = {
            fullname: resume.fullname,
            jobTitle: resume.jobTitle,
            email: resume.email,
            phone: resume.phone,
            address: resume.address,
        }

        onEdit(
            <PersonalDetailsEditSection
                personalDetailsValue={personalDetails}
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
