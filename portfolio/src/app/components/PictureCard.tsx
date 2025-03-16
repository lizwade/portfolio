import Card from 'react-bootstrap/Card';

interface PictureCardProps {
  isShowingSolution: boolean;
  source: string;
}

function PictureCard({ source } : PictureCardProps ) {
    return (
      <div>

          <div  >
            <Card className='lizcard'
            style={{ width: '100%'}}
            // body style={{ width: '18rem' }} 
                    >
                        
              <iframe
                src={source}
                style={{  objectFit: 'cover' }}
                // frameBorder="0"
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