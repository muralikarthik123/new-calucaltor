import React,{useState} from 'react'
import Inputs from './input.jsx'
import './home.css'
export default function Home() {
    const[data,setData]=useState("")
    const[cals,setCal]=useState('')
    const open=(e)=>{
        setData(e)
    }
    const cal=(e1)=>{
        setCal(e1)
    }
  return (
    <div className='home'>
        <Inputs inputs={data} cal={cals}/>
        <button className='bt'onClick={()=>open('7')}>7</button>
        <button className='bt' onClick={()=>open('8')}>8</button>
        <button className='bt' onClick={()=>open('9')}>9</button>
        <button className='bt1' onClick={()=>open('/')}>/</button>
        <br/>
        <button className='bt' onClick={()=>open('4')}>4</button>
        <button className='bt' onClick={()=>open('5')}>5</button>
        <button className='bt' onClick={()=>open('6')}>6</button>
        <button className='bt1' onClick={()=>open('*')}>*</button>
        <br/>
        <button className='bt' onClick={()=>open('1')}>1</button>
        <button className='bt' onClick={()=>open('2')}>2</button>
        <button className='bt' onClick={()=>open('3')}>3</button>
        <button className='bt1' onClick={()=>open('-')}>+</button>
        <br/> 
        <button className='bt' onClick={()=>open('0')}>0</button>
        <button className='bt1' onClick={()=>open('+')}>+</button>
        <button className='bt1' onClick={()=>cal('=')}>=</button>
        <button className='bt1' onClick={()=>cal('e')}>Ac</button>
        <br/>
        <br/>    
    </div>
  )
}
