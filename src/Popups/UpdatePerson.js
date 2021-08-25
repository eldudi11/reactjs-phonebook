import React, { useEffect, useState } from 'react';
import './UpdatePerson.css';

function UpdatePerson(props) {
  // States
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  // on boot set the data of person to show in the fields
  useEffect(() => {
    setName(props.data.name);
    setAge(props.data.age);
    setPhone(props.data.phone);
    setAddress(props.data.address);
    setImage(props.data.image);
  }, [props.data]);

  return (
    <div class="editPopup">
      <div class="popUpdateContent">
        <h2 class="addH2">Edit this contant</h2>
        <label for="fullname">Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label for="age">Age: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)}></input>
        <label for="phone">Phone: </label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        <label for="address">Address: </label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>

        <br />
        <div class="containerBtn">
          <button class="addBtn" onClick={props.callback.cancelUpdatePerson}>
            CANCEL
          </button>
          <button
            class="addBtn"
            onClick={() =>
              props.callback.updatePerson({
                id: props.data.id,
                name: name,
                age: age,
                phone: phone,
                address: address,
                image: image,
              })
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePerson;
