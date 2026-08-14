// =========================================================
// ALL-WRIGHT TOWING & RECOVERY
// Navigation + Hero Photo Slideshow + Review Carousel
// =========================================================


// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen =
            mobileNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );

    });


    document.querySelectorAll(".mobile-nav a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });


    // -----------------------------------------------------
    // CLOSE MENU WHEN CLICKING OUTSIDE OF IT
    // -----------------------------------------------------

    document.addEventListener("click", (event) => {

        if (
            !mobileNav.classList.contains("open")
        ) {

            return;

        }


        /*
         * If the click happened inside the menu
         * or on the menu button, leave the menu open.
         */

        if (
            mobileNav.contains(event.target) ||
            menuToggle.contains(event.target)
        ) {

            return;

        }


        /*
         * Click happened outside the menu.
         * Close it.
         */

        mobileNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

}


// =========================================================
// HERO TOWING PHOTO SLIDESHOW
// =========================================================

const heroPhoto =
    document.querySelector(".hero-photo");

const towingPhotos = [

    "images/Towing1.jpg",
    "images/Towing2.jpg",
    "images/Towing3.jpg",
    "images/Towing4.jpg",

    // Towing5 & Towing6 intentionally excluded

    "images/Towing7.jpg",
    "images/Towing8.jpg",
    "images/Towing9.jpg",
    "images/Towing10.jpg",
    "images/Towing11.jpg",
    "images/Towing12.jpg",
    "images/Towing13.jpg"

];

let currentPhoto = 0;


// =========================================================
// PRELOAD HERO PHOTOS
// =========================================================

towingPhotos.forEach(photo => {

    const image = new Image();

    image.src = photo;

});


// =========================================================
// START / RESTART HERO ZOOM
// =========================================================

function startHeroZoom() {

    if (!heroPhoto) {
        return;
    }


    /*
     * Remove the animation class first.
     */
    heroPhoto.classList.remove("zooming");


    /*
     * Force the browser to acknowledge the removal.
     * This allows the animation to restart from the
     * beginning when the class is added again.
     */
    void heroPhoto.offsetWidth;


    /*
     * Start the slow zoom.
     */
    heroPhoto.classList.add("zooming");

}


// =========================================================
// CHANGE HERO PHOTO
// =========================================================

function changeHeroPhoto() {

    if (!heroPhoto) {
        return;
    }


    /*
     * Fade the current photo out.
     */
    heroPhoto.classList.add("fade-out");


    /*
     * Wait for the fade-out to finish.
     */
    setTimeout(() => {

        currentPhoto++;


        if (
            currentPhoto >= towingPhotos.length
        ) {

            currentPhoto = 0;

        }


        /*
         * Stop the old zoom animation.
         */
        heroPhoto.classList.remove("zooming");


        /*
         * Change the image while invisible.
         */
        heroPhoto.style.backgroundImage =
            `url("${towingPhotos[currentPhoto]}")`;


        /*
         * Force the browser to reset the animation.
         */
        void heroPhoto.offsetWidth;


        /*
         * Start the new zoom from the beginning.
         */
        heroPhoto.classList.add("zooming");


        /*
         * Fade the new photo in.
         */
        heroPhoto.classList.remove("fade-out");

    }, 850);

}


// =========================================================
// START HERO SLIDESHOW
// =========================================================

if (
    heroPhoto &&
    towingPhotos.length > 1
) {

    /*
     * Start the first photo with the slow zoom.
     */
    startHeroZoom();


    /*
     * Change photos every 5 seconds.
     */
    setInterval(
        changeHeroPhoto,
        5000
    );

}


// =========================================================
// TRUCK FEATURE PHOTO SLIDESHOW
// Towing5.jpg <-> Towing6.jpg
// =========================================================

const truckPhoto =
    document.querySelector(".truck-photo");

const truckPhotos = [

    "images/Towing5.jpg",
    "images/Towing6.jpg"

];

let currentTruckPhoto = 0;


// =========================================================
// PRELOAD TRUCK PHOTOS
// =========================================================

truckPhotos.forEach(photo => {

    const image = new Image();

    image.src = photo;

});


// =========================================================
// START / RESTART TRUCK ZOOM
// =========================================================

function startTruckZoom() {

    if (!truckPhoto) {
        return;
    }


    /*
     * Remove the animation class.
     */
    truckPhoto.classList.remove("zooming");


    /*
     * Force a reflow so the animation can restart.
     */
    void truckPhoto.offsetWidth;


    /*
     * Start the slow zoom.
     */
    truckPhoto.classList.add("zooming");

}


// =========================================================
// CHANGE TRUCK FEATURE PHOTO
// =========================================================

function changeTruckPhoto() {

    if (!truckPhoto) {
        return;
    }


    /*
     * Fade the current photo out.
     */
    truckPhoto.classList.add("fade-out");


    /*
     * Wait for the fade to finish.
     */
    setTimeout(() => {

        currentTruckPhoto++;


        if (
            currentTruckPhoto >= truckPhotos.length
        ) {

            currentTruckPhoto = 0;

        }


        /*
         * Stop the old zoom.
         */
        truckPhoto.classList.remove("zooming");


        /*
         * Change the image while invisible.
         */
        truckPhoto.src =
            truckPhotos[currentTruckPhoto];


        /*
         * Force the browser to reset the animation.
         */
        void truckPhoto.offsetWidth;


        /*
         * Start the new zoom from the beginning.
         */
        truckPhoto.classList.add("zooming");


        /*
         * Fade the new photo in.
         */
        truckPhoto.classList.remove("fade-out");

    }, 850);

}


// =========================================================
// START TRUCK FEATURE SLIDESHOW
// =========================================================

if (
    truckPhoto &&
    truckPhotos.length > 1
) {

    /*
     * Start the first truck photo zoom.
     */
    startTruckZoom();


    /*
     * Change truck photos every 5 seconds.
     */
    setInterval(
        changeTruckPhoto,
        5000
    );

}


// =========================================================
// REVIEW CAROUSEL
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const viewport =
        document.querySelector(".reviews-viewport");

    const track =
        document.querySelector(".reviews-track");

    const prevButton =
        document.querySelector(".review-prev");

    const nextButton =
        document.querySelector(".review-next");

    const dotsContainer =
        document.querySelector(".review-dots");

    const currentNumber =
        document.querySelector(
            ".review-count strong"
        );

    const totalNumber =
        document.querySelector(
            ".review-count span"
        );


    // -----------------------------------------------------
    // MAKE SURE THE CAROUSEL EXISTS
    // -----------------------------------------------------

    if (
        !viewport ||
        !track ||
        !prevButton ||
        !nextButton ||
        !dotsContainer
    ) {

        return;

    }


    const reviews =
        Array.from(
            track.querySelectorAll(".review")
        );


    if (reviews.length === 0) {
        return;
    }


    // -----------------------------------------------------
    // CAROUSEL STATE
    // -----------------------------------------------------

    let currentIndex = 0;

    let cardsPerView = 1;

    let maxIndex = 0;

    let startX = 0;

    let currentX = 0;

    let isDragging = false;

    let pointerId = null;

    let dragDifference = 0;


    // -----------------------------------------------------
    // DETERMINE CARDS PER VIEW
    // -----------------------------------------------------

    function getCardsPerView() {

        if (window.innerWidth >= 1200) {
            return 3;
        }

        if (window.innerWidth >= 600) {
            return 2;
        }

        return 1;

    }


    // -----------------------------------------------------
    // GET CARD MOVEMENT
    // -----------------------------------------------------

    function getCardMovement() {

        if (!reviews[0]) {
            return 0;
        }


        const cardWidth =
            reviews[0]
                .getBoundingClientRect()
                .width;


        const styles =
            window.getComputedStyle(track);


        const gap =
            parseFloat(
                styles.columnGap ||
                styles.gap
            ) || 0;


        return cardWidth + gap;

    }


    // -----------------------------------------------------
    // CALCULATE CAROUSEL
    // -----------------------------------------------------

    function updateCarousel(
        animate = true
    ) {

        cardsPerView =
            getCardsPerView();


        maxIndex =
            Math.max(
                0,
                reviews.length -
                cardsPerView
            );


        if (
            currentIndex >
            maxIndex
        ) {

            currentIndex =
                maxIndex;

        }


        if (
            currentIndex < 0
        ) {

            currentIndex = 0;

        }


        const movement =
            currentIndex *
            getCardMovement();


        track.style.transition =
            animate
                ? "transform .45s cubic-bezier(.22,.61,.36,1)"
                : "none";


        track.style.transform =
            `translate3d(-${movement}px, 0, 0)`;


        updateControls();

    }


    // -----------------------------------------------------
    // UPDATE BUTTONS / COUNTER / DOTS
    // -----------------------------------------------------

    function updateControls() {

        prevButton.disabled =
            currentIndex <= 0;


        nextButton.disabled =
            currentIndex >= maxIndex;


        if (currentNumber) {

            currentNumber.textContent =
                String(
                    currentIndex + 1
                ).padStart(2, "0");

        }


        if (totalNumber) {

            totalNumber.textContent =
                `/ ${String(
                    reviews.length
                ).padStart(2, "0")}`;

        }


        updateDots();

    }


    // -----------------------------------------------------
    // CREATE DOTS
    // -----------------------------------------------------

    function createDots() {

        dotsContainer.innerHTML = "";


        for (
            let i = 0;
            i <= maxIndex;
            i++
        ) {

            const dot =
                document.createElement(
                    "button"
                );


            dot.type = "button";

            dot.className =
                "review-dot";


            dot.setAttribute(
                "aria-label",
                `Go to review ${i + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    currentIndex = i;

                    updateCarousel();

                }
            );


            dotsContainer.appendChild(
                dot
            );

        }

    }


    // -----------------------------------------------------
    // UPDATE DOTS
    // -----------------------------------------------------

    function updateDots() {

        const dots =
            dotsContainer.querySelectorAll(
                ".review-dot"
            );


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );

            }
        );

    }


    // -----------------------------------------------------
    // NEXT BUTTON
    // -----------------------------------------------------

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentIndex <
                maxIndex
            ) {

                currentIndex++;

                updateCarousel();

            }

        }
    );


    // -----------------------------------------------------
    // PREVIOUS BUTTON
    // -----------------------------------------------------

    prevButton.addEventListener(
        "click",
        () => {

            if (
                currentIndex > 0
            ) {

                currentIndex--;

                updateCarousel();

            }

        }
    );


    // =====================================================
    // TOUCH / MOUSE DRAGGING
    // =====================================================

    viewport.addEventListener(
        "pointerdown",
        event => {

            /*
             * Only respond to the primary mouse/touch pointer.
             */

            if (
                event.pointerType === "mouse" &&
                event.button !== 0
            ) {

                return;

            }


            isDragging = true;

            pointerId =
                event.pointerId;

            startX =
                event.clientX;

            currentX =
                event.clientX;

            dragDifference = 0;


            viewport.setPointerCapture(
                pointerId
            );


            track.style.transition =
                "none";


            viewport.classList.add(
                "is-dragging"
            );

        }
    );


    viewport.addEventListener(
        "pointermove",
        event => {

            if (
                !isDragging ||
                event.pointerId !== pointerId
            ) {

                return;

            }


            currentX =
                event.clientX;


            dragDifference =
                currentX - startX;


            const baseMovement =
                currentIndex *
                getCardMovement();


            let movement =
                -baseMovement +
                dragDifference;


            /*
             * Resistance at the beginning.
             */

            if (
                currentIndex === 0 &&
                dragDifference > 0
            ) {

                movement =
                    dragDifference * 0.35;

            }


            /*
             * Resistance at the end.
             */

            if (
                currentIndex === maxIndex &&
                dragDifference < 0
            ) {

                movement =
                    -baseMovement +
                    dragDifference * 0.35;

            }


            track.style.transform =
                `translate3d(${movement}px, 0, 0)`;

        }
    );


    // -----------------------------------------------------
    // FINISH SWIPE
    // -----------------------------------------------------

    function finishSwipe(event) {

        if (!isDragging) {
            return;
        }


        if (
            event &&
            pointerId !== null &&
            event.pointerId !== pointerId
        ) {

            return;

        }


        isDragging = false;


        viewport.classList.remove(
            "is-dragging"
        );


        const difference =
            currentX - startX;


        const swipeThreshold =
            Math.min(
                80,
                Math.max(
                    35,
                    viewport.clientWidth *
                    0.12
                )
            );


        /*
         * Swipe left.
         */

        if (
            difference <
                -swipeThreshold &&
            currentIndex <
                maxIndex
        ) {

            currentIndex++;

        }


        /*
         * Swipe right.
         */

        else if (
            difference >
                swipeThreshold &&
            currentIndex > 0
        ) {

            currentIndex--;

        }


        updateCarousel();


        pointerId = null;

    }


    viewport.addEventListener(
        "pointerup",
        finishSwipe
    );


    viewport.addEventListener(
        "pointercancel",
        finishSwipe
    );


    viewport.addEventListener(
        "lostpointercapture",
        () => {

            if (isDragging) {
                finishSwipe();
            }

        }
    );


    // =====================================================
    // KEYBOARD ACCESSIBILITY
    // =====================================================

    viewport.setAttribute(
        "tabindex",
        "0"
    );


    viewport.setAttribute(
        "role",
        "region"
    );


    viewport.setAttribute(
        "aria-label",
        "Customer reviews"
    );


    viewport.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowRight"
            ) {

                event.preventDefault();


                if (
                    currentIndex <
                    maxIndex
                ) {

                    currentIndex++;

                    updateCarousel();

                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                event.preventDefault();


                if (
                    currentIndex > 0
                ) {

                    currentIndex--;

                    updateCarousel();

                }

            }

        }
    );


    // =====================================================
    // RESIZE
    // =====================================================

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        cardsPerView =
                            getCardsPerView();


                        maxIndex =
                            Math.max(
                                0,
                                reviews.length -
                                cardsPerView
                            );


                        if (
                            currentIndex >
                            maxIndex
                        ) {

                            currentIndex =
                                maxIndex;

                        }


                        createDots();

                        updateCarousel(
                            false
                        );

                    },
                    150
                );

        }
    );


    // =====================================================
    // INITIALIZE
    // =====================================================

    cardsPerView =
        getCardsPerView();


    maxIndex =
        Math.max(
            0,
            reviews.length -
            cardsPerView
        );


    createDots();

    updateCarousel(false);

});