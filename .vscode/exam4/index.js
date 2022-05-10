const printBtn = document.getElementById("print");
const chars = "0123456789ABCDEF";

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const rchar = Math.floor(Math.random() * chars.length);
    color += chars.substring(rchar, rchar + 1);
  }
  printBtn.innerHTML = `<h1>${color}</h1>`;
  
  document.getElementById("Bground").style.backgroundColor = color;
}

