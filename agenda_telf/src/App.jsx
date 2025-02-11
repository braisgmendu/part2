import { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const personsObject ={
      name: newName,
      number: newNumber
    }
    const nombreExiste = persons.some(person => person.name === newName)
    const numeroExiste = persons.some(person => person.number === newNumber)
    if(nombreExiste){
      alert(`El nombre "${newName}" ya existe en la agenda"`)
    }else if(numeroExiste){
      alert(`El número "${newNumber}" ya existe en la agenda"`)
    }
    else{
      setPersons(persons.concat(personsObject))
    }
    setNewName('')
      setNewNumber('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={searchTerm} onChange={handleSearchChange} />
      <div> 
      <h2>add Person</h2>
        
        <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} 
        newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      </div>
     <div>
      <h2>Numbers</h2>
        {filteredPersons.map(person => 
          <Person key={person.id} person={person}  />
        )}
     </div>
      
    </div>
  )
}

export default App