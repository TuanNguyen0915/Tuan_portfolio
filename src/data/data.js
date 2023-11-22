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
        img1: './src/assets/images/simon/homepage.png',
        img2: './src/assets/images/simon/level.png',
        img3: './src/assets/images/simon/game-over.png',
        github: 'https://github.com/TuanNguyen0915/simon_game/tree/main',
        play: 'https://tuanng-simon.netlify.app/',
        clicked: true
    },
    {
        id: 2,
        name: 'Dragon Ball',
        decs: 'This is DragonBall ',
        img1: './src/assets/images/dragon_ball/home.png',
        img2: './src/assets/images/dragon_ball/detail.png',
        img3: './src/assets/images/dragon_ball/chars.png',
        github: 'https://github.com/TuanNguyen0915/dragon_ball_character_collector/tree/main',
        play: 'https://dbzcollector.fly.dev/',
        clicked: false
    },
    {
        id: 3,
        name: 'Coffee Possess',
        decs: 'This is Coffee Possess',
        img1: './src/assets/images/coffee_possess/coffeeone.png',
        img2: './src/assets/images/coffee_possess/coffeetwo.png',
        img3: './src/assets/images/coffee_possess/coffeethree.png',
        github: 'https://github.com/TuanNguyen0915/coffees-possees-frontend/tree/main',
        play: 'https://coffees-and-posses.netlify.app/',
        clicked: false
    },
    {
        id: 4,
        name: 'Testing',
        decs: 'This is testing',
        img1: './src/assets/images/simon/homepage.png',
        img2: './src/assets/images/simon/level.png',
        img3: './src/assets/images/simon/game-over.png',
        clicked: false
    }
]

const experiences = [
    {
        company: 'GA',
        exp: "Jezebel's critics accused it of crafting deliberately inflammatory headlines to generate rage clicks and of fostering bedlam in the comments.—Kathleen Walsh, Glamour, 10 Nov. 2023"
    },
    {
        company: 'Vietnamese Restaurant',
        exp: "Jezebel's critics accused it of crafting deliberately inflammatory headlines to generate rage clicks and of fostering bedlam in the comments.—Kathleen Walsh, Glamour, 10 Nov. 2023"
    },
    {
        company: 'ACB Bank',
        exp: "Jezebel's critics accused it of crafting deliberately inflammatory headlines to generate rage clicks and of fostering bedlam in the comments.—Kathleen Walsh, Glamour, 10 Nov. 2023"
    }
]

export { skillsSet, myProjects, experiences }