// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("menu--scroll-active");
  } else {
    document.getElementById("navbar").classList.remove("menu--scroll-active");
  }
}

// ARRAYS for:
// 1 design examples
let designExamplesList = [];
// 2 dev examples
let devExamplesList = [];
// 3 saved examples
let savedExamplesList = [];

// CONSTRUCTOR CLASSES
// examples constructor 
function Sample(sampleImageFld, sampleImageSrc, sampleLabel, sampleHeading, sampleDescription, sampleType, sampleLiked) {
  this.sampleImageFld = sampleImageFld;
  this.sampleImageSrc = sampleImageSrc;
  this.sampleLabel = sampleLabel;
  this.sampleHeading = sampleHeading;
  this.sampleDescription = sampleDescription;
  this.sampleType = sampleType;
  this.sampleLiked = sampleLiked;
  this.sampleComments = [];
}

// CURATED EXAMPLES
// Design Examples
const designExample1 = new Sample("design", "design-section-1-card-1.jpg", "Design", "Mobile Home Page Example", "Minimalist design simplify visual noise on a websites home page using one clear message", "example-card--mobile", 0);
const designExample2 = new Sample("design", "design-section-1-card-2.jpg", "Design", "Web Home Page Example", "Minimalist design simplify visual noise on a websites home page using one clear message", "example-card--web", 0);
const designExample3 = new Sample("design", "design-section-1-card-3.jpg", "Design", "Web Product Page Example", "Minimalist design simplify visual noise on a websites home page using one clear message", "example-card--web", 0);
const designExample4 = new Sample("design", "design-section-2-card-1.png", "Design", "Web Search Example", "Minimalist search page design", "example-card--web", 0);
const designExample5 = new Sample("design", "design-section-2-card-2.png", "Design", "Mobile Homepage Example", "Minimalist mobile search page design", "example-card--mobile", 0);
const designExample6 = new Sample("design", "design-section-2-card-3.png", "Design", "Mobile search results example", "Layout of search results", "example-card--mobile", 0);
const designExample7 = new Sample("design", "design-section-2-card-4.png", "Design", "Web search results page", "Layout of search results", "example-card--web", 0);
const designExample8 = new Sample("design", "design-work1.jpg", "Design", "Banner Page Example", "Multiple banner display example", "example-card--web", 0);
const designExample9 = new Sample("design", "design-work2.jpg", "Design", "Geometric Shapes Overlapping", "Simple page design using over lapping splash colours", "example-card--web", 0);
const designExample10 = new Sample("design", "design-work3.jpg", "Design", "Campaign Page Example", "Targeted campaign to drive rewards points spend", "example-card--web", 0);
const designExample11 = new Sample("design", "design-work4.jpg", "Design", "Mobile Campaign Page Example", "Targeted campaign to drive rewards points spend", "example-card--mobile", 0);
const designExample12 = new Sample("design", "design-work5.jpg", "Design", "Mobile Campaign Page Example", "Targeted campaign to drive rewards points spend", "example-card--mobile", 0);
const designExample13 = new Sample("design", "design-work6.jpg", "Design", "Campaign Page Example", "Targeted campaign to drive rewards points spend", "example-card--web", 0);
// Pushes objects to array
designExamplesList.push(designExample1);
designExamplesList.push(designExample2);
designExamplesList.push(designExample3);
designExamplesList.push(designExample4);
designExamplesList.push(designExample5);
designExamplesList.push(designExample6);
designExamplesList.push(designExample7);
designExamplesList.push(designExample8);
designExamplesList.push(designExample9);
designExamplesList.push(designExample10);
designExamplesList.push(designExample11);
designExamplesList.push(designExample12);
designExamplesList.push(designExample13);

// Development Examples
const devExample1 = new Sample("hyperion", "hyperion-1.png", "Development", "Responsive Web Page", "Responsive Tables using CSS GRID", "example-card--web");
const devExample2 = new Sample("hyperion", "hyperion-2.png", "Development", "API Example", "Using and API to display a cities weather", "example-card--mobile");
const devExample3 = new Sample("hyperion", "hyperion-3.png", "Development", "Product Catalogues Example", "Fictitious Toy Store", "example-card--web");
const devExample4 = new Sample("hyperion", "hyperion-4.png", "Development", "Tribute Example Page", "Responsive page design", "example-card--web");
const devExample5 = new Sample("hyperion", "hyperion-5.png", "Development", "JS DOM Manipulation Example", "Shopping List", "example-card--mobile");
const devExample6 = new Sample("hyperion", "hyperion-6.png", "Development", "JS DOM Manipulation Example", "Shopping List", "example-card--mobile");
const devExample7 = new Sample("hyperion", "hyperion-7.png", "Development", "JS DOM Manipulation", "Simple book list", "example-card--mobile");
const devExample8 = new Sample("hyperion", "hyperion-8.png", "Development", "JS Budget App Example", "Simple budget calculator", "example-card--mobile");
const devExample9 = new Sample("hyperion", "hyperion-9.png", "Development", "API Example to forecast weather", "JS DOM Manipulation", "example-card--mobile");
const devExample10 = new Sample("hyperion", "hyperion-10.png", "Development", "Portfolio Page Example", "Draft 1", "example-card--web", ['Leave a comment'], 0);
// Pushes objects to array
devExamplesList.push(devExample1);
devExamplesList.push(devExample2);
devExamplesList.push(devExample3);
devExamplesList.push(devExample4);
devExamplesList.push(devExample5);
devExamplesList.push(devExample6);
devExamplesList.push(devExample7);
devExamplesList.push(devExample8);
devExamplesList.push(devExample9);
devExamplesList.push(devExample10);


