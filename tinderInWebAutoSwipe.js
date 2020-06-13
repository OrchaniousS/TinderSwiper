let index = 1;
let startSwiping = () => {
  let swipeRight = document.querySelector('[aria-label="Like"]').click();
  console.log("You have liked " + index++);
  setTimeout(startSwiping, 1000);
};
let beginSwiping = setTimeout(startSwiping, 1000);
