const skillsSet = [
    {
        title: 'Technologies',
        imgLink: 'src/assets/images/code.gif',
        items: ['HTML/CSS', 'JavaScript', 'React', 'Python', "MongoDb", 'Mongoose']
    },
    {
        title: 'Frameworks & Services',
        imgLink: 'src/assets/images/gears.gif',
        items: ['Github', 'Google OAuth', 'JWT Authentication', 'JSON', 'Node.js', 'Express.js', 'Docker', 'Django']
    },
    {
        title: 'Methodologies',
        imgLink: 'src/assets/images/learning.gif',
        items: ['Agile development', 'RESTful Routing', 'QA Testing', 'Problem Solving', 'Debugging']
    }
]

const myProjects = [
    {
        id: 1,
        name: 'Simon',
        decs: 'This is Simon game',
        imgLink: './src/assets/images/smoke.png',
        clicked: true
    },
    {
        id: 2,
        name: 'DragonBall',
        decs: 'This is DragonBall ',
        imgLink: './src/assets/images/smoke.png',
        clicked: false
    },
    {
        id: 3,
        name: 'Game Blog',
        decs: 'This is GameBlog',
        imgLink: './src/assets/images/smoke.png',
        clicked: false
    },
    {
        id: 4,
        name: 'Testing',
        decs: 'This is testing',
        imgLink: './src/assets/images/smoke.png',
        clicked: false
    }
]

export { skillsSet, myProjects }