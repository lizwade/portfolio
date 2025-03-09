import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Switch from '../components/Switch'
import SolutionCard from "../components/SolutionCard";

function ProjectPanel() {
    const [isShowingSolution, setIsShowingSolution] = useState(false);

  

    return (
        <>
        <Card>The PROBLEM was this...</Card>
            <Switch onChange={() => setIsShowingSolution(!isShowingSolution)}></Switch>
        <SolutionCard isShowingSolution={isShowingSolution}></SolutionCard>
        </>
    )
}

export default ProjectPanel;
