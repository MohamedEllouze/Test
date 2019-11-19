import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }


  componentDidMount = () => {
    axios.get('/products/')
    .then(res => this.setState({ products : res.data }))
    .catch(err => console.log("erreur"))

  }

  render() {
    return (
      <div className='usersbody' >


        {this.state.products.map(el =>
          <div key={el.id} className="products">

            <Card>
              <div className="img">
              <CardImg 
            
                src={el.imageUrl} alt="Card image cap" />
              </div>
              <CardBody>
                <CardTitle style={{fontSize:"18px", color:"#0060B6"}}>{el.productName}</CardTitle>
                <CardSubtitle>{el.category}</CardSubtitle>
               
                <Link id='link' to={`/products/${el.id}`}>
                  <Button>See Profile</Button>  
                </Link>
              </CardBody>
            </Card>





          </div>
        )
        }


      </div>
    );
  }
}

export default Products;



