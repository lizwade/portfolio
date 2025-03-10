import { useState } from 'react';
//import Card from 'react-bootstrap/Card';
import Switch from '../components/Switch'
import SolutionCard from "../components/SolutionCard";
import ProblemCard from './ProblemCard';
import PictureCard from './PictureCard';
//import styles from "./ProjectPanel.module.css";

interface ProjectPanelProps {
    myProblem: string;
    mySolutionTitle: string;
    mySolutionText: string;
}

function ProjectPanel({myProblem, mySolutionTitle, mySolutionText}: ProjectPanelProps) {
    const [isShowingSolution, setIsShowingSolution] = useState(false);

  

    return (
        <div
            // className={styles.panel
             style={{ minHeight: '200px' }}
            className="projpanel">

            <ProblemCard myProblem={myProblem}></ProblemCard>
            
            <Switch onChange={() => setIsShowingSolution(!isShowingSolution)}></Switch>
            <SolutionCard isShowingSolution={isShowingSolution}
                mySolutionTitle={mySolutionTitle}
                mySolutionText={mySolutionText}
            ></SolutionCard>
            <PictureCard isShowingSolution={isShowingSolution}></PictureCard>
           
            
        </div>
    )
}

export default ProjectPanel;
