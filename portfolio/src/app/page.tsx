"use client"

//import Image from "next/image";
//import styles from "./page.module.css";
import './globals.css';
import Header from "./components/Header"


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectPanel from "./components/ProjectPanel";

interface project {
  problem: string;
  solutionTitle: string;
  solutionText: string;
  colour: string;
}

export default function Home() {

  const projects: project[] =
    [
      {
        problem: `There are many fairly sedentary people who want to walk more but never quite get round to it.`,
        solutionTitle: `SOFA TO STRIDER`,
        solutionText: `A mobile-first app that overcomes common hurdles by showing you when, where and why to walk.`,
      colour: `rgb(249, 223, 21)`
      },
      {
        problem: `It can be hard to find specific info about your own car. Chatbots are too general and your car manual is too long and dense.`,
        solutionTitle: `MY MECHANIC`,
        solutionText: `A friendly RAG chatbot to help you find out how to actually turn your fog lights on (or whatever else you need to know).`,
        colour: `rgb(49, 223, 21)`
      },
      {
        problem: `Typescript can slow down developers and feel like a series of annoying hoops to jump through.`,
        solutionTitle: `"WHY WE HAVE TYPESCRIPT" SONG`,
        solutionText: 'A tongue-in-cheek animated song to remind developers why the effort is worth it.',
        colour: `rgb(149, 103, 21)`
      },
  ]

  return (
    <div //className={styles.page}
    >
      <main //className={styles.main}
      >
        <Header></Header>
       
       
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
