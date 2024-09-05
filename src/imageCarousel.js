
let currentImg = 0;
const viewWindowSize = 500;
const slideWidth = viewWindowSize;
const height = 600;

function buildImageCarousel(parentSelector, imgArray, imgCaptions) {
    const imgMaxWidth = 300;
    const imgMaxHeight = 400;
    const numSlides = 4;
    const totalCarouselLength = numSlides * slideWidth;
    

    const parent = document.querySelector(parentSelector);

    const carouselWindow = document.createElement('div');
    parent.appendChild(carouselWindow);


    const wideSlide = document.createElement('div');
    carouselWindow.appendChild(wideSlide);
    carouselWindow.style.position = 'relative';
    carouselWindow.style.border = '2px solid black';
    carouselWindow.style.width = `${viewWindowSize}px`;
    carouselWindow.style.height = `${height}px`;
    carouselWindow.style.overflowX = 'hidden';
    carouselWindow.style.overflowY = 'hidden';
    carouselWindow.classList.add('carousel-window');

    wideSlide.style.width = `${totalCarouselLength}px`;
    wideSlide.style.height = `${height}px`;

    wideSlide.style.display = 'grid';

    wideSlide.style.position = 'absolute';
    wideSlide.classList.add('wide-slide');

    // wide slide is a grid.
    let wideSlideGridTemplateColumnsString = ``;
    for (let s = 0; s < numSlides; s++) {
        wideSlideGridTemplateColumnsString += `${slideWidth}px `;
        const slide = document.createElement('div');
        wideSlide.appendChild(slide);
        slide.style.width = `${slideWidth}px `;
        // slide.style.border = '2px dashed red';
        slide.style.display = 'flex';
        slide.style.flexDirection = 'column';
        slide.style.justifyContent = 'center';
        slide.style.alignItems = 'center';
        // append a photo in the middle of this:
        const img = document.createElement('img');
        img.style.maxWidth = `${imgMaxWidth}px `;
        img.style.maxHeight = `${imgMaxHeight}px `;
        img.src = imgArray[s];
        slide.appendChild(img);

        const caption = document.createElement('p');
        slide.appendChild(caption);
        caption.textContent = `${s + 1}: ${imgCaptions[s]}`;
        caption.style.textAlign = 'center';

    }

    wideSlide.style.gridTemplateColumns = wideSlideGridTemplateColumnsString;


    makeNextButton('left', imgArray.length, slideWidth);
    makeNextButton('right', imgArray.length, slideWidth);
    makeNavigationDots(numSlides);

    //Autoscroll: 
    setInterval(()=>autoChangeSlide(numSlides), 3000);
}

function makeNextButton(direction, numberOfSlides, slideWidth) {
    // Makes a button that shifts the slide by one to the left or right, based on the "direction"
    const carouselWindow = document.querySelector('.carousel-window');
    const btn = document.createElement('button');
    btn.style.position = 'absolute';
    btn.style.top = '49%';
    btn.id = `${direction}btn`;

    carouselWindow.appendChild(btn);

    if (direction === 'left') {
        btn.textContent = 'Back';
        btn.style.left = '5%';
        
    } else {
        btn.textContent = 'Forward';
        btn.style.left = '85%';
    }

    btn.addEventListener('click', () => {
        if (direction === 'left') {
            // currentImg = Math.max(currentImg - 1, 0);
            // currentImg = currentImg - 1 > -1 ? currentImg - 1 : numberOfSlides - 1;
            shiftToPreviousSlide(numberOfSlides);
        } else {
            // currentImg = currentImg + 1 < numberOfSlides ? currentImg + 1 : 0;
            shiftToNextSlide(numberOfSlides);
        }
        showNthSlide(currentImg, slideWidth,numberOfSlides)
       
    })


}

function autoChangeSlide(numSlides){
    shiftToNextSlide(numSlides);
    showNthSlide(currentImg, slideWidth,numSlides);
}

function shiftToNextSlide(numberOfSlides){
    currentImg = currentImg + 1 < numberOfSlides ? currentImg + 1 : 0;
}

function shiftToPreviousSlide(numberOfSlides){
    currentImg = currentImg - 1 > -1 ? currentImg - 1 : numberOfSlides - 1;
}


function showNthSlide(n, slideWidth, numSlides) {
    const wideSlide = document.querySelector('.wide-slide');
    //Move the large "wide" slide left and right depending on which horizontal grid element you want displayed. 
    const shiftRight = n * slideWidth;
    wideSlide.style.left = `-${shiftRight}px`;

    //Navigation buttons
    //
    const selectedBtn = document.querySelector(`#btn${n}`);
    selectedBtn.classList.add('nav-filled');

    //Unfill the button for all others
    for (let t = 0; t < numSlides; t++) {
        if (t !== n) {
            const thisBtn = document.querySelector(`#btn${t}`);
            thisBtn.classList.remove('nav-filled');
        }
    }

}

function makeNavigationDots(numSlides) {
    // Make a container for them
    const carouselWindow = document.querySelector('.carousel-window');
    const carouselWindowWidth = carouselWindow.offsetWidth;
    const carouselWindowHeight = carouselWindow.offsetHeight;
    const navDotContainer = document.createElement('div');
    carouselWindow.appendChild(navDotContainer);
    navDotContainer.classList.add('nav-dots-container');
    navDotContainer.style.position = 'absolute';
    const containerWidth = 50;
    const containerHeight = 40;
    // navDotContainer.style.width = `${containerWidth}px`;
    const gap = 5;
    navDotContainer.style.gap = `${gap}px`;
    const circleDiameter = 15;
    const navDotContainerWidth = numSlides * circleDiameter + (numSlides - 1) * gap;
    navDotContainer.style.height = `${containerHeight}px`;
    navDotContainer.style.top = `${carouselWindowHeight - containerHeight - 15}px`;
    navDotContainer.style.left = `${carouselWindowWidth / 2 - navDotContainerWidth / 2}px`;
    // navDotContainer.style.border = '2px solid black';
    navDotContainer.style.display = 'flex';
    navDotContainer.style.justifyContent = 'space-around';
    navDotContainer.style.alignItems = 'center';

    // Little Circular Buttons?

    for (let s = 0; s < numSlides; s++) {
        const circBtn = document.createElement('button');
        navDotContainer.appendChild(circBtn);
        circBtn.style.borderRadius = '50%';
        circBtn.id = `btn${s}`;
        circBtn.style.width = `${circleDiameter}px`;
        circBtn.style.height = `${circleDiameter}px`;
        circBtn.style.color = 'green';
        const thisButtonId = s;
        if (s === 0) { circBtn.classList.add('nav-filled'); }

        circBtn.addEventListener('click', () => {
            currentImg = s;
            showNthSlide(s, slideWidth,numSlides);
        })
    }
}


export { buildImageCarousel, showNthSlide } 