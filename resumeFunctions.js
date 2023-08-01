var follower = document.querySelector(".follower")
createColumns = function(){
    document.write("<ul class='columns'>")
    createLeft()
    createRight()
    document.write("</ul>")
}

createLeft = function(){
    document.write("<li class ='left-column'>"+
                        "<img src='tyler.jpg' height='300'>"+
                        "<br><a onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" href='https://www.linkedin.com/in/tyler-cichetti' title='My LinkedIn' target='_blank'><img class='images' src='linkedin.jpg' alt='LinkedIn Logo' height='30'></a>"+
                        "<a onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" href='Tyler_Cichetti-Resume.pdf' target='_blank'><img class='images' src='resume.jpg' alt='Animated Document' height='30'></a>"+
                        "<a onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\"   href='mailto:tyler.cichetti@scranton.edu'><img class='images' src='email.jpg' alt='Animated Email' height='30'></a>"+
                        "<a onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" href='tel:908-655-2566'><img class='images' src='phone.gif' alt='Animated Phone' height='30'></a>"+                    
                    "</li>")
}

createRight = function(){
    document.write("<li class='right-column'>"+
                        "<h1>Tyler Cichetti</h1>"+
                        "<h2><em>Computer Science Student at the University of Scranton</em></h2>"+
                        "<h3><a onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" href='http://upe.acm.org' target='_blank'>Member of Upsilon Pi Epsilon -- Computer Science Honor Society</a></h3>"+
                        "<h4>Age: 20</h4>"+  
                        "<h4> Hometown: Somerville, New Jersey</h4>"+              
                        "<h4>Email: tyler.cichetti@scranton.edu</h4>"+
                        "<h4>Phone Number: 908-655-2566</h4>"+
                    "<li>")
}

createNavBar = function(){
    document.write("<nav class='navbar'>"+
                        "<p><strong>Cichetti</strong>"+
                            "<button onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" onclick=\"location.href='index.html'\">Home</button>"+
                            "<button onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" class='navBut' onclick=\"location.href='skills.html'\">My Skills</button>"+
                            "<button onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" class='navBut' onclick=\"location.href='experience.html'\">My Experience</button>"+
                            "<button onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" class='navBut' onclick=\"location.href='education.html'\">My Education</button>"+
                        "</p>"+
                    "</nav>")
}

createTopHalf = function(){
    document.write("<body>"+
                   "<div class='follower'></div>")
    createNavBar()
    createColumns()
}

createHome = function(){
    createTopHalf()
    document.write( "<div class='message'>"+
                        "<h1><span style='--i:1'>W</span><span style='--i:2'>e</span><span style='--i:3'>l</span><span style='--i:4'>c</span><span style='--i:5'>o</span><span style='--i:6'>m</span><span style='--i:7'>e</span>"+
                            " <span style='--i:8'>T</span><span style='--i:9'>o</span> <span style='--i:10'>M</span><span style='--i:11'>y</span> <span style='--i:12'>R</span><span style='--i:13'>e</span><span style='--i:14'>s</span><span style='--i:15'>u</span><span style='--i:16'>m</span><span style='--i:17'>e</span></h1>"+
                        "<p>"+
                            "Thank you for taking the time to visit my website. I hope you find the information provided useful. Have a great day!"+
                        "</p>"+
                    "</div>")
    endHtml()
}

endHtml = function(){
    document.write("</body>"+
                    "</html>")

}

skills = function(){
    createTopHalf()
    document.write("<div class='skills'>"+
                    "<h2 class='title'><strong>Skills</strong></h2>")
        document.write("<h2>Operating Systems:</h2>")
        for(var i = 0; i < osAry.length; i++){
            enterSkills(osAry[i].name, osAry[i].description)
        }
        document.write("<h2>Software Applications:</h2>")
        for(var i = 0; i < softAry.length; i++){
            enterSkills(softAry[i].name, softAry[i].description)
        }
        document.write("<h2>Programming Languages:</h2>")
        for(var i = 0; i < pLAry.length; i++){
            enterSkills(pLAry[i].name, pLAry[i].description)
        }
        document.write("<h2>Hardware Knowledge:</h2>")
        for(var i = 0; i < hardwareAry.length; i++){
            enterSkills(hardwareAry[i].name, hardwareAry[i].description)
        }
    document.write("</div>")
    endHtml()
}

class Skill{
    constructor(name,description){
        this.name = name;
        this.description = description;
    }
}

enterSkills = function(name, description){
    document.write("<button onclick=\"alert('"+description+"')\" onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" class='hover' href='#'>"+name+"<span class='info'>"+description+"</span></button>")
}

experiences = function(){
    createTopHalf()
    document.write("<div class='experiences''>"+
                        "<h2><strong>Employment Experience</strong></h2>")
    for(var i =0; i < eAry.length; i++){
        enterExp(eAry[i])
    }
    document.write("</div>")
    endHtml()
}

class Exp{
    constructor(company,date, title,descrip){
        this.company = company;
        this.date = date;
        this.title = title
        this.descrip = descrip
    }
}

enterExp = function(currExp){
    document.write("<h3 id='company'>"+currExp.company+
                   "</h3><h3 id='date'>"+currExp.date+"</h3>"+
                    "<h3 id='title'>"+currExp.title+"</h3>")
    document.write("<ul id='descrip'>")
    writeDescrip(currExp.descrip)
    document.write("</ul>")
}

function writeDescrip(descrip){
    for(var i = 0; i < descrip.length;i++){
        document.write("<li>"+descrip[i]+"</li>");
    }
}

class Edu{
    constructor(university,date,major,GPA,honors,courses){
        this.university = university;
        this.date = date;
        this.major = major
        this.GPA = GPA
        this.honors = honors
        this.courses = courses
    }
}

class Coursework{
    constructor(name,descrip,link){
        this.name = name
        this.descrip = descrip
        this.link = link
    }
}

education = function(){
    createTopHalf()
    document.write("<div class='education'>"+
                    "<h2 class='title'><strong>Education</strong></h2>")
    for(var i = 0; i < eduAry.length; i++){
        enterEducation(eduAry[i])
    }
    document.write("</div>")
    endHtml()
}

enterEducation = function(currEdu){
    document.write("<h3 class='university'>"+currEdu.university+
                   "</h3><h3 class='date'>"+currEdu.date+"</h3>"+
                    "<h3 class='major'>"+currEdu.major+"</h3>"+
                    "</h3><h3 class='GPA'>3.4</h3>"+
                    "<h2 class='coursework'>Relevant Coursework:</h2>")
    var courses = currEdu.courses
    document.write("<div class='courses'>")
    for(var j = 0; j < courses.length; j++){
        enterCourse(courses[j])
    }
    document.write("</div>")
}

enterCourse = function(currCourse){
    document.write("<button class='hover' onmouseover=\"follower.style.width = '30px'; follower.style.height ='30px'\" onmouseout=\"follower.style.width = '20px';follower.style.height='20px'\" onclick=\"window.open('"+currCourse.link+"','_blank');\" type='button'>"+currCourse.name+
                        "<span class='info'>"+currCourse.descrip+"</span>"+
                   "</button>")
}
