
var client = new.minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'BO6TYNVWT0ZU3JGRQPI7',
    secretKey: 'uhrOBrLlL+qqfOmmceiLXS7I75isq2ZaEqPma+BL' 

});

function upload() {
    var caption = document.getElementById("caption");
    var myFile = document.getElementById("myFile");

    $('#upload').onclick('submit',function())
    client.putObject('images', function(error, data) {
        return console.log(error, data)
    })

}
