const colorWritter = document.getElementById("color");
function myFuction(){
    let color = getRandomColor();
    console.log(color);
    document.body.style.backgroundColor = color;
    colorWritter.innerText = color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  