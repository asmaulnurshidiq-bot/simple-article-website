const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

const newsList = document.getElementById("newsList");

if (newsList) {
  articles
  .slice(0, 3)
  .forEach(article => {
    newsList.innerHTML += `
      <div class="card">
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <small>${article.date}</small><br>
        <a href="Artikel.html?id=${article.id}" class="btn">Baca Selengkapnya</a>
      </div>
    `;
  });
}

  function updateWaktu() {
    const waktu = new Date();
    const opsi = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    document.getElementById("waktu-sekarang").innerHTML =
      waktu.toLocaleDateString('id-ID', opsi);
  }

  setInterval(updateWaktu, 1000);
  updateWaktu();
