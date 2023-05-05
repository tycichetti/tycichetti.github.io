createColumns = function(){
    document.write("<ul class='columns'>")
    createLeft()
    createRight()
    document.write("</ul>")
}

createLeft = function(){
    document.write("<li class ='left-column'>"+
                        "<img src='tyler.jpg' height='300'>"+
                        "<br><a href='https://www.linkedin.com/in/tyler-cichetti' title='My LinkedIn' target='_blank'><img src='linkedin.jpg' alt='LinkedIn Logo' height='30'></a>"+
                        "<a href='Tyler_Cichetti-Resume.pdf' target='_blank'><img src='document.gif' alt='Animated Document' height='30'></a>"+
                        "<a href='mailto:tyler.cichetti@scranton.edu'><img src='email.gif' alt='Animated Email' height='30'></a>"+
                        "<a href='tel:908-655-2566'><img src='phone.gif' alt='Animated Phone' height='30'></a>"+                    
                    "</li>")
}

createRight = function(){
    document.write("<li class='right-column'>"+
                        "<h1>Tyler Cichetti</h1>"+
                        "<h2><em>Computer Science Student at the University of Scranton</em></h2>"+
                        "<h3>Member of Upsilon Pi Epsilon -- Computer Science Honor Society</h3>"+
                        "<h4>Age: 20</a><br>"+  
                        "<h4> Hometown: Somerville, New Jersey"+              
                        "<h4>Email: tyler.cichetti@scranton.edu</a><br>"+
                        "<h4>Phone Number: 908-655-2566</a>"+
                    "<li>")
}

createNavBar = function(){
    document.write("<nav class='navbar'>"+
                        "<p><strong>Cichetti</strong>"+
                            "<button onclick='openHome()'>Home</button>"+
                            "<button onclick='openSkills()'>My Skils</button>"+
                            "<button onclick='openExperience()'>My Experience</button>"+
                            "<button onclick='education()'>My Education</button>"+
                            "<button onclick='contact()'>Contact Me</button>"+
                        "</p>"+
                    "</nav>")
    }

createTopHalf = function(){
    document.write("<body>")
    createNavBar()
    createColumns()
}

endHtml = function(){
    document.write("</body>"+
                    "</html>")

}

openHome = function(){
    window.location = "index.html"
}

skills = function(){
    createTopHalf()
    document.write("<div class='skills'>")
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
    document.write("<button class='hover' href='#'>"+name+"<span class='info'>"+description+"</span></button>")
}

openSkills = function(){
    window.location = "skills.html"
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
    document.write("<h3 id='company'>"+currExp.company+"</h3><h3 id='date'>"+currExp.date+"</h3>"+
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

openExperience = function(){
    window.location = "experience.html"
}