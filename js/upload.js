const form = document.getElementById("articleForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const article = {
    title: document.getElementById("title").value,
    date: document.getElementById("date").value,
    image: document.getElementById("image").value,
    excerpt: document.getElementById("excerpt").value,
    content: document.getElementById("content").value
  };

  console.log("Artikel baru:", article);

  result.innerHTML = `
    <div class="success-box">
      <h3>Artikel berhasil disiapkan</h3>
      <p><strong>Judul:</strong> ${article.title}</p>
      <p><strong>Tanggal:</strong> ${article.date}</p>
      <p><strong>Ringkasan:</strong> ${article.excerpt}</p>
      <p class="note">
        (Untuk tugas statis, artikel ini belum otomatis masuk ke halaman artikel.)
      </p>
    </div>
  `;

  form.reset();
});
