import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (product: any) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`${product?._id}`}>
        <Card.Img src="" variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`${product?._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text>
        <Card.Title as="div">
          <Rating value={4.5} text={'12 reviews'} />
        </Card.Title>
      </Card.Text>
      <Card.Text>
        <Card.Title as="h3">{product.price} VND</Card.Title>
      </Card.Text>
    </Card>
  );
};

export default Product;
