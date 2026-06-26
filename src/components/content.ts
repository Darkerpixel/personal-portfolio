//content.ts
const content = {
  header: {
    main: { en: "Welcome", de: "Willkommen" },
    languageSelector: { en: "Language", de: "Sprache" },
  },
  card: [
    {
      title: { en: "The Pickle Man", de: "Der Gurkenmann" },
      author: {
        en: "by Darkerpixel",
        de: "von Darkerpixel",
      },

      grid: [
        {
          src: "../../public/pickle-man.webp",
          alt: {
            en: "The Pickle Man laying limbless",
            de: "Der Gurkenmann liegt gliedmaßenlos",
          },
        },
        {
          src: "../../public/pickle-man-sitting.webp",
          alt: {
            en: "The Pickle Man sitting on the sofa",
            de: "Der Gurkenmann sitzt auf dem sofa",
          },
        },
        {
          src: "../../public/pickle-man-standing.webp",
          alt: {
            en: "The Pickle Man standing with sword hands",
            de: "Der Gurkenmann steht mit schwert händen",
          },
        },
      ],

      description: {
        en: "This Pickle man is a very important man. He controlls time and matter itself, so fear him. If you ever meet him and see in his eyes your live is already over.",
        de: "Dieser Pickelmann ist ein sehr wichtiger Mann. Er kontrolliert Materie selbst also sei auf der hut. Wenn du ihn jemals zu gesicht bekommst ist es für dich schon zu spät.",
      },
    },
    {
      title: {
        en: "second entry",
        de: "zweiter eintrag",
      },
      description: {
        en: "description entry no 2",
        de: "eingetragene beschreibung no 2",
      },
    },
    {
      title: { en: "third entry", de: "dritter eintrag" },
      description: {
        en: "description entry no 3",
        de: "eingetragene beschreibung no 3",
      },
    },
    {
      title: {
        en: "fourth entry",
        de: "vierter eintrag",
      },
      description: {
        en: "description entry no 4",
        de: "eingetragene beschreibung no 4",
      },
    },
  ],
  footer: {
    en: "Footer english",
    de: "Fußnote deutsch",
  },
};

export default content;
