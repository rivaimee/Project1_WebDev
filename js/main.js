const galleryModal = document.querySelector("#gallery-modal");
const interestCards = document.querySelectorAll(".interest-card");
const galleryImage = document.querySelector(".gallery-image");
const galleryCaption = document.querySelector(".gallery-caption");
const closeButton = document.querySelector(".gallery-close");
const previousButton = document.querySelector(".gallery-previous");
const nextButton = document.querySelector(".gallery-next");
// I like how you put all the images you wanted to access in an object that is really cool -Julian
const galleries = {
  hiking: [
    {
      src: "./images/personal/hiking/h1.jpg",
      alt: "Exploring the White Mountains",
      caption: "Exploring the White Mountains",
    },
    {
      src: "./images/personal/hiking/h2.jpg",
      alt: "Crossing bridges!",
      caption: "Crossing bridges",
    },
    {
      src: "./images/personal/hiking/h3.jpg",
      alt: "Quintana Roo caves",
      caption: "Quintana Roo caves",
    },
    {
      src: "./images/personal/hiking/h4.jpg",
      alt: "Look, Mom, no hands!",
      caption: "Look, Mom, no hands!",
    },
    {
      src: "./images/personal/hiking/h5.jpg",
      alt: "I love rowing on the Charles",
      caption: "I love rowing on the Charles",
    },
    {
      src: "./images/personal/hiking/h6.jpg",
      alt: "Arizona baby!",
      caption: "Arizona baby!",
    },
    {
      src: "./images/personal/hiking/h7.jpg",
      alt: "Frozen river",
      caption: "Frozen river",
    },
    {
      src: "./images/personal/hiking/h8.jpg",
      alt: "I love the snow",
      caption: "I love the snow",
    },
    {
      src: "./images/personal/hiking/h9.jpg",
      alt: "After a really high jump",
      caption: "After a really high jump",
    },
    {
      src: "./images/personal/hiking/h10.jpg",
      alt: "Here I go!",
      caption: "Here I go!",
    },
  ],

  traveling: [
    {
      src: "./images/personal/traveling/t1.jpg",
      alt: "Grand Canyon",
      caption: "Grand Canyon",
    },
    {
      src: "./images/personal/traveling/t2.jpg",
      alt: "Disney",
      caption: "Most magical place!",
    },
    {
      src: "./images/personal/traveling/t3.jpg",
      alt: "Washington DC",
      caption: "Washington DC",
    },
    {
      src: "./images/personal/traveling/t4.jpg",
      alt: "NYC",
      caption: "NYC",
    },
    {
      src: "./images/personal/traveling/t5.jpg",
      alt: "Most delicious place!",
      caption: "Most delicious place!",
    },
    {
      src: "./images/personal/traveling/t6.jpg",
      alt: "Quintana Roo",
      caption: "Quintana Roo",
    },
    {
      src: "./images/personal/traveling/t7.jpg",
      alt: "Las Vegas",
      caption: "Las Vegas",
    },
    {
      src: "./images/personal/traveling/t8.jpg",
      alt: "Tulips!",
      caption: "Tulips!",
    },
    {
      src: "./images/personal/traveling/t9.jpg",
      alt: "I love that fountain",
      caption: "I love that fountain",
    },
    {
      src: "./images/personal/traveling/t10.jpg",
      alt: "Morelia",
      caption: "Morelia, Michoacan",
    },
  ],

  family: [
    {
      src: "./images/personal/family/f1.jpg",
      alt: "Family memory",
      caption: "Time with family",
    },
    {
      src: "./images/personal/family/f2.jpg",
      alt: "Family memory",
      caption: "With my mother and sister",
    },
    {
      src: "./images/personal/family/f3.jpg",
      alt: "Family memory",
      caption: "The love of my life",
    },
    {
      src: "./images/personal/family/f4.jpg",
      alt: "Family memory",
      caption: "Best friends",
    },
    {
      src: "./images/personal/family/f5.jpg",
      alt: "Family memory",
      caption: "Mother and son",
    },
    {
      src: "./images/personal/family/f6.jpg",
      alt: "Family memory",
      caption: "My parents, sister and more",
    },
    {
      src: "./images/personal/family/f7.jpg",
      alt: "Family memory",
      caption: "Together is better",
    },
    {
      src: "./images/personal/family/f8.jpg",
      alt: "Family memory",
      caption: "Cape Cod!",
    },
    {
      src: "./images/personal/family/f9.jpg",
      alt: "Family memory",
      caption: "We love monster trucks!",
    },
    {
      src: "./images/personal/family/f10.jpg",
      alt: "Family memory",
      caption: "Happy time!",
    },
  ],

  nixie: [
    {
      src: "./images/personal/nixie/n1.jpg",
      alt: "Nixie",
      caption: "Meet Nixie",
    },
    {
      src: "./images/personal/nixie/n2.jpg",
      alt: "Nixie",
      caption: "Small dog, big personality",
    },
    {
      src: "./images/personal/nixie/n3.jpg",
      alt: "Nixie",
      caption: "Probably judging me",
    },
    {
      src: "./images/personal/nixie/n4.jpg",
      alt: "Nixie",
      caption: "Another day with Nixie",
    },
    {
      src: "./images/personal/nixie/n5.jpg",
      alt: "Nixie",
      caption: "Professional model",
    },
    {
      src: "./images/personal/nixie/n6.jpg",
      alt: "Nixie",
      caption: "Always in the best spot",
    },
    {
      src: "./images/personal/nixie/n7.jpg",
      alt: "Nixie",
      caption: "Tiny but mighty",
    },
    {
      src: "./images/personal/nixie/n8.jpg",
      alt: "Nixie",
      caption: "Another Nixie moment",
    },
    {
      src: "./images/personal/nixie/n9.jpg",
      alt: "Nixie",
      caption: "Ready for the camera",
    },
    {
      src: "./images/personal/nixie/n10.jpg",
      alt: "Nixie",
      caption: "Life is better with Nixie",
    },
  ],
};

let currentGallery = [];
let currentImageIndex = 0;

function showImage() {
  const image = currentGallery[currentImageIndex];

  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  galleryCaption.textContent = image.caption;
}

function closeGallery() {
  galleryModal.hidden = true;
}

// Gallery code only runs on a page that contains the gallery.
if (galleryModal) {
  interestCards.forEach((card) => {
    card.addEventListener("click", () => {
      const galleryName = card.dataset.gallery;

      currentGallery = galleries[galleryName];
      currentImageIndex = 0;

      showImage();
      galleryModal.hidden = false;
    });
  });

  closeButton.addEventListener("click", closeGallery);

  nextButton.addEventListener("click", () => {
    currentImageIndex++;
// I see how you are cycling through your images here. Looks good! -Julian
    if (currentImageIndex >= currentGallery.length) {
      currentImageIndex = 0;
    }

    showImage();
  });

  previousButton.addEventListener("click", () => {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = currentGallery.length - 1;
    }

    showImage();
  });

  document.addEventListener("keydown", (event) => {
    if (galleryModal.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    } else if (event.key === "ArrowRight") {
      currentImageIndex++;

      if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
      }

      showImage();
    } else if (event.key === "ArrowLeft") {
      currentImageIndex--;

      if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
      }

      showImage();
    }
  });
}

// Back to top
const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// Overall some very readable and understandable JavaScript here! Good work! I was thinking about making a click through gallery myself but decided not to. You made it look easy though so next time I'll give it a try. -Julian