// FUNCTIONS
// function that checks session storage and which examples to load
const checkSession = () => {
  // Check Session
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("design", JSON.stringify(designExamplesList));
    sessionStorage.setItem("development", JSON.stringify(devExamplesList));
    sessionStorage.setItem("saved", JSON.stringify(savedExamplesList));
    sessionStorage.setItem("hasCodeRunBefore", true);
    displayList();
  } else {
    console.log("Welcome Back");
    designExamplesList = JSON.parse(sessionStorage.getItem("design"));
    devExamplesList = JSON.parse(sessionStorage.getItem("development"));
    savedExamplesList = JSON.parse(sessionStorage.getItem("saved"));
    displayList();
  }
}

// function that builds list from provided arrays
function buildList (exampleID, exampleArr) {
  // select section to populate
  let htmlSelect = document.getElementById(exampleID);
  // clear list first
  htmlSelect.innerHTML = ""
  // item counter
  let i = 0;
  //Loop through each example in the example array
  exampleArr.forEach( item => {
    //For each item in the array create : 
    // create card
    let listItemCard = document.createElement('div');
    listItemCard.classList.add("listItem-" + i);
    listItemCard.classList.add("example-card");
    listItemCard.classList.add(exampleArr[i].sampleType);
    htmlSelect.appendChild(listItemCard);
    // create example image from array
    let listItemCardImage = document.createElement('div');
    listItemCard.appendChild(listItemCardImage);
    listItemCardImage.classList.add("example-card-image");
    let listItemCardImageEl = document.createElement('img');
    // console.log(exampleArr[i].sampleImageSrc);
    listItemCardImageEl.src = "./images/" + exampleArr[i].sampleImageFld + "/" + exampleArr[i].sampleImageSrc;
    listItemCardImage.appendChild(listItemCardImageEl);
    // create overlay
    let listItemCardOverlay = document.createElement('div');
    listItemCardOverlay.classList.add("example-card-image-overlay");
    listItemCard.appendChild(listItemCardOverlay);
    // create overlay label
    let listItemCardLabel = document.createElement('div');
    listItemCardLabel.classList.add("example-card-label");
    listItemCardLabel.innerHTML = exampleArr[i].sampleLabel
    listItemCardOverlay.appendChild(listItemCardLabel);
    // create overlay heading
    let listItemCardHeading = document.createElement('div');
    listItemCardHeading.classList.add("example-card-heading");
    listItemCardHeading.innerHTML = exampleArr[i].sampleHeading
    listItemCardOverlay.appendChild(listItemCardHeading);
    // create overlay description
    let listItemCardDesc = document.createElement('div');
    listItemCardDesc.classList.add("example-card-description");
    listItemCardDesc.innerHTML = exampleArr[i].sampleDescription
    listItemCardOverlay.appendChild(listItemCardDesc);
    // Create overlay save and like icons
    let listItemCardIcons = document.createElement('div');
    listItemCardIcons.classList.add("example-card-icons");
    listItemCardIcons.innerHTML = 
    '<div onclick="addExample('+ i +',\''+ item.sampleLabel +'\')"  id="save-icon" class="example-card-icon example-card-save"></div>' 
    +
    '<div onclick="addLike('+ i +',\''+ item.sampleLabel +'\')"  id="like-icon" class="example-card-icon example-card-like"></div>'
    +
    '<div onclick="addComment('+ i +')" id="comment-icon" class="example-card-icon example-card-comment"></div>';
    listItemCardOverlay.appendChild(listItemCardIcons);
    // create comments
    let listItemCardComment = document.createElement('div');
    listItemCardComment.classList.add("example-card-comments");
    listItemCardComment.setAttribute('id', 'comments');
    listItemCard.appendChild(listItemCardComment);
    // create comments label
    exampleArr[i].sampleComments.forEach( item => {
      let listItemCardCommentLabel = document.createElement('div');
      listItemCardCommentLabel.classList.add("example-card-comment-readout");
      listItemCardCommentLabel.innerHTML = item
      listItemCardComment.appendChild(listItemCardCommentLabel);
      }
    ) 
    // create comments likes
    if(exampleArr[i].sampleLiked){
      let listItemCardCommentLikes = document.createElement('div');
      listItemCardCommentLikes.classList.add("example-card-likes");
      listItemCardCommentLikes.innerHTML = "Likes = " + exampleArr[i].sampleLiked
      listItemCardComment.appendChild(listItemCardCommentLikes);
    }
    // create comment block
    let listItemCardCommentBlock = document.createElement('form');
    listItemCardCommentBlock.classList.add("example-card-comment-block");
    listItemCardCommentBlock.setAttribute('id', 'comment-' + i);
    listItemCardCommentBlock.innerHTML = 
    '<textarea type="text" name="commentIn" id="commentIn-' + i + '" >Enter your comment</textarea>' +
    '<button onclick="updateComment('+ i +',\''+ item.sampleLabel +'\')">Post</button>'
    ; 
    listItemCard.appendChild(listItemCardCommentBlock);
    // increases counter for array index
    i = i + 1;
  })
};

