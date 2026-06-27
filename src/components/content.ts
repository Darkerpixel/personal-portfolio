//content.ts
const content = {
  header: {
    main: { en: "Welcome", de: "Willkommen" },
    languageSelector: { en: "Language", de: "Sprache" },
  },
  card: [
    {
      title: {
        en: "Gaussian Splat Time-lapse",
        de: "Gaussian-Splat Zeitraffer",
      },
      author: {
        en: "by Darkerpixel",
        de: "von Darkerpixel",
      },
      descriptionTheoryTitle: {
        en: "Theory",
        de: "Theorie",
      },
      descriptionTheoy1: {
        en: "I was invited to build a working prototype for a future system that generates time-lapses of cloned plants - visualizing their growth over time on a web interface.",
        de: "Mir wurde die Möglichkeit gegeben, einen funktionierenden Prototypen für ein zukünftiges System zu entwickeln, welches Zeitraffer von geklonten Pflanzen erzeugt und ihr Wachstum über einen längeren Zeitraum auf einer Web-Oberfläche visualisiert.",
      },
      gridAssembly: [
        {
          src: "../../public/splatTimelaps/jar-in-question.jpg",
          alt: {
            en: "A jar with a small plant inside",
            de: "Eine kleine pflanze in einem Glasbehälter",
          },
        },
      ],
      descriptionTheory2: {
        en: "My first idea was to 3D-scan the plant. Unfortunately, scanning an object inside a glass container with condensing on the glass is nearly impossible with a standard 3D scan. It can't represent reflections correctly, since it just projects the object's texture onto a generated mesh.",
        de: "Meine erste gedanke war, die Pflanze per 3D-Scan zu erfassen. Leider ist das Scannen eines Objekts in einem Glasbehälter mit Kondenswasser auf dem Glas mit einem herkömmlichen 3D-Scan praktisch unmöglich. Reflexionen lassen sich mit dieser Methode nicht korrekt darstellen, da dabei lediglich die Textur des Objekts auf ein generiertes Mesh projiziert wird.",
      },
      descriptionTheory3: {
        en: "But there is a scanning technique that can produce somewhat accurate reflections: Gaussian Splatting.",
        de: "Es gibt jedoch eine Scan-Technik, die einigermaßen genaue Reflexionen erzeugen kann: Gaussian Splatting.",
      },
      descriptionTheory4: {
        en: 'A Gaussian splat generates points in 3D space, each with color, size, transparency, and more. These "splats" are layered to create the illusion of texture and mesh, and because of how they work, they can represent reflections correctly from every angle the footage was shot from.',
        de: "Ein Gaussian-Splat erzeugt Punkte im 3D-Raum, jeder mit eigener Farbe, Größe, Transparenz und weiteren Eigenschaften. Diese „Splats“ werden hintereinandergelegt, um die Illusion von Textur und Mesh zu erzeugen. Durch ihre Funktionsweise können sie Reflexionen aus jedem Blickwinkel, aus dem das Material gefilmt wurde, korrekt wiedergeben.",
      },
      descriptionTheory5: {
        en: "The constraint: space was limited, so an orbiting camera was off the table. But a stationary camera with a rotating base risks confusing the splat generator. My hypothesis was, if the splat generator can't identify anything behind the object, it should be possible to fake an orbiting camera using a turntable base instead.",
        de: "Die Einschränkung: Eine Orbital Kamera würde zu viel Platz in anspruch nehmen, daher ist eine feststehende Kamera mit rotierender Platform die alternative. Allerdings würde eine stationaire Kamera den Gaussian-Splat Generator verwirren. Meine Hypothese war: Wenn der Splat-Generator nichts hinter dem Objekt identifizieren kann, müsste es möglich sein, eine Orbital Kamera vorzutäuschen.",
      },
      descriptionTestingTitle: {
        en: "Testing the Hypothesis",
        de: "Meine Hypothese auf die Probe stellen",
      },
      gridSimulation: [
        {
          src: "../../public/splatTimelaps/simulation-screenshot.png",
          alt: {
            en: "A Blender render of a plant in a jar",
            de: "Eine Blender Szene mit einer pflanze im Glas",
          },
        },
      ],
      descriptionTesting1: {
        en: "To test this, I set up a scene in Blender: a similar reference model, placed in a black void and lit it with a diffused light source above it. Then I just had to rotate the object and capture a shot every 10 degrees. These images were then fed into the splat generator.",
        de: "Um das zu testen, erstelle ich in Blender eine Szene mit einem ähnlichen Referenzmodell, platziert in einem schwarzen Leerraum und mit einer diffusen Lichtquelle von oben beleuchtet. Anschließend musste ich das Objekt nur noch drehen und alle 10 Grad eine Aufnahme erstellen. Diese Bilder habe ich dann dem Splat-Generator gegeben.",
      },
      descriptionTesting2: {
        en: "Unfortunately, the splat generator interpreted the black void as part of the object. Luckily, there was a simple fix, involved deleting any splats below a black color threshold.",
        de: "Leider interpretierte der Splat-Generator den schwarzen Leerraum als Teil des Objekts. Zum Glück gab es eine einfache Lösung dafür: alle Splats unterhalb einer bestimmten Schwarz-Farbschwelle wurden entfernt.",
      },
      descriptionPrototypeTitle: {
        en: "Building the Physical Prototype",
        de: "Realer Test",
      },
      grid: [
        {
          src: "../../public/splatTimelaps/assembly-1.jpg",
          alt: {
            en: "Assembly step 1 of the Project",
            de: "Aufbau schritt 1 des Projects",
          },
        },
        {
          src: "../../public/splatTimelaps/assembly-2.jpg",
          alt: {
            en: "Assembly step 2 of the Project",
            de: "Aufbau schritt 2 des Projects",
          },
        },
        {
          src: "../../public/splatTimelaps/assembly-3.jpg",
          alt: {
            en: "Assembly step 3 of the Project",
            de: "Aufbau schritt 3 des Projects",
          },
        },
        {
          src: "../../public/splatTimelaps/assembly-4.jpg",
          alt: {
            en: "Assembly step 4 of the Project",
            de: "Aufbau schritt 4 des Projects",
          },
        },
        {
          src: "../../public/splatTimelaps/assembly-5.jpg",
          alt: {
            en: "Assembly step 5 of the Project",
            de: "Aufbau schritt 5 des Projects",
          },
        },
      ],
      descriptionPrototype1: {
        en: "The simulation gave me enough confidence to move to a real-world build.",
        de: "Die Simulation gab mir genug Sicherheit, um einen Realen Test durchzuführen.",
      },
      descriptionPrototype2: {
        en: "I decided on a cardboard box design with a hole on the bottom for the spinning base and a hole cut for the camera. The interior is painted as black as I could manage.",
        de: "Ich entschied mich für ein Gehäuse aus Karton mit einem Loch im Boden für die rotierende Platform und einem ausgeschnittenen Loch für die Kamera. Das Innere strich ich so schwarz, wie es mir möglich war.",
      },
      descriptionPrototype3: {
        en: "An LCD backlight (salvaged from an old screen) as the diffuse light source. Though its original cables were damaged from a previous project, I had to wire in an alternate light source. And finally, to rotate the base, I used a sting.",
        de: "Als diffuse Lichtquelle entschied ich eine LCD-Hintergrundbeleuchtung zu verwenden, die ich aus einem alten Bildschirm ausgebaut hatte. Da die ursprünglichen Kabel jedoch durch ein früheres Projekt beschädigt waren, musste ich eine alternative Lichtquelle improvisieren. Schließlich um die Platform zu drehen benutzte ich eine einache Schnur.",
      },
      descriptionResultTitle: {
        en: "The Result",
        de: "Das Ergebnis",
      },
      descriptionResult1: {
        en: "The result of the real-world scan was successful enough to continue. Unfortunately, the black paint inside the box was not black enough to block all light like in the blender simulation.",
        de: "Das Ergebnis des realen Scans war erfolgreich genug, um die Arbeit fortzusetzen. Leider war die schwarze Farbe im Inneren der Box nicht dunkel genug, um - wie in der Blender-Simulation - sämtliches Licht zu blockieren.",
      },
      descriptionResult2: {
        en: "Additionally, I was not able to remove the unwanted splats with the tool like in the simulation. The reason why was because the black background also inherited color bleed from the object and the black paint was more reflective than expected.",
        de: "Außerdem ließen sich die unerwünschten Splats nicht wie in der Simulation mit dem Werkzeug entfernen. Der Grund dafür sind die Farbeinflüsse des Objekts und die Reflectivität der benutzen schwarzen Farbe auf die schwarzen Splats.",
      },
      descriptionEnding: {
        en: "Work on this is paused until the scanner's final dimensions are confirmed. Components like proper matte-black paint and a rigid custom camera rig are too expensive to commit to just for further testing.",
        de: "Die Arbeit daran liegt vorerst auf Eis, bis die endgültigen Maße des Scanners feststehen. Komponente wie eine stark Lichtabsorbierende schwarze Farbe und ein stabiler, maßgefertigter Kamera-Rig sind zu kostspielig, um sie allein für weitere Tests zu riskieren.",
      },
    },
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
