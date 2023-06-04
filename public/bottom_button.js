document.addEventListener('scroll', handleScroll);
var bottomButton = document.querySelector('.bottom_button');

function handleScroll() {
  if (window.innerWidth >= 450) {
    var scrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.3;

    if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
      //show button
      bottomButton.style.display = 'flex';
    } else {
      //hide button
      bottomButton.style.display = 'none';
    }
  }
}
// bottomButton.addEventListener('click', scrollToTop);

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }
