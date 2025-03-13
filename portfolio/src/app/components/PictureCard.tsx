import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


interface PictureCardProps {
  isShowingSolution: boolean;
  source: string;
}

function PictureCard({ isShowingSolution, source } : PictureCardProps ) {
    return (
      <div        
    //style={{ minHeight: '200px' }}
      >
        <Collapse in={isShowingSolution} dimension="width" >
          <div id="example-collapse-text" >
            <Card //className='lizcard'
              style={{ width: '100%', height: '170px' }}
            //</div>
            // body style={{ width: '18rem' }}
           
                    >
                        
              <iframe
                // src="https://www.youtube.com/embed/RueifCX6hzo?si=hyYiJHLhHb5eiAIr"
                src={source}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //referrerpolicy="strict-origin-when-cross-origin"
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