const headerEl = document.createElement("template");

headerEl.innerHTML = `
<div class="navbar">
      <div class="site-title"><a href="index.html">Animal Galaxy</a></div>
      <div class="menu">
        <a href="about.html">About</a>
        <a class="pages" href="contact.html">Contact</a>
        <a href="#">Posts</a>
      </div>
</div>
    `;

document.body.appendChild(headerEl.content);
