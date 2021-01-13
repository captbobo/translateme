
const tableRows = [...document.getElementsByTagName("tr")];
while (!tableRows[0].className) {
  tableRows.shift();
}

const tasks = tableRows.map( elem => {
  const task = new Task(elem)
  task.setTargetText()
  return task
});

// uncomment to activate
// download(tasks)

const getID = (elem) => elem.getElementsByTagName("strong")[1].innerText.split(' ')[2]
const getSource = (id) => document.getElementById('text_en_'+ id).innerText
const getPreviousTranslation = (elem) =>   {
  const i = elem.getElementsByTagName("pre")
  return i.length ? i.innerText : undefined
}

// for some reason, the translations served with
// Machine Translated versions, stored as comments
// inside the element
const getComment = (elem) => {
  const comment = [...elem.childNodes].find( child => child.nodeType === 8 );
  return ((comment && comment.nodeValue) && comment.nodeValue[0] !== " ") ?
    comment.nodeValue : undefined;
}

function Task(elem) {
  this.id = getID(elem),
  this.sourceText = getSource(this.id),
  this.pre = getPreviousTranslation(elem)
  this.comment = getComment(elem),
  this.setTargetText = (target = this.comment || this.pre) => {
    document.getElementById('edit_'+this.id).innerText = target
  }
}

// creates and downloads pretty printed JSON of data
function download(object) {
  const array = [JSON.stringify(object, null, 2)]
  const blob = new Blob(array, {type: 'text/plain; charset=utf-8'})
  const link = document.createElement('a')
  link.download = "translation-central.txt"
  link.href =  URL.createObjectURL(blob)
  link.click()
  URL.revokeObjectURL(blob)
  }
