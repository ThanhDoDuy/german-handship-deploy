import { Row, Col, Alert } from 'react-bootstrap';
import { Product } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import AxiosError for proper type handling

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(''); // State to store error messages
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const { data } = await axios.get('/api/v1/products');
        setProducts(data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          // Check if the error is an AxiosError
          if (err.response) {
            // Error response from server
            if (err.response.status === 403) {
              setError(
                'Access Denied: You are not authorized to view this content.'
              );
            } else {
              setError(`Error: ${err.response.statusText}`);
            }
          } else if (err.request) {
            // No response was received
            setError('No response from the server. Please try again later.');
          }
        } else {
          // Some other error occurred
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
