import React, {useState, useEffect} from 'react'

export default function Thing() {
    const [thingNum, setThingNum] = useState(4)
    const [thing, setThing] = useState({})

    function updateNum() {
        setThingNum(Math.floor(Math.random() * 11)) 
    } 
    
    useEffect(() => { 
        
        console.log(thingNum)    
    
        fetch(`https://swapi.dev/api/people/${thingNum}/?format=json`)
        .then(response => response.json())
        .then(json => {
            setThing(json)
            console.log(thing)
        })
          
    }, [])

    return(
        <div>
            <h2>testing time! Here is the number {thingNum}</h2>
            <p><strong>Name:</strong> {thing.name}</p>
            <button onClick={updateNum}>Random</button>
        </div>
    )
}
