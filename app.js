var list = document.getElementById('list')

function func1(){

    // INPUT BUTTON
    var inputItem = document.getElementById('addtext')
    var li = document.createElement('li')
    var liText = document.createTextNode(addtext.value)


    // DELETE BUTTON
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute('class' , 'btn2')
    delbtn.setAttribute('onclick' , 'deleteitem(this)')
    delbtn.appendChild(deltext)

    // EDIT BUTTON

    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.appendChild(editText)
    editbtn.setAttribute('class' , 'btn3')
    editbtn.setAttribute('onclick' , 'edititem(this)')

    li.appendChild(delbtn)
    li.appendChild(editbtn)


    list.appendChild(li)
    li.appendChild(liText)
    addtext.value = ''
}

function deleteitem(e){
    e.parentNode.remove()
}

function edititem(e){
    var val =  e.parentNode.childNodes[2].nodeValue;
    var editvalue = prompt('Enter Edit Value', val)
    e.parentNode.childNodes[2].nodeValue = editvalue      
  }

function delall(){
  list.innerHTML = ""
}

