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
          
    }, [thingNum])

   

    return(
        <div>
            <p><strong>Name:</strong> {thing.name}</p>
            <button onClick={updateNum}>Random</button>
            <p>API by the folks at <a href="https://swapi.dev/">swapi.dev</a></p>
        </div>
    )
}
