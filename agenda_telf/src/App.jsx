import { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addPerson = (event) =>{
    event.preventDefault()
    const personsObject ={
      name: newName
    }
    setPersons(persons.concat(personsObject))
  }
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Number key={person.name} number={person} />
      )}
    </div>
  )
}

export default App