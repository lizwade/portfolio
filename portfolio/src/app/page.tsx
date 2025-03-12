"use client"

//import Image from "next/image";
//import styles from "./page.module.css";
import './globals.css';
import Header from "./components/Header"


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectPanel from "./components/ProjectPanel";

interface Project {
  problem: string;
  solutionTitle: string;
  solutionText: string;
  techStack: string[];
  imagePath: string;
  deployedLink?: string;
  githubLink?: string;
 
  colour?: string;
}

export default function Home() {

  const projects: Project[] =
    [
      {
        problem: `There are many fairly sedentary people who want to walk more but never quite get round to it.`,
        solutionTitle: `SOFA TO STRIDER`,
        solutionText: `A mobile-first app that overcomes common hurdles by showing you when, where and why to walk.`,
         techStack: [],
        imagePath: `portfolio/public/sofa_to_strider.png`,
        deployedLink: ``,
        githubLink: ``,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `It can be hard to find specific info about your own car. Chatbots are too general and your car manual is too long and dense.`,
        solutionTitle: `MY MECHANIC`,
        solutionText: `A friendly RAG chatbot to help you find out how to actually turn your fog lights on (or whatever else you need to know).`,
        techStack: [],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
       
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `A job I really wanted was asking for Flask skills, which I didn't have.`,
        solutionTitle: `FLASK IN FIVE HOURS`,
        solutionText: `Prove I could get to grips with a new framework in less than a day.`,
        techStack: [],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Streaming music puts millions of songs at our fingertips, but we've lost the mysterious delight of the unlabelled mixtape`,
        solutionTitle: `BLIND MIXTAPE`,
        solutionText: `An app for `,
        techStack: [],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Typescript can slow down developers and feel like a series of annoying hoops to jump through.`,
        solutionTitle: `"WHY WE HAVE TYPESCRIPT" SONG`,
        solutionText: 'A tongue-in-cheek animated song to remind developers why the effort is worth it.',
        techStack: [],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
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
                myProblem={projects[index].problem}
                mySolutionTitle={projects[index].solutionTitle}
                mySolutionText={projects[index].solutionText}>
              </ProjectPanel>
            </li>
          ))}
         
        </ul>

        <h2>Technical Storytelling</h2>
        <p> IBM paper and Typescript song to go here</p>

        <h2>Academic projects (or AI?)</h2>
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
