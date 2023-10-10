export const smoothScroll = () => {
    const { height: cardHeight } = document
      .querySelector('#catalog')
      .firstElementChild.getBoundingClientRect();

      console.log(cardHeight);
  
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };