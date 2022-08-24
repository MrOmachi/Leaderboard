import id from './idGames';
const postUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class UI {
  static getData = async () => {
    const res = await fetch(`${postUrl}/${id}/scores`);
    const datas = await res.json();
    const dataResult = datas.result;
    dataResult.forEach((data) => {
      UI.renderTodom(data);
    });
  };

  static renderTodom(data) {
    const tbody = document.getElementById('tbody');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data.user}</td>
      <td>${data.score}</td>
      `;

    tbody.appendChild(tableRow);
  }
}
export default UI;
