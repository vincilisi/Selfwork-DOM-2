
// Crea un file html con le seguenti caratteristiche:
// un input per il titolo
// una textarea per inserire un paragrafo
// un bottone per creare l’articolo

// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input
// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN

// let date = new Date();
// let formatDate = date.toLocaleDateString()

// EXTRA:
// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti




document.getElementById('creaArticolo').addEventListener('click', function() {
  const titolo = document.getElementById('titolo').value.trim();
  const paragrafo = document.getElementById('paragrafo').value.trim();

  if (!titolo || !paragrafo) {
    alert('Compila sia il titolo che il paragrafo!');
    return;
  }

  const date = new Date();
  const formatDate = date.toLocaleDateString();

  const articolo = document.createElement('article');
  articolo.innerHTML = `
    <h2>${titolo}</h2>
    <p>${paragrafo}</p>
    <small>Pubblicato il: ${formatDate}</small>
  `;

  document.getElementById('articoli').appendChild(articolo);

  // Pulisci gli input
  document.getElementById('titolo').value = '';
  document.getElementById('paragrafo').value = '';
});