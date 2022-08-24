fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'the board game',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => data);

const id = 'Tbf2JU7BpFPbWr3mx6ov';

export default id;
