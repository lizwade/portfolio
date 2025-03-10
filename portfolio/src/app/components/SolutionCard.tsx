//import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';




interface SolutionCardProps {
  isShowingSolution: boolean;
  mySolutionTitle: string;
  mySolutionText: string;
}

function SolutionCard({ isShowingSolution, mySolutionTitle, mySolutionText }: SolutionCardProps) {
 

  return (
    
    
      <div
        
    //style={{ minHeight: '200px' }}
    >
        <Collapse in={isShowingSolution} dimension="width">
          <div id="example-collapse-text">
            <Card className = 'lizcard'
            //</div>
            // body style={{ width: '18rem' }}
            body style={{ backgroundColor: 'rgb(249, 223, 21,1)' }}
          >
            <Card.Title>{`Solution: ${mySolutionTitle}`}</Card.Title>
            <Card.Text>{mySolutionText}</Card.Text>
                          
            </Card>
          </div>
        </Collapse>
      </div>
    
  );
}

export default SolutionCard;