// Essential content for Borbála Nagy filmmaker portfolio website

export const content = {
  // Vision page content
  vision: {
    title: "Vision",
    statement: `I'm captivated by human nature—people fascinate me. I believe that a person's true essence is revealed when faced with a moral dilemma. I delve into these pivotal moments, exploring self-confrontation through the societal mirror.

Dialogue is my playground, where I explore the expressive power of language. My linguistics studies revealed the many facets of languages, which I now use to uncover my characters' inner lives. Language, as a reflection of our history, society, and psyche, is the perfect tool for this exploration.

With patient camerawork, I offer the audience time to observe. My background as a stage dancer influenced my understanding of choreography in three dimensions. This experience shapes how I work with actors and the space around them today.`,
    quote: "Cinema is the art of patient observation, where every gesture, every pause, every word reveals the complexity of human nature."
  },

  // Films data
  films: [
    {
      id: "nothing-to-see-here",
      title: "NOTHING TO SEE HERE",
      subtitle: undefined,
      type: "Fiction in development",
      duration: undefined,
      year: undefined,
      language: undefined,
      originalTitle: undefined,
      synopsis: "When a Hitler meme roasting the school's clueless management goes viral, a newly appointed principal finds herself at a crossroads: obey the orders from above and punish the student responsible, or follow her own moral compass—putting her job at risk. Based on real events.",
      images: [
        "/images/nothing-to-see-here/image1.png"
      ],
      awards: [
        {
          festival: "BUDAPEST DEBUT FILM FORUM",
          award: "Most Promising Fiction Feature Project",
          year: "2022",
          location: "Hungary"
        },
        {
          festival: "WENDLAND FILM FESTIVAL",
          award: "Best Pitch",
          year: "2019",
          location: "Germany"
        }
      ],
      cast: [],
      crew: [
        { role: "Writer & Director", name: "Borbála Nagy" },
        { role: "Producer", name: "Petra Iványi (Lupa Pictures)" }
      ],
      festivals: [
        "Brussels Co-Production Forum (Belgium, 2022)",
        "Cannes Cinéfondation Residence (France, 2021-2022)",
        "Berlin AiR Artist-in-Residence (Israel, 2021)",
        "Pop Up Film Residency (Slovakia, 2021)",
        "Inkubátor – Debut Film Forum (Hungary, 2021)",
        "CineLink Industry Days – Sarajevo Film Festival (Bosnia and Herzegovina, 2020)",
        "Cutting Edge Talent Camp – International Filmfestival Mannheim-Heidelberg (Germany, 2020)",
        "Jump In – Poitiers Film Festival (France, 2020)"
      ]
    },
    {
      id: "mambo-maternica",
      title: "MAMBO MATERNICA",
      subtitle: undefined,
      type: "Feature | Fiction",
      duration: "92 min",
      year: "In post-production",
      language: "Hungarian, English, German, French",
      originalTitle: "Mambo Maternica",
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
      awards: [
        {
          festival: "CONNECTING COTTBUS",
          award: "Cannes Producers Network Award",
          year: "2022",
          location: "Germany"
        },
        {
          festival: "BUDAPEST DEBUT FILM FORUM",
          award: "Most Promising Fiction Feature Project",
          year: "2022",
          location: "Hungary"
        }
      ],
      cast: ["Orsolya Török-Illyés", "Rozália Székely", "Vera Sipos"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Producer", name: "Petra Iványi (Lupa Pictures)" },
        { role: "Producer", name: "Margarita Amineva-Jester (Voices Films)" },
        { role: "Co-producer", name: "Julie Paratian (Sister Productions)" },
        { role: "Co-producer", name: "Daria Wichmann (DFFB)" },
        { role: "Director of Photography", name: "Moritz Friese" },
        { role: "Editing", name: "László Dunai" },
        { role: "Sound Design", name: "Tamás Bohács" },
        { role: "Original Score", name: "Selma Mutal" }
      ],
      festivals: [
        "Full Circle Lab / Nouvelle Aquitaine – script development (France, 2022)",
        "First Cut Lab – work in progress editing consultation (online, 2024)",
        "First Cut+ – work in progress presentation at Karlovy Vary International Film Festival (Czechia, 2024)"
      ],
      financedBy: [
        "Inkubátor Debut Film Program – Hungarian National Film Fund (Hungary)",
        "ALCA Nouvelle Aquitaine (France)",
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    },
    {
      id: "land-of-glory",
      title: "LAND OF GLORY",
      subtitle: "(Pannónia dicsérete)",
      type: "Short | Fiction",
      duration: "27 min",
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
        "/images/land-of-glory/image7.png"
      ],
      awards: [],
      cast: ["Hanna Angelus", "Nóra Rainer-Micsinyei", "Péter Janklovics", "Zsuzsa Faragó"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Co-author", name: "Judit Anna Bánházi" },
        { role: "Producer", name: "Margarita Amineva-Jester" },
        { role: "Director of Photography", name: "Moritz Friese" },
        { role: "Editing", name: "László Dunai" },
        { role: "Sound Design", name: "Tamás Bohács" }
      ],
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
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)",
        "Norbert Janssen Stiftung (Germany)"
      ]
    },
    {
      id: "everything-alright",
      title: "EVERYTHING ALRIGHT",
      subtitle: "(Minden rendben)",
      type: "Short | Fiction",
      duration: "13 min",
      year: "2019",
      language: "Hungarian",
      originalTitle: "Minden rendben",
      synopsis: "On his first day patrolling the border between Hungary and Serbia, Alpár is tasked with protecting his country from refugees. As he faces the harsh realities of life among the border guards, he soon realizes that surviving in this environment means abandoning his humanity.",
      images: [
        "/images/everything-alright/image1.png",
        "/images/everything-alright/image2.png",
        "/images/everything-alright/image3.png",
        "/images/everything-alright/image4.png",
        "/images/everything-alright/image5.png",
        "/images/everything-alright/image6.png"
      ],
      awards: [
        {
          festival: "GERMAN SHORT FILM AWARD",
          award: "Nominee",
          year: "2018",
          location: "Germany"
        },
        {
          festival: "BERLINALE",
          award: "German Film Critics Prize Nominee",
          year: "2019",
          location: "Germany"
        }
      ],
      cast: ["Benett Vilmányi", "Ákos Orosz"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Producer", name: "Luise Hauschild" },
        { role: "Director of Photography", name: "Constantin Campean" },
        { role: "Editing", name: "László Dunai" },
        { role: "Sound Design", name: "Tamás Bohács" }
      ],
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
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)",
        "Goethe Institut (Germany)"
      ]
    },
    {
      id: "asphalt-flowers",
      title: "ASPHALT FLOWERS",
      subtitle: "(Asphaltblumen)",
      type: "Short | Fiction",
      duration: "18 min",
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
      awards: [
        {
          festival: "START INTERNATIONAL SHORT FILM FESTIVAL",
          award: "Diploma of the jury",
          year: "2018",
          location: "Baku, Azerbaijan"
        }
      ],
      cast: ["Daniel Klausner", "Kim Schnitzer"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Director of Photography", name: "Constantin Campean" },
        { role: "Editing", name: "Borbála Nagy" },
        { role: "Sound Design", name: "Andor Horváth" },
        { role: "Original Score", name: "Endre Vazul Mándli" }
      ],
      festivals: [
        "Lubuskie Film Summer (Poland)",
        "Oderkurz - Filmspektakel (Germany)",
        "DocLisboa International Film Festival (Portugal)"
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    },
    {
      id: "cross-country-drive",
      title: "CROSS-COUNTRY DRIVE",
      subtitle: "(Auf Überlandfahrt)",
      type: "Short | Fiction",
      duration: "20 min",
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
      awards: [],
      cast: ["Sven Scheele", "Benjamin Radjaipour", "Valentin Erb", "Luise Aschenbrenner"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Co-author", name: "Sabina Gröner" },
        { role: "Producer", name: "Senem Göcmen" },
        { role: "Director of Photography", name: "Faraz Fesharaki" },
        { role: "Editing", name: "Borbála Nagy" },
        { role: "Sound Design", name: "Tamás Bohács" },
        { role: "Original Score", name: "Endre Vazul Mándli" }
      ],
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
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    },
    {
      id: "somewhere-else",
      title: "SOMEWHERE ELSE",
      subtitle: "(Irgendwo Anders)",
      type: "Short | Fiction",
      duration: "20 min",
      year: "2015",
      language: "German",
      originalTitle: "Irgendwo Anders",
      synopsis: "Eight-year-old Sebastian has never met his father. Longing for a connection, he escapes into a fantasy world where his parents are still together. But as painful memories of his mother begin to seep in, the illusion starts to crumble—forcing Sebastian to seek answers somewhere else.",
      images: [
        "/images/somewhere-else/image1.png",
        "/images/somewhere-else/image2.png",
        "/images/somewhere-else/image3.png",
        "/images/somewhere-else/image4.png"
      ],
      awards: [
        {
          festival: "ACHTUNG BERLIN",
          award: "Special mention",
          year: "2015",
          location: "Germany"
        }
      ],
      cast: ["Vin Kumorek", "Tinka Fürst", "Levente Orbán"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Co-author", name: "Halina Joanna Rasinski" },
        { role: "Producer", name: "Margarita Amineva-Jester" },
        { role: "Director of Photography", name: "Marianne Andrea Borowiec" },
        { role: "Editing", name: "Borbála Nagy, Máté Feles" },
        { role: "Sound Design", name: "Tamás Bohács" },
        { role: "Original Score", name: "Boti Ikvai-Szabó" }
      ],
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
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    },
    {
      id: "about-me-and-you",
      title: "ABOUT ME AND YOU",
      subtitle: "(von mir und dir)",
      type: "Short | Fiction",
      duration: "14 min",
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
      awards: [],
      cast: ["Benjamin Radjaipour", "Luise Deborah Daberkow"],
      crew: [
        { role: "Directed by", name: "Borbála Nagy" },
        { role: "Script", name: "Borbála Nagy, Sabina Gröner" },
        { role: "Director of Photography", name: "Moritz Friese" },
        { role: "Editing", name: "Borbála Nagy" },
        { role: "Sound Design", name: "Tamás Bohács" },
        { role: "Original Score", name: "Boti Ikvai-Szabó" }
      ],
      festivals: [
        "International Film Festival Tofifest (Poland)",
        "Copenhagen Short Film Festival (Denmark)",
        "Gässli Film Festival (Switzerland)",
        "Flensburger Kurzfilmtage (Germany)"
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    },
    {
      id: "hannah",
      title: "HANNAH",
      subtitle: undefined,
      type: "Short | Fiction",
      duration: "7 min",
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
      awards: [],
      cast: ["Miklós Kőniger", "István Hézső", "Javeh Asefdjah"],
      crew: [
        { role: "Written & Directed by", name: "Borbála Nagy" },
        { role: "Co-author", name: "Halina Joanna Rasinski" },
        { role: "Director of Photography", name: "Susanne Heinrich" },
        { role: "Editing", name: "Borbála Nagy" },
        { role: "Sound Design", name: "Tamás Bohács" }
      ],
      festivals: [],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)"
      ]
    }
  ]
}

export default content