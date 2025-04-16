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
            startOfStudyDate: new Date(2016, 1, 1),
            endOfStudyDate: new Date(2018, 1, 1),
        },
        {
            id: 1,
            studyTitle: "Licence Info",
            schoolName: "Fac Aix Montperrin",
            schoolLocation: "Aix-en-Provence, France",
            startOfStudyDate: new Date(2015, 1, 1),
            endOfStudyDate: new Date(2016, 1, 1),
        },
        {
            id: 2,
            studyTitle: "DUT",
            schoolName: "IUT Aix",
            schoolLocation: "Aix-en-Provence, France",
            startOfStudyDate: new Date(2013, 1, 1),
            endOfStudyDate: new Date(2015, 1, 1),
        },
    ],
    professional: [
        {
            id: 0,
            jobTitle: "Gameplay programmer",
            companyName: "Smart Tale Games",
            location: "Montpellier, France",
            startDate: new Date(2018, 1, 1),
            endDate: new Date(2024, 1, 1),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias sunt enim id veniam et, dolores vero totam dolore beatae, nam ipsam quidem sed! Ex veritatis at temporibus corporis nulla!",
        },
    ],
    projects: [
        {
            id: 0,
            projectName: "CV Builder",
            startDate: new Date(2025, 4),
            description:
                "Resume generation app.\nAllows you to build and customize your resume.",
        },
    ],
}
