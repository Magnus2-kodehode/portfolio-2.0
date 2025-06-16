import iconDocument from '/icon/document-black.png'
import CV from '/document/Magnus Kjønnøy - CV.pdf'

export default function ButtonCV() {
  function handleClick() {
    window.open(CV, '_blank')
  }

  return (
    <button onClick={handleClick} className='button-cv'>
      <img src={iconDocument}/>
      CV
    </button>
  )
}