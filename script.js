function loadBlogs() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  const container = document.getElementById("blogList");
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search)
  );

  container.innerHTML = "";
  filtered.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "blog-item";
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.slice(0, 100)}...</p>
      <a href="view.html?id=${index}" class="btn">Read More</a>
    `;
    container.appendChild(div);
  });
}

// Load blogs on page load and search input
document.getElementById("searchInput").addEventListener("input", loadBlogs);
window.onload = loadBlogs;
