
export const createBlob = object => {
  const blob = new Blob(object, {type: 'text/plain; charset=utf-8'})
  const link = document.createElement('a')
  link.download = "translation-central.txt"
  link.href =  URL.createObjectURL(blob)
  link.click()
  URL.revokeObjectURL(blob)
  }
