import React from 'react';
import logo from './logo.svg';

import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';

const App = (): JSX.Element => {
  return (
    <div
      className='App'
      style={{ position: 'fixed', bottom: '0', width: '100vw', height: '50vh', backgroundColor: '#e8e8e8', textAlign: 'center' }}
    >
      <Container>
        <Image src={logo} rounded thumbnail width='300' />
        <Row style={{ margin: '3rem 0' }}>
          <Col>
            <Button>Splash it</Button>
          </Col>
        </Row>
        <p>Welcome to SplashUp discovery module</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn more
        </a>
      </Container>
    </div>
  );
};

export default App;
