"use client"

//import Image from "next/image";
//import styles from "./page.module.css";
import './globals.css';
import Header from "./components/Header"


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectPanel from "./components/ProjectPanel";

export interface Project {
  problem: string;
  solutionTitle: string;
  solutionText: string;
  techStack: string[];
  imagePath: string;
  deployedLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  wip: boolean;
  colour?: string;
}

export default function Home() {

  const projects: Project[] =
    [
      {
        problem: `There are many fairly sedentary people who want to walk more but never quite get round to it.`,
        solutionTitle: `SOFA TO STRIDER`,
        solutionText: `A mobile-first app that overcomes common hurdles by showing you when, where and why to walk.`,
        techStack: ['React', 'Typescript', 'Node.js', 'Next.js', 'Vitest','OpenWeather API', 'Google Places API', 'Google Photos API', 'Open AI API'],
        imagePath: `portfolio/public/sofa_to_strider.png`,
        deployedLink: `https://sofa-to-strider.vercel.app/`,
        githubLink: `https://github.com/sumeyacodes/sofa-to-strider`,
        youtubeLink: `https://www.youtube.com/watch?v=qj_6hMQgz_Q`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Our teammate Alistair has had his Seat Ibiza for 4 years and he still doesn't know how to turn the fog lights on.`,
        solutionTitle: `MY MECHANIC`,
        solutionText: `A RAG chatbot that applies the power of ChatGPT to Alistair's car manual, giving friendly, correct, sourced answers without hallucinations.`,
        techStack: ['Pinecone Vector Database', 'OpenAI', 'React',  ],
        imagePath: ``,
        deployedLink: ``,
        githubLink: `https://github.com/SchoolOfCode/my-mechanic`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `A job I really wanted was asking for Flask skills, which I didn't have.`,
        solutionTitle: `FLASK IN FIVE HOURS`,
        solutionText: `Prove I could get to grips with a new framework in less than a day.`,
        techStack: ['Python','Flask','Jinja'],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
        youtubeLink: `https://youtu.be/bkDmuo7oSOM`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Streaming music puts millions of songs at our fingertips, but we've lost the delightful mysteries of the unlabelled mixtape`,
        solutionTitle: `BLIND MIXTAPE`,
        solutionText: `Send your friend a playlist they can't look at or skip over, but have to actually listen to.`,
        techStack: [],
        imagePath: `portfolio/public/blind_mixtape_napkin_concept.png`,
        deployedLink: ``,
        githubLink: `https://github.com/lizwade/blind-mixtape`,
        wip: true,
        colour: `rgb(249, 223, 21)`
      },
    
  ]

  return (
    <div //className={styles.page}
    >
      <main //className={styles.main}
      >
        <Header></Header>
        <h2>Software Solutions</h2>
       
       
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectPanel
                // myProblem={projects[index].problem}
                // mySolutionTitle={projects[index].solutionTitle}
              // mySolutionText={projects[index].solutionText}
                project={projects[index]}
              />
            </li>
          ))}
         
        </ul>

        <h2>Technical Storytelling</h2>
        <p> IBM paper and Typescript song to go here</p>

        <h2>Past Adventures in AI</h2>
        <p> Genetic Algorithm, Image Classifier, Consumer Segmentation</p>

      </main>
      {/* <footer
        //className={styles.footer}
      >
        <p>No AI was involved in the making of this site, which I hand-coded using React, Typescript, pure CSS, a bit of Bootstrap, and Next.js</p>
        <p><em>(In real life, I would probably use Bolt or ChatGPT to speed things up, but I wanted to show you I don't have to)</em></p>
        <p><em>(Also I can't take credit for the cool lever design - that belongs to Victor Grae)</em> </p>
        <a
          href="https://github.com/lizwade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Liz
        </a>
      </footer> */}
    </div>
  );
}
