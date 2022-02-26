export default function stars () {
  // get sky
  const sky = document.getElementById("sky");

  // sky width and height
  const skyWidth = document.body.offsetWidth;
  const skyHeight = document.body.offsetHeight;

  // get the first (and only) star we have at the beginning
  const star = document.getElementsByClassName("star")[0];

  // get its width and margin (which is uniform at the beginning)
  const starWidth = parseInt(getComputedStyle(star).width);
  const marginAroundStar = parseInt(getComputedStyle(star).margin);

  // function to calculate stars that would fit along one side of the screen if they had uniform dimensions and margins
  // stars at the end would have different random sizes and (mostly larger) margins, which means the screen will overflow, but this helps approximate how much to keep and how much to discard at the end
  const starsAlongOneSide = (lengthOfSide) => {
    // remove margins on both sides
    const availableSpace = lengthOfSide - marginAroundStar * 2;

    // go figure out the rest yourself I can't explain
    // jk
    // get the number of stars that would fit along the side, EXCEPT for the last one (notice that we devide the availableSpace by (starWidth + marginAroundStar*2). The last star doesn't have a (marginAroundStar*2) amount of space to its right, so, yeah.)
    let numStars = Math.floor(availableSpace / (starWidth + marginAroundStar * 2));

    // get the remaining space after setting aside space for all the (starWidth + marginAroundStar*2) that we can have
    const remainingSpace = availableSpace % (starWidth + marginAroundStar);

    // if the remaining space can have one more star, put it there
    if (remainingSpace > starWidth) numStars++;

    return numStars;
  };

  // stars along width and height of screen
  const starsAlongWidth = starsAlongOneSide(skyWidth);
  const starsAlongHeight = starsAlongOneSide(skyHeight);

  // total number of stars
  const totalStars = starsAlongWidth * starsAlongHeight;

  // as mentioned above, since we'll have bigger amount of spaces between stars, we cut total number of stars by, a lot
  const REAL_TOTAL_NO_OF_STARS = totalStars / 11;

  for (let i = 1; i < REAL_TOTAL_NO_OF_STARS; i++) {
    // clone the first star
    const newStar = star.cloneNode(true);

    // get a random width - happens to be either 1px or 2px
    const randomWidth = Math.floor(Math.random() * (3 - 1) + 1);

    // get random margins for all four sides which might or might not be similar to each other
    // notice that margin left and top are allowed to have values from a larger range. Can be any of the four margins and can be any range. Something we can fine-tune to look natural
    const randomMarginLeft = Math.floor(Math.random() * (60 - 2) + 2);
    const randomMarginRight = Math.floor(Math.random() * (10 - 2) + 2);
    const randomMarginTop = Math.floor(Math.random() * (60 - 2) + 2);
    const randomMarginBottom = Math.floor(Math.random() * (10 - 2) + 2);

    // get a random opacity - something from 0 to 0.9. Yup, some can disappear but later we'll be animating the opacity, so we do catch the stars with 0 opacity
    const randomOpacity = Math.random();

    // set those random widths, heights, margins and opacity
    newStar.style.width = randomWidth + "px";
    newStar.style.height = randomWidth + "px";

    newStar.style.marginLeft = randomMarginLeft + "px";
    newStar.style.marginRight = randomMarginRight + "px";
    newStar.style.marginTop = randomMarginTop + "px";
    newStar.style.marginBottom = randomMarginBottom + "px";

    newStar.style.opacity = randomOpacity;

    // append the new star to the sky
    sky.appendChild(newStar);
  }

  // get all the stars
  const stars = document.getElementsByClassName("star");

  // loop through all of them and set their animations property. The two animations are defined in the CSS file/section
  Array.from(stars).forEach((star) => {
    // tiny, dull ones
    if (star.style.width === "1px" && star.style.opacity < 0.3) star.style.animation = "pulseFast 1s infinite";

    if (star.style.width === "1px" && star.style.opacity > 0.3 && star.style.opacity < 0.4)
      star.style.animation = "pulseFast .7s infinite";

    // bigger, brighter ones
    if (star.style.width === "2px" && star.style.opacity > 0.5) star.style.animation = "pulseSlow 1.6s infinite";
  });

  // function that shoots a star after one another
  const shootStar = (index, gapInMiliSeconds) => {
    setTimeout(() => {
      // choose a random star
      const randomStarIndex = Math.floor(Math.random() * (REAL_TOTAL_NO_OF_STARS - 0) + 0);

      const randomStar = Array.from(stars)[randomStarIndex];

      // set shooting animation
      randomStar.style.animation = "shoot 2s 1";
    }, gapInMiliSeconds * index);
  };

  // we decide the visitor will 10 shooting stars
  for (let i = 0; i < 20; i++) {
    // random gap between this star and the next
    const gapInMiliSeconds = Math.floor(Math.random() * (5000 - 1000) + 1000);

    // shoot
    shootStar(i, gapInMiliSeconds);
  }
}