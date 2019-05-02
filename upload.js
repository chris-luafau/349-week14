
(function(window) {
  'use strict';



    let s3Client = new AWS.S3({
      endpoint: "http://127.0.0.1:9000",
      s3ForcePathStyle: true,
      signatureVersion: "v4",
      accessKeyId: "BO6TYNVWT0ZU3JGRQPI7",
      secretAccessKey: "uhrOBrLlL+qqfOmmceiLXS7I75isq2ZaEqPma+BL"

    });

    class UploadForm extends HTMLElement {
      connectedCallback () {
        this.innerHTML =
        `<label>Caption: </label>
          <input type="text" name="caption" id="caption"><br/>
          <input type="file" id="myFile"><br/>
          <input type="submit" value="Submit" id="submit"><br/>`;
      }
    }
    customElements.define('upload-form', UploadForm);


    $("#submit").on("click", function () {
      //let file = $("#myFile").get(0);
      let fileElement = document.getElementById("myFile");
      let file = fileElement.files[0];
      let caption = document.getElementById("caption");

      s3Client.putObject({
        Bucket: "images",
        Key: file.name,
        Body: file,
        ContentLength: file.size,
        ContentType: file.type
      }, function(err, data) {
          console.log(err, data)
      });

      $.ajax({
        method: "POST",
        url: "http://127.0.0.1:3000/images",
        contentType: "application/json",
        data: JSON.stringify({
          caption: caption.value,
          src: `http://127.0.0.1:9000/images/${file.name}`
        })
      });

  });

})(window);
