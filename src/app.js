class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    var description_paragraph = document.createElement('p');
    description_paragraph.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(description_paragraph);
    description_paragraph.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
var toggle;
function helperAddPost() {
  if (toggle == 1) {
    document.getElementById('popupContact').style.display = 'inline';
    return (toggle = 0);
  } else {
    document.getElementById('popupContact').style.display = 'none';
    return (toggle = 1);
  }
}
function helperPost() {
  var title = document.getElementById('title').value;
  var detail = document.getElementById('detail').value;
  var blog = new Blog(title, detail);

  blog.addTitle();
  blog.addDescription();
}
