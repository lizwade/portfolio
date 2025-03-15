import Card from 'react-bootstrap/Card';
import Switch from '../components/Switch'

interface ProblemCardProps {
    myProblem: string;
    isShowingSolution: boolean;
    setIsShowingSolution: (value: boolean) => void;

   
}

function ProblemCard({ myProblem, setIsShowingSolution, isShowingSolution }: ProblemCardProps) {

    return (
        <div
        
            //style={{ minHeight: '220px' }}
        >
            <Card className='lizcard'
                body style={{ backgroundColor: "#fff" }}
            >
                <Card.Title>Problem
                   
                   
                </Card.Title>
               
                <Card.Text>{myProblem}</Card.Text>
                <div className="switchbox"><Switch onChange={() => setIsShowingSolution(!isShowingSolution)}></Switch></div>
                 
                
            </Card>
            </div>
    )
}

export default ProblemCard