import React from "react";
import { CardBody,Card,CardTitle,CardText,CardSubtitle,Button,CardImg,CardGroup } from "reactstrap";


const Test = props => {
    return(
       
       <div>

    <CardGroup>
    <Card className="my-2 " style={{padding:'10px'}}>
      <CardImg
        alt="Card image cap"
        src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__340.jpg"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Vanila pestry
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Testy
        </CardSubtitle>
        <CardText>
          This is a wider card with  This content is a little bit longer.
        </CardText>
        <Button color="danger"outline>
          Buy Now
        </Button>
      </CardBody>
    </Card>
    <Card className="my-2" style={{padding: "10px"}}>
      <CardImg
        alt="Card image cap"
        src="https://cdn.pixabay.com/photo/2012/02/28/00/47/berliner-17811__340.jpg"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="danger"outline>
          Buy Now
        </Button>
      </CardBody>
    </Card>
    <Card className="my-2" style={{padding: "10px"}}>
      <CardImg
        alt="Card image cap"
        src="https://cdn.pixabay.com/photo/2016/03/05/19/23/bread-1238385__340.jpg"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This card has even longer content than the first to show that equal height action.
        </CardText>
        <Button color="danger"outline>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  </CardGroup>
  <CardGroup>
  <Card className="my-2" style={{padding: "10px"}}>
    <CardImg
      alt="Card image cap"
      src="https://cdn.pixabay.com/photo/2012/02/28/00/55/background-17943__340.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Vanila pestry
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Testy
      </CardSubtitle>
      <CardText>
        This is a wider card with  This content is a little bit longer.
      </CardText>
      <Button color="danger"outline>
        Buy Now
      </Button>
    </CardBody>
  </Card>
  <Card className="my-2" style={{padding: "10px"}}>
    <CardImg
      alt="Card image cap"
      src="https://cdn.pixabay.com/photo/2017/03/07/04/41/swede-cakes-2123192__340.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="danger"outline>
        Buy Now
      </Button>
    </CardBody>
  </Card>
  <Card className="my-2" style={{padding: "10px"}}>
    
    <CardImg
      alt="Card image cap"
      src="https://cdn.pixabay.com/photo/2017/09/10/10/41/roll-2735125__340.png"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has even longer content than the first to show that equal height action.
      </CardText>
      <Button color="danger"outline>
        Buy Now
      </Button>
    </CardBody>
    
    </Card>

    </CardGroup>
   
           
        </div>
    )
}

export default Test;