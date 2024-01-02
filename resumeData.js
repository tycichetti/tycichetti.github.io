/////////////////////////SKILLS/////////////////////////////
//Operating Systems: Windows, Mac OS, Unix

let windows = new Skill("Windows", "Have used for many years in personal and professional work.");
let macOs = new Skill("Mac Os", "Have used for many years in personal and professional work.");
let unix = new Skill("Linux/Unix", "Used in Operating Systems class Fall of Junior Year. Created a few projects utilizing multi-threading and locks/sempahores.");

//Software Applications: Eclipse IDE, VS Code, J Grasp IDE, Advanced MS Excel Skills, Microsoft Office,Photoshop, PuTTY, Git Hub, Google G-Suite, Salesforce

let eclipse = new Skill("Eclipse IDE", "Started using in the Fall of 2021 and have continued to use until present. Used for mostly Java and C coding.");
let vsCode = new Skill("VS Code", "Have used since Fall 2020. Used for every language I have coded in. Most used and favorite IDE.");
let jGrasp = new Skill("J Grasp IDE", "Was instructed by my CS I professor to use this IDE in the Fall of 2020. Used until I discovered VS Code.");
let excel = new Skill("Advanced Microsoft Excel", "Gained a vast amount of my knowledge and utilized it while in my position as a Sales Operations Intern at Bausch + Lomb.");
let office = new Skill("Microsoft Office", "Receive and respond to emails on this platform on a daily basis for school. Also used on a daily basis in my position as a Sales Operations Intern at Bausch + Lomb.");
let photoshop = new Skill("Photoshop", "Took two years worth of classes learning the ins and outs of this in high school. Have used a few times since.");
let puTTY = new Skill("PuTTY", "Learned and used in my Operating Systems class in the Fall of my Junior Year. Used to connect to the various school servers.");
let gitHub = new Skill("GitHub", "Have used on many occasions to look at others work and to upload my own. This website is being run on GitHub Pages.");
let gSuite = new Skill("Google G-Suite", "Have used since I was in Middle School and feel that I have a very deep understanding of how each application works.");
let salesforce = new Skill("Salesforce", "Learned and utilized while in my position as a Sales Operations Intern at Bausch + Lomb. Was able to assist in the updating and simplification of the software for Sales Reps.");

//Programming Languages: JAVA, C, Python, SQL, Assembly, JavaScript, CSS, HTML

let java = new Skill("Java", "First language learned, in Fall of 2020 for my CS I class. Have used for a few years and feel that I have advanced knowledge of the language.");
let c = new Skill("C", "Second language learned, Fall 2021 for my Machine Organization and Assembly Programming class. With the way the class was structured I had to teach myself the language using the textbook. Have made many programs in this language and feel that it may be my strongest language.");
let python = new Skill("Python", "Most recent language learned, in Spring 2023 for my Artificial Intelligence class. Even though it is my most recently learned language, I used it a lot in that semester and learned a lot of the nuances.");
let sql = new Skill("SQL", "Learned and utilized in my Database Systems class in Fall of 2023. Used for various projects such as creating and running Prepared Statments using Java.");
let assembly = new Skill("Assembly", "Learned in Machine Organization and Assembly Programming in Fall of 2021. Created a few projects throughout that semester using this language.");
let javascript = new Skill("JavaScript", "Learned in Spring of 2023 in my Web Development class. Most of this website you are looking at is made completely in JavaScript.");
let css = new Skill("CSS", "In Spring of 2023, I learned this language. Have since built many projects and this one right here utilizes a lot of CSS.");
let html = new Skill("HTML", "Learned in Spring 2023 and have since made many projects using the language, such as the one you are currently looking at.");


//Hardware Knowledge: Computer repair and upgrades including memory, Hard Drives, GPU’s

let repair = new Skill("Computer Repairs and Upgrades Including Memory", "Installed a new CPU and RAM into my personal computer.");
let hardDrive = new Skill("Hard Drives", "Have installed new hardrives into my personal computer.");
let gpus = new Skill("GPUs", "Installed a new GPU into my personal computer.");


var osAry=[windows,macOs,unix,]
var softAry=[eclipse,vsCode,jGrasp,excel,office,photoshop,puTTY,gitHub,gSuite,salesforce]
var pLAry=[java,c,python,sql,assembly,javascript,css,html]
var hardwareAry=[repair,hardDrive,gpus]

//////////////////EMPLOYMENT EXPERIENCES/////////////////////
let bL = new Exp("Bausch + Lomb, Bridgewater, New Jersey","June 2022 - August 2022","Sales Operations Intern",["Acted as a liaison for the Field Sales Team to organize and streamline Sales Force web based and IOS applications",
                                                                                                         "Facilitated data standardization to integrate specialty lens business",
                                                                                                         "Designed and implemented a new process for the Field Sales Team to manage the solution sample shipment"])
