"use client"

import Image from "next/image";
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
      }
  ]




  return (
    <div //className={styles.page}
    >
      <main //className={styles.main}
      >
        <Header></Header>
       
       
        <ul>
     
            <li>
            <ProjectPanel
              myProblem={projects[0].problem}
              mySolutionTitle={projects[0].solutionTitle}
            mySolutionText={projects[0].solutionText}></ProjectPanel>
          </li>
           <li>
            <ProjectPanel
              myProblem={projects[1].problem}
              mySolutionTitle={projects[1].solutionTitle}
            mySolutionText={projects[1].solutionText}></ProjectPanel>
          </li>
       
         
        </ul>

        <div //className={styles.ctas}
        >
          <a
            //className={styles.primary}
            href="https://lizwade.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              //className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            //className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer
        //className={styles.footer}
      >
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
