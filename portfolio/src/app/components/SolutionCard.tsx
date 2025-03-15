//import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import PictureCard from './PictureCard';
import type { PicType } from '../page'




export interface SolutionCardProps {
  isShowingSolution: boolean;
  mySolutionTitle: string;
  mySolutionText: string;
  myImageType: PicType;
  myImageLink: string;
  
}

function SolutionCard({ isShowingSolution, mySolutionTitle, mySolutionText, myImageLink }: SolutionCardProps) {
 

  return (
    
    
      <div className='notprobcard' >
        <Collapse in={isShowingSolution}  >
        <div
          // id="example-collapse-text"
        >
            <Card className = 'lizcard' 
           
            body style={{ backgroundColor: '#fff100' }}
          >
            <Card.Title>{`Solution: ${mySolutionTitle}`}</Card.Title>
            <Card.Text>{mySolutionText}</Card.Text>

          
                <PictureCard
                    isShowingSolution={isShowingSolution}
                    source={myImageLink} >
                </PictureCard>
               
            


                 
          </Card> {/* end Solution card */}
           
           
        </div>
       
        </Collapse>
      </div>
    
  );
}

export default SolutionCard;