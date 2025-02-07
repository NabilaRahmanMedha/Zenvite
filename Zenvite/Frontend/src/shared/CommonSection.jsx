import React from 'react';
import './common-section.css';

import { Container, Row, Col } from 'reactstrap';

export const CommonSection = ({ title, description }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h1>{title}</h1>
            {description && <p className="common__section-desc">{description}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
