 const countdisplay = document.getElementById('count')
 const countButton = document.getElementById('countButton')

 countButton.addEventListener('click', incrementCount)

let count = 0
 function incrementCount(){
    count=count+1
countdisplay.innerHTML=count
 }


