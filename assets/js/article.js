document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get("id");
    const articleContainer = document.getElementById("article-content");
    const errorMessageContainer = document.getElementById("error-message");

    if (articleId) {
        try {
            // Fetch the Markdown content
            const mdResponse = await fetch(`articles/${articleId}.md`);
            if (!mdResponse.ok) {
                throw new Error(`Failed to load Markdown file: ${mdResponse.status}`);
            }
            const markdown = await mdResponse.text();

            // Fetch blog-data.json to get article metadata
            const jsonResponse = await fetch("assets/js/blog-data.json"); // Corrected path
            if (!jsonResponse.ok) {
                throw new Error(`Failed to load blog data: ${jsonResponse.status}`);
            }
            const blogData = await jsonResponse.json();

            // Find the corresponding article in blog-data.json
            const articleData = blogData.find(a => `article${blogData.indexOf(a) + 1}` === articleId);

            if (!articleData) {
                throw new Error(`Article data not found for ID: ${articleId}`);
            }

            // --- MARKED RENDERER CUSTOMIZATION ---
            const renderer = new marked.Renderer();
            renderer.table = function (header, body) {
                if (body) body = '<tbody>' + body + '</tbody>';

                return '<div class="table-responsive">\n'
                    + '<table class="table table-striped table-bordered">\n' // Added Bootstrap classes
                    + '<thead>\n'
                    + header
                    + '</thead>\n'
                    + body
                    + '</table>\n'
                    + '</div>\n';
            };

            // Configure Marked to use our custom renderer
            marked.use({ renderer });

            // Convert Markdown to HTML using marked.js
            const htmlContent = marked.parse(markdown);

            // Combine metadata and HTML content
            articleContainer.innerHTML = `
                <h1 class="article-title">${articleData.title}</h1>
                <div class="article-body">${htmlContent}</div>
                <p class="mt-4"><strong>Tags:</strong> ${articleData.tags.map(tag => `<span class="badge bg-secondary">${tag}</span>`).join(" ")}</p>
            `;

            // Initialize Highlight.js *after* Markdown is parsed
            hljs.highlightAll();

        } catch (error) {
            console.error("Error:", error);
            errorMessageContainer.textContent = "Error loading article. Please try again later.";
            errorMessageContainer.style.display = "block";
            articleContainer.innerHTML = ""; // Clear any partial content
        }
    } else {
        errorMessageContainer.textContent = "No article selected.";
        errorMessageContainer.style.display = "block";
    }
});
