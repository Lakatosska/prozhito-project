// все стрелки в пейдже
const arrowLeftAll = document.querySelectorAll('.arrow_left');
const arrowRightAll = document.querySelectorAll('.arrow_right');
// индикаторы в пейдже
const sliderIndicatorsAll = document.querySelectorAll('.slider__indicator');
// новости
const blockNews = document.querySelector('.news-main');
const cardsNewsContainer = blockNews.querySelector('.slider__items');
// слайдеры материалы
const materials = document.querySelector('.materials');
const cardsContainer = materials.querySelector('.cards');
const buttonsMaterials = materials.querySelectorAll('.button');
const buttonsContainerMaterials = materials.querySelector('.materials__slider');
// слайдеры projito
const sliderJournal = document.querySelectorAll('.journal-projito__card');
const countSliderJournal = sliderJournal.length * stepPosition;
const defaultZindex = -sliderJournal.length;

// слушатель событий на кнопку ВЛЕВО, работа сразу с неограниченным количеством слайдеров.
arrowLeftAll.forEach( el => {
  const parentContainer = getParentContainer(el);
  const sliderContainer = prepareSliderContainer(parentContainer);
  const indicatorContainer = getSliderIndicator(parentContainer);
  const itemSlider = getItemSliderAll(parentContainer);
  const buttonRight = getButtonRight(parentContainer);

  disableButtonLeft(el,sliderContainer);
  el.addEventListener('click', () => {
    actionButtonLeft(el,sliderContainer,indicatorContainer,buttonRight,itemSlider);
  });
});

// слушатель событий на кнопку ВПРАВО, работа сразу с неограниченным количеством слайдеров.
arrowRightAll.forEach( el => {
  const parentContainer = getParentContainer(el);
  const sliderContainer = prepareSliderContainer(parentContainer);
  const indicatorContainer = getSliderIndicator(parentContainer);
  const itemSlider = getItemSliderAll(parentContainer);
  const buttonLeft = getButtonLeft(parentContainer);

  el.addEventListener('click', () => {
    actionButtonRight(el,sliderContainer,indicatorContainer,itemSlider,buttonLeft);
  });
});

// слушатель событий на индикатор, работа сразу с неограниченным количеством слайдеров.
sliderIndicatorsAll.forEach( el => {
  const parentContainer = getParentContainer(el);
  const sliderContainer = prepareSliderContainer(parentContainer);
  const indicatorContainer = getSliderIndicator(parentContainer);
  const itemSlider = getItemSliderAll(parentContainer);
  const buttonLeft = getButtonLeft(parentContainer);
  const buttonRight = getButtonRight(parentContainer);
  el.addEventListener('mousedown', e => {
    isDrawing = true;
    x = e.offsetX;
  });
  el.addEventListener('mousemove', e => {
    if(isDrawing) {
      swiping(x, e.offsetX,sliderContainer,indicatorContainer,itemSlider,buttonLeft,buttonRight);
      isDrawing = false;
    }
  });
  el.addEventListener('mouseup', () => {
    isDrawing = false;
  });
});

sliderJournal.forEach ( (el,index) => {
  const parentContainer = getParentContainer(el);
  const sliderContainer = prepareSliderContainer(parentContainer);
  el.addEventListener('click', () => {
    checkWidthElement() > 767 ? false : actionMobileSlider(sliderContainer,el,sliderJournal,countSliderJournal,defaultZindex);
  });
});

buttonsMaterials.forEach( (el,index) => {
  el.addEventListener('click', evt => {
    const button = evt.target;
    const activeButton = buttonsContainerMaterials.querySelector('.button_current');
    if(checkButtonActive(button)) {
      return false;
    }
    setButtonInactive(activeButton);
    setButtonActive(button);
    actionMaterialsButton(evt.target,index);
  });
})

window.addEventListener('resize', () => {
  setTransformValue(cardsContainer, 0);
  setTransformValue(cardsNewsContainer, 0);
})
