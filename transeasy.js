
const tableRows = [...document.getElementsByTagName("tr")];
while (!tableRows[0].className) {
  tableRows.shift();
  // because since the first is shifted...
}

const getID = (elem) => elem.getElementsByTagName("strong")[1].innerText.split(' ')[2]
const getSource = (id) => document.getElementById('text_en_'+ id).innerText
const getPreviousTranslation = (elem) =>   {
  const i = elem.getElementsByTagName("pre")
  return i.length ? i.innerText : undefined
}
// for some reason, the translations served with
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
