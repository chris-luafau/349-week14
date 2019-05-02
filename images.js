var btn = document.getElementById("image-template").addEventListener("click",getPost);
var con = 0;
var div = document.getElementById("cardDiv");

function getPost() {
    fetch("http://localhost:3000/images")
    .then((res) => {
        return res.json();
    })
    .then((post) => {
        for(let i = 0; i < 1; i++) {
            div.innerHTML+=`
            <div class="card col-3 m-1 mx-auto">
            <tepmlate id="image-template" class="mt-3 mx-auto image-template">
                <img class="card-img-top" src="${post[con].src}">
                <div class="card-body">
                    <h5 class="card-title">${post[con].id}</h5>
                    <p class="card-text">${post[con].caption}</p>

                </div>
              </template>
            </div>
          `
            con = con + 1;

        };
    })
    .catch((error) => {
        console.log(error);
    });
}