let dD = new Exp("Door Dash, Somerset County, New Jersey","May 2021 - May 2022","Real-time Delivery Driver",["Delivered food and other items in a timely and professional manner while working hard to maintain the highest customer service standards",
                                                                                                          "Communicated with customers about any delays or issues that arose during the process of delivery by making phone calls or text messages as needed"])
let oN = new Exp("Old Navy, Bridgewater, New Jersey", "June 2019 - January 2021", "Sales Associate",["Helped an average of 50 customers per day by responding to inquiries and locating products",
                                                                                                    "Provided recommendations to customers which have generated a total of $9K in revenue",
                                                                                                    "Handled customer transactions and ensured accuracy of cash drawers",
                                                                                                    "Maintained accurate and attractive floor displays in line with the company standards"])
let cP = new Exp("Café Picasso, Somerville, New Jersey", "September 2018 - February 2019", "Italian Restaurant Bus Boy",["Maintain and exceed company standards of service","Assist in creating positive guest experience that encourages customers to return",
                                                                                                                        "Clean and stock service stations","Notify management if stock for various items may be running low"])
var eAry = [bL,dD,oN,cP]

//////////////////EDUCATION/////////////////////
let csI = new Coursework("Computer Science I","An introduction to programming concepts and methodology using an object-oriented programming language (currently Java).  Topics include problem analysis, abstraction, modularization, the development and use of algorithms, reuse, and the use of programming constructs including data types, classes, control structures, and methods.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9326")
let csII = new Coursework("Computer Science II","This course emphasizes object-oriented software development, addressing both software engineering and programming.  Topics include modularization, abstraction, encapsulation/information hiding, software reuse, software testing, classic data abstractions (e.g., lists, trees) and algorithms (e.g., sorting, searching), recursion, program correctness, and basic algorithm analysis.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9328")
let dsa = new Coursework("Data Structures & Algorithms","An examination of the issues of data representation, algorithm structure, and encapsulation as they pertain to the development of object-oriented software.  Abstract data types studied include stacks, queues, binary trees, n-ary trees, and graphs. Various representation alternatives are analyzed and compared, trade-offs frequently encountered by software developers are discussed.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9331")
let moalp = new Coursework("Machine Organization and Assembly Language Programming","An introductory study of the organization and architecture of computers through an exploration of various virtual machines. Programming at the assembly-language level and interfacing with software components (primarily written in C). Topics include representation of data and instructions, computer arithmetic, memory hierarchies, instruction sets, addressing modes, digital logic, microprogramming, pipelining, and parallel processing.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9332")
let tfcs = new Coursework("Theoretical Foundations of Computer Science","An examination of the fundamental models and concepts of computation – automata, formal languages, and grammars – and how they are related.  Church-Turing thesis; recursive and recursively enumerable sets; unsolvable problems; complexity of algorithms; Chomsky hierarchy.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9333")
let os = new Coursework("Operating Systems","An introduction to the principles of operating systems.  Topics include operating system structure, process management, scheduling and dispatching, process synchronization and interprocess communication, memory management, virtual memory, device management, I/O, and file systems.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9342")
let dbs = new Coursework("Database Systems", "An introduction to database management systems with an emphasis on relational database design and applications.  It uses an appropriate database package such as ORACLE or PostgreSQL.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9339")
let ai = new Coursework("Artificial Intelligence","Problem solving using expert systems, heuristic programming techniques, tree speed-up techniques, and learning mechanisms.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9350")
let wp = new Coursework("Web Programming","This course covers all aspects of programming on the World Wide Web.  This includes the presentation of HTML, Java, JavaScript and CGI.  Topics include advanced HTML (maps, forms, etc.) client-server programming basics as they relate to the Web, Java machine concepts, Java/JavaScript similarities and differences, server-side programming, GIF animations, Web programming resources and environments.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=56&coid=72292")
let pl = new Coursework("Programming Languages","A study of programming languages from both the theoretical and practical perspectives.  A survey of major and developing paradigms and languages is undertaken which includes use of specific languages to broaden the student’s experience.  Implementation is studied through an introduction to language translation along with a study of run-time models and interfaces with virtual machines.","https://catalog.scranton.edu/preview_course_nopop.php?catoid=10&coid=9340")

var scrantonCourses = [csI,csII,dsa,moalp,tfcs,os,dbs,ai,wp,pl]

let scranton = new Edu("The University of Scranton, Scranton, Pennsylvania","August 2020-Present","Bachelor of Science in Computer Science","3.34/4.00 GPA","Member of Upsilon Pi Epsilon -- Computer Science Honors Society",scrantonCourses)
var eduAry = [scranton]
