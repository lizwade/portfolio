import Card from 'react-bootstrap/Card';

interface ProblemCardProps {
    myProblem: string;
   
}

function ProblemCard({ myProblem }: ProblemCardProps) {

    return (
        <div
        
            //style={{ minHeight: '220px' }}
        >
    <Card className = 'lizcard'
                body style={{ backgroundColor: "#fff" }}
            >
                <Card.Title>Problem</Card.Title>
                <Card.Text>{myProblem}</Card.Text>
            </Card>
            </div>
    )
}

export default ProblemCard