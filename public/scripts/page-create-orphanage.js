// create map
const map = L.map('mapid').setView([-27.2161717,-49.6448021], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})


let marker;

// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remove icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Photo add field
function addPhotoField () {
    // select the photo container #images
    const container = document.querySelector('#images')  
    // select the container to double .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // do the clone of the last image added 
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verify if the field it's empty, if yes, do not add to the image container
    const input = newfieldContainer.children[0]

    if(input.value == "") {
      return
    }

    // clear the field before add to images container
    input.value = ""

    // add the clone to container #images
    container.appendChild(newfieldContainer)  
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
      // clear the infos field
      span.parentNode.children[0].value = ""
      return
    }

    // delete the field
    span.parentNode.remove();
}

    // select yes or no
    function toggleSelect(event) {

        // remove the class .active (fron the buttons)
        document.querySelectorAll('.button-select button')
        .forEach (function(button) {
            button.classList.remove('active')
        })

        // insert the class .active in this clicked button
        const button = event.currentTarget
        button.classList.add('active')

        // update my hidden input with the select value
        const input = document.querySelector('[name="open_on_weekends"]')

        input.value = button.dataset.value

    }

    

