"use client"

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header"
import ProjectPanel from "./components/ProjectPanel";


export type PicType = "youtube" | "image";
export interface Project {
  problem: string;
  solutionTitle: string;
  solutionText: string;
  imageType: PicType;
  imageLink: string;
  secondImageType?: PicType;
  secondImageLink?: string;
  details: {
    githubLink?: string;
    deployedLink?: string;
    techStack?: string[];
    wip: boolean;
  }
  colour?: string;
}

export default function Home() {

  const projects: Project[] =
    [
      {
        problem: `There are many fairly sedentary people who know they ought to walk more but never quite get round to it.`,
        solutionTitle: `SOFA TO STRIDER`,
        solutionText: `A mobile-first app that overcomes common hurdles by showing you when, where and why to walk.`,

        imageLink: `https://www.youtube.com/embed/qj_6hMQgz_Q?modestbranding=1&rel=0`,
        imageType: "youtube",

        secondImageLink: `/sofa_to_strider.png`,
        secondImageType: "image",

        details: {
          techStack: ['React', 'Typescript', 'Node.js', 'Next.js', 'Vitest', 'OpenWeather API', 'Google Places API', 'Google Photos API', 'Open AI API'],
          deployedLink: `https://sofa-to-strider.vercel.app/`,
          githubLink: `https://github.com/sumeyacodes/sofa-to-strider`,
          wip: false,
        },
        colour: `rgb(249, 223, 21)`
      },

      {
        problem: `Our teammate Alistair has had his Seat Ibiza for 4 years and he still doesn't know how to turn the fog lights on.`,
        solutionTitle: `MY MECHANIC`,
        solutionText: `A RAG chatbot that applies the power of ChatGPT to Alistair's car manual, giving friendly, correct, sourced answers without hallucinations.`,
       
        imageLink: `/my_mechanic_thumbnail.jpeg`,
        imageType: "image",
       
        secondImageLink: `/my_mechanic_screenshot.jpeg`,
        secondImageType: "image",

        details: {
          techStack: ['Pinecone Vector Database', 'OpenAI', 'React'],
          deployedLink: ``,
          githubLink: `https://github.com/SchoolOfCode/my-mechanic`,
          wip: false,
        },
        colour: `rgb(249, 223, 21)`
      },

      {
        problem: `A job I was interested in wanted someone who had built things with Flask.`,
        solutionTitle: `FLASK IN FIVE HOURS`,
        solutionText: `Prove I could get to grips with a new framework in less than a day.`,

        imageLink: `https://www.youtube.com/embed/bkDmuo7oSOM?si=FQGwoBOzo8DsoBHR`,
        imageType: "youtube",

        details: {
          techStack: ['Python','Flask','Jinja'],
          deployedLink: ``,
          githubLink: `https://github.com/lizwade/flask-tutorial`,
          wip: false,
        },
        colour: `rgb(249, 223, 21)`
      },
      // {
      //   problem: `Streaming music puts millions of songs at our fingertips, but we've lost the delightful mysteries of the unlabelled mixtape`,
      //   solutionTitle: `BLIND MIXTAPE`,
      //   solutionText: `Send your friend a playlist they can't look at or skip over, but have to actually listen to.`,

      //   imageLink: `/blind_mixtape_thumbnail.jpg`,
      //   imageType: "image",

      //   details: {
      //     techStack: [],
      //     deployedLink: ``,
      //     githubLink: `https://github.com/lizwade/blind-mixtape`,
      //     wip: true,
      //   },
      //   colour: `rgb(249, 223, 21)`
      // },
    ]
  
  const techStories: Project[] =
    [
      {
        problem: `IBM has been responsible for some of technology's biggest breakthroughs, but newer companies were getting the limelight.`,
        solutionTitle: `"A LEADING BRAND, A LASTING BRAND"`,
        solutionText: `I wrote this award-winning paper, which saw IBM crowned one of the five most effective brands in the world.`,
       
        imageLink: `/ibm_thumbnail.png`,
        imageType: "image",
       
        details: {
          wip: false,
          deployedLink: `/IBM_Effie.pdf`,

        },
      },

      {
        problem: `Developers who are used to Javascript sometimes resent the time it can take to meet Typescript's requirements.`,
        solutionTitle: `"WHY WE HAVE TYPESCRIPT" SONG`,
        solutionText: `I wrote and recorded this song and video to remind people why the effort is worth it. `,
        
        imageLink: `https://www.youtube.com/embed/RueifCX6hzo`,
        imageType: "youtube",

        details: {
          wip: false,
        },
        colour: `rgb(249, 223, 21)`, 
      }
    ]
  
  
  const aiProjects: Project[] =
    [
      {
        problem: `Most scheduling problems are NP-complete, so cannot be solved by any known polymomial-time algorithms.`,
        solutionTitle: `EVOLUTIONARY AI`,
        solutionText: `In 2014, I designed and built this genetic algorithm from scratch that outperformed a hill-climbing algorithm.`,
       
        imageLink: `https://www.youtube.com/embed/C4wsuY9aoKM`,
        imageType: "youtube",
        
       
        details: {
          wip: false,
          techStack: ["Java", "Netbeans"],
          githubLink: `https://github.com/lizwade/m450`,
          deployedLink: `/genetic_algorithm_paper.pdf`,

        },
      },

      {
        problem: `It was 2018, and computers were still pretty bad at understanding the content of pictures.`,
        solutionTitle: `MACHINE LEARNING CLASSIFIER`,
        solutionText: `Using transfer learning, I built and trained a new AI to successfully classify flower images by species.`,
        
        imageLink: `/flower_classifier_thumbnail.png`,
        imageType: "image",

        details: {
          wip: false,
          deployedLink: `/image_classifier_project.html`,
          techStack: [`Python`, `Jupyter Notebooks`,`numpy`, `Pytorch`, `vgg13`, `Supervised Learning` ],
        },
        colour: `rgb(249, 223, 21)`, 
      },

       {
        problem: `Companies need to know who their best customers are so they can target their most lucrative prospects.`,
        solutionTitle: `SEGMENTATION`,
        solutionText: `I cleaned, scaled, vectorized, and clustered population data then compared it to client data to inform the marketing strategy.`,
        
        imageLink: `cluster_thumbnail.png`,
        imageType: "image",

        details: {
          wip: false,
          deployedLink: `/identify_customer_segments.html`,
          techStack: [`Python`, `Jupyter Notebooks`,`numpy`, `pandas`, `scikit-learn`, `Unsupervised Learning` ],
        },
        colour: `rgb(249, 223, 21)`, 
      }
    ]


  return (
    <div 
    >
      <main 
      >
        <Header></Header>

        <section id="softwareSolutions">
        <h2>SOFTWARE SOLUTIONS</h2>
       
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


      <section id="ai">
        <h2>AI KNOWLEDGE</h2>
         <ul>
          {aiProjects.map((project, index) => (
            <li key={index}>
              <ProjectPanel
                project={aiProjects[index]}
              />
            </li>
          ))}  
          </ul>
          </section>
        
         <section id="storytelling">
        <h2>TECHNICAL STORYTELLING</h2>
    <ul>
          {techStories.map((project, index) => (
            <li key={index}>
              <ProjectPanel
                project={techStories[index]}
              />
            </li>
          ))}  
          </ul>
          </section>

       

      </main>
      <footer

      >
        <h6>Also check out <a href="https://github.com/lizwade/portfolio" target="_blank" rel="noopener noreferrer"> the repo for this portfolio,</a> which I hand-crafted in React without AI (except for debugging) just to show I can.</h6>
       
      </footer>
    </div>
  );
}
