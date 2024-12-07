const ele = document.getElementById("ele1") 

const pintar = (color = 'green') =>  ele.style.backgroundColor = color

pintar()

ele.addEventListener("click", () => pintar('yellow')
)

