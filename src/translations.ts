interface Translation {
  language: string;
  navigation: {
    about: string;
    resume: string;
  };
  sections: {
    education: string;
    codingSkills: string;
    designSkills: string;
  };
  hero: {
    role: string;
    title: string;
    description: string;
    buttons: {
      download: string;
      contact: string;
    };
  };
  whatIDo: {
    title: string;
    cards: {
      frontend: {
        title: string;
        description: string;
      };
      responsive: {
        title: string;
        description: string;
      };
      uiux: {
        title: string;
        description: string;
      };
      performance: {
        title: string;
        description: string;
      };
    };
  };
  portfolio: {
    title: string;
    viewText: string;
    closeText: string;
    projectTitle: string;
    projectDescription: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    language: "Language",
    navigation: {
      about: "About",
      resume: "Resume",
    },
    sections: {
      education: "Education",
      codingSkills: "Coding Skills",
      designSkills: "Design & Technical Skills",
    },
    hero: {
      role: "Full Stack Developer & Interior Designer",
      title: "Hi, I'm Deniz Barçak.",
      description:
        "I graduated from the Interior Architecture Department of Haliç University in 2022. I have a strong foundation in design, technical drawing, and 3D modeling, and I've actively contributed to projects of various scales. Driven by the desire to express my creativity beyond physical spaces, I turned to software development. I began an intensive full-stack program at Üçüncü Binyıl Academy, focusing on both frontend and backend technologies. During this time, I also worked at Kartelam, where I applied my knowledge in real-world projects. I enjoy blending design thinking with code—merging aesthetics and functionality to create meaningful digital experiences.",
      buttons: {
        download: "Download CV",
        contact: "Contact",
      },
    },
    whatIDo: {
      title: "What I Do",
      cards: {
        frontend: {
          title: "Frontend Development",
          description:
            "Building performant and scalable web applications using React, Next.js and modern frontend technologies.",
        },
        responsive: {
          title: "Backend Development",
          description:
            "Developing robust server-side applications using Node.js, Express, and database management with MongoDB and PostgreSQL.",
        },
        uiux: {
          title: "UI/UX Design",
          description:
            "Designing aesthetic and functional interfaces that prioritize user experience.",
        },
        performance: {
          title: "3D Modeling & CAD Planning",
          description:
            "Creating detailed architectural plans and 3D visualizations using AutoCAD and advanced modeling tools for precise spatial design.",
        },
      },
    },
    portfolio: {
      title: "Portfolio",
      viewText: "Click to view my projects",
      closeText: "Click to close portfolio showcase",
      projectTitle: "Project Name",
      projectDescription: "Project description goes here",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      github: "GitHub",
    },
  },
  tr: {
    language: "Dil",
    navigation: {
      about: "Hakkımda",
      resume: "Özgeçmiş",
    },
    sections: {
      education: "Eğitim",
      codingSkills: "Yazılım Becerileri",
      designSkills: "Tasarım & Teknik Beceriler",
    },
    hero: {
      role: "Full Stack Geliştirici & İç Mimar",
      title: "Merhaba, Ben Deniz Barçak.",
      description:
        "2022 yılında Haliç Üniversitesi İç Mimarlık Bölümü'nden mezun oldum. Tasarım, teknik çizim ve 3D modelleme konularında güçlü bir altyapıya sahibim ve çeşitli ölçeklerde projelere aktif olarak katkıda bulundum. Yaratıcılığımı fiziksel mekanların ötesinde ifade etme arzusuyla yazılım geliştirmeye yöneldim. Üçüncü Binyıl Akademi'de yoğun bir full-stack programına başladım ve hem frontend hem de backend teknolojilerine odaklandım. Bu süre zarfında Kartelam'da çalışarak bilgilerimi gerçek dünya projelerinde uyguladım. Tasarım düşüncesini kodla harmanlayarak, estetik ve işlevselliği birleştirerek anlamlı dijital deneyimler yaratmaktan keyif alıyorum.",
      buttons: {
        download: "CV İndir",
        contact: "İletişim",
      },
    },
    whatIDo: {
      title: "Neler Yapıyorum",
      cards: {
        frontend: {
          title: "Frontend Geliştirme",
          description:
            "React, Next.js ve modern frontend teknolojileri ile performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum.",
        },
        responsive: {
          title: "Backend Geliştirme",
          description:
            "Node.js ve Express kullanarak güçlü sunucu uygulamaları geliştiriyor, MongoDB ve PostgreSQL ile veritabanı yönetimi yapıyorum.",
        },
        uiux: {
          title: "UI/UX Tasarım",
          description:
            "Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel arayüz tasarımları oluşturuyorum.",
        },
        performance: {
          title: "3D Modelleme & CAD Planlama",
          description:
            "AutoCAD ve gelişmiş modelleme araçları ile detaylı mimari planlar ve 3D görselleştirmeler oluşturarak hassas mekansal tasarımlar yapıyorum.",
        },
      },
    },
    portfolio: {
      title: "Portfolyo",
      viewText: "Projelerimi görmek için tıklayınız",
      closeText: "Portfolyoyu kapatmak için tıklayınız",
      projectTitle: "Proje Adı",
      projectDescription: "Proje açıklaması burada yer alacak",
    },
    contact: {
      title: "İletişim",
      email: "E-posta",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      github: "GitHub",
    },
  },
};
