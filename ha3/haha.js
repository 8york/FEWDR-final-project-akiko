const imageArray = [{
    "smallImage": "img/tobitree.jpg",
    "largeImage": "img/tobitree.jpg",
    "text": "Halfasian is a visual artist collectives, thus outfit is one of the important elements. Ideas are discussed together  fabrication takes place in DC's studio.",
    "alt": "tobitree"
  },
  {
    "smallImage": "img/ladyfinger.jpg",
    "largeImage": "img/tobi.jpg",
    "text": "Each of the Halfasian were born in different hemisphere but both spent a lot of time in a Sub-Tropic climate growing up. At some point, each half of Halfasian made a decision and ended up living in a place where everything is unpredictable far away from sub-tropics",
    "alt": "ladyfinger"
  },
  {
    "smallImage": "img/hatesting1.jpg",
    "largeImage": "img/testing1.jpg",
    "text": "Halfasian started becaue of this exhibition at the testing ground currated by, ARI, Wandering Room. 6 songs were written, but not so reharsed during weekly meetups over 6 weeks.",
    "alt": "testingground"
  },
  {
    "smallImage": "img/left.jpg",
    "largeImage": "img/haawktim.jpg",
    "text": "performing a song dedicated to Arnie, with a guest performer Illbefluence, entangled in the awkwardnessfull of sculpture.",
    "alt": "tim"
  },
  {
    "smallImage": "img/awkcloseup.jpg",
    "largeImage": "img/awkcloseup.jpg",
    "text": "Wearble sculpture created for an exhibition, Awkwarder, April 2019. At the entire opening event for this exhibition, Halfasian were linked with this work and played 3 sets. For our second set, illbefluence was invited to be the part of the awkward link with the band.",
    "alt": "closeup"
  },
  {
    "smallImage": "img/right(1).jpg",
    "largeImage": "img/hatired.jpg",
    "text": "2 hours of being linked together sociallising and performing. It was quite awkward and exhausting as it was meant to be, and glad that none of us had natures calling during the 2 hours.",
    "alt": "front"
  },
  {
    "smallImage": "img/haballrooomgreet.jpg",
    "largeImage": "img/haballrooomgreet.jpg",
    "text": "Between lockdown 5 and 6 in 2021, Monnone Aloneinvited Halfasian to play before their show at Brunswick Ballroom. Both of us were quite sure that this show will not go on because of the pandemic restrictions, but practised over video calls just in case. First time and possibly last time Halfasian played a show with a microphone, a sound system and lighting. This will be talked about as a 25 mins of fame till we stop.",
    "alt": "ballroom"
  },
  {
    "smallImage": "img/hajamiecake.jpg",
    "largeImage": "img/hawithjamie.jpg",
    "text": "Getting ready to surprise a friend at her work with a cake and a song written a dedictaion song on her birthday.",
    "alt": "jamiecake"
  },
  {
    "smallImage": "img/hahaha.jpg",
    "largeImage": "img/haha.jpg",
    "text": "Halfasian is not a musician, but have ideas and deliver the idea through sounds and laughing a lot while working.",
    "alt": "haha"
  }
]

// toggle modal container this works
const modalContainer = document.getElementById("modal-container");
const modalImage = document.getElementById('modal-image');

function modalClose(event) {
  modalContainer.classList.remove('modal-shown');
  modalContainer.classList.add('modal-hidden');
}

modalContainer.addEventListener('click', modalClose);

function enlargeText(event) {
  let element = event.srcElement;
  element.classList.add("fullText");
}

function minimiseText(event) {
  let element = event.srcElement;
  element.classList.remove("fullText");
}

for (let i = 0; i < imageArray.length; i++) {
  const textContainer = document.createElement('p');
  textContainer.innerText = imageArray[i].text;
  textContainer.classList.add('imagex');

  // enlarge the text when hovering over the p-element
  textContainer.addEventListener("mouseover", enlargeText);
  textContainer.addEventListener("mouseout", minimiseText);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('haimage');
  imageDiv.style.backgroundImage = `url("${imageArray[i].smallImage}")`
  // show modal when clicking on this image-div and show the image in the modal
  function showImageInModal() {
    modalContainer.classList.add('modal-shown');
    modalContainer.classList.remove('modal-hidden');
    modalImage.src = imageArray[i].largeImage;
  }
  imageDiv.addEventListener('click', showImageInModal);

  imageDiv.appendChild(textContainer);
  const smallImageContainer = document.getElementById('small-images-container');
  smallImageContainer.appendChild(imageDiv);
}
