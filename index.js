let arr = {
    color: "ffffff",
    mode: "monochrome",
    url: "https://www.thecolorapi.com/scheme?hex=ffffff&mode=monochrome&count=5",
    scheme: []
}
const colorPicker = document.getElementById("setcolor")
const colorSelection = document.getElementById("colorname")
const getColorbtn = document.getElementById("btn")
let getFooter = document.getElementById("foot")

colorPicker.addEventListener("input", getColor)
function getColor(){
  const color = document.getElementById("setcolor").value
  const newColor = color.slice(1, color.length)
  arr.color = newColor
  return
}

colorSelection.addEventListener("change", getMode)
function getMode(){
  const mode = document.getElementById("colorname").value
  arr.mode = mode
  return
}

getColorbtn.addEventListener("click", getUrl)
function getUrl(e){
    arr.scheme = []
  e.preventDefault()
  if(arr.color == "ffffff" && arr.mode == "monochrome") {
      arr.url = `https://www.thecolorapi.com/scheme?hex=ffffff&mode=monochrome&count=5`
      //console.log(arr.url)
  } else{
      arr.url = `https://www.thecolorapi.com/scheme?hex=${arr.color}&mode=${arr.mode}&count=5`
      //console.log(arr.url)
      //console.log(arr)
  }

  fetch(arr.url)
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
        }//console.log(colorHex)

        
        for(let i = 0; i < colorHex.length; i++) {
        arr.scheme.push(Object.values(colorHex[i])[0])
        }//console.log(arr.scheme)


        const colorHexHtml = arr.scheme.map(function(color, i=0){
        i++
        return `<div id="sch${i}" class="row-1">${color}</div>`
        }).join("")
        getFooter.innerHTML = colorHexHtml
        renderCss()

        function renderCss(){
            document.getElementById("row-1").style.backgroundColor = arr.scheme[0];
            document.getElementById("row-2").style.backgroundColor = arr.scheme[1];
            document.getElementById("row-2").style.backgroundColor = arr.scheme[2];
            document.getElementById("row-4").style.backgroundColor = arr.scheme[3];
            document.getElementById("row-5").style.backgroundColor = arr.scheme[4];


        }

    })


}
