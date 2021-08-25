import React from 'react';
import './Person.css';
import '../Components/Phonebook';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';

function Person(props) {
  return (
    <div class="entry">
      <div class="entryDets">
        <div class="entryImageContainer">
          <img class="entryProfilePic" src={props.data.image} />
        </div>
        <div class="entryNameContainer">
          <p class="entryP">{props.data.name}</p>
        </div>
      </div>

      <span
        class="updateButton"
        onClick={() => props.callback.updateCurrentPerson(props.data.id, 1)}
      >
        <EditIcon fontSize="large" />
      </span>
      <span
        class="infoButton"
        onClick={() => props.callback.updateCurrentPerson(props.data.id, 2)}
      >
        <InfoIcon fontSize="large" />
      </span>
      <span
        class="deleteButton"
        onClick={() => props.callback.deletePerson(props.data)}
      >
        &#10006;
      </span>
    </div>
  );
}

export default Person;
