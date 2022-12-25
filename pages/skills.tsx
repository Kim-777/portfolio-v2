import Skill from "components/Items/Skill";
import { TextKeywords, texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";
import Head from "next/head";
import React from "react";

const Skills = () => {
  const { selectedLanguage } = useLanguage();

  const skills = React.useMemo<(keyof TextKeywords["skills"])[]>(
    () => [
      "language",
      "community",
      "javascript",
      "typescript",
      "react",
      "next",
      "query",
      "hook_form",
    ],
    []
  );

  return (
    <>
      <Head>
        <title>kim-skills</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="김예찬 포트폴리오" />
        <meta property="og:image" content="/among.jpeg"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "50vh" }}>
        {skills.map((skill) => (
          <Skill
            key={skill}
            title={texts[selectedLanguage].skills[skill].title}
            description={texts[selectedLanguage].skills[skill].description}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
