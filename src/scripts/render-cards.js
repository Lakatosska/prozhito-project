function createReaderCard (item,index,position) {
  const sliderMaterial = templateProjitoReader.querySelector('.journal-projito__card').cloneNode(true);
  const materialTitle = sliderMaterial.querySelector('.journal-projito__text-title');
  const materialPhoto = sliderMaterial.querySelector('.journal-projito__reader-photo');
  const materialText = sliderMaterial.querySelector('.journal-projito__text-quote');
  const mateirialQuote = sliderMaterial.querySelector('.journal-projito__text-quote_reader');
  materialPhoto.src = item.image;
  materialPhoto.alt = item.alt;
  materialTitle.textContent = item.title;
  mateirialQuote.textContent = item.about;
  materialText.textContent = item.quote;
  sliderMaterial.style.zIndex = -index;
  sliderMaterial.style.left = ""+position+"px";
  sliderMaterial.dataset.id = index;
  sliderMaterial.addEventListener('click', () => {
    const sliderJournal = document.querySelectorAll('.journal-projito__card');
    const countSliderJournal = sliderJournal.length * stepPosition;
    const defaultZindex = -sliderJournal.length;
    checkWidthElement() > 767 ? false : actionMobileSlider(sliderContainer,sliderMaterial,sliderJournal,countSliderJournal,defaultZindex);
  });
  return sliderMaterial;
}

function createMaterialsCard(item,index,position) {
  if(item.reader) {
    return createReaderCard(item,index,position);
  }
  const sliderMaterial = templateProjitoCard.querySelector('.journal-projito__card').cloneNode(true);
  const materialTitle = sliderMaterial.querySelector('.journal-projito__text-title');
  const materialSubtitle = sliderMaterial.querySelector('.journal-projito__text-subtitle');
  const materialAbout = sliderMaterial.querySelector('.journal-projito__about');
  const mateirialQuote = sliderMaterial.querySelector('.journal-projito__text-quote');
  materialTitle.textContent = item.title;
  materialSubtitle.textContent = item.subtitle;
  materialAbout.textContent = item.about;
  mateirialQuote.textContent = item.quote;
  sliderMaterial.style.background = `url('${item.image}') center/cover no-repeat`;
  sliderMaterial.style.zIndex = -index;
  sliderMaterial.style.left = ""+position+"px";
  sliderMaterial.dataset.id = index;
  sliderMaterial.addEventListener('click', () => {
    const sliderJournal = document.querySelectorAll('.journal-projito__card');
    const countSliderJournal = sliderJournal.length * stepPosition;
    const defaultZindex = -sliderJournal.length;
    checkWidthElement() > 767 ? false : actionMobileSlider(sliderContainer,sliderMaterial,sliderJournal,countSliderJournal,defaultZindex);
  });
  return sliderMaterial;
}

function createNewsCard(item) {
  const sliderNews = templateNewsMainBlock.querySelector('.item-slider').cloneNode(true);
  const newsDate = sliderNews.querySelector('.item__date');
  const newsTag = sliderNews.querySelector('.item__tag');
  const newsTitle = sliderNews.querySelector('.item__title');
  const newsImage = sliderNews.querySelector('.item__image');
  newsDate.textContent = item.date;
  newsTag.textContent = item.tag;
  newsTitle.textContent = item.title;
  newsImage.src = item.image;
  newsImage.alt = item.alt;
  return sliderNews;

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

function renderNewsAppend(cardNews,container) {
  container.append(cardNews);
}

function checkRenderLimit(index,limit) {
  if(index > limit - 1) {
    return false;
  }
  return true;
}
