import React from 'react';

type Props = {
  name: string
  age?: number
}

const WelcomeCard = ({ name, age }: Props) => {
  const greeting = `Hello ${name}!`
  const showAge = age ? `You are ${age} years old.` : ''

  return (
    <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1>{greeting}</h1>
      <p>{showAge}</p>
    </div>
  )
}

export default WelcomeCard
