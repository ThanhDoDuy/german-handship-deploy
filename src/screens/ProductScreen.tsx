import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Rating } from '../components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DEFAULT_PRODUCT } from '../common/constant';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(DEFAULT_PRODUCT);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`api/v1/products/${productId}`);
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup.Item>
            <h3>{product?.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={4.5} text={'14 reviews'} />
          </ListGroup.Item>
          <ListGroup.Item>Price: {product?.price} VND</ListGroup.Item>
          <ListGroup.Item>
            Description: {product?.description} VND
          </ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product?.price}</strong> VND
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {(product?.countInStock || 0) > 0
                        ? 'In stock'
                        : 'Out of stock'}
                    </strong>{' '}
                    VND
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={(product?.countInStock || 0) === 0}
                />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
