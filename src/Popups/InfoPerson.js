import React from 'react';
import './InfoPerson.css';

function InfoPerson(props) {
  return (
    <div class="infoPopup">
      <div class="infoPopupContent">
        <span class="close" onClick={() => props.callback.cancelInfoPerson()}>
          &#10006;
        </span>
        <div class="imageContainer">
          <img class="profilePic" src={props.data.image} />
        </div>

        <h2 class="addH2">{props.data.name}</h2>
        <p>
          <span class="spanPopInfo">Age: </span> {props.data.age}
        </p>
        <p>
          <span class="spanPopInfo">Phone: </span> {props.data.phone}
        </p>
        <p>
          <span class="spanPopInfo">Address: </span> {props.data.address}
        </p>
      </div>
    </div>
  );
}

export default InfoPerson;
