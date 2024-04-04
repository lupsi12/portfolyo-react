import btk from "../assets/btk-git.png";
import cisco from "../assets/cisco-cyber.png";
import haccerrank from "../assets/haccerrank-java.png";
import tubitak from "../assets/tubitak-java.png";


export const info = {
    projects: [
        {
            id: 0,
            projectName: "Rent A Car",
            projectDesciription: "I developed a web-based project using the Spring Boot framework, PostgreSQL database\n" +
                "management system, and Hibernate ORM framework for handling database operations. The\n" +
                "architecture is well-structured into different layers, including the business, data access, and\n" +
                "presentation layers, with data transfer between layers handled by DTO (Data Transfer Object)\n" +
                "classes.",
            projectUsages: ["Spring Boot", "PostgreSQL", "Hibernate ORM","Spring MVC", "Swagger UI", "Java Bean Validation API","Hibernate ValidatorSure!"],
            projectLink:"https://github.com/lupsi12/rentAcar-backend",
        },
        {
            id: 1,
            projectName: "Fitness Backend",
            projectDesciription: "The backend part of the project designed to gain the skills of creating a web page,\n" +
                "creating and using a database\n" +
                "Entity, service, controller, repository, responses, config, exception, request, security",
            projectUsages: ["Spring Boot", "PostgreSQL", "Hibernate ORM","Spring MVC", "Swagger UI", "Java Bean Validation API","Hibernate ValidatorSure!"],
            projectLink: "https://github.com/lupsi12/fitness-app-backend",
        },
        {
            id: 2,
            projectName: "Threads Restourant",
            projectDesciription: "In the development of the Restaurant Management System project, the Swing graphical\n" +
                "box library, one of Java's own, was used by the Java programming language and the\n" +
                "interface design team.",
            projectUsages: ["Spring Boot", "PostgreSQL", "Hibernate ORM","Spring MVC", "Swagger UI", "Java Bean Validation API","Hibernate ValidatorSure!"],
            projectLink: "https://github.com/lupsi12/threads-Restaurant-system",
        },
    ],
    about: [
        {
            firstPart:"Hi there,",
            secondPart:"I'm Işıl,I currently live in Kocaeli and work as a third-year computer engineering student at Kocaeli University.",
            thirdPart:"I'm an innovative thinker, and a experienced software engineer with diverse backgrounds, My expertise in java backend development, along with my curiosity for emerging technologies and strong interpersonal commonication skills, enables me to approach projects with a passionate attitude to achieve success."
        }
    ],
    certificates: [
        {
            id: 0,
            image: btk,
            text: "Versiyon Kontrolleri: Git ve Github"
        },
        {
            id: 1,
            image: cisco,
            text: "Introduction To CyberSecurity"
        },
        {
            id: 2,
            image: haccerrank,
            text: "Java(Basic) HaccerRank"
        },
        {
            id: 3,
            image: tubitak,
            text: "TÜBİTAK BİLGEM YTE Bootcamp 2023: Java Eğitimi"
        },
    ],
};