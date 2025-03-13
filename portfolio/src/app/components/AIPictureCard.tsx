import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

interface PictureCardProps {
  isShowingSolution: boolean;
  source: string;
}

function PictureCard({ isShowingSolution, source }: PictureCardProps) {
  return (
    <div>
      <Collapse in={isShowingSolution} dimension="width">
        <div id="example-collapse-text">
          <Card style={{ width: '100%', height: '170px', position: 'relative', overflow: 'hidden' }}>
            <iframe
              src={source}
              style={{
                //width: '100%',
                //height: '100%',
                position: 'absolute', // Make it fill the card
                top: 0,
                left: 0,
                border: 'none' // Remove unwanted borders
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </Card>
        </div>
      </Collapse>
    </div>
  );
}

export default PictureCard;
