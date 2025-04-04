import React, { useState } from 'react'
import InputPlace from '../Components/InputPlace'
import Card from '../Components/Card'

const Home = () => {
  const [input, setInput] = useState('')
  const [item, setItem] = useState([])

  const handleChange=(e)=>{
    const {value} = e.target
    setInput(value)
  }

  const handleSubmit = ()=>{
    setItem((prev)=>{
      return(
        [
          ...prev,
          item
        ]
      )
    })
  }
  return (
    <div style={{background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)', height:'100vh'}}>
        <InputPlace inp={input} change={handleChange} submit={handleSubmit}/>
        <Card data = {item}/>
    </div>
  )
}

export default Home
