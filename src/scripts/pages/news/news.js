const newsContainer = document.querySelector('.news__cards');
const newsCard = document.querySelector('#template-news').content;
const renderLimitPage = 9;


function createNewsCard(item) {
  const cardElement = newsCard.querySelector('.item_news-width').cloneNode(true);
  const newsDate = cardElement.querySelector('.item__date');
  const newsTag = cardElement.querySelector('.item__tag');
  const newsTitle = cardElement.querySelector('.item__title');
  const newsImage = cardElement.querySelector('.item__image');
  newsDate.textContent = item.date;
  newsTag.textContent = item.tag;
  newsTitle.textContent = item.title;
  newsImage.src = item.image;
  newsImage.alt = item.alt;
  return cardElement;

}

function checkRenderLimit(index,limit) {
  if(index > limit - 1) {
    return false;
  }
  return true;
}

function renderNewsPrepend(cardNews,container) {
  container.prepend(cardNews);
}


newsElement.forEach( (item,index) => {
  const limitRender = checkRenderLimit(index,renderLimitPage);
  if(limitRender) {
    const newCard = createNewsCard(item);
    renderNewsPrepend(newCard,newsContainer);
  }
});
