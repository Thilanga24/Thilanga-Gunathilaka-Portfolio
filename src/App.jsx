import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Phone, Download, ExternalLink, Github, Linkedin, Briefcase, GraduationCap, ChevronLeft, ChevronRight, CheckCircle2, Code, Facebook, Instagram, MessageCircle, RefreshCw, Users, Database, LineChart, FileSpreadsheet, Code2, Cpu, Gamepad2, Workflow, Braces, Navigation, Bot, Sparkles, Zap, BrainCircuit } from 'lucide-react';

const getTechIcon = (tech) => {
  const t = tech.toLowerCase();

  if (t.includes('stakeholder') || t.includes('team')) return <Users size={18} className="text-indigo-400" />;
  if (t.includes('data modeling')) return <Database size={18} className="text-purple-400" />;
  if (t.includes('kpi') || t.includes('tracking')) return <LineChart size={18} className="text-emerald-400" />;
  if (t.includes('excel') || t.includes('csv')) return <FileSpreadsheet size={18} className="text-green-400" />;
  if (t.includes('sensor')) return <Cpu size={18} className="text-yellow-400" />;
  if (t.includes('game')) return <Gamepad2 size={18} className="text-purple-400" />;
  if (t.includes('algorithm')) return <Workflow size={18} className="text-emerald-400" />;
  if (t === 'oop') return <Braces size={18} className="text-indigo-400" />;
  if (t.includes('gps')) return <Navigation size={18} className="text-red-400" />;

  if (t.includes('rag') || t.includes('vector')) return <Database size={18} className="text-cyan-400" />;
  if (t.includes('prompt') || t.includes('llm')) return <MessageCircle size={18} className="text-purple-400" />;
  if (t.includes('ai') || t.includes('artificial')) return <Bot size={18} className="text-pink-400" />;
  if (t.includes('gemini') || t.includes('openai')) return <Sparkles size={18} className="text-yellow-400" />;

  if (t === 'apis' || t === 'api') return <Code2 size={18} className="text-pink-400" />;
  if (t === 'erp') return <Database size={18} className="text-orange-400" />;

  const directImageMap = {
    'agile': agileSvg,
    'kanban': kanbanSvg,
    'scrum': agileSvg,
    'power bi': powerBiLogo,
    'tableau': 'https://img.icons8.com/color/48/tableau-software.png',
    'microsoft project': msProjectSvg,
    'qdrant': qdrantLogo,
    'qdrant vector db': qdrantLogo,
    'chromadb': chromaLogo
  };

  const deviconMap = {
    'react': 'react/react-original',
    'javascript': 'javascript/javascript-original',
    'tailwind css': 'tailwindcss/tailwindcss-original',
    'html5': 'html5/html5-original',
    'css3': 'css3/css3-original',
    'node.js': 'nodejs/nodejs-original',
    'python': 'python/python-original',
    'java': 'java/java-original',
    'c++': 'cplusplus/cplusplus-original',
    'kotlin': 'kotlin/kotlin-original',
    'sqlite': 'sqlite/sqlite-original',
    'arduino': 'arduino/arduino-original',
    'android sms api': 'android/android-original',
    'docker': 'docker/docker-original',
    'kubernetes': 'kubernetes/kubernetes-plain',
    'mysql': 'mysql/mysql-original',
    'mongodb': 'mongodb/mongodb-original',
    'git': 'git/git-original',
    'vite': 'vite/vite-original',
    'figma': 'figma/figma-original',
    'wordpress': 'wordpress/wordpress-original',
    'jira': 'jira/jira-original',
    'confluence': 'confluence/confluence-original',
    'typescript': 'typescript/typescript-original',
    'c': 'c/c-original'
  };

  const simpleiconMap = {
    'express': 'express/ffffff',
    'github': 'github/ffffff',
    'github actions': 'githubactions/2088FF',
    'postman': 'postman/FF6C37',
    'qdrant': 'qdrant/ED1C24',
    'qdrant vector db': 'qdrant/ED1C24',
    'chromadb': 'chroma/FF6C37',
    'draw.io': 'diagramsdotnet/F08705',
    'google gemini api': 'googlegemini/8E75B2',
    'gemini api': 'googlegemini/8E75B2',
    'langchain': 'langchain/6DA099',
    'google calendar api': 'googlecalendar/4285F4',
    'sap': 'sap/008FD3',
    'oracle': 'oracle/F80000'
  };

  const directImageUrl = directImageMap[t];
  if (directImageUrl) return <img src={directImageUrl} alt={tech} className="w-5 h-5 object-contain rounded-sm" onError={(e) => { e.target.style.display = 'none' }} />;

  const devBrand = deviconMap[t];
  if (devBrand) return <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devBrand}.svg`} alt={tech} className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" onError={(e) => { e.target.style.display = 'none' }} />;

  const simpleBrand = simpleiconMap[t];
  if (simpleBrand) return <img src={`https://cdn.simpleicons.org/${simpleBrand}`} alt={tech} className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" onError={(e) => { e.target.style.display = 'none' }} />;

  return <Code2 size={18} className="text-slate-500" />;
};
import profileImg from './assets/profile.jpg';
import racUokLogo from './assets/RacUOK.png';
import leoLogo from './assets/Leo.png';
import uokLogo from './assets/uok_logo.png';
import peoplesBankLogo from './assets/Peoples bank-Photoroom.png';
import esuLogo from './assets/ESU Uni.png';
import ieeeLogo from './assets/Untitled.png';
import rrckLogo from './assets/RRCK-Photoroom.png';
import agileSvg from './assets/tech/agile.svg';
import kanbanSvg from './assets/tech/kanban.svg';
import msProjectSvg from './assets/tech/Microsoft_Project.svg';
import powerBiLogo from './assets/tech/power bI-Photoroom.png';
import qdrantLogo from './assets/tech/Qdrant VDB-Photoroom.png';
import chromaLogo from './assets/tech/chromadb.png';
import zenithImg from './assets/projects/Screenshot 2026-03-29 173923.png';
import thermoboxImg from './assets/projects/ChatGPT Image Apr 9, 2026, 01_17_49 PM.png';
import sahanaLankaImg from './assets/projects/WhatsApp Image 2026-04-09 at 12.17.25 AM (1).jpeg';
import vehicleMsImg from './assets/projects/Screenshot 2026-04-17 094308.png';
import mealPlannerImg from './assets/projects/Screenshot 2026-03-30 195552.png';
import sahanaLanka1 from './assets/projects/photo_2026-05-28_11-29-25.jpg';
import sahanaLanka2 from './assets/projects/photo_2026-05-28_11-29-31.jpg';
import sahanaLanka3 from './assets/projects/photo_2026-05-28_11-29-34.jpg';
import doomImg from './assets/projects/doom.jpg';
import restaurantMsImg from './assets/projects/resturant ms.jpg';

