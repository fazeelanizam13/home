export default function Disclaimers({ photographers, usage }) {
  return (
    <div className='disclaimers'>
      <p><strong>Disclaimers:</strong></p>

      <p>The project showcased on this page or any part of it is not intended to be or shall be used for commercial purposes.</p>
      <p>I do not own any of the images used for the moodboard; all credit goes to the respected owners. Images used {usage} thanks to the photographer/s on <a href="https://unsplash.com/s/photos/table-and-book?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>:</p>

      <p>
        {
          photographers.map(({ href, name }, index) => <a href={href}>{ `${name}${index !== photographers.length - 1 ? ', ' : ''}` }</a>)
        }
      </p>
    </div>
  )
}