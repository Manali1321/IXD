var about_item = document.getElementById("about-toggle");
var post_item = document.getElementById("post-toggle");
var post = document.getElementById("post");
var about = document.getElementById("about");
post.addEventListener('click', function () {
  about_item.style.display = "none";
  post_item.style.display = "block";
  post.style.color = "white";
  post.style.backgroundColor = "#6243ff";
  about.style.color = "#7c7c7c";
  about.style.backgroundColor = "#d9d9d9";
});
about.addEventListener('click', function () {
  post_item.style.display = "none";
  about_item.style.display = "block";
  about.style.color = "white";
  about.style.backgroundColor = "#6243ff";
  post.style.color = "#7c7c7c";
  post.style.backgroundColor = "#d9d9d9";
});