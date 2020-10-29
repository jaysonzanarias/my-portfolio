import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return data;
  }
}

let data = [
  {
    name: "My Portfolio",
    type: "web",
    technologies: "Angular, Angular Material, HTML, CSS, JavaScript, Node.js, npm, TypeScript, Git, GitHub, etc.",
    details:
      `I've created this site using Angular for frontend development, Angular Material for some UI elements (but still most of the behavior and looks are pure JavaScript and CSS that I’ve created manually), and hosted here in GitHub (for now). It is still work in progress and I will update occasionally in the future. This will serve as a medium for me to showcase some of the projects and technologies that I'm currently working on and projects I had in the past that are hard to display in common platform such as LinkedIn. Unfortunately, some of the awesome projects that I've done are NDA protected and I cannot share them here.

    The layout of this site is simple:
    •	Home - is the welcome page where you can check some of my online presence (LinkedIn, GitHub, HackerRank, etc.) and other details.
    •	Skills - as the name suggest, it is where you can check my skills or technologies that I have used.
    •	Portfolio - is this page where I've listed some of the projects I've worked on. You can select a category to filter the projects or simply view them all; then at the center you'll see the project details, screenshots, and some captions about them; and at the right are some of the technologies I can disclose that I used for that particular project.
    •	Tutorial - this is where I will put some articles I've created that I believe is beneficial for other people.
    •	Vlog - I have a YouTube channel, basically I will just feature some of my videos in this section.
    •	Contact - shows where you can contact me.
    •	Live Projects - is where you can check my online projects/tools I've created for fun. Hopefully, some of them will be useful for you or other people.

    Since I'm not a UI/UX expert, I tried first copying different porfolio designs I find interesting and tried recreating them on my own from scratch (allowing me to learn and improve a lot in the process) then adding a little twist/design ideas of my own. Below are my main resources for web design ideas.
    •	DesignCourse: https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow
    •	Traversy Media: https://www.youtube.com/user/TechGuyWeb

    For fun, I’ll be listing the different challenges I’ve faced when developing my portfolio (I’ll add more as I continue to improve this site):
      1.	CSS/Layout design
      2.	WYSIWYG for paragraph - this is for displaying nicely the details of each project in my Portfolio. Have to find ways of storing and displaying text with formatting (certain text in bold, paragraph indentation, item listing or numbering, adding URL links, etc.) instead of simply displaying text in continuously and non-stop manner.
`,
    images: [
      { image_name: "my_port_01.jpg", caption: "Home" },
    ]
  },

  {
    name: "OOE Web App",
    type: "web",
    technologies: "React, PostgreSQL, PLC, Material UI, Git, etc.",
    details: "This is a prototype I created for a side project I had, it's a monitoring and management web app for the OEE of a particular company. In this project I used React for frontend development and PostgreSQL for database. I also studied PLC language for programming the hardware devices.",
    images: [
      { image_name: "OEE_02.png", caption: "Shows the work calendar, data trends, data journal or logs plus the filtering options." },
      { image_name: "OEE_01.png", caption: "Login screen with registration and password reset." },
      { image_name: "OEE_03.png", caption: "Shows the contact details modal (have to blur them, I've used my friends details. Hi guys! :D). Basically, the user can select a person to route the event for appropriate actions." },
      { image_name: "OEE_04.png", caption: "Dashboard screen, where user can quickly see important details, assigned items for immediate actions, and a way to send message or notification to other users." },
    ]
  },
  {
    name: "Dice Distribution Simulator",
    type: ["web", "backend"],
    technologies: "Angular, Angular Material, Java, Spring Boot, PostgreSQL, HTML, CSS, JavaScript, TypeScript, Node.js, npm, Maven, Git, GitHub, etc.",
    details: `This is a programming exam from one of the companies I applied on before. In summary, the user can configure the parameters for the dice distribution (number of dice, dice sides, and number of rolls), after clicking Roll Dice button it will send the request to the server I created with Spring Boot, after the computation (figuring out the proper computation based on the requirements and other details provided were part of the challenge) it will forward back the response to the frontend for the displaying of the results. 

    I used Angular and Angular Material for the UI and PostgreSQL for the database.`,
    images: [
      { image_name: "dice_distribution_simulator_client.jpg", caption: "Shows the dice distribution options that the user can configure, generated distribution, and historical execution summary." },
    ]
  },
  {
    name: "Project Iris",
    type: ["mobile", "backend"],
    technologies: "React Native, Python, Google’s Translator, Text-to-Speech, Speech-to-Text, Image Processing (Machine Learning), Git, etc.",
    details: `Together with four other developers, Project Iris, was our entry for our tribe's internal hackathon event that lasted for two days.
    Project Iris is a mobile app for the blind, the goal is to help them on many things (e.g. recognize and locate objects/registered faces, identify obstacles or danger, locate pedestrian crossing or nearby places, etc.) and serve all of them in a single app and for free. Initially started as a hackathon entry in the office, with simple functionality like capturing an image and searching in it an object via speech recognition, doing an image processing, and then telling the object's location via text-to-speech technology. 
    Main technologies used were React Native for the mobile app; Python for our backend and Machine Learning; Google's Translator, and Text-to-Speech/Speech-to-Text. My main responsibilities were in the mobile app's development, code integration developed by my teammates, and mobile app to backend communications.
    `,
    images: [
      { image_name: "project_iris_02.png", caption: "How the interface looks like when run on a simulator or in the actual phone (where the black background is the actual view of the place to search for, similar to how camera in our phone looks like). The blind user can click the 'Hold for Voice Search' button and start saying the things to look for. After that, the user will tap the 'CAPTURE IMAGE' which will send the request to the backend that we've created for futher processing, after processing it will forward back the results to the phone, using text-to-speech technology the phone will tell thru voice how many objects were identified and their current location on the image. We know that there are lot of areas for improvement but given the time constraints of two days, we were very happy with the results." },
      { image_name: "project_iris_01.png", caption: "Shows the mobile app's ML (Machine Learning) recognizes three people in the image." },
      { image_name: "project_iris_03.png", caption: "We won 1st place! :D" },
    ]
  },
  {
    name: "GitLab Dashboard",
    type: ["web", "backend"],
    technologies: "React, Chart.js, GitLab API, MongoDB, etc.",
    details:
      `
    This is a pet project I had in the office before, so it’s under NDA and I cannot show the UI but basically it's a web app tool to help track and visualize different statuses of our GitLab projects for improving and following our ways of working, it connects to GitLab API and shows different information such as:
      1. Branch name, its owner, when it was created, etc.
      2. Projects not following naming convention set by our Business Line.
      3. Branches (such as code review branches) that has been living for too long (because ideally branches should live shortly and be deleted once merged to the main branch).
      4. GitLab projects per team.
      5. Build statuses of project selected.
      6. Teams can also select their project to check branches ready for code review or for merge.
      7. And more.

    Some of the functionalities of this tool is already provided by GitLab UI but what I did is consolidate them for easy viewing and make it ideal for displaying. I’ve used React for frontend, Chart.js for visualization of different charts, and Node.js for the backend.
    `
    ,
    images: [
      { image_name: "gitlab.png", caption: "" },
    ]
  },
  {
    name: "e-Commerse Site for an Art Company",
    type: "web",
    technologies: "PHP, HTML, CSS, JavaScript, Bootstrap, PayPal-to-PHP Library, SVN, etc.",
    details: "This is one of my side project, together with 3 other devs, we've turned the static website of an art company to a more dynamic and user friendly website; migrating online some of the manual transactions such as ordering and payment transactions. My main responsibility in the overall solution is to integrate UI designs, UI to backend communications, and backend processing including integration to payment merchants. UI is created using basic HTML, CSS, and JavaScript plus some libraries; while, the backend is created using PHP and some library for PHP to PayPal integrations.",
    images: [
      { image_name: "HAA_02.png", caption: "User can see different paintings in a gallery style view." },
      { image_name: "HAA_01.png", caption: "Home or landing page of the site. User can quickly navigate to different sections of the page using the menu options at the top (Navbar) and view his/her shopping cart. User can also select at the bottom category of art materials to display (painting, sculptures, etc.)." },
      { image_name: "HAA_03.png", caption: "After the user select a particular painting, the user will be presented with this view where it will display different information about the art such as the dimension, materials used, year created, etc. and an Add to Cart button if ever the user decided to checkout the art material." },
      { image_name: "HAA_04.png", caption: "View for the artist bio." },
      { image_name: "HAA_05.png", caption: "Artist list view, user can select an artist and view all relevant art works by that artist." },
      { image_name: "HAA_06.png", caption: "Checkout view." },
      { image_name: "HAA_07.png", caption: "Checkout view with quantity option." },
      { image_name: "HAA_08.png", caption: "Admin's dashboard for User's Account management." },
      { image_name: "HAA_09.png", caption: "Admin's dashboard for Product management." }
    ]
  },
  {
    name: "Employee Management System",
    type: "desktop",
    technologies: "Java, Java Swing, Biometric scanner device, MySQL",
    details: "This is one of the side project I had, which is also NDA protected, basically it’s a standard CRUD (creating/saving employee records in the database, retrieving them, then editing or deleting, etc.) like system for managing employee records especially their timesheets. What’s unique about this project is that I have used a biometric scanner device for the employee’s time in/out records which is faster than the manual punched-in like device they were using before. The employees time in/out records will then be processed for monthly salary computation. I had fun doing this because I was able to use a hardware device, which is nice to have once in a while in a project.",
    images: []
  },
  {
    name: "Web Scraping for Mobile App",
    type: ["mobile", "backend"],
    technologies: "Java, Web Scraping, jsoup, Marshalling/Unmarshalling, etc",
    details: "This is for an Upwork project I had, I cannot disclose the full details and I've cut some of the parts of the screenshots, but basically my responsiblities were to create a web scraping logic for different websites that will be fed to a mobile app. I've also worked on adding unit testing for easier and faster testing, created different test cases and documented them for future references and development. I'm super happy working on this project because it's a new experience and a kind of project for me.",
    images: [
      { image_name: "NewsY_01.png", caption: "Sample data fetched from the server" },
      { image_name: "NewsY_02.png", caption: "Sample data fetched from the server" },
      { image_name: "NewsY_03.png", caption: "Sample data fetched from the server" },
    ]
  },
  {
    name: "Intelligent Library Assistant (ILA) (thesis)",
    type: "desktop",
    technologies: "Java, Java Swing, AI, NLP, Text-to-Speech, Wamp Server, MySQL, Photoshop, etc.",
    details: "This was for my thesis in college (2009-2010) it's a library system in which I've added an AI through Natural Language Processing (NLP) and applied text-to-speech technology. This was written in Java and was running in a MySQL database. This is super hard not only I have to create a library system, which by itself is already hard; but, I also have to integrate an AI. Super proud of my work that even now I'm still showing or adding it in my portfolio. I know there are lots of bad codes in this system and I would have written it differently now. But yeah, I enjoyed it and super proud of it. Please see screenshots and captions for more details. Thank you!",
    images: [
      { image_name: "ILA_19_ILA.JPG", caption: "The main window for the AI; where the AI's face is displayed, a text box to allow user to AI interaction, and a panel showing their historical conversation. The system utilizes text-to-speech technology allowing the user to not only see but also hear the AI's reply. In terms of the AI's facial expression, I've just created them to act or show random facial expression to make it more realistic." },
      { image_name: "ILA_20_ILA_2.JPG", caption: "Another screenshot showing different facial expression of the AI." },
      { image_name: "ILA_21_ILA_3.JPG", caption: "Shows that the AI can perform mathematical computations." },
      { image_name: "ILA_01_Splash_Screen.JPG", caption: "Loading screen." },
      { image_name: "ILA_02_main_Menu.JPG", caption: "Welcome Screen available only to librarian and system admin. The librarian can click CLIENT, which will show the views for the students (to go back to this screen, a login screen will be shown) or click LIBRARIAN instead where administrative task of the librarian can be performed." },
      { image_name: "ILA_03_login.JPG", caption: "Login screen (I could have improved this...)" },
      { image_name: "ILA_04_options.JPG", caption: "Option screen available only to librarian and system admin." },
      { image_name: "ILA_05_login_logout.JPG", caption: "Login/out screen for library users. Replacing the manual process." },
      { image_name: "ILA_06_search.JPG", caption: "View for searching library materials." },
      { image_name: "ILA_07_search_borrow.JPG", caption: "View for borrowing a library material." },
      { image_name: "ILA_08_search_return.JPG", caption: "View for returning a library material." },
      { image_name: "ILA_09_search_view.JPG", caption: "Book details view." },
      { image_name: "ILA_10_librarian.JPG", caption: "Main view when logging in librarian account." },
      { image_name: "ILA_11_librarian_addNewLibrarian.JPG", caption: "View for adding new librarian account." },
      { image_name: "ILA_12_librarian_addNewMaterials.JPG", caption: "Clicking Add New Materials button will show categories of library materials to add." },
      { image_name: "ILA_13_librarian_addNewMaterials_books.JPG", caption: "Add new book records view." },
      { image_name: "ILA_14_librarian_addNewUser_college.JPG", caption: "Add new user or college student view." },
      { image_name: "ILA_15_librarian_addNewUsers.JPG", caption: "Categories for different types of users to add." },
      { image_name: "ILA_16_librarian_viewLibrarians.JPG", caption: "List of librarians view." },
      { image_name: "ILA_17_librarian_viewMaterials.JPG", caption: "Librarian's view for editing library materials." },
      { image_name: "ILA_18_librarian_viewUsers.JPG", caption: "Librarian's view for editing library users." }
    ]
  },
  {
    name: "Inventory Management System",
    type: "desktop",
    technologies: "Java, Java Swing, JDBC, MySQL, SVN, etc.",
    details: "One of my side project. A standard desktop application for managing product inventory and sales transactions (plus other business related operations) that saves on a MySQL database and that can also be extracted to an Excel file. Written in Java and uses Java Swing for the UI.",
    images: [
      { image_name: "GamePlace_01.png", caption: "View for managing sale transactions." },
      { image_name: "GamePlace_02.png", caption: "Sample UI showing the different business categories the user can work on." }
    ]
  },
  {
    name: "PSEMonitor App",
    type: ["backend"],
    technologies: "Java",
    details: "(Screenshot not available) A simple backend service written in Java that connects to and retrieves different PSE stocks information from public APIs. I created this to monitor PSE stocks I'm interested in before. Basically an Investagram like but displayed in your terminal.",
    images: []
  },
  {
    name: "Log Analyzer",
    type: ["backend"],
    technologies: "Java",
    details: `(No screenshots because details are NDA protected. Basically this describes simple applications I've created in the past that is run manually or automatically in the background.).
    Before, when centralized logs repository with different powerful built-in tools is not yet a thing, analyzing logs to check for errors or system wide behavior is a common task made by developers and I've experienced personally in my career. With these, I find myself creating (beyond of my work or our target deliverables) a couple of times simple Java applications for automating the reading and basic analyzing of large log files. From showing of different information such as duration of execution, displaying different types of errors grouped by category, to triggering events based from the retrieve information and more. These helps in shortening the time needed to analyze different log files and allows us to easily see what’s happening within the system by seeing a summarized reports of the log files.`,
    images: []
  },
  {
    name: "Hacker's Puzzle",
    type: ["desktop", "game"],
    technologies: "GameMaker, GameMaker Language (GML)",
    details: "Working by team, this was one of our projects during college days. Created using GameMaker app and using custom language called GameMaker Language (GML). Basically, it's a game comprising of different popular common games such as Pairs, Quiz Bee, Maze, etc.; with different levels, difficulty, scoring mechanics, etc. and that has IT or Computer Science concepts integrated with it. Graphics made by my team mates.",
    images: [
      { image_name: "hackers_puzzle_01.jpg", caption: "Main menu (graphics made by Rexon Chumacera)." },
      { image_name: "hackers_puzzle_02.jpg", caption: "Map showing the first available island or level." },
      { image_name: "hackers_puzzle_03.jpg", caption: "Map showing all islands or levels unlocked." },
      { image_name: "hackers_puzzle_04.jpg", caption: "Mystery box." },
      { image_name: "hackers_puzzle_05.jpg", caption: "Top scores window." },
      { image_name: "hackers_puzzle_06.jpg", caption: "Sample screenshot for Pairs game where at the bottom you'll see details of the opened picture." },
      { image_name: "hackers_puzzle_07.jpg", caption: "Start of Pairs game." },
      { image_name: "hackers_puzzle_08.jpg", caption: "Shows the remaining life of the player." },
      { image_name: "hackers_puzzle_09.jpg", caption: "Quiz game starting with easy level." },
      { image_name: "hackers_puzzle_10.jpg", caption: "Software Engineering class, batch 2009-2020." }
    ]
  },
  {
    name: "BeatBox App",
    type: ["desktop", "game"],
    technologies: "Java, Java Swing",
    details: "This is from HeadFirst book and one of my favorite applications when I was just starting out with Java during my college days. Basically, you’ll just tick each check boxes that corresponds to the sound and beat you would like to hear and some buttons for the different controls.",
    images: [
      { image_name: "BeatBoxApp.jpg", caption: "Creates a sound or beat based from the pattern you make." }
    ]
  },
  {
    name: "Unity Projects",
    type: ["desktop", "game"],
    technologies: "Unity, C#",
    details: "Below are some screenshots of my attempt to create simple games. Some of the games are from Brackeys (https://www.youtube.com/user/Brackeys) and even though I just recreated the game from the tutorial (and it’s not portfolio worth lols), I’m still happy because creating a game is one of my childhood dreams and with this I was able to have an idea how to create simple games with levels, use Unity as game engine, use C# for game dev programming, and added some variations of my own. It was super fun!",
    images: [
      { image_name: "unity_projects_08.jpg", caption: "" },
      { image_name: "unity_projects_01.jpg", caption: "" },
      { image_name: "unity_projects_02.jpg", caption: "" },
      { image_name: "unity_projects_03.jpg", caption: "" },
      { image_name: "unity_projects_04.jpg", caption: "" },
      { image_name: "unity_projects_05.jpg", caption: "" },
      { image_name: "unity_projects_06.jpg", caption: "" },
      { image_name: "unity_projects_07.jpg", caption: "" },
      { image_name: "unity_projects_09.jpg", caption: "" },
      { image_name: "unity_projects_10.jpg", caption: "" },
    ]
  },
];