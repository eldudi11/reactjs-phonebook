import React, { useState } from 'react';
import './Phonebook.css';
import Person from './Person';
import AddPerson from '../Popups/AddPerson';
import { v4 as uuidv4 } from 'uuid';
import UpdatePerson from '../Popups/UpdatePerson';
import InfoPerson from '../Popups/InfoPerson';
import dudiImg from '../images/dudi.JPG';
import catImg from '../images/cat.jpg';
import barakImg from '../images/barak.jpg';
import bachImg from '../images/bach.jpg';

function Phonebook() {
  // Persons data [id , name, age, address, phone, profile image]
  const [persons, setPersons] = useState([
    {
      id: '1',
      name: 'Dudi Elbling',
      age: 29,
      address: 'a',
      phone: '052',
      image: dudiImg,
    },
    {
      id: '2',
      name: 'Sebastian Bach',
      age: 28,
      address: 'b',
      phone: '054',
      image: bachImg,
    },
    {
      id: '3',
      name: 'Barak Obama',
      age: 28,
      address: 'b',
      phone: '054',
      image: barakImg,
    },
    {
      id: '4',
      name: 'Mitzi The Cat',
      age: 28,
      address: 'b',
      phone: '054',
      image: catImg,
    },
  ]);

  // Search
  const [searchItem, setSearchItem] = useState('');

  // Popups visibility
  const [isAddPersonDisplay, setIsAddPersonDisplay] = useState(false);
  const [isUpdatePersonDisplay, setIsUpdatePersonDisplay] = useState(false);
  const [isInfoPersonDisplay, setIsInfoPersonDisplay] = useState(false);

  //close popups functions
  function cancelAddPerson() {
    setIsAddPersonDisplay(false);
  }

  function cancelUpdatePerson() {
    setIsUpdatePersonDisplay(false);
  }

  function cancelInfoPerson() {
    setIsInfoPersonDisplay(false);
  }

  // Current Person
  const [currentPerson, setCurrentPerson] = useState(0);
  function updateCurrentPerson(id, num) {
    let person = persons.find((item) => item.id === id);
    setCurrentPerson(person);
    if (num === 1) {
      setIsUpdatePersonDisplay(true);
    } else {
      setIsInfoPersonDisplay(true);
    }
  }

  // Sort persons
  function sortPersons() {
    persons.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return persons;
  }

  // Update Data Functions
  function addPerson(obj) {
    obj.id = uuidv4();
    setPersons([...persons, obj]);
    cancelAddPerson();
  }

  function updatePerson(obj) {
    let copy = [...persons];
    copy.forEach((item) => {
      if (item.id === obj.id) {
        item.name = obj.name;
        item.age = obj.age;
        item.phone = obj.phone;
        item.address = obj.address;
        item.image = obj.image;
      }
    });
    setPersons(copy);
    cancelUpdatePerson();
  }

  function deletePerson(obj) {
    let copy = [...persons];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === obj.id) copy.splice(i, 1);
      setPersons(copy);
    }
  }

  function deleteAllPersons() {
    setPersons([]);
  }

  return (
    <div class="book">
      <div class="useroptions">
        <input
          value={searchItem}
          type="text"
          class="searchrecord"
          placeholder="Search..."
          onChange={(e) => setSearchItem(e.target.value)}
        ></input>
        <button class="optionBtn" onClick={() => setIsAddPersonDisplay(true)}>
          + New record
        </button>
        <button class="optionBtn" onClick={() => deleteAllPersons()}>
          Remove all records
        </button>

        <div class="showBook">
          {sortPersons().map((person) => {
            if (
              person.name
                .toLocaleLowerCase()
                .includes(searchItem.toLocaleLowerCase())
            ) {
              return (
                <Person
                  data={person}
                  callback={{
                    updateCurrentPerson: updateCurrentPerson,
                    deletePerson: deletePerson,
                    setIsInfoPersonDisplay: setIsInfoPersonDisplay,
                  }}
                />
              );
            } else {
              return [];
            }
          })}
          {/* check and inform user if no recores exists */}
          {persons.length === 0 && <h3>NO RECORDS</h3>}
        </div>
      </div>
      {/** create addPerson component**/}
      {isAddPersonDisplay && (
        <AddPerson
          data={persons}
          callback={{
            cancelAddPerson: cancelAddPerson,
            addPerson: addPerson,
          }}
        />
      )}
      {/** create updatePerson component**/}
      {isUpdatePersonDisplay && (
        <UpdatePerson
          data={currentPerson}
          callback={{
            cancelUpdatePerson: cancelUpdatePerson,
            updatePerson: updatePerson,
          }}
        />
      )}
      {/** create infoPerson component**/}
      {isInfoPersonDisplay && (
        <InfoPerson
          data={currentPerson}
          callback={{
            cancelInfoPerson: cancelInfoPerson,
          }}
        />
      )}
    </div>
  );
}

export default Phonebook;
