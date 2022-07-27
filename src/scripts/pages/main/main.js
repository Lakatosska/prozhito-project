const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const sectionNews = document.querySelector(".news-main");
const sliderNewsContainer = sectionNews.querySelector('.slider__items');
const sectionNewsMain = document.querySelectorAll(".news-main__all");
const journalMainBlock = document.querySelector('.journal-projito');
const sliderContainer = journalMainBlock.querySelector('.slider__items');
const sectionReaderAll = document.querySelectorAll('.journal-projito__card_reader');
const specialContainer = document.querySelector('.special-projects');
const specialCards = specialContainer.querySelectorAll('.special-projects__card');
// const templateButtonNewsMain = document.querySelector("#button__tablet").content;
// const templateButtonDesktop = document.querySelector("#button__desktop").content;
const templateNewsMainBlock = document.querySelector("#template-news").content;
const templateProjitoCard = document.querySelector('#template-projito').content;
const templateProjitoReader = document.querySelector('#template-reader').content;
const limitIndex = 6;
const limitMobile = 3;
let startPosition = 0;

function replacedButtonNews(container,parentContainer) {
  const widthSection = checkWidthElement();
  if(widthSection < 1024) {
    checkTabletButton(container) == null ? container.replaceChild(createButtonTablet(parentContainer), checkDesktopButton(container)) : false;
    return;
  }
  checkDesktopButton(container) == null ? container.replaceChild(createButtonDesktop(parentContainer), checkTabletButton(container)) : false;
}

function checkTabletButton(container) {
  return container.querySelector('.news-main__tablet-container');
}

function checkDesktopButton(container) {
  return container.querySelector('.button_news');
}

function createButtonTablet(parentContainer) {
  const newButton = templateButtonNewsMain.querySelector('.news-main__tablet-container').cloneNode(true);
  switch (parentContainer.classList.value) {
    case 'news-main':
      newButton.querySelector('.news-main__text-button').textContent = 'Ко всем новостям';
      break;
    case 'journal-projito':
      newButton.querySelector('.news-main__text-button').textContent = 'Посмотреть всю подборку';
      break;
  }
  return newButton;
}

function createButtonDesktop(parentContainer) {
  const newButton = templateButtonDesktop.cloneNode(true);
  switch (parentContainer.classList.value) {
    case 'news-main':
      newButton.querySelector('.button_news').textContent = 'Ко всем новостям';
      break;
    case 'journal-projito':
      newButton.querySelector('.button_news').textContent = 'Посмотреть всю подборку';
      break;
  }
  return newButton;
}

function renderNews() {
  newsElement.forEach( (item,index) => {
    const widthSection = checkWidthElement();
    const limitRender = widthSection > 767 ? checkRenderLimit(index,limitIndex) : checkRenderLimit(index,limitMobile);
    if(limitRender) {
      const newCard = createNewsCard(item);
      renderNewsPrepend(newCard,sliderNewsContainer);
    }
  });
}

function renderMaterials() {
  materialsElement.forEach( (item,index) => {
    const limitRender = checkRenderLimit(index,limitIndex);
    if(limitRender) {
      const newCard = createMaterialsCard(item,index,startPosition);
      startPosition += stepPosition;
      renderNewsAppend(newCard,sliderContainer);
    }
  });
}

function updateContainer(container) {
  while (container.firstChild) {
    container.firstChild.remove();
}
}

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});


// sectionNewsMain.forEach( item => {
//   const parentItem = item.parentNode;
//   replacedButtonNews(item,parentItem);
//   window.addEventListener('resize', () => {
//   replacedButtonNews(item,parentItem);
// });
// });

sectionReaderAll.forEach ( item => {
  item.querySelectorAll('.journal-projito__text-quote').forEach( item => {
    item.style.display = 'block';
  })
});

window.addEventListener('resize', () => {
  startPosition = 0;
  setTransformValue(sliderContainer, 0);
  updateContainer(sliderContainer);
  renderMaterials();
});

specialCards.forEach ( item => {
  item.addEventListener('click', () => {
    location = 'typical.html';
  })
})
renderNews();
renderMaterials();
