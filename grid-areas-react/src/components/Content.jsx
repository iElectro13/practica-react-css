import React from 'react'
import Card from './Card'

const Content = () => {

  const personajes = [
    {
      name: "Harry Potter",
      house: "Gryffindor",
      image: "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor",
      image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
    },
    {
      name: "Ron Weasley",
      house: "Gryffindor",
      image: "http://hp-api.herokuapp.com/images/ron.jpg"
    },
    {
      name: "Draco Malfoy",
      house: "Slytherin",
      image: "http://hp-api.herokuapp.com/images/draco.jpg"
    }
  ]

  return (
    <main className='main-content'>
      {personajes.map(item => <Card name={item.name} house={item.house} image={item.image} colorPelo={item.hairColour} />)}
    </main>
  )
}

export default Content