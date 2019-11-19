import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }
    componentDidMount = () => {
      let id=this.props.id
        axios.get('/products/'+id).then(res => this.setState({ post: res.data })).catch(err => console.log("erreur"))
        
    }
    render() {
        return (<div className="toutpost">
            {console.log(this.props.id)}

            {this.state.product.map(el =>
            <div className="Post">
                <img className="image" src={el.imageUrl}/>
                
                <p className="PostTitle">{el.productName}</p>
                
                <p className="PostBody">{el.category}</p>
                </div>
           )}

        </div>);
    }
}

export default Product;