let canvas=document.getElementBYId("pixelcanvas");
let height=document.getElementBYId("inputHeight");
let Width=document.getElementBYId("inputwidth");
let sizepicker=document.getElementBYId("sizepicker");
let color=document.getElementBYId("colorpicker");

color.addEventlistener("click" , function(){});

sizepicker.onsubmit=function(event){
  event.preventDefault();
   clearGrid();
  makeGrid();
};
function makeGrid() {
  for(let r=0; r<height.value; r++){
    const row = canvas.insertRow(r);
    for(let c=0; c<width.value; c++){
      const cell = row.insertcell(c);
      cell.addEventListener("click" , fillsquare);
    }
  }
}
function clearGrid(){
  while(canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
  } 
}
function fillsquare () {
  this.setAttribute("style",`background-color: ${color.value}`);
}
