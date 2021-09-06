//This is not my work
//https://twitter.com/nagayama/status/1434530914189524996/
setup = _ => {
    createCanvas(W = 600, W)
    w = W / 2//原点
    s = 2 / 90//解像度
    noStroke()
    background(100)
    for (j = -1; j < 1; j += s)
        for (i = -1; i < 1; i += s) {
            d = j * j + i * i + 1
            fill((j+1)*100,(i+1)*100,100);
            circle(i / d * w + w, j / d * w + w, 3)
        }
}