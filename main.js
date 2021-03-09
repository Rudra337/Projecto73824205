Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:100,  
});

camera = document.getElementById("camera");

Webcam.attach( '#camera')

function take_sanpshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capurted_image" src="'+data_uri+'"/>'
    });
}

console.log('m15 version', m15.version);

classfier = m15.imageClassfier('https://teachablemachine.withgoogle.com/models/Bg1F4uZlG/model.json')

function modelLoaded()
{
    console.log('Model Loaded')
}