// 1. Toggle Form Visibility
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

// 2. Filter Articles by Type
function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    const articles = document.querySelectorAll('#articleList article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// 3. Add New Article Dynamically
function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    const articleList = document.getElementById('articleList');

    // Determine type from radio buttons
    let type = "";
    let typeLabel = "";
    if (document.getElementById('opinionRadio').checked) {
        type = "opinion";
        typeLabel = "Opinion";
    } else if (document.getElementById('recipeRadio').checked) {
        type = "recipe";
        typeLabel = "Recipe";
    } else if (document.getElementById('lifeRadio').checked) {
        type = "update";
        typeLabel = "Update";
    }

    if (!title || !text || !type) {
        alert("Please fill out all fields and select a type.");
        return;
    }

    // Create article element
    const newArticle = document.createElement('article');
    newArticle.className = type;
    
    // Set internal HTML to match existing structure for styling
    newArticle.innerHTML = `
        <span class="marker">${typeLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Append and clear form
    articleList.appendChild(newArticle);
    
    // Reset Form
    document.getElementById('newContent').reset();
    
    // Re-run filter in case the current filter should hide this new type
    filterArticles();
}
