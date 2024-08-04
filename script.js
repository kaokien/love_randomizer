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
      "https://cvws.icloud-content.com/B/AdF3h7kNthohkyGDkt_BaNub_4A9AVLFFAqxkMtOschQHsU7TfXXNlR3/IMG_3568.JPG?o=Apurk1Cqq7SnYarDajTZ3RS7UP7By5goWUUpyh1fwawI&v=1&x=3&a=CAogMLHw7WbHhla2iyJhBKReUv7x3eA2cs9fNDkk1dVoih8SbRCqs_L8kTIYqpDO_pEyIgEAUgSb_4A9WgTXNlR3aibULLIqHGSQvITjb21bdqpgiWLut97xSuxF_LBndFr3UvcWediHMnImhJjKMYb9BTu_7LwOMBqB6KtKE0Yb47xhnpNNDclCiFJCo9_Id-8&e=1722815842&fl=&r=5e142cd5-28cf-4f28-b567-18ac24215ceb-1&k=IfpKBcln_NliJHJcfqOwaA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=ejDg4Q6ySJpch3_pWysOW3CWR6g&cd=i",
      "https://cvws.icloud-content.com/B/AazJwV2qqRzvblaKy8LMp_fEE_35AWkRyeXekShlIWKnADdW1IhabVN7/IMG_3578.JPG?o=Av7Unmb8V-RIMBRFdttaqEzipK4VjRGCWt4Hmi7whHlt&v=1&x=3&a=CAogMqSzU0qGlueEylprY6ALAWXrjrMUIwLuuI4S7WIkRkASbRC_xvP8kTIYv6PP_pEyIgEAUgTEE_35WgRabVN7aiYyFayGRMMWRxHwE8tXBDAaqYjnUst3DFs9sm_zNl1BfgNWZfsIQnImVLBbBa7oNZm4CmawGC2vfZdHP0RB17fN60YaOiajZ2qruI84zfU&e=1722815861&fl=&r=e7a55965-8aac-449f-9973-68354e1a7fb8-1&k=VuGWsoETO0Cc5HPwJlp6VA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=xBEKSpY0sIed22nfVhMhpRw2vCc&cd=i",
      "https://cvws.icloud-content.com/B/Ackb5xLYUl6G0fcVwSUdSuHkl0BlAUcDtf5SNZNHyVpS4s6en3gUPnI2/IMG_4926.JPG?o=ArjR2_xu7wYXXeE_IbnUNLjRKFGFKOpRbmlR__kbQagi&v=1&x=3&a=CAogg6On2MTQ2tSuNRCQZNXk059iC8MHr8ni3vF6TcmOA7ESbRC5kvX8kTIYue_Q_pEyIgEAUgTkl0BlWgQUPnI2aiY1eHMVglJvdqNy8oPepvfIfqVdmbhuWGkYPs7-CnEPT45M56JI0XIm7qypVVMjJDIrfLvOzb0B9w9RaEY0c2feIuYEbJdH9t4UkJ13rro&e=1722815887&fl=&r=df5fbf91-e49f-457b-aae6-a8bfc962b88c-1&k=z0DRPDnrPVi5PUIEBUItfQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=2G88lJnG-4TRNbjYZEHg617iQDQ&cd=i",
    ],
    night: [
      "https://cvws.icloud-content.com/B/AaI5SvwM9rKBilAogsYZAjIkHfdMAUEIdcyn0NMq7iA-HFeXfAEOy5rP/IMG_5334.JPG?o=AjLQIFVBT7oHfuXXXtVTrtjxJUdCxgFCltdXKVIvhyxy&v=1&x=3&a=CAog9Gc2KPUM4KkJxxkRkuWm4bg3VqR7jOtoT9lTfTmCVjYSbRCq4vj8kTIYqr_U_pEyIgEAUgQkHfdMWgQOy5rPaiZJydhOiJVtvQtDHHKtifCHOBodVNEWYLPRkq2JRqEHr7rHvltI5HImB-OmClVJ3f5c2pOZjUUGWfQP73nc_ATuLHViVCHcdO7OYwLrLyQ&e=1722815946&fl=&r=76d116e1-244b-4c98-bf49-9b1fd4f5c6bc-1&k=15-iGDlV-vvTauBMpsvPsA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=Wlaz7rhhLOZJXVYV2Gnw2IETelk&cd=i",
      "https://cvws.icloud-content.com/B/AQl-NWu-HnpnsULbMz565fjQJ0ZsAXHCmF32IUSG0iCMyp4qQAXAke2Z/IMG_5833.JPG?o=AoF_DBEMXDITIDePsAndTc385_WhUCR20w42zrl_hYFx&v=1&x=3&a=CAogviCnbsbhnfC1pZfOm6JGYz3s5rVBD3-hwgZQ7SBHDwwSbRCGwvn8kTIYhp_V_pEyIgEAUgTQJ0ZsWgTAke2ZaiYbLwJN1a8-3TbcbbLKMRpHg8PsuNDgPgeVqrY4jy1N8-NNGQg9gHImZAtIPxpD7NJan2Mtjj8dLeLo_JcHpY7UxuWzCg5la-JV9ZbQdg4&e=1722815958&fl=&r=cd47eb16-78da-4d24-8650-b4d072841cf7-1&k=0Sb1Twshygtuw_io8eKDDw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=2Vf5BHERfNw7O2xJDJdmscaelX8&cd=i",
      "https://cvws.icloud-content.com/B/AX30XMKLCodLEtVgOsOnPkj580WbAXmbCJNwY9gnuKB5rQwGfjdfYSbs/IMG_5976.JPG?o=AmLRxUVEsSt8fuxx2FeAUG79MHu0mAAOvbYRnjWPKZ7H&v=1&x=3&a=CAog1DztWwcsIvN4OpCBIsYFMt3O6V5UwOz_Jr8CCxRBZvMSbRCk8_r8kTIYpNDW_pEyIgEAUgT580WbWgRfYSbsaiYIB4oruL3pUGWCjYwRymvh5g2rpFTriSs3hZOHUagF3zTgYhkhOHImpxAGRrseN494Rio_aMXRY36ta-oNIi55BmYEifUXmo4mhb6rur8&e=1722815981&fl=&r=1f9b7859-1b1c-4498-a060-041bd9cb9c16-1&k=RSmKIZ_VtmYVbU7Znx42rg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=C4q2L8jD5gS8HRyrI4lcIljB4Gs&cd=i",
    ],
    home: [
      "https://cvws.icloud-content.com/B/AZPD4K3dxuqjUozSdPPsJzHaVoN2AdyvhToIi3yxfbFak2IAkdnvZUzv/IMG_6296.JPG?o=Ag6kyPsP71reuPnuIQ8A1XYWetofAoPq4YAKRf9D2eRP&v=1&x=3&a=CAogxo7XFozKrxvhp3UocxwCqVNUy7KUPqP9wv8nlkLWAiASbRDDuv38kTIYw5fZ_pEyIgEAUgTaVoN2WgTvZUzvaiYiXYVbBPjPE67XJD_P4nPD_2-jSmOF8SlnRlt3BOe7Kw2pQklzVnImU-QXANi9NdITIWjrMge3g7ND4Ev96X-Wj_PsyEENraWOV1h5Qag&e=1722816023&fl=&r=70ed53c9-a305-4a71-b383-4536f6e0ae8a-1&k=691BffBiNRD7G_Elr6xKqA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=4dBNwvqwaBONbh45GEs2Kyr4Yks&cd=i",
      "https://cvws.icloud-content.com/B/AfVNJZ3hA8JpAfo40daCjxlkFqfSATrZoW7GPgAc51ZSMjskRo10Yn_Y/IMG_8872.jpeg?o=ArHT8COtOQuLVAm_VPa557LYSp71WOohsn5Yu7QDpWQr&v=1&x=3&a=CAoguUgyKxwu6hVNe3d2ZXx40ONOtU6jYrnQd7-dlhgDTiYSbRCGyP_8kTIYhqXb_pEyIgEAUgRkFqfSWgR0Yn_YaiYt5vXeHbEMQsL6jq8Wq0Ql4JvX5n3l8XA0agsI1OVfPWvJ2msM0HImjlB1_uonuTkq3JgAB4_-plI2sjLAv1FYfLvMO89yPNuq8SC7Po8&e=1722816057&fl=&r=844462df-1d77-44b2-b092-2553bc829af4-1&k=_Zfqjxj9c4yE_62rjc9ECw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=4kuPBpyceFRFSNY7b6GCyuyJRAA&cd=i",
      "https://cvws.icloud-content.com/B/AQtYF9K1EE4iEAIwvEyxP27q5pzyAQPSJGmMMfDYjPAO2SrgqPBH_kRc/IMG_3379.jpeg?o=Ah1WGaET05bgKoQmJTcOv28_SwZL99z85XAZevt85L_9&v=1&x=3&a=CAogsLhM6CjBwqS17rnDDbmRz4_iMdl5kQo2XGTaZJ4Uw70SbRCOqoH9kTIYjofd_pEyIgEAUgTq5pzyWgRH_kRcaiax-dFfZTeOob71aMctI5apqqymMQB9xxwFyVvbQ6LBfO8wms-obXImj_4E9yvMPuFMvb8n0g7ZussBq3G0rab8RFsIevDIYQMdUYnVHzA&e=1722816086&fl=&r=59d08ba0-67cc-41bf-ae44-0f7f6e445099-1&k=Zqr-nWNglTpkK48q2F2cnQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=40&s=1TF2tQrNbdya7AFSq4XpzfaLjG8&cd=i",
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
