let imageData = [
  {"text": "dave is 180cm and wearing pink M", "image": "img/creedtee.jpg", "alt": "david"},
  {"text": "angela is 162cm and wearing pink S", "image": "img/ang.jpg", "alt": "ang"},
  {"text": "yoki is 142cm and wearing S", "image": "img/yokipink.jpg", "alt": "yoki"},
  {"text": "otto is 97cm and wearing yellow child s", "image": "img/awkfront.jpg", "alt": "otto"},
  {"text": "torsten is 200cm and wearing Light-pink L", "image": "img/haphoto2.jpg", "alt": "torsten"},
  {"text": "jamie is 188cm and wearing pink in s", "image": "img/jamietee.jpg", "alt": "jamie"},
  {"text": "torsten is 200cm and wearing pink in M", "image": "img/awkback.jpg", "alt":"random"},
  {"text": "THIS IS HALFASIAN", "image": "img/haphoto2.jpg", "alt":"another"}
];

const textBox = document.getElementById('image-left-text');
const imageLeft = document.getElementById("image-left");

const smallImagesContainer = document.getElementById('everyone');

for (let i=0; i<imageData.length; i++) {

  // create the outer div
  const smallImageDiv = document.createElement('div');
  smallImageDiv.classList.add('peopleintee');
  // create the image element and set the attributes
  //  with values from imageData array
  const imageTag = document.createElement('img');
  imageTag.classList.add('right-small-image');
  imageTag.src = imageData[i].image;
  imageTag.alt = imageData[i].alt;
  // add the image element as child to the div
  smallImageDiv.appendChild(imageTag);
  // add the div as child to the container in dom
  smallImagesContainer.appendChild(smallImageDiv);


  function onClickFunction(event) {
    // imageLeft.src = event.srcElement.src;
    imageLeft.src = imageData[i].image;
    // textBox.innerText = imageTexts[i];
    textBox.innerText = imageData[i].text;
  }
  imageTag.addEventListener('click', onClickFunction);

}
