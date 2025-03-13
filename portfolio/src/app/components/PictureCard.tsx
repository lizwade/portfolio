import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


interface PictureCardProps {
    isShowingSolution: boolean;
}

function PictureCard({isShowingSolution} : PictureCardProps ) {
    return (
        // <div>
        //     <Card className = 'lizcard'
        //         body style={{ backgroundColor: 'rgb(249, 223, 21, 0.3)' }}
        //     >
        //         I will be a picture</Card>
        //     </div>


      <div 
        
    //style={{ minHeight: '200px' }}
    >
        <Collapse in={isShowingSolution} dimension="width" >
          <div id="example-collapse-text" >
            <Card className = 'lizcard'
            //</div>
            // body style={{ width: '18rem' }}
           
                    >
                        
              <iframe
                src="https://www.youtube.com/embed/RueifCX6hzo?si=hyYiJHLhHb5eiAIr"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              >
                
                </iframe>
           
                         
          </Card>
           
           
        </div>
       
        </Collapse>
      </div>
    
    )
}

export default PictureCard;