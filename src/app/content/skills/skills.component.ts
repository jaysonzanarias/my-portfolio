import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @ViewChild('skillsMenuContent') divToScroll: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  miniMenuScroll(direction: string) {
    if (direction == 'up')
      this.divToScroll.nativeElement.scrollTop -= 200;
    else
      this.divToScroll.nativeElement.scrollTop += 200;
  }

  scroll(elID: string) {
    const yOffset = -100;
    const y = document.querySelector("#" + elID).getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // TODO: move to backend
  data = [
    {
      skill_area: "Development",
      skills: [
        {
          id: "For_Front_End_Development",
          category: "For Front-End Development",
          category_data:
            [
              {
                sub_category: "Framework/JS Libraries for Web Development",
                technologies: ["Angular", "AngularJS", "React", "*Vue"]
              },
              {
                sub_category: "Web Foundation",
                technologies: ["Ajax", "CSS", "HTML", "JavaScript", "SVG", "TypeScript"]
              },
              {
                sub_category: "JS Libraries",
                technologies: ["jQuery", "Redux", "STOMP.js", "*Socket.io"]
              },
              {
                sub_category: "UI Libraries",
                technologies: ["Angular Material", "Bootstrap", "Bulma", "Chart.js", "Materiali-UI", "Materialize", "particles.js", "three.js"]
              },
              {
                sub_category: "Testing",
                technologies: ["Chai", "Jasmine", "Karma", "Mocha", "Robot Framework", "Selenium"]
              },
              {
                sub_category: "Transpiler",
                technologies: ["Babel", "Sass"]
              },
              {
                sub_category: "Package Manager",
                technologies: ["Bower", "npm"]
              },
              {
                sub_category: "Task Runner",
                technologies: ["Grunt", "Gulp"]
              },
              {
                sub_category: "Scaffolding Tool",
                technologies: ["Angular CLI", "Yeoman"]
              },
            ]
        },
        {
          id: "For_Back_End_Development",
          category: "For Back-End Development",
          category_data:
            [
              {
                sub_category: "Programming/Scripting Languages",
                technologies: ["Java", "JavaScript", "PHP", "Python", "*C#", "*Go", "*Groovy", "*Kotlin", "*Scala"]
              },
              {
                sub_category: "Framework",
                technologies: ["Express.js", "Spring", "Spring Boot"]
              },
              {
                sub_category: "Runtime Environment",
                technologies: ["Node.js"]
              },
              {
                sub_category: "Random Java Technologies",
                technologies: ["Jasper Reports", "JDBC", "JPA", "Jsoup", "JSP", "RMI", "Swing"]
              },
              {
                sub_category: "Testing",
                technologies: ["JUnit", "Mockito", "Robot Framework"]
              }
            ]
        },
        {
          id: "For_Other_Development",
          category: "For Other Development",
          category_data:
            [
              {
                sub_category: "BPM",
                technologies: ["Pega PRPC 5.5", "Pega PRPC 7.1"]
              },
              {
                sub_category: "Desktop",
                technologies: ["*Assembly", "*C", "*Visual Basic", "Java"]
              },
              {
                sub_category: "Mobile",
                technologies: ["**React Native"]
              },
              {
                sub_category: "Software Stack",
                technologies: ["LAMP", "MEAN", "MERN", "WAMP", "XAMPP", "*JAMStack"]
              },
              {
                sub_category: "Hardware",
                technologies: ["*PLC/SCADA"]
              }
            ]
        },
        {
          id: "Repository_VCS",
          category: "Repository / VCS",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Git", "GitHub", "GitLab", "SVN"]
              }
            ]
        },
        {
          id: "Databases",
          category: "Databases",
          category_data:
            [
              {
                sub_category: "SQL Database",
                technologies: ["DB2", "H2", "MySQL", "PostgreSQL", "SQL Database"]
              },
              {
                sub_category: "NoSQL Database",
                technologies: ["MongoDB"]
              }
            ]
        },
        {
          id: "Message_Brokers",
          category: "Message Brokers",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["ActiveMQ", "*Kafka"]
              }
            ]
        },
        {
          id: "Query_Language",
          category: "Query Language",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["*GraphQL"]
              }
            ]
        },
        {
          id: "DIF_CF",
          category: "Data Interchange Format / Configuration File",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["JSON", "TOML", "XML", "XSLT", "YAML"]
              }
            ]
        },
        {
          id: "Communication_Protocol",
          category: "Communication Protocol",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["ASCII", "CORBA", "HTTP/S", "SFTP", "SNMP", "STOMP", "WebSocket", "**SOAP"]
              }
            ]
        },
        {
          id: "Security",
          category: "Security",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Basic Authentication", "Cookie Based", "CORS", "HTTPS", "JWT", "Keycloak", "Oauth", "SSL/TLS", "SSO", "Token Authentication"]
              }
            ]
        }
      ]
    },
    {
      skill_area: "System Architecture, Dev Principles, and Software Development Methodologies",
      skills: [
        {
          id: "Architecture",
          category: "Architecture",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Client-Server", "Component Based", "Distributed Architecture", "Event-Driven Architecture", "Messaging", "Microservice Architecture", "Model-View-Controller (MVC)", "Model-View-ViewModel (MVVM)", "Monolithic Application", "Representational State Transfer (REST)", "Service-Oriented", "Structural Layering"]
              }
            ]
        },
        {
          id: "Dev_Principles",
          category: "Dev Principles/Practices",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["12 Factor App", "Automation", "Boundaries", "CI/CD", "Clean Code", "Composition over inheritance", "Coupling and Cohesion", "Dependencies", "Design Patterns", "Design Principles (Composition over Inheritance, Encapsulate what varies, program against abstraction, etc.)", "DRY", "KISS", "Microservices", "OOP Concepts (Inheritance, Polymorphism, Encapsulation, Abstraction)", "Programming Paradigms (Structured, OOP, Functional)", "SOLID", "TDD and Testing (UT/CT/SI/E2E)", "UML", "YAGNI"]
              }
            ]
        },
        {
          id: "Software_Dev_Methodologies",
          category: "Software Development Methodologies",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Agile", "DevOps", "SAFe", "Scrum", "SDLC", "Waterfall"]
              }
            ]
        }
      ]
    },
    {
      skill_area: "Operation and Infrastructure",
      skills: [
        {
          id: "Build_Tools",
          category: "Build Tools / Repository / Artifactory",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Gradle", "JFrog Artifactory", "Maven", "Sonatype Nexus"]
              }
            ]
        },
        {
          id: "PMS",
          category: "Package Management System",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["RPM Package Manager", "YUM"]
              }
            ]
        },
        {
          id: "OS",
          category: "Operating System",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["CentOS", "Linux", "Linux Mint", "Red Hat", "Ubuntu", "Windows"]
              }
            ]
        },
        {
          id: "WebServers",
          category: "Web Servers",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["Nginx", "Tomcat", "**IBM WebSphere", "Apache"]
              }
            ]
        },
        {
          id: "Infrastructure",
          category: "Infrastructure",
          category_data:
            [
              {
                sub_category: "Virtualization",
                technologies: ["VirtualBox", "VMWare"]
              },
              {
                sub_category: "Container",
                technologies: ["Docker", "Docker Compose", "Vagrant"]
              },
              {
                sub_category: "Cloud Computing Infrastructure",
                technologies: ["OpenStack"]
              },
              {
                sub_category: "Container Orchestration",
                technologies: ["*Kubernetes", "**Marathon", "**Mesos"]
              },
              {
                sub_category: "Configuration Management",
                technologies: ["*Ansible"]
              },
              {
                sub_category: "Cloud Providers",
                technologies: ["*AWS"]
              },
              {
                sub_category: "Scripting",
                technologies: ["Bash"]
              }
            ]
        },
        {
          id: "CI_CD",
          category: "Continuous Integration and Continuous Delivery (CI/CD) / Automation",
          category_data:
            [
              {
                sub_category: "",
                technologies: ["GitLab CI", "Jenkins"]
              }
            ]
        },
        {
          id: "Others",
          category: "Others",
          category_data:
            [
              {
                sub_category: "Middleware",
                technologies: ["**MSP", "**Websphere MQ"]
              },
              {
                sub_category: "Mainframe / Communication Object",
                technologies: ["**AS/400", "**Business Object"]
              }
            ]
        }
      ]
    },
    {
      skill_area: "Operation and Infrastructure",
      skills: [
        {
          id: "Management_Tools",
          category: "Management Tools",
          category_data:
            [
              {
                sub_category: "Code Management Tool",
                technologies: ["Crucible", "Fisheye"]
              },
              {
                sub_category: "Project Management",
                technologies: ["JIRA"]
              },
              {
                sub_category: "Service Management",
                technologies: ["ClearQuest", "Remedy"]
              },
              {
                sub_category: "Management Information System",
                technologies: ["Clarity", "HP PPM"]
              },
              {
                sub_category: "Collaborative Tool",
                technologies: ["Confluence"]
              }
            ]
        },
        {
          id: "Other_Tools",
          category: "Other Tools",
          category_data:
            [
              {
                sub_category: "Web Services/Application Testing Tools",
                technologies: ["Burp Suite", "Postman"]
              },
              {
                sub_category: "Email Application / Communication",
                technologies: ["Lotus Notes", "Mozilla Thunderbird", "MS Outlook", "MS Teams", "Slack"]
              },
              {
                sub_category: "IDE / Text Editor",
                technologies: ["Atom", "Eclipse", "IntelliJ", "NetBeans", "Notepad++", "Sublime Text", "Visual Studio Code"]
              },
              {
                sub_category: "Office Suite",
                technologies: ["Libre Office", "Microsoft Office Suite (MS Word, MS Powerpoint, MS Excel, etc.)"]
              },
              {
                sub_category: "Image Editing Tools",
                technologies: ["Photoshop"]
              },
              {
                sub_category: "Document Builder",
                technologies: ["**HP Dialogue"]
              },
              {
                sub_category: "Game Development",
                technologies: ["GameMaker", "Unity"]
              }
            ]
        }
      ]
    }
  ]
}
