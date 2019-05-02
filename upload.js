
let s3Client = new AWS.S3({
  endpoint: 'http://10.67.66.72:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: 'E46VPBJX0SN08957WXP4',
  secretAccessKey: '+APqL7BGwF4DkL3dQZ4T3Qbnr1eyQYh5k1KqFaPL'
});
/*
function upload() {
  var caption = document.getElementById("caption");
  var file = document.getElementById("myFile").files[0];
  let reader = new FileReader();
  reader.readAsBinaryString(file);

  console.log(caption);
  console.log(myFile);
  s3Client.putObject({
    Bucket: 'images',
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
  }, function(err, data) {
    console.log(err, data)
  });
}
*/
document.getElementById('up').onclick = function () {
  var file = document.getElementById("myFile").files[0];
  let reader = new FileReader();
  reader.readAsBinaryString(file);
  s3Client.putObject({
    Bucket: 'cat',
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
  }, function(err, data) {
    console.log(err, data)
  });
}
