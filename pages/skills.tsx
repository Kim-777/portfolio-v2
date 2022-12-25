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
        <title>kimyechan</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