// function that builds list
const displayList = () => {
  // target same div
  let currentExamples = document.querySelector(".examples");
  // conditional
  if (currentExamples.classList.contains("devExamples")) {
    buildList("devExamples", devExamplesList);
  } else if (currentExamples.classList.contains("designExamples")) {
    buildList("designExamples", designExamplesList);
  } else if (currentExamples.classList.contains("savedExamples")) {
    buildList("savedExamples", savedExamplesList);
  }
}

// function that adds an example to the savedExamplesList and session 
const addExample = (index, currentLabel) => {
  // checks label to determine which array to use
  let newObject = ""
    if(currentLabel == "Design" ){
      newObject = designExamplesList[index];
    } else if(currentLabel == "Development" ){
      newObject = devExamplesList[index];
    }
  savedExamplesList = JSON.parse(sessionStorage.getItem("saved"));
  let newExample = new Sample(
    newObject.sampleImageFld,
    newObject.sampleImageSrc,
    newObject.sampleLabel,
    newObject.sampleHeading,
    newObject.sampleDescription,
    newObject.sampleType,
    newObject.sampleLiked,
    newObject.sampleComments[0]
    );
  savedExamplesList.push(newExample);
  // savedExamplesList.sampleComments.push(newObject.sampleComments[0]);
  // updates session storage
  sessionStorage.setItem("saved", JSON.stringify(savedExamplesList));
  alert(`You have ${savedExamplesList.length} items in your list` )
}

// function that adds a comment savedExamplesList and session 
const addLike = (index, currentLabel) => {
  // temp var
  let newObject = ""
  // checks label to determine which array to use
  if(currentLabel == "Design" ){
    newObject = designExamplesList[index];
    savedObject = savedExamplesList[index];
    newObject.sampleLiked += 1;
    // update session storage
    sessionStorage.setItem("design", JSON.stringify(designExamplesList));
    // conditional if examples is liked
    if(savedObject) {
      savedObject.sampleLiked += 1;
      // update session storage
      sessionStorage.setItem("saved", JSON.stringify(savedExamplesList));
    }
  } else if(currentLabel == "Development" ){
    newObject = devExamplesList[index];
    savedObject = savedExamplesList[index];
    newObject.sampleLiked += 1;
    // update session storage
    sessionStorage.setItem("development", JSON.stringify(devExamplesList));
     // conditional if examples is liked
     if(savedObject) {
      savedObject.sampleLiked += 1;
      // update session storage
      sessionStorage.setItem("saved", JSON.stringify(savedExamplesList));
    }
  }
  // update page
  checkSession();
}

// function that adds a comment savedExamplesList and session 
const addComment = (index) => {
  // temp vars
  let commentID = "comment-" + index;
  // select section to populate
  let commentSelect = document.getElementById(commentID);
  commentSelect.classList.add("example-card-comment-block--active");
}

// function that adds a comment savedExamplesList and session 
const updateComment = (index, currentLabel) => {
  // // temp vars
  let newObject = ""
  let commentInID = "commentIn-" + index;
  // fetch value from comment
  let newComment = document.getElementById(commentInID).value;
  // checks label to determine which array to use
  if(currentLabel == "Design" ){
    newObject = designExamplesList[index].sampleComments;
    // Update array
    newObject.push(newComment);
    // update session storage
    sessionStorage.setItem("design", JSON.stringify(designExamplesList));
  } else if(currentLabel == "Development" ){
    newObject = devExamplesList[index].sampleComments;
    // Update array
    newObject.push(newComment);
    // update session storage
    sessionStorage.setItem("development", JSON.stringify(devExamplesList));
  }
  // conditional if examples is liked
  if(savedExamplesList[index]) {
    let savedObject = savedExamplesList[index].sampleComments;
    savedObject.push(newComment);
    // update session storage
    sessionStorage.setItem("saved", JSON.stringify(savedExamplesList));
  }
  // update page
  checkSession();
}



