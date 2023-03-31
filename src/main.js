// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('h2');
var tagline = document.querySelector('h3');
var mainCover = document.querySelector('img');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var descriptor1Input = document.querySelector('#descriptor1');
var descriptor2Input = document.querySelector('#descriptor2');
var form = document.querySelector('form');
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 
randomCoverButton.addEventListener('click', displayRandomCover)
window.addEventListener('load', randomCover);
makeCoverButton.addEventListener('click', switchFormView)
viewSavedButton.addEventListener('click', switchSavedView)
homeButton.addEventListener('click', switchHomeView)
makeBookButton.addEventListener('click', makeBookClick)
saveCoverButton.addEventListener('click', function() {
  saveCover();
  // renderSavedCovers();
}) 
savedCoversSection.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇
function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getIndex() {
  var index = {
  titlesIndex: getRandomIndex(titles),
  taglineIndex: getRandomIndex(descriptors),
  taglineIndex2: getRandomIndex(descriptors),
  coverIndex: getRandomIndex(covers)
  }
return index;
}

function switchFormView() {
  form.reset();

  removeHiddenClass([formView, homeButton]);
  addHiddenClass([homeView, saveCoverButton, randomCoverButton, savedView]);
}

function switchSavedView() {
  addHiddenClass([homeView, formView, saveCoverButton,randomCoverButton]);
  removeHiddenClass([savedView, homeButton]);
}

function switchHomeView() {
  addHiddenClass([formView, savedView,homeButton]);
  removeHiddenClass([homeView, saveCoverButton,viewSavedButton, makeCoverButton, randomCoverButton]);
}

function makeBookClick(event) {
  event.preventDefault();
  makeBook();
}

function makeBook() {
  currentCover = createCover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);

  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);

  switchHomeView();
  displayMainCover(currentCover);

  return currentCover
}

function removeHiddenClass(elements) {
  for (var i=0; i < elements.length; i++){
    elements[i].classList.remove('hidden')
  }
}

function addHiddenClass(elements) {
  for (var i=0; i < elements.length; i++){
    elements[i].classList.add('hidden')
  }
}

function randomCover() {
  var index = getIndex();
 
   currentCover = createCover(covers[index.coverIndex],titles[index.titlesIndex],descriptors[index.taglineIndex], descriptors[index.taglineIndex2])
   displayMainCover(currentCover);
 
   return currentCover
 }

function displayMainCover(cover) {
  title.innerHTML = cover.title;
  mainCover.src = cover.coverImg;
  tagline.innerHTML = `A tale of ${cover.tagline1} and ${cover.tagline2}`;
}

function displayRandomCover() {
  displayMainCover(randomCover());
}

function searchSaved(book){
  for (var i= 0; i < savedCovers.length; i++){
    if (cover.id === book.id){
     return true
    }
  }
}

function saveCover() {
    if(searchSaved(currentCover) !== true){
      savedCovers.push(currentCover)
      for (var i = 0; i < savedCovers.length; i++) {
        savedCoversSection.innerHTML +=
      `<section class="mini-cover" id ="${savedCovers[i].id}>
      <img class="mini-cover" src="${savedCovers[i].coverImg}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span>
      </h3>
    </section>`
      }
  }
}

// function renderSavedCovers() {
//   for (var i = 0; i < savedCovers.length; i++) {
//     savedCoversSection.innerHTML +=
//   `<section class="mini-cover" id ="${savedCovers[i].id}>
//   <img class="mini-cover" src="${savedCovers[i].coverImg}">
//   <h2 class="cover-title">${savedCovers[i].title}</h2>
//   <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span>
//   </h3>
// </section>`
//   }
// }


function deleteCover(event) {
  console.dir(event)
  if (event.target.classList.contains('mini-cover')) {
      event.target.remove();
  }
}
