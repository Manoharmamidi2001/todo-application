import React from 'react';
import { Button, Card, Input, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const InputPlace = ({ inp, onAdd, change, btnText }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto' }}>
      <Card
        bordered={false}
        style={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          borderRadius: '12px',
        }}
      >
        <Title level={4} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Todo List Manager
        </Title>
        <Row gutter={12}>
          <Col span={18}>
            <Input
              placeholder="Enter a task..."
              value={inp}
              onChange={change}
              size="large"
            />
          </Col>
          <Col span={6}>
            <Button
              type="primary"
              onClick={onAdd}
              block
              size="large"
              style={{ fontWeight: 600 }}
            >
              {btnText}
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default InputPlace;