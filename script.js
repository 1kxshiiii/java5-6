function upDate(previewPic) {
    
    console.log("Hàm upDate đã được kích hoạt thành công!");

    console.log("Mô tả ảnh (Alt): " + previewPic.alt);
    console.log("Đường dẫn ảnh (Src): " + previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}
