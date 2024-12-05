export interface Data {
    icon?: string;
    name: string;
    description: string;
    image?: string;
}

export const programmingLanguages: Data[] = [
    {
        icon: 'devicon-html5-plain-wordmark',
        name: 'HTML',
        description: 'Hypertext Markup Language'
    },
    {
        icon: 'devicon-css3-plain-wordmark',
        name: 'CSS',
        description: 'Cascading Style Sheets'
    },
    {
        icon: 'devicon-javascript-plain',
        name: 'JavaScript',
        description: 'JavaScript'
    },
    {
        icon: 'devicon-typescript-plain',
        name: 'TypeScript',
        description: 'TypeScript'
    },
    {
        icon: 'devicon-dotnetcore-plain',
        name: '.NET',
        description: '.NET Core'
    },
    {
        icon: 'devicon-angularjs-plain',
        name: 'Angular',
        description: 'Angular'
    },
    {
        icon: 'devicon-java-plain',
        name: 'Java',
        description: 'Java'
    }
]

export const projects: Data[] = [
    {
        image: 'assets/images/projects/1.jpg',
        name: 'Project 1',
        description: 'This is a project description'
    }
]