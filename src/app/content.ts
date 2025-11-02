// Essential content for Borbála Nagy filmmaker portfolio website

// Films data
const staticFilmsData = [
  {
    id: "nothing-to-see-here",
    title: "NOTHING TO SEE HERE",
    type: "Fiction in development",
      synopsis: "When a Hitler meme roasting the school's clueless management goes viral, a newly appointed principal finds herself at a crossroads: obey the orders from above and punish the student responsible, or follow her own moral compass—putting her job at risk. Based on real events.",
      images: [
        "/images/nothing-to-see-here/image1.png"
      ],
      awards: [
        {
          festival: "BUDAPEST DEBUT FILM FORUM",
          award: "Most Promising Fiction Feature Project",
          year: "2022",
          location: "Hungary",
          highlighted: true,
          image: "/images/awards/BDFF_logo.png"
        },
        {
          festival: "WENDLAND FILM FESTIVAL",
          award: "Best Pitch",
          year: "2019",
          location: "Germany",
          highlighted: true,
          image: "/images/awards/WS.png"
        }
      ],
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      
      // Cast information
      mainCast: [],
      
      // Crew
      producer: "Petra Iványi (Lupa Pictures)",
      
      // Awards and recognition
      invitations: [
        "Brussels Co-Production Forum (Belgium, 2022)",
        {
          name: "Cannes Cinéfondation Residence",
          festival: "Cannes Film Festival",
          location: "France",
          year: "2021-2022",
          highlighted: true,
          image: "/images/invitations/cinef_res.png"
        },
        {
          name: "Berlin AiR Artist-in-Residence",
          festival: "Berlin AiR",
          location: "Israel", 
          year: "2021",
          highlighted: true,
          image: "/images/invitations/berl.png"
        },
        {
          name: "Pop Up Film Residency",
          festival: "Pop Up Film",
          location: "Slovakia",
          year: "2021",
          highlighted: true,
          image: "/images/invitations/POP-UP-logo-small.png"
        },
        {
          name: "CineLink Industry Days",
          festival: "Sarajevo Film Festival",
          location: "Bosnia and Herzegovina",
          year: "2020",
          highlighted: true,
          image: "/images/invitations/cinelink.png"
        },
        "Inkubátor – Debut Film Forum (Hungary, 2021)",
        "Cutting Edge Talent Camp – International Filmfestival Mannheim-Heidelberg (Germany, 2020)",
        "Jump In – Poitiers Film Festival (France, 2020)"
      ],

      // Funding information
      fundedBy: [
        "Script development funded by the National Film Institute of Hungary (NFI Inkubátor program for debut films) and BKM - the Federal Government Commissioner for Culture and Media of Germany."
      ]
    },
    {
      id: "mambo-maternica",
      title: "MAMBO MATERNICA",
      subtitle: "In post-production",
      type: "Fiction",
      duration: "92'",
      year: "In post-production",
      language: "Hungarian, English, German, French",
      synopsis: "Somewhere in Europe, three Hungarian women are having a difficult day. While navigating life-changing decisions beyond the so-called norm, they are confronted with the issues of late motherhood. On their path toward self-determination, one question echoes: How free are they, really, to live the lives they desire?",
      images: [
        "/images/mambo-maternica/image1.png", 
        "/images/mambo-maternica/image2.png", 
        "/images/mambo-maternica/image3.png",
        "/images/mambo-maternica/image4.png",
        "/images/mambo-maternica/image5.png",
        "/images/mambo-maternica/image6.png",
        "/images/mambo-maternica/image7.png"
      ],
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      
      // Cast information
      mainCast: [
        "Orsolya Török-Illyés", 
        "Rozália Székely", 
        "Vera Sipos", 
        "Zoltán Schmied", 
        "Bea Lass", 
        "Kati Zsurzs", 
        "Fabian Gerhardt", 
        "Mouloud Ayad", 
        "Anne-Sophie Marie"
      ],
      
      // Crew
      producer: "Petra Iványi (Lupa Pictures), Margarita Amineva-Jester (Voices Films)",
      coProducers: [
        "Julie Paratian (Sister Productions)", 
        "Daria Wichmann (DFFB)"
      ],
      directorOfPhotography: "Moritz Friese",
      editing: "László Dunai",
      soundDesign: "Tamás Bohács",
      originalScore: "Selma Mutal",
      
      // Producer logos (crew)
      productionLogos: [
        "/images/producers/lupa_tipo_logo_fekete copy.png",
        "/images/producers/VF_Logo_04-2022_015.png",
        "/images/producers/sister_logo_black.png"
      ],
      
      // Financing
      financedBy: [
        "Inkubátor Debut Film Program – Hungarian National Film Fund (Hungary)",
        "ALCA Nouvelle Aquitaine (France)",
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Financing logos
      financingLogos: [
        "/images/producers/dffb-logo.png",
        "/images/producers/nfi.png"
      ],
      
      // Awards and recognition
      awards: [
        {
          festival: "CONNECTING COTTBUS",
          award: "CANNES PRODUCERS NETWORK AWARD",
          year: "2022",
          location: "Germany",
          highlighted: true,
          image: "/images/awards/cannes_pnaward.png"
        },
        {
          festival: "BUDAPEST DEBUT FILM FORUM",
          award: "MOST PROMISING FICTION FEATURE PROJECT",
          year: "2022",
          location: "Hungary",
          highlighted: true,
          image: "/images/awards/BDFF_logo.png"
        }
      ],
      
      // Festival invitations and participation
      invitations: [
        "Full Circle Lab / Nouvelle Aquitaine – script development (France, 2022)",
        "First Cut Lab – work in progress editing consultation (online, 2024)",
        "First Cut+ – work in progress presentation at Karlovy Vary International Film Festival (Czechia, 2024)"
      ]
    },
    {
      id: "land-of-glory",
      title: "LAND OF GLORY",
      subtitle: "(Pannónia dicsérete)",
      type: "Fiction",
      duration: "27'",
      year: "2020",
      language: "Hungarian",
      originalTitle: "Pannónia dicsérete",
      synopsis: "A typical literature class in a typical Hungarian school—except today, the entire school is preparing for a visit from the Prime Minister. The school secretary struggles to keep order, especially when the ceremonial cake won't fit in the fridge. Meanwhile Márti, a seemingly unremarkable schoolgirl, hesitantly prepares a small act of rebellion.",
      images: [
        "/images/land-of-glory/image1.png",
        "/images/land-of-glory/image2.png",
        "/images/land-of-glory/image3.png",
        "/images/land-of-glory/image4.png",
        "/images/land-of-glory/image5.png",
        "/images/land-of-glory/image6.png",
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/434508735",
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      coAuthor: "Judit Anna Bánházi",
      
      // Cast information
      mainCast: [
        "Hanna Angelus", 
        "Nóra Rainer-Micsinyei", 
        "Péter Janklovics", 
        "Zsuzsa Faragó"
      ],
      
      // Crew
      producer: "Margarita Amineva-Jester",
      directorOfPhotography: "Moritz Friese",
      editing: "László Dunai",
      soundDesign: "Tamás Bohács",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)",
        "Norbert Janssen Stiftung (Germany)"
      ],
      
      // Awards and recognition
      awards: [
        {
          festival: "GERMAN SHORT FILM AWARD",
          award: "Best short fiction",
          year: "",
          location: "",
          highlighted: true,
          image: "/images/awards/German_sho...il_award.png"
        },
        {
          festival: "Hungarian Film Critics' Prize",
          award: "Best short film",
          year: "",
          location: "",
          highlighted: true,
          image: "/images/awards/Hungarian_film_critics.jpg"
        },
        {
          festival: "KURZFILMFESTIVAL KÖLN",
          award: "3rd prize of the jury",
          year: "",
          location: "Köln, Germany",
          highlighted: true,
          image: "/images/awards/KFFK.png"
        },
        {
          festival: "KURZFILMFESTIVAL KÖLN",
          award: "Audience award",
          year: "",
          location: "Köln, Germany",
          highlighted: true,
          image: "/images/awards/KFFK2.png"
        },
        {
          festival: "ACHTUNG BERLIN",
          award: "Best medium-length film 2020",
          year: "",
          location: "Berlin, Germany",
          highlighted: true,
          image: "/images/awards/achtung.png"
        },
        {
          festival: "FRISS HÚS",
          award: "Best Live-Action Short",
          year: "",
          location: "Budapest, Hungary",
          highlighted: true,
          image: "/images/awards/Frisshus.png"
        },
        {
          festival: "Drama ISFF",
          award: "Special prize for the best production",
          year: "",
          location: "Drama, Greece",
          highlighted: true,
          image: "/images/awards/DISFF.png"
        },
        {
          festival: "Alter-Native",
          award: "Grand award for the best short film",
          year: "",
          location: "Targu Mures, Romania",
          highlighted: true,
          image: "/images/awards/alter_native.jpg"
        },
        {
          festival: "FILMSCHOOLFEST",
          award: "Best production",
          year: "",
          location: "Munich, Germany",
          highlighted: true,
          image: "/images/awards/fest_munich.png"
        },
        {
          festival: "Etiuda & Anima",
          award: "Honourable mention",
          year: "",
          location: "Krakow, Poland",
          highlighted: true,
          image: "/images/awards/Etiuda.png"
        },
        {
          festival: "Festival L'Europe autour de l'Europe",
          award: "Special mention",
          year: "",
          location: "Paris, France",
          highlighted: true,
          image: "/images/awards/Prix_sauvagae.jpg"
        },
        {
          festival: "BUSHO",
          award: "Special mention",
          year: "",
          location: "Budapest, Hungary",
          highlighted: true,
          image: "/images/awards/busho.jpg"
        },
        {
          festival: "MALTER",
          award: "2nd prize of the jury",
          year: "",
          location: "Debrecen, Hungary",
          highlighted: true,
          image: "/images/awards/Maltar.jpg"
        },
        {
          festival: "Stuttgarter Filmwinter",
          award: "Honorary mention",
          year: "",
          location: "Stuttgart, Germany",
          highlighted: true,
          image: "/images/awards/wand5.jpg"
        }
      ],
      
      // Festival selections
      festivals: [
        "Filmfestival Max Ophüls Preis (Germany)",
        "Filmfest Dresden (Germany)",
        "Poitiers Film Festival (France)",
        "Premiers Plans d'Angers (France)",
        "Tampere (Finland)",
        "Bamberger Kurzfilmtage (Germany)",
        "BUFF Malmö (Sweden)",
        "Go Short Nijmegen (Netherlands)",
        "Tel Aviv ISFF (Israel)",
        "Fünf Seen (Germany)",
        "Lubuskie (Poland)",
        "Tirana IFF (Albania)",
        "Finále Plzeň Festival (Czech Republic)",
        "Filmzeitkaufbeuren (Germany)",
        "Cinemira (Hungary)",
        "Filmtettfeszt (Romania)",
        "Visionär (Germany)"
      ]
    },
    {
      id: "everything-alright",
      title: "EVERYTHING ALRIGHT",
      subtitle: "(Minden rendben)",
      type: "Fiction",
      duration: "13'",
      year: "2019",
      language: "Hungarian",
      originalTitle: "Minden rendben",
      synopsis: "On his first day patrolling the border between Hungary and Serbia, Alpár is tasked with protecting his country from refugees. As he faces the harsh realities of life among the border guards, he soon realizes that surviving in this environment means abandoning his humanity.",
      images: [
        "/images/everything-alright/image1.png",
        "/images/everything-alright/image2.png",
        "/images/everything-alright/image3.png",
        "/images/everything-alright/image4.png",
        "/images/everything-alright/image5.png"
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/258494620",
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      
      // Cast information
      mainCast: [
        "Benett Vilmányi", 
        "Ákos Orosz"
      ],
      
      // Crew
      producer: "Luise Hauschild",
      directorOfPhotography: "Constantin Campean",
      editing: "László Dunai",
      soundDesign: "Tamás Bohács",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)",
        "Goethe Institut (Germany)"
      ],
      
      // Nominations
      nominations: [
        {
          festival: "GERMAN SHORT FILM AWARD",
          nomination: "German Short Film Award Nominee",
          year: "2018",
          location: "Germany",
          highlighted: true,
          image: "/images/awards/dkfp-logo.svg"
        },
        {
          festival: "BERLINALE",
          nomination: "German Film Critics Prize Nominee",
          year: "2019",
          location: "Germany",
          highlighted: true,
          image: "/images/awards/VDFK.png"
        }
      ],
      
      // Festival selections
      festivals: [
        "Tiburon Film Festival (USA)",
        "Tampere Film Festival (Finland)",
        "Interfilm Festival (Germany)",
        "Filmfest Dresden (Germany)",
        "Poitiers Film Festival (France)",
        "Festival International du Film de Nancy (France)",
        "Festival Européen du Film Court de Brest (France)",
        "Uppsala International Short Film Festival (Sweden)",
        "Alter-Native Film Festival (Romania)",
        "Tel Aviv ISFF (Israel)",
        "Achtung Berlin Festival (Germany)",
        "Wendland Shorts (Germany)",
        "Lubuskie Film Summer (Poland)",
        "Festival of Tolerance (Croatia)",
        "Landshut Short Film Festival (Germany)",
        "International Short Film Week Regensburg (Germany)"
      ]
    },
    {
      id: "asphalt-flowers",
      title: "ASPHALT FLOWERS",
      subtitle: "(Asphaltblumen)",
      type: "Fiction",
      duration: "18'",
      year: "2018",
      language: "German",
      originalTitle: "Asphaltblumen",
      synopsis: "Over the course of a sleepless night in Berlin, a bizarre encounter unfolds between two misfits, each struggling to escape the grip of loneliness.",
      images: [
        "/images/asphalt-flowers/image1.png",
        "/images/asphalt-flowers/image2.png",
        "/images/asphalt-flowers/image3.png",
        "/images/asphalt-flowers/image4.png",
        "/images/asphalt-flowers/image5.png"
      ],
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      
      // Cast information
      mainCast: [
        "Daniel Klausner", 
        "Kim Schnitzer"
      ],
      
      // Crew
      directorOfPhotography: "Constantin Campean",
      editing: "Borbála Nagy",
      soundDesign: "Andor Horváth",
      originalScore: "Endre Vazul Mándli",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Awards and recognition
      awards: [
        {
          festival: "START INTERNATIONAL SHORT FILM FESTIVAL",
          award: "Diploma of the jury",
          year: "2018",
          location: "Baku, Azerbaijan"
        }
      ],
      
      // Festival selections
      festivals: [
        "Lubuskie Film Summer (Poland)",
        "Oderkurz - Filmspektakel (Germany)",
        "DocLisboa International Film Festival (Portugal)"
      ]
    },
    {
      id: "cross-country-drive",
      title: "CROSS-COUNTRY DRIVE",
      subtitle: "(Auf Überlandfahrt)",
      type: "Fiction",
      duration: "20'",
      year: "2016",
      language: "German",
      originalTitle: "Auf Überlandfahrt",
      synopsis: "After their car breaks down, Anton and his friends find themselves stranded in the middle of nowhere. As they pass the time waiting for help, a seemingly innocent game takes an unexpected turn. What follows leaves Anton deeply unsettled, forcing him to confront his own conscience.",
      images: [
        "/images/cross-country-drive/image1.png",
        "/images/cross-country-drive/image2.png",
        "/images/cross-country-drive/image3.png",
        "/images/cross-country-drive/image4.png",
        "/images/cross-country-drive/image5.png"
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/194277577",
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      coAuthor: "Sabina Gröner",
      
      // Cast information
      mainCast: [
        "Sven Scheele", 
        "Benjamin Radjaipour", 
        "Valentin Erb", 
        "Luise Aschenbrenner"
      ],
      
      // Crew
      producer: "Senem Göcmen",
      directorOfPhotography: "Faraz Fesharaki",
      editing: "Borbála Nagy",
      soundDesign: "Tamás Bohács",
      originalScore: "Endre Vazul Mándli",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Awards and recognition
      awards: [],
      
      // Festival selections
      festivals: [
        "International Film Festival Etiuda&Anima (Poland)",
        "Mecal pro Barcelona IFF (Spain)",
        "Geneva IFF (Switzerland)",
        "Bastau International Film Festival Of Student Films (Kazakhstan)",
        "International Film Festival \"Molodist\" (Ukraine)",
        "Ankara IFF (Turkey)",
        "Lubuskie Film Summer (Poland)",
        "Cinema City IFF (Serbia)",
        "First Step Film Festival (Albania)"
      ]
    },
    {
      id: "somewhere-else",
      title: "SOMEWHERE ELSE",
      subtitle: "(Irgendwo Anders)",
      type: "Fiction",
      duration: "20'",
      year: "2015",
      language: "German",
      originalTitle: "Irgendwo Anders",
      synopsis: "Eight-year-old Sebastian has never met his father. Longing for a connection, he escapes into a fantasy world where his parents are still together. But as painful memories of his mother begin to seep in, the illusion starts to crumble—forcing Sebastian to seek answers somewhere else.",
      images: [
        "/images/somewhere-else/image1.png",
        "/images/somewhere-else/image2.png",
        "/images/somewhere-else/image3.png",
        "/images/somewhere-else/image4.png",
        "/images/somewhere-else/image5.png"
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/133333994",
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      coAuthor: "Halina Joanna Rasinski",
      
      // Cast information
      mainCast: [
        "Vin Kumorek", 
        "Tinka Fürst", 
        "Levente Orbán"
      ],
      
      // Crew
      producer: "Margarita Amineva-Jester",
      directorOfPhotography: "Marianne Andrea Borowiec",
      editing: "Borbála Nagy, Máté Feles",
      soundDesign: "Tamás Bohács",
      originalScore: "Boti Ikvai-Szabó",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Awards and recognition
      awards: [
        {
          festival: "ACHTUNG BERLIN",
          award: "Special mention",
          year: "2015",
          location: "Germany"
        }
      ],
      
      // Festival selections
      festivals: [
        "FIPA – Festival international de programmes audiovisuels (France)",
        "Zsigmond Vilmos Film Festival (Hungary)",
        "In the Palace ISFF (Bulgaria)",
        "Lubuskie Film Summer (Poland)",
        "BuSho - Budapest Short Film Festival (Hungary)",
        "Toamna la Voronet IFF (Romania)",
        "International Izmir Short Film Festival (Turkey)",
        "Ruberoid Festival (Germany)",
        "Córtex Film Festival (Portugal)",
        "Short Screens (Belgium)",
        "Slow Film Fest (Hungary)"
      ]
    },
    {
      id: "about-me-and-you",
      title: "ABOUT ME AND YOU",
      subtitle: "(von mir und dir)",
      type: "Fiction",
      duration: "14'",
      year: "2015",
      language: "German",
      originalTitle: "von mir und dir",
      synopsis: "Lisa and Patrick are close friends. After a night out, they return to her apartment to say goodbye. But when Lisa turns out to be too drunk, Patrick chooses to stay and look after her. As the night unfolds, something shifts between them—changing their relationship in ways neither expected.",
      images: [
        "/images/about-me-and-you/image1.png",
        "/images/about-me-and-you/image2.png",
        "/images/about-me-and-you/image3.png",
        "/images/about-me-and-you/image4.png",
        "/images/about-me-and-you/image5.png"
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/133163847",
      
      // Core production info
      directedBy: "Borbála Nagy",
      script: "Borbála Nagy, Sabina Gröner",
      
      // Cast information
      mainCast: [
        "Benjamin Radjaipour", 
        "Luise Deborah Daberkow"
      ],
      
      // Crew
      directorOfPhotography: "Moritz Friese",
      editing: "Borbála Nagy",
      soundDesign: "Tamás Bohács",
      originalScore: "Boti Ikvai-Szabó",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Awards and recognition
      awards: [],
      
      // Festival selections
      festivals: [
        "International Film Festival Tofifest (Poland)",
        "Copenhagen Short Film Festival (Denmark)",
        "Gässli Film Festival (Switzerland)",
        "Flensburger Kurzfilmtage (Germany)"
      ]
    },
    {
      id: "hannah",
      title: "HANNAH",
      subtitle: undefined,
      type: "Fiction",
      duration: "7'",
      year: "2013",
      language: "Hungarian, German",
      originalTitle: "Hannah",
      synopsis: "Two elderly men wander through the Jewish cemetery in Berlin, searching for the grave of their long-lost friend, Hannah, whom they haven't seen in decades. As they make their way among the tombstones, old stories begin to resurface. Nostalgia, jealousy, and a patchwork of memories intertwine as they recall the past, each with their own version of the truth.",
      images: [
        "/images/hannah/image1.png",
        "/images/hannah/image2.png",
        "/images/hannah/image3.png",
        "/images/hannah/image4.png",
        "/images/hannah/image5.png"
      ],
      
      // Trailer
      trailer: "https://player.vimeo.com/video/133333993",
      
      // Core production info
      writtenAndDirectedBy: "Borbála Nagy",
      coAuthor: "Halina Joanna Rasinski",
      
      // Cast information
      mainCast: [
        "Miklós Kőniger", 
        "István Hézső", 
        "Javeh Asefdjah"
      ],
      
      // Crew
      directorOfPhotography: "Susanne Heinrich",
      editing: "Borbála Nagy",
      soundDesign: "Tamás Bohács",
      
      // Financing
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ],
      
      // Awards and recognition
      awards: [],
      
      // Festival selections
      festivals: []
    }
];

// Export films and vision content
export const films = staticFilmsData;

export const vision = {
  title: "Vision",
  statement: `“I believe that stories told through the female gaze create space for more honest and complex portrayals of human experience—fostering empathy and expanding our understanding of the world.” 
In her work, Borbála Nagy examines the social structures that influence our lives, questioning power and inequality. She aims to provoke dialogue, reshape collective narratives, and contribute to a more equitable world. For her, cinema is more than storytelling–it’s a catalyst for reflection and change. 
Both in her films and on set, she advocates for an open, conscious, and inclusive society. Questions of loneliness, identity, and self-ownership frequently emerge in her movies, alongside themes of gender, migration, the impact of oppression, and the possibilities of resistance. 
Fascinated by human nature, she explores how true character emerges when faced with a moral dilemma. These pivotal moments of self-confrontation, seen against the societal mirror, reveal the essence of the individual. 
Despite the weight of her subjects, she finds humor in everyday absurdities, looking at life through a lens of irony.
`,
  quote: ""
};