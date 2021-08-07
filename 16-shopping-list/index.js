const listInputEl = document.querySelector( "#input" )
const form = document.querySelector( "form" )
const respMsg = document.querySelector( "#response-msg" )
const buttonClear = document.querySelector( "#clear-btn" )
const listContainer = document.querySelector( ".list-container" )
const buttonAdd = document.querySelector( "#add-btn" )

let isEditing = false
let editId = ""

let list = [
  {
    title: "1 Dozen Eggs",
    id: "5407a17a-fee6-44d4-9b62-086a017b30c1"
  },
  {
    title: "1 Kg Onions",
    id: "398c7372-c865-4e3b-92a4-a4cbee59bb88"
  },
  {
    title: "1 Pair of socks",
    id: "62d72858-36dd-49c4-9894-8fc0b123b79a"
  }
]

ShowList()

form.onsubmit = ( e ) => {
  e.preventDefault()
  if ( listInputEl.value == "" || listInputEl.value == null ) {
    ShowRespMsg( "error", "Please Enter something first" )
    return
  }
  if ( isEditing ) {
    const item = list.find( item => item.id == editId )
    item.title = listInputEl.value
    buttonAdd.innerHTML = "Add"
    isEditing = false
    ShowRespMsg( "success", "Item Updated successfully" )
  } else {
    const id = new Date().getTime().toString()
    list.push( {
      id,
      title: listInputEl.value
    } )
    ShowRespMsg( "success", "New Item Added" )
  }
  listInputEl.value = ""
  ShowList()
}


function ShowList () {
  listContainer.innerHTML = ""
  list.forEach( item => {
    const newItem = document.createElement( "div" )
    let attr = document.createAttribute( "data-id" )
    attr.value = item.id
    newItem.setAttributeNode( attr )
    newItem.classList.add( "list-item" )
    newItem.innerHTML = `
        <div class="dot"></div>
        <p id="list-item-title">${item.title}</p>
        <div class="actions">
          <span class="material-icons" id="edit">edit</span>
          <span class="material-icons" id="delete">delete</span>
        </div>
        `
    const editBtn = newItem.querySelector( "#edit" )
    const deleteBtn = newItem.querySelector( "#delete" )

    editBtn.onclick = editListItem
    deleteBtn.onclick = deleteListItem
    listContainer.appendChild( newItem )



  } )


  if ( list.length >= 1 ) {
    // show clear button
    buttonClear.style.display = "inline"
  } else {
    // show clear button
    buttonClear.style.display = "none"
  }
}


function editListItem ( e ) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  editId = id
  listInputEl.value = list.find( item => item.id == id ).title
  buttonAdd.innerHTML = "Edit"
  isEditing = true
}

function deleteListItem ( e ) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list = list.filter( item => item.id != id )
  ShowRespMsg( "success", "Item deleted successfully" )
  ShowList()
}


function ShowRespMsg ( type, msg ) {
  respMsg.style.display = "none"
  respMsg.innerHTML = msg
  respMsg.classList.toggle( type == "error" ? "error-resp" : "success-resp" )
  respMsg.style.display = "block"

  setTimeout( () => {
    respMsg.innerHTML = ""
    respMsg.classList.remove( "error-resp" )
    respMsg.classList.remove( "success-resp" )
    respMsg.style.display = "none"
  }, 2000 )

}

buttonClear.onclick = () => {
  list = []
  ShowList()
  ShowRespMsg( "success", "All item are deleted" )
}