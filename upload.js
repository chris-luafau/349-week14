
// var client = new Minio.Client({
//     endPoint: 'localhost',
//     port: 9000,
//     useSSL: false,
//     accessKey: 'BO6TYNVWT0ZU3JGRQPI7',
//     secretKey: 'uhrOBrLlL+qqfOmmceiLXS7I75isq2ZaEqPma+BL'
//
// });

let s3Client = new AWS.S3({
  endpoint: "http://127.0.0.1:9000",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  accessKeyId: "BO6TYNVWT0ZU3JGRQPI7",
  secretAccessKey: "uhrOBrLlL+qqfOmmceiLXS7I75isq2ZaEqPma+BL"

});

// function upload() {
//     var caption = document.getElementById("caption");
//     var myFile = document.getElementById("myFile");
//     console.log(caption);
//     console.log(myFile);
//     client.putObject('images', caption, myFile, function(error, data) {
//         return console.log(error, data);
//     })
//
// }


s3Client.putObject({
  Bucket: "images",
  Key: file.name,
  Body: file,
  ContentLength: file.size,
  ContentType: file.type
}, function(err, data) {
    console.log(err, data)
});
