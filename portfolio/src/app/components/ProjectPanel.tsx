import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Switch from '../components/Switch'
import SolutionCard from "../components/SolutionCard";
//import styles from "./ProjectPanel.module.css";

function ProjectPanel() {
    const [isShowingSolution, setIsShowingSolution] = useState(false);

  

    return (
        <div
            // className={styles.panel
            className="projpanel"
            >
        <Card>The PROBLEM was this...</Card>
            <Switch onChange={() => setIsShowingSolution(!isShowingSolution)}></Switch>
        <SolutionCard isShowingSolution={isShowingSolution}></SolutionCard>
        </div>
    )
}

export default ProjectPanel;
