const slideList = [ {
    img: "images/portfolio1.png",
    title: "Restaurant Booking App",
    text: "GROUP PROJECT. The restaurant needs a way to book and arrange tables for customers who are booking over the phone. This system is for the staff to use. The application allows the manager to book a table at the restaurant for a particular customer at a particular time, date and also enables update a booking. Technologies used: Java, Spring, React, PSQL. ",
    link: "https://github.com/Slav666/booking-app"
    
},{
    img: "images/portfolio2.png",
    title: "'Slainte'- Beer Tracking App",
    text: "GROUP PROJECT. A user can add their favourite beer to the database application, edit and delete a beer from the database. The country of the beer production, which has been chosen by a user, will be marked on the Earth map with red colour. Technologies used: JavaScript, Node.js, Webpack, HTML, CSS, MongoDB.",
    link: "https://github.com/Slav666/js-group-project-beer"
},
{
    img: "images/portfolio3.png",
    title: "Animal Shelter App",
    text: "SOLO PROJECT. The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential new owners and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal to be adopted or to be added to the quarantine list. Technologies used: Ruby, Sinatra, HTML, CSS, PSQL.",
    link: "https://github.com/Slav666/Solo-project_animals-shelter"
},
{
    img: "images/portfolio4.png",
    title: "Gwent Memory Test Game",
    text: "SOLO PROJECT. At first turn, a player chooses a random card and try to guess where is the second the same card. If the player is not successful both cards move to the face-down position. The player tries to remember the card’s faces and cards location. When the player finds two the same cards, they stay face up and the player starts the next turn. Tech. used: JS, HTML, CSS.",
    link: "https://github.com/Slav666/Gwent_game"
},
{
    img: "images/portfolio5.png",
    title: "My portfolio website",
    text: "SOLO PROJECT. It is my portfolio website. The website contains all the information about me who I am, my technical education, lists of my projects, my hobbies, etc. Every element of this page I have created myself. Technologies used: HTML, CSS, Responsive web design, JavaScript, Photoshop.",
    link: "https://github.com/Slav666/Portfolio-project"
},
{
    img: "images/portfolio6.png",
    title: "ToDo List app React",
    text: "SOLO PROJECT. The application helps to create a list of all user tasks. The user can add a new task to the list with the task priority and predicted finish date. The user can see the list of all tasks with two buttons: done and remove. Done button move selected tasks to the finalised section. Remove button deletes selected tasks. Technologies used: React, HTML, CSS.",
    link: "https://github.com/Slav666/ToDo-List-React"
    },
{
    img: "images/portfolio7.png",
    title: "ToDo List app Java",
    text: "SOLO PROJECT. It's a full-stack application to create a list of all user tasks. User can type their name and choose a language. The app will welcome the user with a short sentence (in the selected language) and her or his name. The user can add a new task to do or mark tasks which are done. Technologies used: Java, H2 Database, HTML, CSS, JavaScript.",
    link: "https://github.com/Slav666/Java_TODO-LIst"
    }


]

const time = 8000;
let active = 0; 

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
    }

const image = document.querySelector('.web img');
const h2 = document.querySelector('.about h2');
const p = document.querySelector('.about p');
const a = document.querySelector('.about a');
const dots =[...document.querySelectorAll('.dots span')]

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active].img;
    h2.textContent = slideList[active].title;
    p.textContent = slideList[active].text;
    a.href= slideList[active].link

    changeDot()
}    

let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 37 || e.keyCode == 39) {
     clearInterval(indexInterval)
     e.keyCode == 37 ? active-- : active++;
     if (active === slideList.length) {
      active = 0;
     } else if (active < 0) {
      active = slideList.length - 1;
     }
     image.src = slideList[active].img;
     h2.textContent = slideList[active].title;
     p.textContent = slideList[active].text;
     a.href = slideList[active].link;
     changeDot();
     indexInterval = setInterval(changeSlide, time)
    }
    }
    
    window.addEventListener('keydown', keyChangeSlide)