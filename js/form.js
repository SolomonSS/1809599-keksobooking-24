const typeInput = document.querySelector('#type');
const price = document.querySelector('#price');
const roomsInput = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const TypeName = {
  FLAT: '1000',
  BUNGALOW: '0',
  HOUSE: '5000',
  PALACE: '1000',
  HOTEL: '3000',

  getValueByType: (id) => TypeName[id.toUpperCase()],
};

const setPriceAttribute = () => {
  price.setAttribute('min',TypeName.getValueByType(typeInput.value));
  price.setAttribute('placeholder', TypeName.getValueByType(typeInput.value));
};


typeInput.addEventListener('change',() => {
  setPriceAttribute();
  typeInput.reportValidity();
});

const setCapasity = () =>{
  const rooms = roomsInput.value;
  if(rooms==='1'){
    capacity.
  }
};

roomsInput.addEventListener('change', ()=>{
  const value = roomsInput.value;
  if(roomsInput === '1'){
  capacity.setAttribute
  } if(roomsInput === '2'){

  } if(roomsInput === '3'){

  } if(roomsInput === '100'){

  }

});
