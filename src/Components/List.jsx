import React from 'react';
import { Card, Typography, Space, Row, Col, Divider } from 'antd';
import { FaEdit, FaTrash } from 'react-icons/fa';

const { Text } = Typography;

const List = ({ data, onEdit, onDelete, editIndex }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', marginTop: '20px' }}>
      <Card
        style={{
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '16px',
        }}
      >
        {data.length === 0 ? (
          <Text type="secondary">No tasks yet. Add something!</Text>
        ) : (
          data.map((item, index) => (
            <div key={index}>
              <Row justify="space-between" align="middle" style={{ padding: '6px 0' }}>
                <Col>
                  <Text style={{ fontSize: '15px' }}>{item}</Text>
                </Col>
                <Col>
                  <Space size="middle">
                    <FaEdit
                      onClick={() => onEdit(index)}
                      style={{
                        cursor: 'pointer',
                        color: '#1890ff',
                        fontSize: '25px',
                        backgroundColor: editIndex === index ? '#52c41a' : 'transparent',
                        borderRadius: '4px',
                      }}
                      title="Edit"
                    />
                    <FaTrash
                      onClick={() => onDelete(index)}
                      style={{
                        cursor: 'pointer',
                        color: '#ff4d4f',
                        fontSize: '25px',
                      }}
                      title="Delete"
                    />
                  </Space>
                </Col>
              </Row>
              {index < data.length - 1 && <Divider style={{ margin: '4px 0' }} />}
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

export default List;
