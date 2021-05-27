import React from 'react'
import { useLocation } from "wouter";
import './Home.css'

export default function Home() {
    // eslint-disable-next-line
    const [location, setLocation] = useLocation();
   

    const handlesubmit = e => {
        e.preventDefault();
        const keyword = document.getElementById('key').value
        const valor = '/gif/'+ keyword
        setLocation(valor)
        
        
        
       
    }
    return (
        <div class="Home">
            <div className="container">
                <div class="row">
                    <img alt="title" src="https://i.imgur.com/Xsi7fj7.png" border="0"/>
                </div>
            
            <div className="input-group mb-3" >
                <input id="key" type="text" class="form-control" />
                <button onClick={handlesubmit} class="btn btn-outline-secondary" type="button">Buscar</button>
            </div>
            
        </div>
        </div>
        
    )
}

