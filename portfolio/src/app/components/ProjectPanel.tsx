import { useState } from 'react';
import Image from 'next/image';
//import Card from 'react-bootstrap/Card';
import Switch from '../components/Switch'
import SolutionCard from "../components/SolutionCard";
import ProblemCard from './ProblemCard';
import PictureCard from './PictureCard';
import type { Project } from '../page'
//import styles from "./ProjectPanel.module.css";


function ProjectPanel(props: { project: Project }) {
    const [isShowingSolution, setIsShowingSolution] = useState(false);
    

    return (
        <div
            // className={styles.panel
            style={{ minHeight: '200px' }}
            className="projpanel">

            <ProblemCard myProblem={props.project.problem}></ProblemCard>
            
            <Switch onChange={() => setIsShowingSolution(!isShowingSolution)}></Switch>
            <SolutionCard isShowingSolution={isShowingSolution}
                mySolutionTitle={props.project.solutionTitle}
                mySolutionText={props.project.solutionText}
            ></SolutionCard>

            {props.project.youtubeLink ?
                <PictureCard
                    isShowingSolution={isShowingSolution}
                    source={props.project.youtubeLink} >
                </PictureCard>
                :
                <PictureCard
                    isShowingSolution={isShowingSolution}
                    source={props.project.imagePath} >
                </PictureCard>
            }

        
            
            {
                (isShowingSolution && props.project.details.deployedLink) //if this is true
                && // return the right hand side of this expression i.e. render what follows (otherwise render nothing)
                <a href={props.project.details.deployedLink} target="_blank" rel="noopener noreferrer">
                    <Image src="/web.svg" alt="web logo" width="35" height="35"></Image>
                </a> 
            }
               
            
            {
                (isShowingSolution && props.project.details.githubLink) 
                &&
                <a href={props.project.details.githubLink} target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="github logo" width="30" height="30"></Image>
                </a>
            }

            {
                (isShowingSolution && props.project.details.techStack)
                &&
                <ul>
                        {props.project.details.techStack.map((tech, index) => (
                            <li key={index} className='techstack'>{tech}</li>))} 
                </ul>
            }

                {
                (isShowingSolution && props.project.details.wip) 
                && // return the right hand side of this expression i.e. render what follows (otherwise render nothing)
                <p className='wip'><mark>Work in progress</mark></p> 
            }


        </div>
    )
}

export default ProjectPanel;

//  return (
//     <div>
//       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
//     </div>
