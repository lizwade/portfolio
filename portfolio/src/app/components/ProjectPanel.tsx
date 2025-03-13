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

        </div>
    )
}

export default ProjectPanel;

//  return (
//     <div>
//       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
//     </div>
