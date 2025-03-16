import { useState } from 'react';
import Image from 'next/image';
import SolutionCard from "../components/SolutionCard";
import ProblemCard from './ProblemCard';

import type { Project } from '../page'



function ProjectPanel(props: { project: Project }) {
    const [isShowingSolution, setIsShowingSolution] = useState(false);
    

    return (
        <div
            style={{ minHeight: '340px' }}
            className="projpanel">

            <ProblemCard
                myProblem={props.project.problem}
                isShowingSolution={isShowingSolution}
                setIsShowingSolution={setIsShowingSolution}              
            ></ProblemCard>
            

            <SolutionCard isShowingSolution={isShowingSolution}
                mySolutionTitle={props.project.solutionTitle}
                mySolutionText={props.project.solutionText}
                myImageLink={props.project.imageLink}
                myImageType={props.project.imageType}
            ></SolutionCard>
        
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


