document.addEventListener('DOMContentLoaded', loadBlogPosts);

function loadBlogPosts() {
    fetch('blogposts.json')
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.getElementById('news_main');

            //sort
            data.sort((a,b) => new Date(b.date) - new Date(a.date));

            //create blog post elements
            data.forEach(post => {
                const article = document.createElement("article");
                article.classList.add("blog-post");

                article.innerHTML = `
                    <h2 class="card-title">${post.title}</h2>
                    <p class="date">${post.date}</p>
                    <p class="card-description">${post.summary}</p>
                    <button class="button">Read More</button>
                    `;
                    blogPostsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
}