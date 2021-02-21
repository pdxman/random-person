import React, {useState, useEffect} from 'react'

export default function Thing() {
    const [thingNum, setThingNum] = useState(1)
    const [thing, setThing] = useState({})

    let number = Math.floor(Math.random() * 11)
    console.log(number)

    // setThingNum[thingNum(Math.floor(Math.random() * 11))]
    // return thingNum
    // console.log(thingNum)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${thingNum}/?format=json`)
        .then(response => response.json())
        .then(json => {
            // console.log('name of the day', json)
            setThing(json)
        })
    }, [])

    return(
        <div>
            <h2>testing time! Here is the number {thingNum}</h2>
            <p><strong>Name:</strong> {thing.name}</p>
        </div>
    )
}