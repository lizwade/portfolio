import { useState } from 'react';
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
            <PictureCard isShowingSolution={isShowingSolution}></PictureCard>
           
            
        </div>
    )
}

export default ProjectPanel;
