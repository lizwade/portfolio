import Card from 'react-bootstrap/Card';
//import Collapse from 'react-bootstrap/Collapse';


interface PictureCardProps {
  isShowingSolution: boolean;
  source: string;
}

function PictureCard({ source } : PictureCardProps ) {
    return (
      <div>
        {/* <Collapse in={isShowingSolution}  > */}
          <div  >
            <Card className='lizcard'
              style={{ width: '100%'}}
            //</div>
            // body style={{ width: '18rem' }}
           
                    >
                        
              <iframe
                // src="https://www.youtube.com/embed/RueifCX6hzo?si=hyYiJHLhHb5eiAIr"
                src={source}
                style={{  objectFit: 'cover' }}
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                
              >
                
                </iframe>
           
                         
          </Card>
           
           
        </div>
       
        {/* </Collapse> */}
      </div>
    
    )
}

export default PictureCard;