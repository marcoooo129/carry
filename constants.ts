import { ContentData, Language } from './types';

// =========================================================================
// 图片设置区域 (IMAGE SETTINGS)
// =========================================================================
// 🔴 如何换成自己的照片？(How to use your own photos?)
// 1. 将您的照片文件（例如 my-photo.jpg）放入项目的 public 文件夹中。
// 2. 将下方的链接改为文件名，例如: profile: "/my-photo.jpg"
//
// 🔴 How to use online images?
// Keep the https:// links as they are.
// =========================================================================

export const IMAGES = {
  // 首页大背景图 (建议使用横屏高清图，暗色调、光影感强)
  // Current: A moody, dark grand piano silhouette in a concert hall setting
  heroBackground: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop", 
  
  // Passion & Dedication 部分的插图
  // Current: Artistic shot of hands playing piano with dramatic lighting, emphasizing emotion and movement
  profile: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop"
};

export const CONTENT: Record<Language, ContentData> = {
  it: {
    nav: {
      about: "Informazioni",
      education: "Istruzione",
      experience: "Esperienza",
      awards: "Premi",
      contact: "Contatti"
    },
    hero: {
      role: "Pianista",
      scroll: "Scorri per esplorare"
    },
    personal: {
      title: "Informazioni Personali",
      dobLabel: "Data di nascita",
      phoneLabel: "Telefono",
      emailLabel: "E-mail",
      majorLabel: "Materia principale",
      majorValue: "Pianoforte"
    },
    education: {
      title: "Istruzione",
      items: [
        {
          period: "2025 - Presente",
          institution: "Conservatorio Statale di Musica di Roma “Santa Cecilia”",
          degree: "Accademia 2° Livello: Pianoforte",
          location: "Roma, Italia"
        },
        {
          period: "09/2020 - 06/2024",
          institution: "Kharkiv I. P. Kotlyarevsky National University of Arts",
          degree: "Accademia 1° Livello: Piano, organo",
          location: "Kharkiv, Ucraina"
        }
      ]
    },
    experience: {
      title: "Esperienza Pratica",
      items: [
        {
          date: "04/2024",
          description: "Partecipazione ad attività di pratica didattica in Ucraina"
        }
      ]
    },
    awards: {
      title: "Premi e Riconoscimenti",
      items: [
        {
          date: "13/05/2024",
          name: "Vincitore del Festival pianistico panucraino 'Bortkiewicz Festival'",
          issuer: "Ministero dell'Istruzione dell'Ucraina"
        },
        {
          date: "21/03/2024",
          name: "Certificazione del Festival musicale online 'Bach Marathon'",
          issuer: "Ministero dell'Istruzione dell'Ucraina"
        }
      ]
    },
    skills: {
      title: "Competenze",
      languagesTitle: "Lingue",
      languages: [
        { name: "Cinese", level: "Madrelingua" },
        { name: "Italiano", level: "B2" },
        { name: "Russo", level: "A2" }
      ],
      professionalTitle: "Competenze Professionali",
      professional: [
        "Musica da camera per pianoforte",
        "Storia della musica dell'Europa occidentale",
        "Teoria musicale"
      ]
    },
    interests: {
      title: "Interessi",
      list: ["Viaggiare", "Fotografia", "Sport", "Letteratura"]
    }
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      awards: "Awards",
      contact: "Contact"
    },
    hero: {
      role: "Pianist",
      scroll: "Scroll to explore"
    },
    personal: {
      title: "Personal Information",
      dobLabel: "Date of Birth",
      phoneLabel: "Phone",
      emailLabel: "Email",
      majorLabel: "Major",
      majorValue: "Piano"
    },
    education: {
      title: "Education",
      items: [
        {
          period: "2025 - Present",
          institution: "Conservatorio Statale di Musica di Roma “Santa Cecilia”",
          degree: "Master's Degree (Level II): Piano",
          location: "Rome, Italy"
        },
        {
          period: "09/2020 - 06/2024",
          institution: "Kharkiv I. P. Kotlyarevsky National University of Arts",
          degree: "Bachelor's Degree (Level I): Piano, Organ",
          location: "Kharkiv, Ukraine"
        }
      ]
    },
    experience: {
      title: "Practical Experience",
      items: [
        {
          date: "04/2024",
          description: "Participation in teaching practice activities in Ukraine"
        }
      ]
    },
    awards: {
      title: "Honors & Awards",
      items: [
        {
          date: "13/05/2024",
          name: "Winner of the All-Ukrainian Piano Festival 'Bortkiewicz Festival'",
          issuer: "Ministry of Education of Ukraine"
        },
        {
          date: "21/03/2024",
          name: "Certification of the Online Music Festival 'Bach Marathon'",
          issuer: "Ministry of Education of Ukraine"
        }
      ]
    },
    skills: {
      title: "Skills",
      languagesTitle: "Languages",
      languages: [
        { name: "Chinese", level: "Native" },
        { name: "Italian", level: "B2" },
        { name: "Russian", level: "A2" }
      ],
      professionalTitle: "Professional Skills",
      professional: [
        "Chamber Music for Piano",
        "History of Western European Music",
        "Music Theory"
      ]
    },
    interests: {
      title: "Interests",
      list: ["Travel", "Photography", "Sports", "Literature"]
    }
  }
};