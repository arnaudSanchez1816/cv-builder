export const exampleResume = {
    fullname: "Arnaud Sanchez",
    jobTitle: "Dev Full Stack",
    email: "asanchez@gmail.com",
    phone: "0102030405",
    address: "Montpellier, France",
    education: [
        {
            id: 0,
            studyTitle: "Master Info",
            schoolName: "Fac Sciences Mtp",
            schoolLocation: "Montpellier, France",
            startOfStudyDate: "2016",
            endOfStudyDate: "2018",
        },
        {
            id: 1,
            studyTitle: "Licence Info",
            schoolName: "Fac Aix Montperrin",
            schoolLocation: "Aix-en-Provence, France",
            startOfStudyDate: "2015",
            endOfStudyDate: "2016",
        },
        {
            id: 2,
            studyTitle: "DUT",
            schoolName: "IUT Aix",
            schoolLocation: "Aix-en-Provence, France",
            startOfStudyDate: "2013",
            endOfStudyDate: "2015",
        },
    ],
    professional: [
        {
            id: 0,
            jobTitle: "Gameplay programmer",
            companyName: "Smart Tale Games",
            location: "Montpellier, France",
            startDate: "2018",
            endDate: "2024",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias sunt enim id veniam et, dolores vero totam dolore beatae, nam ipsam quidem sed! Ex veritatis at temporibus corporis nulla!",
        },
    ],
    projects: [
        {
            id: 0,
            projectName: "CV Builder",
            startDate: "2025",
            description:
                "Resume generation app.\nAllows you to build and customize your resume.",
        },
    ],
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
