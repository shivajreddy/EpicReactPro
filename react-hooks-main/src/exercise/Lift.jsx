import React from 'react'

function Name({val, onValChange}) {
  return (
    <div>
      <label htmlFor="name-input"> What is your Name ?</label>
      <input value={val} onChange={onValChange} id="name-input" />
    </div>
  )
}

function Animal({val, onValChange}) {
  return (
    <div>
      <label htmlFor="fav-animal">What's your favorite Animal</label>
      <input value={val} onChange={onValChange} id="fav-animal" />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, Your fav animal is ${animal}!`}</div>
}

function Lift() {
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <Name val={name} onValChange={event => setName(event.target.value)} />
      <Animal
        val={animal}
        onValChange={event => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </div>
  )
}

export default Lift
