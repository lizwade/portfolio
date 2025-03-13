"use client"

//import Image from "next/image";
//import styles from "./page.module.css";
import './globals.css';
import Header from "./components/Header"
//import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectPanel from "./components/ProjectPanel";
//import PictureCard from './components/AIPictureCard';
//import SolutionCard from "./components/SolutionCard";
//import type { SolutionCardProps } from './components/SolutionCard';

export interface Project {
  problem: string;
  solutionTitle: string;
  solutionText: string;
  techStack?: string[];
  imagePath?: string;
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
        problem: `There are many fairly sedentary people who know they ought to walk more but never quite get round to it.`,
        solutionTitle: `SOFA TO STRIDER`,
        solutionText: `A mobile-first app that overcomes common hurdles by showing you when, where and why to walk.`,
        techStack: ['React', 'Typescript', 'Node.js', 'Next.js', 'Vitest','OpenWeather API', 'Google Places API', 'Google Photos API', 'Open AI API'],
        imagePath: `/sofa_to_strider.png`,
        deployedLink: `https://sofa-to-strider.vercel.app/`,
        githubLink: `https://github.com/sumeyacodes/sofa-to-strider`,
        youtubeLink: `https://www.youtube.com/embed/qj_6hMQgz_Q?si=pLbet1PNScUgIncW`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Our teammate Alistair has had his Seat Ibiza for 4 years and he still doesn't know how to turn the fog lights on.`,
        solutionTitle: `MY MECHANIC`,
        solutionText: `A RAG chatbot that applies the power of ChatGPT to Alistair's car manual, giving friendly, correct, sourced answers without hallucinations.`,
        techStack: ['Pinecone Vector Database', 'OpenAI', 'React'],
        imagePath: `/awaiting_image.jpeg`,
        deployedLink: ``,
        githubLink: `https://github.com/SchoolOfCode/my-mechanic`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `A job I was really interested in wanted someone who had built things with Flask.`,
        solutionTitle: `FLASK IN FIVE HOURS`,
        solutionText: `Prove I could get to grips with a new framework in less than a day.`,
        techStack: ['Python','Flask','Jinja'],
        imagePath: ``,
        deployedLink: ``,
        githubLink: ``,
        youtubeLink: `https://www.youtube.com/embed/bkDmuo7oSOM?si=FQGwoBOzo8DsoBHR`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      },
      {
        problem: `Streaming music puts millions of songs at our fingertips, but we've lost the delightful mysteries of the unlabelled mixtape`,
        solutionTitle: `BLIND MIXTAPE`,
        solutionText: `Send your friend a playlist they can't look at or skip over, but have to actually listen to.`,
        techStack: [],
        imagePath: `/blind_mixtape_thumbnail.png`,
        deployedLink: ``,
        githubLink: `https://github.com/lizwade/blind-mixtape`,
        wip: true,
        colour: `rgb(249, 223, 21)`
      },
    ]
  
  const techStories: Project[] =
    [
      {
        problem: `IBM wanted to tell the story of how its brand  `,
        solutionTitle: `AWARD-WINNING PAPER`,
        solutionText: `I wrote this paper for IBM, which was awarded to only 5 brands in the world.`,
        imagePath: `/IBM_Effie.pdf`,
        deployedLink: `https://sofa-to-strider.vercel.app/`,
        wip: false,
      },
{
        problem: `Typescript can sometimes seem like series of hoops to jump through.`,
        solutionTitle: `"WHY WE HAVE TYPESCRIPT" SONG`,
        solutionText: `I wrote and recorded this song and video to remind people why the effort is worth it. `,
  youtubeLink: `https://www.youtube.com/embed/RueifCX6hzo?si=pxXeutFHNoloA6kF`,
        wip: false,
        colour: `rgb(249, 223, 21)`
      }
    ]

  return (
    <div //className={styles.page}
    >
      <main //className={styles.main}
      >
        <Header></Header>

        <section id="softwareSolutions">
        <h2>Software Solutions</h2>
       
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectPanel
                project={projects[index]}
              />
            </li>
          ))}  
          </ul>
          </section>

        <h2>Technical Storytelling</h2>
    <ul>
          {techStories.map((project, index) => (
            <li key={index}>
              <ProjectPanel
                project={techStories[index]}
              />
            </li>
          ))}  
        </ul>


        {/* <h2>Past Adventures in AI</h2>
        <p> Genetic Algorithm, Image Classifier, Consumer Segmentation</p> */}

      </main>
      <footer
        //className={styles.footer}
      >
        <p>Also check out <a href="https://github.com/lizwade/portfolio" target="_blank" rel="noopener noreferrer"> the repo for this portfolio,</a> which I hand-crafted in React without AI (just to prove I can).</p>
        {/* <p>No AI was involved in the making of this site, which I hand-coded using React, Typescript, pure CSS, a bit of Bootstrap, and Next.js</p>
        <p><em>(In real life, I would probably use Bolt or ChatGPT to speed things up, but I wanted to show you I don't have to)</em></p>
        <p><em>(Also I can't take credit for the cool lever design - that belongs to Victor Grae)</em> </p> */}
       
      </footer>
    </div>
  );
}
