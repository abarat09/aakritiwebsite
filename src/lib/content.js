//You can modify each field with new text or a route to a new image. Adding new sections will require adding new nav buttons to Header.js and modifying the switch in HomePage.js

const content = {
  1: {
    title: "Aakriti Barat",
    subTitle: null,
    description: null,
    leftColumn: [
      {
        image: null,
        subHeading: null,
        text:
          "My name is Aakriti Barat and I am a PhD candidate in Electrical Engineering at Ohio University, advised by Dr. Savas Kaya. My research is focused on cybersecurity in hardware design.",
      },
      {
        image: null,
        subHeading: null,
        text:
          "My research interests include cybersecurity, hardware design, data science, and emerging technologies in nanoelectronics.",
      },
    ],
    rightColumn: [
      {
        image: "aakriti.png",
        subHeading: null,
        text: null,
      },
    ],
  },

  2: {
    title: "About",
    subTitle: "Researcher. Engineer. Nature lover.",
    description: null,
    leftColumn: [
      {
        image: null,
        subHeading: null,
        text: `I'm an Electrical Engineer, born in Bhopal, India. I got my Bachelors from my hometown, worked in a research organization for about a year before I decided to come to the US in 2015 to get my Masters from The Ohio State University.`,
      },
      {
        image: null,
        subHeading: null,
        text:
          "My specialities include quickly learning new skill/programming languages and creating documentation. I prefer working in a team-based environment where I can utilize my strong organizational and communication skills to deliver key projects under stringent deadlines. I love designing new products and seeing the prototypes do what they are intended to do - building electronics that people get to use brings me so much joy.",
      },
    ],
    rightColumn: [
      {
        image: null,
        subHeading: null,
        text: `I love hiking, making new friends and having long conversations. I end up introducing them to Indian cuisine and Bollywood and they always love it! I volunteer regularly for social work and wildlife, trying to make a little bit of a difference every time.`,
      },
      {
        image: null,
        subHeading: null,
        text: `If you ask me what my dream career looks like, I'd say :
      1) Volunteering for the big cats in South Africa.
      2) Combine my constant pull towards the medical device industry and the major I got my Masters in - electrical engineering for medical devices.`,
      },
    ],
  },

  3: {
    title: "Roles",
    subTitle: null,
    description: `I’m passionate about innovation and driven by social impact. I enjoy being surrounded by brilliant people that share the vision of “technology for good”. I’m constantly evolving by way of learning new technical and social skills. The ever-growing challenges I face everyday excite me and I’m keen to take them on with my problem solving and analytical thinking capabilities.`,
    leftColumn: [
      {
        image: null,
        subHeading: "Work Experience",
        text:
          "Vertiv : As a Sr Electrical Hardware Design Engineer, I worked with a team of amazing colleagues to develop high performance efficient thermal management solutions geared to specific size, location and business goals of a data center.",
      },
      {
        image: null,
        subHeading: null,
        text: `Thermo Fisher Scientific : As a Hardware Design Engineer, I designed radiation measurement instruments for routine and comprehensive real time monitoring of radiation and radionuclide analysis for any scenario.`,
      },
      {
        image: null,
        subHeading: "Research Experience",
        text: `\u00a0\u00a0\u00a0\u00a0PhD Student | Teaching Assistant at Ohio University`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Graduate Student at Ohio State University`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Research Intern at BHEL, in Controls Equipment Engineering`,
      },
    ],
    rightColumn: [
      {
        image: null,
        subHeading: "Skills",
        text: `\u00a0\u00a0\u00a0\u00a0Python, C, VHDL, PCAD, MATLAB`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Electrical system design and integration`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Fabrication drawings, Electrical schematics`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Circuit diagnostics, prototype fabrication`,
      },
      {
        image: null,
        subHeading: "Certifications (Coursera)",
        text: `\u00a0\u00a0\u00a0\u00a0Motors and Motor Circuit Control`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Python to interact with Operating Systems`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Data Analytics on AWS`,
      },
      {
        image: null,
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Crash Course on Python`,
      },
    ],
  },

  4: {
    title: "Activities",
    subTitle: null,
    description: null,
    leftColumn: [
      {
        image: null,
        subHeading: "Cybersecurity Workshop for K-12 Teachers Summer 2021/2022",
        text: `A workshop to spread cybersecurity awareness among teachers since they play an important role in educating young minds. The workshop consisted of software and hardware security elements with hands on demonstrations using Jupytyr platform (Python). Take home kits such as Raspberry Pi, Blinkt, RainbowHAT and Enviro boards were used.`,
      },
      {
        image: null,
        subHeading: "Kids on Campus Summer 2022",
        text: `The cybersecurity workshop for K-12 teachers was refashioned to gear towards young kids ranging from rising 6th to 10th graders. They were introduced to Python programming using Jupytr on Raspberry Pi, Blinkt, Enviro and RainbowHAT, as well as Scratch.`,
      },
    ],
    rightColumn: [
      {
        image: null,
        subHeading: "Volunteering",
        text: null,
      },
      {
        image: 'fooddrive.png',
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Fighting Food Injustice`,
      },
      {
        image: 'animalshelter.png',
        subHeading: null,
        text: `\u00a0\u00a0\u00a0\u00a0Volunteering at animal shelters`,
      },
    ],
  },

  5: {
    title: "Contact",
    subTitle: null,
    description: null,
    leftColumn: [
      {
        image: null,
        subHeading: "Email",
        text: `Add your email here`,
      },
      {
        image: null,
        subHeading: "Linkedin",
        text: <a href="https://www.linkedin.com/in/aakritibarat">https://www.linkedin.com/in/aakritibarat</a>
      },
      {
        image: null,
        subHeading: "Advisor Email",
        text: `Add advisor's email here`,
      },
      
      {
        image: null,
        subHeading: "Address",
        text: `Stocker Center
        Athens, OH 45701`,
      },
      
    ],
    rightColumn: [
      {
        image: 'aakriticontact.JPEG',
        subHeading: null,
        text: null,
      },
    ],
  },
};

export default content;
