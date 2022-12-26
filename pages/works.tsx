import Experience from "components/Items/Experience";
import { TextKeywords, texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";
import Head from "next/head";
import React from "react";

type EnabledExperiences = keyof TextKeywords["experience"];

const Works = () => {
  const { selectedLanguage } = useLanguage();
  const [selectedProject, setSelectedProject] =
    React.useState<EnabledExperiences | null>(null);
  const works = React.useMemo<(keyof TextKeywords["experience"])[]>(
    () => [
      "pilyo",
      "jigugong",
      "bankmall",
      "sound_jungle",
      "spvrkd",
      "homegrit",
    ],
    []
  );

  return (
    <>
      <Head>
        <title>kim-works</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="김예찬 포트폴리오" />
        <meta property="og:image" content="/among.jpeg"></meta>
        <link rel="icon" href="/circle-among.png" />
      </Head>
      <div style={{ minHeight: "50vh" }}>
        {works.map((skill) => (
          <Experience
            key={skill}
            title={texts[selectedLanguage].experience[skill].title}
            period={texts[selectedLanguage].experience[skill].period}
            images={texts[selectedLanguage].experience[skill].images}
            part={texts[selectedLanguage].experience[skill].part}
            feelings={texts[selectedLanguage].experience[skill].feelings}
            skills={texts[selectedLanguage].experience[skill].skills}
            link={texts[selectedLanguage].experience[skill].link}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>
    </>
  );
};

export default Works;
