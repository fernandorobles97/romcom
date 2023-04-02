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
var currentCover;
var savedCovers = [];

// Add your event listeners here 
window.addEventListener('load', randomCover);
randomCoverButton.addEventListener('click', displayRandomCover);
makeCoverButton.addEventListener('click', switchFormView);
viewSavedButton.addEventListener('click', switchSavedView);
homeButton.addEventListener('click', switchHomeView);
makeBookButton.addEventListener('click', makeBookClick);
saveCoverButton.addEventListener('click', saveCover);
homeView.addEventListener('click', changeMainCover);
savedCoversSection.addEventListener('click', displayLargeCover)

// Create your event handlers and other functions here 👇
function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  };

  return cover;
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
  };

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

  renderCovers();
}

function switchHomeView() {
  addHiddenClass([formView, savedView,homeButton]);

  removeHiddenClass([homeView, saveCoverButton,viewSavedButton, makeCoverButton, randomCoverButton]);
}

function makeBookClick(event) {
  event.preventDefault();

  if (!coverInput.value || !titleInput.value || !descriptor1Input.value || !descriptor2.value){
    return alert('Missing Data! Please fill out entire form');
} else {
    makeBook();
  }
}

function saveUserData() {
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);
}

function makeBook() {
  currentCover = createCover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);

  saveUserData();

  switchHomeView();

  displayMainCover(currentCover);

  return currentCover;
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
 
  currentCover = createCover(covers[index.coverIndex],titles[index.titlesIndex],descriptors[index.taglineIndex], descriptors[index.taglineIndex2]);
  
  displayMainCover(currentCover);
 
  return currentCover;
 }

function displayMainCover(cover) {
  title.innerHTML = cover.title;
  mainCover.src = cover.coverImg;
  tagline.innerHTML = `A tale of ${cover.tagline1} and ${cover.tagline2}`;
}

function displayRandomCover() {
  displayMainCover(randomCover());
}

function searchSaved(cover){
  for (var i= 0; i < savedCovers.length; i++){
    if (savedCovers[i].id === cover.id){
     return true;
    }
  }
}

function searchSavedID(event) {
  for (var i= 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id.value === event.target.id.value){
        return true;
    }  
  }
}

function saveCover() {
  if (!searchSaved(currentCover)){
      savedCovers.push(currentCover);
  }
}

function renderCovers() {
  savedCoversSection.innerHTML = " ";

  for (var i=0; i < savedCovers.length; i++){
    savedCoversSection.innerHTML += `
      <section class="mini-cover">
        <img class="mini-cover" id =${savedCovers[i].id} src="${savedCovers[i].coverImg}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span>
        </h3>
        <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
}

function deleteCover(event) {
 if (searchSavedID(event)) {
    var ids= savedCovers.map(function(element) {
      return element.id;
    });

    var currentId = ids.indexOf(parseInt(event.target.id));
    savedCovers.splice(currentId, 1);
    event.target.parentElement.remove();
  }
}

function changeMainCover(event) {
  var index = getIndex();

  if (event.target.className === 'cover-image'){
    currentCover.coverImg = covers[index.coverIndex];
    displayMainCover(currentCover);
    
  } else if (event.target.className === 'cover-title'){
    currentCover.title = titles[index.titlesIndex];
    displayMainCover(currentCover);
  
  } else if (event.target.className === 'tagline'){
    currentCover.tagline1 = descriptors[index.taglineIndex];
    currentCover.tagline2 = descriptors[index.taglineIndex2]
    displayMainCover(currentCover);
    
  } else {
    return;
  }
}

function displayLargeCover(event) {
  if (event.detail === 1){
    timer = setTimeout(() => {
      for (var i= 0; i < savedCovers.length; i++){
      if (savedCovers[i].id === parseInt(event.target.id)){
        displayMainCover(savedCovers[i]);
        }
      }
      switchHomeView();
    }, 250)
  } else if (event.detail === 2){
    clearTimeout(timer);
    deleteCover(event);
  }
}