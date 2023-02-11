// const API_KEY = "0T9wYG93CaSfTAJ6bdwGpnCdvvJrV1LSQT2JHY8PQHsEatqXLGZKVB1X";

// // fetch('https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/')
// //     .then((data) =>{
// //         console.log(data)
// //     })

// function getPhotos(images) {
//     images.map(image => {
//       console.log(image)
      
//     })
//  }
//  fetch("https://api.pexels.com/v1/search?query=people",{
//    headers: {
//      Authorization: API_KEY }
//  })
//     .then(resp => {
//       return resp.json()
//     })
//     .then(data => {
//       getPhotos(data.photos)
//     })

let getPhotos;
fetch("https://api.pexels.com/v1/curated?per_page=9")
  .then((response) => response.json())
  .then((data) => {
    getPhotos = data.photos;
    let picture_data = "";
    getPhotos.map((photo) => {
      console.log(photo.photographer);
      picture_data += `<div>
     <img src= ${photo.src.portrait} alt="">
      <p class="">${photo.photographer}</p>
      </div>`;
    });
    document.getElementById("photos").innerHTML = picture_data
})