//import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';




interface SolutionCardProps {
  isShowingSolution: boolean;
}

function SolutionCard({ isShowingSolution }: SolutionCardProps) {
  //const [open, setOpen] = useState(false);

  return (
    <>
    
      <div style={{ minHeight: '150px' }}>
        <Collapse in={isShowingSolution} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
                          My solution was to do a cool thing. Look how cool it was! 
                          Click it and stuff!
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default SolutionCard;