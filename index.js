var getPixels = require("get-pixels");

var sampleRatio = 10;
var microText = ['小', '青', '青'];

function getText(cur, total) {
    var partition = microText.length;
    var idx = Math.floor((cur / total) * partition);
    return microText[idx];
}

function displayImages (pixels) {
    for (var i = 0; i < pixels.shape[1]; i += sampleRatio) {
        //console.log('Display row %s', i);
        for (var j = 0; j < pixels.shape[0];  j += sampleRatio) {
            var text = getText(j, pixels.shape[0]);
            if (pixels.get(j, i, 0) > 0) {
                process.stdout.write('  ');
            } else {
                process.stdout.write(text);
            }
        }
        process.stdout.write('\n');
    }
}

getPixels(process.argv[2], function (err, pixels) {
    if (err) {
        console.log("Bad image path");
        return;
    }
    displayImages(pixels);
});

