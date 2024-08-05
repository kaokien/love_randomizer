document.addEventListener('DOMContentLoaded', () => {
  const activities = {
    day: [
      "Go for a romantic walk in the park",
      "Visit an art museum and discuss your favorite pieces",
      "Go on a scenic hike and have a picnic",
      "Explore a new city or town nearby",
      "Spend a day at the beach and build sandcastles",
    ],
    night: [
      "Watch a romantic movie under the stars",
      "Try a new restaurant and order for each other",
      "Go stargazing and learn about constellations",
      "Attend a local music event or concert",
      "Take a moonlit stroll and share your dreams",
    ],
    home: [
      "Cook a gourmet meal together",
      "Have a board game marathon",
      "Create a scrapbook of your memories",
      "Binge-watch your favorite TV series",
      "Give each other relaxing massages",
    ],
  };

  const images = {
   day: [
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_0075.JPG",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_3379.jpeg",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_3568.JPG",
    ],
    night: [
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_3578.JPG",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_4926.JPG",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_5334.JPG",
    ],
    home: [
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_5833.JPG",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_5976.JPG",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_8872.jpeg",
      "https://loverandomizer.s3.us-east-2.amazonaws.com/Love+Randomizer/IMG_6296.JPG",
    ],
  };

  const shownImages = {
    day: [],
    night: [],
    home: [],
  };

  function pickActivity(category) {
    const categoryActivities = activities[category];
    const randomIndex = Math.floor(Math.random() * categoryActivities.length);
    const activity = categoryActivities[randomIndex];
    const activityElement = document.getElementById("activity");

    activityElement.style.opacity = 0;
    setTimeout(() => {
      activityElement.innerText = activity;
      activityElement.style.opacity = 1;
    }, 300);

    const colors = {
      day: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      night: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      home: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    };
    document.body.style.background = colors[category];

    changeToImage(category);
  }

  function changeToImage(category) {
    const videoElement = document.getElementById("coupleVideo");
    const imageElement = document.getElementById("coupleImage");
    const categoryImages = images[category];

    if (shownImages[category].length === categoryImages.length) {
      shownImages[category] = [];
    }

    const availableImages = categoryImages.filter(
      (img) => !shownImages[category].includes(img)
    );

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const newImageSrc = availableImages[randomIndex];

    shownImages[category].push(newImageSrc);

    videoElement.style.display = "none";
    imageElement.style.display = "block";

    imageElement.classList.add("fade-out");

    setTimeout(() => {
      imageElement.src = newImageSrc;
      imageElement.classList.remove("fade-out");
      imageElement.classList.add("fade-in");

      setTimeout(() => {
        imageElement.classList.remove("fade-in");
      }, 500);
    }, 250);
  }

  // Add event listeners to buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => pickActivity(button.dataset.category));
  });
});
