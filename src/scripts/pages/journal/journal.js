const sliderJournalContainer = document.querySelector('.journal-projito__materials');
const sliderContainer = document.querySelector('.journal-projito__materials');
const templateProjitoCard = document.querySelector('#template-projito').content;
const templateProjitoReader = document.querySelector('#template-reader').content;
const renderLimitPage = 9;
let startPosition = 0;


materialsElement.forEach( (item,index) => {
  const limitRender = checkRenderLimit(index,renderLimitPage);
  if(limitRender) {
    const newCard = createMaterialsCard(item,index,startPosition);
    startPosition += stepPosition;
    renderNewsAppend(newCard,sliderJournalContainer);
  }
});
