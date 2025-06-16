function loadBlogs() {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const container = document.getElementById("blogList");
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search)
  );

  container.innerHTML = "";
  filtered.forEach(blog => {
    const div = document.createElement("div");
    div.className = "blog-item";
    div.innerHTML = `
      <h2>${blog.title}</h2>
      <p>${blog.content.slice(0, 100)}...</p>
      <a href="view.html?id=${blog.id}" class="btn">Read More</a>
    `;
    container.appendChild(div);
  });
}

document.getElementById("searchInput").addEventListener("input", loadBlogs);
window.onload = loadBlogs;
