const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const observerLeft = new IntersectionObserver((leftEntries)=>{
    leftEntries.forEach((leftEntry)=>{
        if(leftEntry.isIntersecting){
            leftEntry.target.classList.add('left-show')
        }else{
            leftEntry.target.classList.remove('left-show')
        }
    })
})

const observerRight = new IntersectionObserver((rightEntries)=>{
    rightEntries.forEach((rightEntry)=>{
        if(rightEntry.isIntersecting){
            rightEntry.target.classList.add('right-show')
        }else{
            rightEntry.target.classList.remove('right-show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
const leftHiddenElements = document.querySelectorAll('.left-hidden')
const rightHiddenElements = document.querySelectorAll('.right-hidden')
const navBtns = document.querySelectorAll('.navBtn');
const section = document.querySelectorAll("section")
const navList = document.querySelector('.nav-list')
const toggleBtn = document.querySelector('.toggle-button')
const list = document.querySelector('.list')
const buttons = {
    button1: document.querySelector('.button1'),
    button2: document.querySelector('.button2'),
    button3: document.querySelector('.button3'),
    button4: document.querySelector('.button4'),
    btn1: document.querySelector('.btn1'),
    btn2: document.querySelector('.btn2'),
    btn3: document.querySelector('.btn3'),
}

let planetImg = document.querySelector('.planet-img')
let planetHead = document.querySelector('.head')
let planetInfo = document.querySelector('.info')
let planetAvgDist = document.querySelector('.avg-dist')
let planetTravelTime = document.querySelector('.time')
let moonBtn = document.querySelector('.moonBtn')
let marsBtn = document.querySelector('.marsBtn')
let europaBtn = document.querySelector('.europaBtn')
let titanBtn = document.querySelector('.titanBtn')

let guyImg = document.querySelector('.guy-img')
let rank = document.querySelector('.rank')
let guyName = document.querySelector('.name')
let guyInfo = document.querySelector('.guy-info')


let launchImg = document.querySelector('.launch-img')
let launchHead = document.querySelector('.launch-head')
let launchInfo = document.querySelector('.launch-info')

let operations = {
    moon: {
        img: "images/Moon.png",
        head: "MOON",
        info: "See our planet as you’ve never seen it before. A perfect<br> relaxing trip away to help regain perspective and come<br> back refreshed. While you’re there, take in some history<br> by visiting the Luna 2 and Apollo 11 landing sites.",
        avg: "384,400 km",
        time: "3 days"
    },
    mars: {
        img: "images/Mars.png",
        head: "MARS",
        info: "Don’t forget to pack your hiking boots. You’ll need them to<br> tackle Olympus Mons, the tallest planetary mountain in<br> our solar system. It’s two and a half times the size of<br> Everest!",
        avg: "225 MIL. km",
        time: "9 months"
    },
    europa: {
        img: "images/Europa.png",
        head: "EUROPA",
        info: "The smallest of the four Galilean moons orbiting Jupiter,<br> Europa is a winter lover’s dream. With an icy surface, it’s<br> perfect for a bit of ice skating, curling, hockey, or simple <br>  relaxation in your snug wintery cabin.",
        avg: "225 MIL. km",
        time: "9 months"
    },
    titan: {
        img: "images/Titan.png",
        head: "TITAN",
        info: "The only moon known to have a dense atmosphere other<br> than Earth, Titan is a home away from home (just a few<br> hundred degrees colder!). As a bonus, you get striking<br> views of the Rings of Saturn.",
        avg: "1.6 BIL. km",
        time: "7 years"
    },
    douglas: {
        img: "images/douglas.png",
        rank: "COMMANDER",
        name: "DOUGLAS HURLEY",
        info: "Douglas Gerald Hurley is an American engineer, former<br> Marine Corps pilot and former NASA astronaut. He<br> launched into space for the third time as commander of<br> Crew Dragon Demo-2."
    },
    mark: {
        img: "images/mark.png",
        rank: "Mission Specialist",
        name: "MARK SHUTTLEWORTH",
        info: "Mark Richard Shuttleworth is the founder and CEO of<br> Canonical, the company behind the Linux-based Ubuntu<br> operating system. Shuttleworth became the first South<br> African to travel to space as a space tourist."
    },
    victor: {
        img: "images/victor.png",
        rank: "PILOT",
        name: "Victor Glover",
        info: "Pilot on the first operational flight of the SpaceX Crew<br> Dragon to the International Space Station. Glover is a<br> commander in the U.S. Navy where he pilots an F/A-18.He<br> was a crew member of Expedition 64, and served as a<br> station systems flight engineer. "
    },
    anousheh: {
        img: "images/anousheh.png",
        rank: "Flight Engineer",
        name: "Anousheh Ansari",
        info: "Anousheh Ansari is an Iranian American engineer and<br> co-founder of Prodea Systems. Ansari was the fourth<br> self-funded space tourist, the first self-funded woman to<br> fly to the ISS, and the first Iranian in space. "
    },
    launch: {
        img: "images/launch-vehicle.png",
        header: "LAUNCH VEHICLE",
        info: "A launch vehicle or carrier rocket is a rocket-propelled<br> vehicle used to carry a payload from Earth's surface to<br> space, usually to Earth orbit or beyond. Our WEB-X<br> carrier rocket is the most powerful in operation.<br> Standing 150 metres tall, it's quite an awe-inspiring sight on<br> the launch pad!"
    },
    spaceport: {
        img: "images/spaceport.png",
        header: "SPACEPORT",
        info: "A spaceport or cosmodrome is a site for launching (or<br> receiving) spacecraft, by analogy to the seaport for ships<br> or airport for aircraft. Based in the famous Cape<br> Canaveral, our spaceport is ideally situated to take<br> advantage of the Earth’s rotation for launch."
    },
    capsule: {
        img: "images/space-capsule.png",
        header: "SPACE CAPSULE",
        info: "A space capsule is an often-crewed spacecraft that uses<br> a blunt-body reentry capsule to reenter the Earth's<br> atmosphere without wings. Our capsule is where you'll<br> spend your time during the flight. It includes a space<br> gym, cinema, and plenty of other activities to keep you<br> entertained."
    }

}

buttons.btn1.addEventListener('click', function(){
    if(buttons.btn2.classList.contains('activeDiv') || buttons.btn3.classList.contains('activeDiv')){
        buttons.btn2.classList.remove('activeDiv')
        buttons.btn3.classList.remove('activeDiv')
    }
    buttons.btn1.classList.add('activeDiv')

    launchImg.src = operations.launch.img
    launchHead.innerHTML = operations.launch.header
    launchInfo.innerHTML = operations.launch.info

})

buttons.btn2.addEventListener('click', function(){
    if(buttons.btn1.classList.contains('activeDiv') || buttons.btn3.classList.contains('activeDiv')){
        buttons.btn1.classList.remove('activeDiv')
        buttons.btn3.classList.remove('activeDiv')
    }
    buttons.btn2.classList.add('activeDiv')

    launchImg.src = operations.spaceport.img
    launchHead.innerHTML = operations.spaceport.header
    launchInfo.innerHTML = operations.spaceport.info
})

buttons.btn3.addEventListener('click', function(){
    if(buttons.btn1.classList.contains('activeDiv') || buttons.btn2.classList.contains('activeDiv')){
        buttons.btn1.classList.remove('activeDiv')
        buttons.btn2.classList.remove('activeDiv')
    }
    buttons.btn3.classList.add('activeDiv')

    if(launchImg.classList.contains('secImg') || launchImg.classList.contains('firstImg')){
        launchImg.src = "images/space-capsule-tablet.png"
    }

    launchImg.src = operations.capsule.img
    launchHead.innerHTML = operations.capsule.header
    launchInfo.innerHTML = operations.capsule.info
})

moonBtn.addEventListener('click', function(){
    if(marsBtn.classList.contains('clicked-list') || europaBtn.classList.contains('clicked-list') || titanBtn.classList.contains('clicked-list')){
        marsBtn.classList.remove('clicked-list')
        europaBtn.classList.remove('clicked-list')
        titanBtn.classList.remove('clicked-list')
    }
    moonBtn.classList.add('clicked-list')
    planetImg.src = operations.moon.img
    planetHead.innerHTML = operations.moon.head
    planetInfo.innerHTML = operations.moon.info
    planetAvgDist.innerHTML = operations.moon.avg
    planetTravelTime.innerHTML = operations.moon.time
})

marsBtn.addEventListener('click', function(){
    if(moonBtn.classList.contains('clicked-list') || europaBtn.classList.contains('clicked-list') || titanBtn.classList.contains('clicked-list')){
        moonBtn.classList.remove('clicked-list')
        europaBtn.classList.remove('clicked-list')
        titanBtn.classList.remove('clicked-list')
    }
    marsBtn.classList.add('clicked-list')
    planetImg.src = operations.mars.img
    planetHead.innerHTML = operations.mars.head
    planetInfo.innerHTML = operations.mars.info
    planetAvgDist.innerHTML = operations.mars.avg
    planetTravelTime.innerHTML = operations.mars.time
})

europaBtn.addEventListener('click', function(){
    if(moonBtn.classList.contains('clicked-list') || marsBtn.classList.contains('clicked-list') || titanBtn.classList.contains('clicked-list')){
        moonBtn.classList.remove('clicked-list')
        marsBtn.classList.remove('clicked-list')
        titanBtn.classList.remove('clicked-list')
    }
    europaBtn.classList.add('clicked-list')
    planetImg.src = operations.europa.img
    planetHead.innerHTML = operations.europa.head
    planetInfo.innerHTML = operations.europa.info
    planetAvgDist.innerHTML = operations.europa.avg
    planetTravelTime.innerHTML = operations.europa.time
})

titanBtn.addEventListener('click', function(){
    if(moonBtn.classList.contains('clicked-list') || marsBtn.classList.contains('clicked-list') || europaBtn.classList.contains('clicked-list')){
        moonBtn.classList.remove('clicked-list')
        marsBtn.classList.remove('clicked-list')
        europaBtn.classList.remove('clicked-list')
    }
    titanBtn.classList.add('clicked-list')
    planetImg.src = operations.titan.img
    planetHead.innerHTML = operations.titan.head
    planetInfo.innerHTML = operations.titan.info
    planetAvgDist.innerHTML = operations.titan.avg
    planetTravelTime.innerHTML = operations.titan.time
})


buttons.button1.addEventListener('click', function(){
    if(buttons.button2.classList.contains('activeBtn') || buttons.button3.classList.contains('activeBtn') || buttons.button4.classList.contains('activeBtn')){
        buttons.button2.classList.remove('activeBtn')
        buttons.button3.classList.remove('activeBtn')
        buttons.button4.classList.remove('activeBtn')
    }
    buttons.button1.classList.add('activeBtn')

    guyImg.src = operations.douglas.img
    guyInfo.innerHTML = operations.douglas.info
    guyName.innerHTML = operations.douglas.name
    rank.innerHTML = operations.douglas.rank
    
})

buttons.button2.addEventListener('click', function(){
    if(buttons.button1.classList.contains('activeBtn') || buttons.button3.classList.contains('activeBtn') || buttons.button4.classList.contains('activeBtn')){
        buttons.button1.classList.remove('activeBtn')
        buttons.button3.classList.remove('activeBtn')
        buttons.button4.classList.remove('activeBtn')
    }
    buttons.button2.classList.add('activeBtn')

    guyImg.src = operations.mark.img
    guyInfo.innerHTML = operations.mark.info
    guyName.innerHTML = operations.mark.name
    rank.innerHTML = operations.mark.rank
    
})

buttons.button3.addEventListener('click', function(){
    if(buttons.button1.classList.contains('activeBtn') || buttons.button2.classList.contains('activeBtn') || buttons.button4.classList.contains('activeBtn')){
        buttons.button1.classList.remove('activeBtn')
        buttons.button2.classList.remove('activeBtn')
        buttons.button4.classList.remove('activeBtn')
    }
    buttons.button3.classList.add('activeBtn')

    guyImg.src = operations.victor.img
    guyInfo.innerHTML = operations.victor.info
    guyName.innerHTML = operations.victor.name
    rank.innerHTML = operations.victor.rank
    
})

buttons.button4.addEventListener('click', function(){
    if(buttons.button1.classList.contains('activeBtn') || buttons.button2.classList.contains('activeBtn') || buttons.button3.classList.contains('activeBtn')){
        buttons.button1.classList.remove('activeBtn')
        buttons.button2.classList.remove('activeBtn')
        buttons.button3.classList.remove('activeBtn')
    }
    buttons.button4.classList.add('activeBtn')

    guyImg.src = operations.anousheh.img
    guyInfo.innerHTML = operations.anousheh.info
    guyName.innerHTML = operations.anousheh.name
    rank.innerHTML = operations.anousheh.rank
    
})



toggleBtn.addEventListener('click', function(){
    navList.classList.toggle('active')
    toggleBtn.classList.toggle('active')
})

hiddenElements.forEach((el)=> observer.observe(el)) 
leftHiddenElements.forEach((e)=> observerLeft.observe(e))
rightHiddenElements.forEach((h)=> observerRight.observe(h))



navBtns.forEach(link => {
    link.addEventListener('click', function(){
        navBtns.forEach(nav => nav.classList.remove('clicked-nav'))
        this.classList.add('clicked-nav')      
    })
})



function activeMenu(){
    let len = section.length
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    navBtns.forEach(ltx => ltx.classList.remove('clicked-nav'));
    navBtns[len].classList.add('clicked-nav');
}

activeMenu()
window.addEventListener('scroll', activeMenu)