// Import Certificates
import certBA from './assets/certificates/Screenshot 2026-03-25 132855.png';
import certPM from './assets/certificates/Screenshot 2026-04-08 113409.png';
import certBAFoundations from './assets/certificates/Screenshot 2026-05-28 130510.png';
import certAIBusinessAnalysis from './assets/certificates/Screenshot 2026-05-28 221334.png';
import certAgileMSProject from './assets/certificates/Screenshot 2026-05-28 223840.png';
import certManagingJira from './assets/certificates/Screenshot 2026-05-29 120842.png';

// Import Badges
import badgeSalesforce from './assets/badges/agentblazer-level-1-a564a869686f7b888fabd8c82dafaf25928fa006be2388ab57e6f232876c2bf0.png';
import badgeGithub1 from './assets/badges/1775581859666.jpg';
import badgeGithub2 from './assets/badges/1775581859791.jpg';
import badgePython from './assets/badges/twitter_thumb_201604_image.png';
import badgePostman from './assets/badges/1adacd02-2d29-432d-bcbb-830e5adbb726.png';

// Fallback images in case assets are missing
const defaultLogo = "https://ui-avatars.com/api/?name=Logo&background=1e293b&color=fff";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const ProjectCard = ({ proj, idx }) => {
  const hasMultipleImages = proj.images && proj.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="glass-card group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden p-0"
    >
      {/* Project Image Pane */}
      <div className="w-full h-48 overflow-hidden relative bg-[#0c0c1a] flex items-center justify-center">
        {hasMultipleImages ? (
          <div className={`w-full h-full grid gap-1.5 p-2.5 z-10 relative ${proj.images.length === 2 ? 'grid-cols-2' :
              proj.images.length === 3 ? 'grid-cols-3' :
                'grid-cols-4'
            }`}>
            {proj.images.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg h-full bg-[#030014]/50 border border-white/5 flex items-center justify-center">
                <img
                  src={img}
                  alt={`${proj.title} screenshot ${i + 1}`}
                  className="w-full h-full object-contain object-center transition-transform duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : (
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-contain object-center transition-transform duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {proj.githubUrl ? (
            <a href={proj.githubUrl} target="_blank" rel="noreferrer" title="View Source on GitHub" className="p-2 rounded-full bg-transparent border border-transparent hover:border-white/30 text-white/80 hover:text-white hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 drop-shadow-lg relative z-20 pointer-events-auto">
              <Github size={16} />
            </a>
          ) : (
            <div className="p-2 rounded-full bg-transparent border border-transparent text-white/30 transition-colors cursor-default drop-shadow-lg relative z-20 hover:text-white/40" title="Source Code Coming Soon">
              <Github size={16} />
            </div>
          )}
          {proj.liveUrl ? (
            <a href={proj.liveUrl} target="_blank" rel="noreferrer" title="View Live Project" className="p-2 rounded-full bg-indigo-500/20 backdrop-blur-md border border-white/10 text-white/70 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg relative z-20 pointer-events-auto">
              <ExternalLink size={16} />
            </a>
          ) : (
            <div className="p-2 rounded-full bg-indigo-500/5 backdrop-blur-md border border-white/5 text-white/30 transition-colors shadow-none cursor-default hover:text-white/40" title="Link Coming Soon">
              <ExternalLink size={16} />
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 relative flex flex-col flex-grow">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-colors pointer-events-none z-0"></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-500/20">
            {proj.category}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">{proj.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">{proj.title}</h3>
        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
          {proj.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
          {proj.tech.map(t => (
            <span key={t} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium px-2 py-1 bg-white/[0.03] rounded-md border border-white/5 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 cursor-default relative z-10">
              {getTechIcon(t)}
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['experience', 'projects', 'skills', 'certifications', 'contact'];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect if the section's top is in or above the upper mid-screen
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to catch initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      role: "Bank Trainee",
      company: "People's Bank",
      logo: peoplesBankLogo,
      location: "Pilimathalawa Branch",
      duration: "2023 - 2024",
      tag: "Internship",
      highlights: [
        "Maintained accurate cash handling and transaction records to ensure compliance with banking regulations.",
        "Assisted in customer service and general banking operations.",
        "Gained hands-on experience in financial process management."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc (Hons) in Management & Information Technology",
      institution: "University of Kelaniya",
      duration: "2024 - Present",
      location: "Kelaniya",
      tag: "Undergraduate",
      details: "Specialization in Business System Engineering. Current GPA: 3.58",
      logo: uokLogo
    },
    {
      degree: "Diploma In Information Technology",
      institution: "Esoft Metro Campus",
      duration: "2023 - 2024",
      location: "Kandy",
      tag: "Distinction",
      details: "Passed with Distinction, focusing on core software concepts and IT infrastructure.",
      logo: esuLogo,
      imgClass: "rounded-full overflow-hidden"
    },
    {
      degree: "G.C.E Advanced Level Examination",
      institution: "Ranabima Royal College Kandy",
      duration: "2022",
      location: "Kandy",
      tag: "Sciences",
      details: "Physics (B), Chemistry (C), Biology (C)",
      logo: rrckLogo
    }
  ];

  const projects = [
    {
      title: "Vehicle Management System - UOK",
      category: "Full-Stack Development",
      duration: "2025 - Present",
      description: "Developed a full-stack web system to digitalize vehicle reservations with multi-level approval workflows and double-booking prevention.",
      tech: ["React", "Express", "Node.js", "MySQL"],
      image: vehicleMsImg
    },
    {
      title: "Zenith Project Management System",
      category: "Agile Project Management",
      duration: "2025 - Present",
      description: "Designed and developed an Agile-based project management system with sprint planning, backlog management, and issue tracking. Implemented milestone tracking and burndown charts, enabling 25% faster sprint completion through improved visibility. Built a customer portal for requirement submission and real-time project visibility, improving stakeholder collaboration.",
      tech: ["Next.js", "Node.js", "Agile", "Sprint Planning", "Milestone Tracking"],
      image: zenithImg,
      githubUrl: "https://github.com/Thilanga24/Zenith-Project-Management-System",
      liveUrl: ""
    },
    /* {
      title: "Project Performance & Tracking Dashboard",
      category: "Data Analytics",
      duration: "2024 - 2025",
      description: "Built an interactive Power BI dashboard to monitor active projects, tracking KPIs including schedule variance, budget utilization, and resource allocation. Designed Gantt charts and burndown charts, enabling project managers to identify delays 3x faster and proactively mitigate risks.",
      tech: ["Power BI", "Data Analytics", "KPI Tracking", "Gantt Charts"],
      image: "https://placehold.co/600x400/0a0a0a/purple?text=Power+BI+Dashboard"
    }, */
    {
      title: "AI-Powered Meal Planning Agent",
      category: "Artificial Intelligence",
      duration: "2025 - 2026",
      description: "Built a Python-based AI meal planning system using RAG with Qdrant, Gemini AI reasoning, and automated meal scheduling via Google Calendar, including meal ordering integration with Uber Eats and PickMe.",
      tech: ["Python", "Google Gemini API", "Qdrant", "Google Calendar API"],
      image: mealPlannerImg
    },
    {
      title: "SahanaLanka Emergency Alert App",
      category: "Mobile App",
      duration: "2025 - 2026",
      description: "Mobile application designed to help Sri Lankan citizens respond quickly during emergencies by sending SOS alerts with GPS location via SMS and providing offline first-aid guides.",
      tech: ["Kotlin", "SQLite", "GPS API", "Android SMS API"],
      image: sahanaLankaImg,
      images: [sahanaLankaImg, sahanaLanka1, sahanaLanka2, sahanaLanka3]
    },
    {
      title: "Thermobox - Smart Heat & Cool Lunchbox",
      category: "IoT / Smart Systems",
      duration: "2025",
      description: "Developed an IoT-enabled lunchbox with heating and cooling functionality to maintain meal temperature for office workers and travelers, focusing on smart temperature control and user-centered design.",
      tech: ["Arduino", "Sensors", "C++"],
      image: thermoboxImg
    },
    {
      title: "Restaurant Management System",
      category: "Enterprise System",
      duration: "2024 - 2025",
      description: "Java OOP-based system with MySQL database for restaurant operations. Managed database operations and implemented validations as part of a collaborative development team.",
      tech: ["Java", "MySQL", "OOP"],
      image: restaurantMsImg
    },
    {
      title: "Mini-Game Development",
      category: "Game Development",
      duration: "2024",
      description: "Led the design and development of a C++-based mini-game, ensuring smooth gameplay and system functionality.",
      tech: ["C++", "Algorithms", "Game Logic"],
      image: doomImg
    }
  ];

  const skillCategories = [
    {
      title: "Project Management",
      skills: ["Jira", "Confluence", "Microsoft Project", "Draw.io", "Agile", "Scrum", "Kanban"]
    },
    {
      title: "Data & Analytics",
      skills: ["Power BI", "Tableau", "Qdrant", "ChromaDB", "MySQL", "Excel"]
    },
    {
      title: "Artificial Intelligence",
      skills: ["RAG", "Prompt Engineering", "Large Language Models", "Gemini API", "LangChain"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Docker", "Kubernetes", "GitHub Actions", "APIs"]
    },
    {
      title: "ERP Systems",
      skills: ["ERP", "SAP", "Oracle"]
    }
  ];

  const certifications = [
    {
      title: "Managing Jira Projects: 1 Introduction",
      issuer: "LinkedIn",
      thumbnail: certManagingJira,
      verifyUrl: "https://www.linkedin.com/learning/certificates/d5a7a8afcc83579284cb634635c928cc08f030e9f9cb4f8efa4de7d038eae422?trk=share_certificate"
    },
    {
      title: "Agile Project Management with Microsoft Project",
      issuer: "Microsoft & LinkedIn",
      thumbnail: certAgileMSProject,
      verifyUrl: "https://www.linkedin.com/learning/certificates/2beb81c96c0c7a6701c4fcab0ec7b931696c385042186cceffe7aa6cacf089b1?trk=share_certificate"
    },
    {
      title: "Learning AI for Business Analysis",
      issuer: "LinkedIn",
      thumbnail: certAIBusinessAnalysis,
      verifyUrl: "https://www.linkedin.com/learning/certificates/569265394df5a6669bc65243a2c4570c825ff6fff46e593d956bd44e57ab88f7?trk=share_certificate"
    },
    {
      title: "Business Analysis Foundations",
      issuer: "LinkedIn",
      thumbnail: certBAFoundations,
      verifyUrl: "https://www.linkedin.com/learning/certificates/4e7ac09e366aad804c563a2107707f3ea2b9578f9abde355457eb2011705749c?trk=share_certificate"
    },
    {
      title: "Business Analysis Essential Tools and Techniques",
      issuer: "Microsoft & LinkedIn",
      thumbnail: certBA,
      verifyUrl: "https://www.linkedin.com/learning/certificates/2ebb2fa010f54b7ff92abb27b9539842c0980299a5a690d588b776431fcf7155?trk=share_certificate"
    },
    {
      title: "Project Management Foundations",
      issuer: "Microsoft & LinkedIn",
      thumbnail: certPM
    },
    { title: "Career Essentials in Business Analysis", issuer: "Microsoft & LinkedIn" },
    { title: "Agile Project Management", issuer: "LinkedIn" },
    { title: "Scrum: The Basics", issuer: "LinkedIn" },
    { title: "Power BI Data Visualization", issuer: "LinkedIn" },
    { title: "AI/ML Engineering", issuer: "SLIT University" },
    { title: "Learning Jira", issuer: "Microsoft & LinkedIn" }
  ];

  const digitalBadges = [
    { title: "Agentblazer Champion", issuer: "Salesforce", image: badgeSalesforce },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy", image: badgePython, isSquare: true },
    { title: "API Fundamentals", issuer: "Postman", image: badgePostman },
    { title: "GitHub for Beginners", issuer: "GitHub", image: badgeGithub1, removeBg: true },
    { title: "GitHub Actions Beginner", issuer: "GitHub", image: badgeGithub2, removeBg: true }
  ];

  const extraCurricular = [
    {
      role: "Team Leader - IT Avenue",
      org: "Rotaract Club of University of Kelaniya",
      logo: racUokLogo || defaultLogo,
      description: "Currently leading the EvolveX project, overseeing coordination, team collaboration, and stakeholder communication for multiple events."
    },
    {
      role: "Finance Coordinator",
      org: "Leo Club of University of Kelaniya",
      logo: leoLogo || defaultLogo,
      description: "Managed finances and resource allocation for the Nethsuwa project."
    },
    {
      role: "Member",
      org: "IEEE Student Branch of University of Kelaniya",
      logo: ieeeLogo || defaultLogo,
      description: "Active member, participating in technical workshops, seminars, and fostering innovation within the community."
    },
    {
      role: "Member / Athlete",
      org: "University Baseball Team (UOK)",
      logo: uokLogo || defaultLogo,
      description: "Active member and player for the University Baseball Team."
    }
  ];

  const communityEvents = [
    {
      title: "Down the Wicket",
      role: "Organizer",
      description: "Actively contributed to the planning and execution of the 'Down the Wicket' event, coordinating logistics and fostering team collaboration.",
      images: [
        "https://placehold.co/800x600/0f172a/fff?text=Wicket+1",
        "https://placehold.co/800x600/1e293b/fff?text=Wicket+2"
      ]
    },
    {
      title: "Career Fair",
      role: "Coordinator",
      description: "Facilitated interactions between students and corporate representatives, ensuring a seamless event flow and valuable networking opportunities.",
      images: [
        "https://placehold.co/800x600/1e293b/fff?text=Main+Fair",
        "https://placehold.co/800x600/0f172a/fff?text=Fair+2",
        "https://placehold.co/800x600/1e293b/fff?text=Fair+3"
      ]
    },
    {
      title: "HackX",
      role: "Participant",
      description: "Engaged in the HackX hackathon, contributing to innovative tech solutions and collaborative development within a fast-paced environment.",
      image: "https://placehold.co/800x600/0f172a/fff?text=HackX+Event"
    },
    {
      title: "HackX Jr",
      role: "Volunteer",
      description: "Guided and mentored younger students during HackX Jr, fostering their interest in technology and problem-solving.",
      image: "https://placehold.co/800x600/1e293b/fff?text=HackX+Jr+Event"
    },
    {
      title: "Exposition",
      role: "Coordinator",
      description: "Helped manage and structure the Exposition event, ensuring smooth operations and high engagement from attendees and exhibitors.",
      image: "https://placehold.co/800x600/0f172a/fff?text=Exposition+Event"
    },
    {
      title: "Media Spark",
      role: "Media Team",
      description: "Handled digital media and content creation for Media Spark, significantly boosting the event's reach and audience engagement.",
      image: "https://placehold.co/800x600/1e293b/fff?text=Media+Spark+Event"
    },
    {
      title: "Spotlight",
      role: "Core Team",
      description: "Played a key role in orchestrating Spotlight, focusing on event logistics, branding, and ensuring a memorable experience for participants.",
      image: "https://placehold.co/800x600/0f172a/fff?text=Spotlight+Event"
    },
    {
      title: "EvolveX",
      role: "Team Leader",
      description: "Led the core team for EvolveX, overseeing coordination, strategic planning, and overall stakeholder communication for maximum impact.",
      image: "https://placehold.co/800x600/1e293b/fff?text=EvolveX+Event"
    }
  ];

  return (
    <div className="min-h-screen text-slate-300 font-inter selection:bg-cyan-500/30">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-10">
          {/* Interactive Text Logo */}
          <div className="font-orbitron text-lg md:text-xl font-bold text-white uppercase tracking-wider hover:tracking-widest transition-all duration-500 cursor-pointer select-none">
            Thilanga <span className="text-cyan-400">Gunathilaka</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            {['experience', 'projects', 'skills', 'certifications', 'contact'].map(item => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`relative py-1 capitalize transition-colors duration-300 ${activeSection === item ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-200'}`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          <a href="/CV.pdf" download="Thilanga_Gunathilaka_CV.pdf" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 text-[#030014] hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 text-sm font-bold tracking-wide">
            <Download size={18} /> Download CV
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div
          className="flex-1 space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-card text-sm">
            <MapPin size={16} className="text-cyan-400" />
            <span>Colombo, Sri Lanka</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-orbitron font-extrabold text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Thilanga Gunathilaka
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-medium tracking-wide">
              MIT Undergraduate | Aspiring BA | PM
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed max-w-xl text-lg">
            Third-year BSc (Hons) Management and IT student at UOK with a strong interest in bridging business goals and technology. I am skilled in project planning, requirements analysis, and data visualization.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={18} />
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/thilanga-gunathilaka" target="_blank" rel="noreferrer" className="btn-secondary !px-4 hover:border-cyan-500/50 hover:text-cyan-400">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Thilanga24" target="_blank" rel="noreferrer" className="btn-secondary !px-4 hover:border-cyan-500/50 hover:text-cyan-400">
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end z-10 relative mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-72 h-[380px] md:w-80 md:h-[450px] lg:mr-10">
            {/* Abstract Background Aura */}
            <div className="absolute inset-x-0 -bottom-10 h-3/4 bg-gradient-to-t from-cyan-500/20 to-transparent blur-2xl"></div>

            {/* Tilted Glass Back-Frame */}
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl rotate-6 transform transition-transform duration-700 hover:rotate-12 backdrop-blur-sm z-0"></div>

            {/* Main Photo Card Container with Outer Glow */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 z-10 shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] group">
              {/* Internal Shadow/Vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10 opacity-80 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"></div>

              <img
                src={profileImg}
                alt="Thilanga Gunathilaka"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.src = defaultLogo }}
              />

              {/* Elegant Nameplate Removed for minimal photo view */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container relative">
        <h2 className="text-3xl md:text-5xl text-center mb-16">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Expertise</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] min-w-[300px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-colors"></div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                {idx === 0 ? <Briefcase className="text-cyan-400" /> :
                  idx === 1 ? <Database className="text-indigo-400" /> :
                    idx === 2 ? <BrainCircuit className="text-purple-400" /> :
                      idx === 3 ? <Workflow className="text-pink-400" /> :
                        idx === 4 ? <Code className="text-teal-400" /> :
                          <Cpu className="text-orange-400" />}
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors cursor-default hover:-translate-y-0.5 shadow-sm hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    {getTechIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="text-3xl md:text-5xl text-center mb-16">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} idx={idx} />
          ))}
        </div>
      </section>

      {/* Journey (Experience & Education) */}
      <section id="experience" className="section-container">
        <h2 className="text-3xl md:text-5xl text-center mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Journey</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-10 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <Briefcase className="text-teal-400" size={24} />
              </div>
              Work Experience
            </h3>

            <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[22px] before:w-[2px] before:bg-gradient-to-b before:from-teal-500/50 before:via-teal-500/20 before:to-transparent">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Glowing Timeline Marker */}
                  <div className="absolute left-[15px] top-2 w-4 h-4 rounded-full bg-[#030014] border-2 border-teal-400 z-10 shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20"></div>
                  </div>

                  <div className="glass-card p-5 md:p-6 hover:bg-white/[0.03] transition-all duration-500 border-white/5 hover:border-teal-500/30 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] relative overflow-hidden">
                    {/* Project-style glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] group-hover:bg-teal-500/20 transition-colors pointer-events-none z-0"></div>

                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5 relative z-10">
                      {exp.logo && (
                        <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            {exp.tag || 'Experience'}
                          </span>
                          <span className="text-[11px] md:text-xs font-medium text-slate-400 flex items-center gap-1.5">
                            <Calendar size={12} className="text-teal-500/70" /> {exp.duration}
                          </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-0.5 group-hover:text-teal-400 transition-colors">{exp.role}</h4>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[13px] text-slate-300 font-medium">
                          <span className="text-teal-500/90 font-semibold">{exp.company}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600 hidden md:block"></span>
                          <span className="text-slate-400 flex items-center gap-1.5"><MapPin size={12} /> {exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 relative z-10">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] md:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-teal-500/40 shrink-0"></div>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-10 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <GraduationCap className="text-indigo-400" size={24} />
              </div>
              Education
            </h3>

            <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[22px] before:w-[2px] before:bg-gradient-to-b before:from-indigo-500/50 before:via-indigo-500/20 before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Glowing Timeline Marker */}
                  <div className="absolute left-[15px] top-2 w-4 h-4 rounded-full bg-[#030014] border-2 border-indigo-400 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20"></div>
                  </div>

                  <div className="glass-card p-5 md:p-6 hover:bg-white/[0.03] transition-all duration-500 border-white/5 hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] relative overflow-hidden">
                    {/* Project-style glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] group-hover:bg-indigo-500/20 transition-colors pointer-events-none z-0"></div>

                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4 relative z-10">
                      {edu.logo && (
                        <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                          <img src={edu.logo} alt={edu.institution} className={`w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)] ${edu.imgClass || ''}`} />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {edu.tag || 'Student'}
                          </span>
                          <span className="text-[11px] md:text-xs font-medium text-slate-400 flex items-center gap-1.5">
                            <Calendar size={12} className="text-indigo-400/70" /> {edu.duration}
                          </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-0.5 group-hover:text-indigo-400 transition-colors leading-tight">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[13px] text-slate-300 font-medium">
                          <span className="text-indigo-400/90 font-semibold">{edu.institution}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600 hidden md:block"></span>
                          <span className="text-slate-400 flex items-center gap-1.5"><MapPin size={12} /> {edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[13px] md:text-sm text-slate-400 leading-relaxed pl-2 border-l-2 border-indigo-500/20 mt-3 group-hover:text-slate-300 transition-colors relative z-10">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-container relative">
        <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 mt-10">
          <h2 className="text-3xl md:text-5xl">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-4">Formal courses, professional achievements, and continuous learning.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-32 mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              onClick={() => {
                if (cert.verifyUrl) window.open(cert.verifyUrl, '_blank');
              }}
              className={`glass-card group relative overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] ${cert.verifyUrl ? 'cursor-pointer' : ''}`}
            >
              <div className="w-full h-40 md:h-44 overflow-hidden relative bg-[#0c0c1a]">
                <img
                  src={cert.thumbnail || `https://placehold.co/800x500/0f172a/94a3b8?text=${cert.title.split(' ').join('+')}&font=inter`}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = `https://placehold.co/800x500/0f172a/94a3b8?text=${cert.title.split(' ').join('+')}&font=inter` }}
                />

                {/* Hover Overlay */}
                {cert.verifyUrl && (
                  <div className="absolute inset-0 bg-[#030014]/0 group-hover:bg-[#030014]/50 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <div className="px-5 py-2.5 rounded-full bg-cyan-500 text-[#030014] text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                        <ExternalLink size={14} /> Verify on LinkedIn
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="p-4 md:p-5">
                <h4 className="text-sm md:text-md font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">{cert.title}</h4>
                <p className="text-xs text-indigo-400 font-semibold">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Badges Section */}
        <div className="text-center mb-16 relative mt-20">
          <div className="absolute left-1/2 -ml-[200px] top-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl mb-4">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Badges</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">Verified skills and recognized micro-credentials.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-center max-w-7xl mx-auto">
            {digitalBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group relative overflow-hidden flex flex-col items-center p-5 hover:-translate-y-2 transition-transform duration-300 hover:border-yellow-500/30"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 blur-[40px] group-hover:bg-orange-500/20 transition-colors pointer-events-none z-0"></div>
                <div className={`w-20 h-20 lg:w-24 lg:h-24 mb-4 ${badge.isSquare ? 'rounded-2xl' : 'rounded-full'} overflow-hidden bg-white/5 border-[3px] border-white/10 p-1 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 group-hover:scale-110 relative z-10`}>
                  <div className={`w-full h-full ${badge.isSquare ? 'rounded-xl' : 'rounded-full'} ${badge.removeBg ? 'bg-white' : 'bg-[#1e293b]'} overflow-hidden flex items-center justify-center relative`}>
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className={`w-[90%] h-[90%] object-contain drop-shadow-md ${badge.removeBg ? 'mix-blend-multiply scale-110' : ''}`}
                    />
                  </div>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white text-center mb-2 leading-tight group-hover:text-yellow-400 transition-colors">{badge.title}</h4>
                <div className="px-3 py-1 mt-auto rounded-full bg-white/5 text-[10px] text-slate-300 uppercase tracking-wider font-bold border border-white/5">
                  {badge.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clubs & Associations Section */}
        <div className="text-center mb-16 relative mt-32">
          <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Clubs & Associations</h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">Active leadership roles in top university organizations.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraCurricular.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:border-indigo-500/30"
              >
                <div className="w-20 h-20 bg-white rounded-2xl p-2 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                  <img src={item.logo} alt={item.org} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none' }} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.role}</h4>
                <p className="text-xs text-indigo-400 font-semibold mb-4 uppercase tracking-wide">{item.org}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community & Events Section */}
        <div className="text-center mb-16 mt-32 relative">
          <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Events</span>
          </h2>
          <p className="text-slate-400 mt-4">Key events and networking initiatives successfully facilitated.</p>
        </div>

        <div className="overflow-hidden w-[100vw] relative left-1/2 -ml-[50vw] py-4">
          {/* Gradient Vignette Edges for smooth fade-in/fade-out clipping effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee gap-8 px-4">
            {/* Duplicating the now-expanded array just once to maintain the perfect readability speed while looping seamlessly */}
            {[...communityEvents, ...communityEvents].map((item, idx) => (
              <div
                key={idx}
                className="glass-card overflow-hidden group hover:border-cyan-500/30 transition-colors cursor-pointer w-[350px] md:w-[450px] shrink-0"
              >
                {/* Event Image Banner (Moving Photo Setup) */}
                <div className="w-full h-56 md:h-64 overflow-hidden relative bg-[#0a0a0a]">
                  {item.images && item.images.length > 0 ? (
                    <div className={`w-full h-full grid gap-0.5 ${item.images.length === 1 ? 'grid-cols-1' :
                      item.images.length === 2 ? 'grid-cols-2' :
                        item.images.length === 3 ? 'grid-cols-2 grid-rows-2' :
                          'grid-cols-2 grid-rows-2'
                      }`}>
                      {item.images.slice(0, 4).map((img, i) => (
                        <div
                          key={i}
                          className={`relative overflow-hidden w-full h-full ${item.images.length === 3 && i === 0 ? 'row-span-2' : ''
                            }`}
                        >
                          <img
                            src={img}
                            alt={`${item.title} snapshot ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                    />
                  )}

                  {/* Floating Role Tag */}
                  <div className="absolute top-4 right-4 bg-[#030014]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-white font-bold tracking-wide flex items-center gap-2 shadow-lg z-20">
                    {item.role}
                  </div>
                </div>

                {/* Event Content Details */}
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm line-clamp-3 md:line-clamp-none">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container relative mb-32 mt-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl mb-4">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Collaborate?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you have a specific project in mind, need a consultant to streamline your operations, or just want to connect, I'm here to help turn ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto relative z-10">

          {/* Left Column: Direct Contact & Strategy */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#030014] transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:thilanga24kln@gmail.com" className="text-white text-base font-medium hover:text-cyan-400 transition-colors">thilanga24kln@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-[#030014] transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                  <a href="https://wa.me/94766184527" target="_blank" rel="noreferrer" className="text-white text-base font-medium hover:text-green-400 transition-colors">+94 76 618 4527</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-400 group-hover:text-[#030014] transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-white text-base font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Added Download CV specifically built into the contact logic */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm mb-5">Looking for more detailed professional history?</p>
              <a href="/CV.pdf" download="Thilanga_Gunathilaka_CV.pdf" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-[#030014] text-xs font-bold uppercase tracking-wider transition-all duration-300 group shadow-lg">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Download Full Resume
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Form */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden flex flex-col justify-center">
            {/* Form aesthetic background mesh */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
              <div className="space-y-1.5">
                <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-medium text-base" placeholder="Your Name" />
              </div>
              <div className="space-y-1.5">
                <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-medium text-base" placeholder="Email Address" />
              </div>
              <div className="space-y-1.5 pt-1.5">
                <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 font-medium text-base" placeholder="Subject" />
              </div>
              <div className="space-y-1.5 pt-1.5">
                <textarea rows="3" className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-slate-600 font-medium text-base" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full mt-6 py-3.5 rounded-xl font-bold bg-white text-[#030014] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 text-base shadow-xl active:scale-95">
                Submit Inquiry <ChevronRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030014] relative overflow-hidden mt-10">
        {/* Glowing top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        {/* Soft bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[150px] rounded-t-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-center mb-12 relative z-10">
            {/* Left: Brand Identity */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-orbitron font-bold text-white text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  T
                </div>
                <div>
                  <div className="font-orbitron font-bold text-white text-lg tracking-widest leading-none">THILANGA</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-[250px]">
                Business System Engineering Undergraduate passionate about bridging business capabilities with modern tech.
              </p>
            </div>

            {/* Middle: Quick Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Quick Navigate</h4>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">Experience</a>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills</a>
                <a href="#certifications" className="text-slate-400 hover:text-cyan-400 transition-colors">Badges</a>
              </nav>
            </div>

            {/* Right: Contact Links & Social Media */}
            <div className="flex flex-col items-center md:items-end w-full">
              <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm flex items-center gap-2">Let's Connect</h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full">
                <a href="mailto:thilanga24kln@gmail.com" title="Email" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(34,211,238,0.3)]">
                  <Mail size={18} />
                </a>
                <a href="https://wa.me/94766184527" title="WhatsApp" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
                  <MessageCircle size={18} />
                </a>
                <a href="https://linkedin.com/in/thilanga-gunathilaka" title="LinkedIn" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/Thilanga24" title="GitHub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/20 hover:text-white hover:border-white/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
                  <Github size={18} />
                </a>
                {/* Social placeholders ready for direct links */}
                <a href="#" title="Facebook" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)]">
                  <Facebook size={18} />
                </a>
                <a href="#" title="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/50 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(236,72,153,0.3)]">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Thilanga Gunathilaka. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 font-orbitron flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              Designed with minimalist tech aesthetic.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
