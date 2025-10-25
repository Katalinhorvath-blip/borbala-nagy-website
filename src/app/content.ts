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
      id: "mambo-maternica",
      title: "MAMBO MATERNICA",
      subtitle: undefined,
      type: "Feature",
      duration: "120 min",
      year: "2025",
      language: "Hungarian",
      originalTitle: "Mambo Maternica",
      synopsis: "A typical literature class in a typical Hungarian school—except today, the entire school is preparing for a visit from the Prime Minister. The school secretary struggles to keep order, especially when the ceremonial cake won't fit in the fridge. Meanwhile Marti, a seemingly unremarkable schoolgirl, hesitantly prepares a small act of rebellion.",
      images: ["/mambo-1.jpg", "/mambo-2.jpg", "/mambo-3.jpg"],
      awards: [
        {
          festival: "GERMAN SHORT FILM AWARD",
          award: "Best short fiction",
          year: "2020",
          location: "Köln, Germany"
        },
        {
          festival: "HUNGARIAN FILM CRITICS' PRIZE",
          award: "Best short film",
          year: "2020", 
          location: "Budapest, Hungary"
        }
      ],
      trailer: "https://player.vimeo.com/video/123456789",
      cast: ["Hanna Angelus", "Nóra Rainer-Micsinyei", "Péter Jenkovszky", "Zsuzsa Párniczky"],
      crew: [
        { role: "Producer", name: "Margaretta Amenmeer-Jester" },
        { role: "Director of Photography", name: "Nándor Freese" },
        { role: "Editing", name: "Lazsadi Daniél" },
        { role: "Sound Design", name: "Tamás Bohács" }
      ],
      festivals: [
        "Filmfestival Max Ophüls Preis (Germany), Filmfest Dresden (Germany), Poitiers Film Festival (France), Premières Plans d'Angers (France), Tampere Film Festival (Finland), Tel Aviv ISFF (Israel), Fünf Seen Filmfestival (Germany), Lubušski (Poland), Timor ISFF (Albania), Finale Plzen Festival (Czech Republic), Filmschaufenster (Germany), Chaniania Film Festival (Germany), Vilnius ISFF (Lithuania), Bergen ISFF (Romania), Vilnius (Germany)"
      ],
      financedBy: [
        "DFFB - German Film and Television Academy Berlin (Germany)",
        "Nordart Jeraslan Stiftung (Germany)"
      ]
    },
    {
      id: "land-of-glory", 
      title: "LAND OF GLORY",
      subtitle: "(Pannónia dicsérete)",
      type: "Short",
      duration: "27 min",
      year: "2020",
      language: "Hungarian",
      originalTitle: "Pannónia dicsérete",
      synopsis: "A contemplative examination of what constitutes homeland and the personal relationship we develop with place and territory. A political satire that won both the German Short Film Award and the Hungarian Film Critics' Prize.",
      images: ["/small_works_08.jpg"],
      awards: [
        {
          festival: "GERMAN SHORT FILM AWARD",
          award: "Best short fiction",
          year: "2020",
          location: "Köln, Germany"
        },
        {
          festival: "HUNGARIAN FILM CRITICS' PRIZE", 
          award: "Best short film",
          year: "2020",
          location: "Budapest, Hungary"
        }
      ],
      cast: ["Actor Name 1", "Actor Name 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "everything-alright",
      title: "EVERYTHING ALRIGHT", 
      subtitle: "(Minden rendben)",
      type: "Short",
      duration: "13 min",
      year: "2018",
      language: "German/Hungarian",
      originalTitle: "Minden rendben", 
      synopsis: "An intimate exploration of family dynamics and communication, examining the subtle ways we connect and disconnect from those closest to us.",
      images: ["/small_works_07.jpg"],
      cast: ["Cast Member 1", "Cast Member 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "asphalt-flowers",
      title: "ASPHALT FLOWERS",
      subtitle: "(Asphaltblumen)", 
      type: "Short",
      duration: "18 min",
      year: "2018",
      language: "German",
      originalTitle: "Asphaltblumen",
      synopsis: "A poetic examination of urban life and human connection, exploring how beauty and meaning can bloom even in the most concrete environments.",
      images: ["/small_works_06.jpg"],
      cast: ["Cast Member 1", "Cast Member 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "cross-country-drive",
      title: "CROSS-COUNTRY DRIVE",
      subtitle: "(Auf Überlandfahrt)",
      type: "Short", 
      duration: "20 min",
      year: "2016",
      language: "German",
      originalTitle: "Auf Überlandfahrt",
      synopsis: "A journey film exploring both physical and emotional landscapes, where the destination becomes less important than the revelations discovered along the way.",
      images: ["/small_works_05.jpg"],
      cast: ["Cast Member 1", "Cast Member 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "somewhere-else",
      title: "SOMEWHERE ELSE",
      subtitle: "(Irgendwo Anders)",
      type: "Short",
      duration: "15 min", 
      year: "2015",
      language: "German",
      originalTitle: "Irgendwo Anders",
      synopsis: "A contemplation on place, belonging, and the eternal human search for home, questioning whether 'somewhere else' might always seem more appealing than where we are.",
      images: ["/small_works_04.jpg"],
      cast: ["Cast Member 1", "Cast Member 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "about-me-and-you",
      title: "ABOUT ME AND YOU",
      subtitle: "(von mir und dir)",
      type: "Short",
      duration: "14 min",
      year: "2015", 
      language: "German",
      originalTitle: "von mir und dir",
      synopsis: "An intimate two-character study examining the complex dynamics of personal relationships, exploring how we reveal and conceal ourselves in the presence of others.",
      images: ["/small_works_03.jpg"],
      cast: ["Cast Member 1", "Cast Member 2"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    },
    {
      id: "hannah",
      title: "HANNAH",
      subtitle: undefined,
      type: "Short",
      duration: "7 min",
      year: "2013",
      language: "German", 
      originalTitle: "Hannah",
      synopsis: "An early work exploring themes that would define later films, showcasing the director's emerging voice and cinematic sensibility.",
      images: ["/small_works_02.jpg"],
      cast: ["Cast Member 1"],
      crew: [
        { role: "Producer", name: "Producer Name" },
        { role: "Director of Photography", name: "DoP Name" }
      ]
    }
  ]
}

export default content