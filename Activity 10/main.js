const image = changed.png;

function imageExists(image){
    const img = new Image();
    img.src = image;
    return img.complete && img.naturalHeight !== 0;
}