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
        langs: ['CSS', 'HTML', 'JavaScript'],
        img1: './src/assets/images/simon/homepage.png',
        img2: './src/assets/images/simon/level.png',
        img3: './src/assets/images/simon/game-over.png',
        github: 'https://github.com/TuanNguyen0915/simon_game/tree/main',
        play: 'https://tuanng-simon.netlify.app/',
        decs: "Simon is a game that can help people train their eyes and brain. The game involves looking at quick flashes of colors, which can help train your eye focus. Additionally, remembering the sequence of the colors can help train your brain's memory.",
        clicked: true
    },
    {
        id: 2,
        name: 'Dragon Ball',
        langs: ['CSS', 'HTML', 'Python', 'Django'],
        img1: './src/assets/images/dragon_ball/home.png',
        img2: './src/assets/images/dragon_ball/detail.png',
        img3: './src/assets/images/dragon_ball/chars.png',
        github: 'https://github.com/TuanNguyen0915/dragon_ball_character_collector/tree/main',
        play: 'https://dbzcollector.fly.dev/',
        clicked: false,
        decs: "This is a platform where DBZ's fans can share their opinion about their favorite characters and characters best skills. Users have the ability to create characters and manage their content using the Create Read Update Delete (CRUD) operations."
    },
    {
        id: 3,
        name: 'Coffee Possess',
        langs: ['CSS', 'HTML', 'JavaScript', 'React'],
        img1: './src/assets/images/coffee_possess/coffeeone.png',
        img2: './src/assets/images/coffee_possess/coffeetwo.png',
        img3: './src/assets/images/coffee_possess/coffeethree.png',
        github: 'https://github.com/TuanNguyen0915/coffees-possees-frontend/tree/main',
        play: 'https://coffees-and-posses.netlify.app/',
        clicked: false,
        decs: 'Do you like coffee? Of course you do... but who do you take your coffee with? We hope not alone! Coffees & Posses is here to help bring like-minded people together with the easy use of a full stack application that allows you to create clubs within your local coffeeshops.'
    },
    {
        id: 4,
        name: 'Tic Tac Toe',
        langs: ['CSS', 'HTML', 'JavaScript'],
        img1: './src/assets/images/tic-tac-toe/new-game.png',
        img2: './src/assets/images/tic-tac-toe/win.png',
        img3: './src/assets/images/tic-tac-toe/tie.png',
        clicked: false,
        decs: "Tic Tac Toe is a classic game played on a 3x3 grid. Two players take turns marking the spaces with X or O to make three in a row horizontally, vertically, or diagonally. If all 9 squares are filled and neither player has three in a row, the game is a tie"
    }
]

const experiences = [
    {
        company: 'General Assembly',
        exp: "Full-stack software engineering 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. ",
        img: './src/assets/images/jobs/ga.png',
        exp2: ''
    },
    {
        company: 'Target',
        exp: "Dedicate over 65% of daily tasks to inspecting in-store merchandise, ensuring optimal presentation and customer satisfaction.Efficiently organize back-room inventory for streamlined accessibility, assisting team members in efficient product retrieval.",
        img: './src/assets/images/jobs/target.png',
    },
    {
        company: 'Vietnamese Restaurant',
        exp: "The duties include taking orders, serving drinks and food, answering questions about menu options, processing payments, illustrating the food menu and drink list, communicating with customers to make them feel comfortable, and quickly solving their questions.",
        img: './src/assets/images/jobs/pho.jpeg',

    },
    {
        company: 'ACB Bank',
        exp: "As a bank teller, I would be responsible for assisting customers with various transactions and providing customer service. My duties would include cashing checks, canceling checks, processing wire transfers, handling loan payments, and assisting with loan applications.",
        img: './src/assets/images/jobs/acb.svg',

    }
]

export { skillsSet, myProjects, experiences }