const params = new URLSearchParams(window.location.search);
const articleId = parseInt(params.get("id"));
const container = document.getElementById("articleContent");

// =====================
// JIKA TIDAK ADA ID → LIST ARTIKEL
// =====================
if (!articleId) {
  container.innerHTML = `
    <h1>Daftar Artikel</h1>
    <div class="article-grid">
      ${articles.map(article => `
        <div class="article-card">
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <small>${article.date}</small>
          <a href="Artikel.html?id=${article.id}" class="btn">Baca Selengkapnya</a>
        </div>
      `).join("")}
    </div>
  `;
}

// =====================
// JIKA ADA ID → DETAIL ARTIKEL
// =====================
else {
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    container.innerHTML = "<p>Artikel tidak ditemukan.</p>";
  } else {
    container.innerHTML = `
      <article class="detail-article">
        <h1>${article.title}</h1>
        <p class="meta">${article.date}</p>
        <img src="${article.image}" alt="${article.title}">
        ${article.content}
      </article>
    `;
  }
}
