import React, { useState } from 'react';
import './AddPerson.css';

function AddPerson(props) {
  // States
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [errorMessege, setErrorMessege] = useState('');

  // handeling images
  // const [picture, setPicture] = useState(null);
  // const [imgData, setImgData] = useState(null);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      // console.log('picture: ', e.target.files);
      // setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      // console.log(imgData);
    }
  };

  // send person information to addPerson
  function add() {
    console.log(props.data);
    props.callback.addPerson({
      name: name,
      age: age,
      phone: phone,
      address: address,
      image: image,
    });
    setName('');
    setAge('');
    setPhone('');
    setAddress('');
    setImage('');
  }

  //check error - if name exist and if necessary fields are missing
  function isExist(name, phone) {
    let check = false; // check if the input in ok

    if (name === '') {
      setName('field missing');
      check = true;
    }
    if (phone === '') {
      setPhone('field missing');
      check = true;
    }
    props.data.forEach((item) => {
      if (item.name === name) {
        console.log('ERRRROOOORRRR!!!!!!!!!!');
        setErrorMessege('Error - This name already exist'); // edit error messege
        check = true;
      }
    });

    // if input ok send the information
    if (check === false) {
      add();
    }
  }

  return (
    <div class="addPopup">
      <div class="popContent">
        <h2 class="addH2">Add new person</h2>
        <p class="errorP">{errorMessege}</p>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Age: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)}></input>
        <label>Phone number: </label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        <label>Address: </label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label>Choose profile picture: </label>
        <input type="file" onChange={onChangePicture} />
        <br />
        <div class="containerBtn">
          <button class="addBtn" onClick={props.callback.cancelAddPerson}>
            Cancel
          </button>
          <button class="addBtn" onClick={() => isExist(name, phone)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPerson;
