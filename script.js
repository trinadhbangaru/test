const droparea = document.querySelector('.drop-section')
const listSection = document.querySelector('.list-section')
const listContainer = document.querySelector('.list')
const fileSelector = document.querySelector('.file-selector')
const fileSelectorInput = document.querySelector('.file-selector-input')
fileSelector.onclick = () => fileSelectorInput.click()
fileSelectorInput.onchange = () => {
    [...fileSelectorInput.files].forEach(() => {
        if(typevalidation(file.type)){
            console.log(file)

        }
    })
}
 function typevalidation(type){
    var splittype = type.split('/')[0]
    if(type == 'application/pdf'|| splittype == 'image' || splittype == 'vedio')
        return(true)
}
droparea.ondragover = (e) =>{
    e.preventDefault();
    [...e.dataTransfer.items].forEach((item) =>{
        if(typevalidation(item.type)){
            droparea.classList.add('drag-over-effect')
             

        }
    })
}
droparea.ondragleave = () => {
    droparea.classList.remove('drag-over-effect')
}
