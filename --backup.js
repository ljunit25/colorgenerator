let url = "https://www.thecolorapi.com/scheme?hex=FFF102&mode=monochrome-dark&count=6"

let arr = {
  color: "fffffff",
  mode: "monochrome"
}

const colorPicker = document.getElementById("setcolor")
const colorSelection = document.getElementById("colorname")
const getColorbtn = document.getElementById("btn")

colorSelection.addEventListener("change", getMode)
//getColorbtn.addEventListener("click", btnTrigger)
colorPicker.addEventListener("input", getColor)

btn.addEventListener("click", clicBtn)

function getColor(){

  const color = document.getElementById("setcolor").value
  const newColor = color.slice(1, color.length)
  arr.color = newColor

  return

}
function getMode(e){
  const mode = document.getElementById("colorname").value
  arr.mode = mode
  console.log(arr)
  return
}

function clicBtn(){
  if(arr.color == "ffffff" && arr.mode == "monochrome"){
    url = "https://www.thecolorapi.com/scheme?hex=ffffff&mode=monochrome&count=6"

  }else{
    url = `https://www.thecolorapi.com/scheme?hex=${arr.color}&mode=${arr.mode}&count=6`
  }
  document.getElementById("test").innerHTML = url
  return
}



fetch("https://www.thecolorapi.com/scheme?hex=FFF102&mode=monochrome-dark&count=3")
    .then(res => res.json())
    .then(data => {


        let colorArr = data.colors
        let hexArr = []
        let colorHex = []
        let valueArr = []
        for(let i = 0; i < colorArr.length; i++){
            /*console.log(Object.values(colorArr[i]))*/
            /*hexArr.push(Object.values(colorArr[i]))*/
            colorHex.push(Object.values(Object.values(colorArr[i]))[0])
        }


        console.log(colorHex)

    })
