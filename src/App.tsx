import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Thanh Do Shop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
