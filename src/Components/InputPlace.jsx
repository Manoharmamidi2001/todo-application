import { Button, Card, Col, Input, Row } from 'antd'
import React from 'react'

const InputPlace = ({inp, change, submit}) => {
  return (
    <div>
      <Card style={{border:'1px solid'}}>
        <Row>
          <Col style={{display:'flex'}}>
          <Input value={inp} onChange={change}/>
          <Button type='primary' onClick={submit}>ADD</Button>
          </Col>
        </Row>

      </Card>
    </div>
  )
}

export default InputPlace
