const RESUME_LAYOUT_TOP = "top"
const RESUME_LAYOUT_LEFT = "left"
const RESUME_LAYOUT_RIGHT = "right"

export { RESUME_LAYOUT_TOP, RESUME_LAYOUT_LEFT, RESUME_LAYOUT_RIGHT }

export const exampleResume = {
    fullname: "JC Denton",
    jobTitle: "UNATCO Agent",
    email: "jcdenton@unatco.com",
    phone: "250-631-9471",
    address: "Liberty Island, New York City, USA",
    education: [
        {
            id: 0,
            studyTitle: "Top Secret",
            schoolName: "Majestic 12 education facility",
            schoolLocation: "Switzerland",
            startOfStudyDate: "2029",
            endOfStudyDate: "2047",
        },
        {
            id: 1,
            studyTitle: "Nano-augmentation",
            schoolName: "UNATCO Laboratory",
            schoolLocation: "United States of America",
            startOfStudyDate: "2052",
            endOfStudyDate: "",
        },
    ],
    professional: [
        {
            id: 0,
            jobTitle: "Anti-terrorist agent",
            companyName: "United Nations Anti-Terrorist Coalition",
            location: "New York City, USA",
            startDate: "2052",
            endDate: "present",
            description:
                "In charge of investigating and dismantling the NSF terrorist group all over the United States of America.",
        },
    ],
    projects: [
        {
            id: 0,
            projectName: "Nano-augmentation customization",
            startDate: "2052",
            description:
                "Experimenting and customizing the nano-augmentations I have been enhanced with.\nIncludes many aspect such as improved running speed, ability to breath under water and an invisibility cloak.",
        },
    ],
    customization: {
        layout: RESUME_LAYOUT_TOP,
        accentColor: "#218c74",
        textAccentColor: "#ffffff",
    },
}

export function createResume() {
    return { ...exampleResume }
}

export function createResumeProfessionalEntry(id) {
    return {
        id: id,
        jobTitle: "Job title",
        companyName: "Company name",
        location: "Location",
        startDate: "Start date",
        endDate: "End date",
        description: "",
    }
}

export function createResumeEducationEntry(id) {
    return {
        id: id,
        studyTitle: "Study title",
        schoolName: "School name",
        schoolLocation: "Location",
        startOfStudyDate: "Start date",
        endOfStudyDate: "End date",
    }
}

export function createResumeProjectEntry(id) {
    return {
        id: id,
        projectName: "Project name",
        startDate: "Date",
        description: "",
    }
}
