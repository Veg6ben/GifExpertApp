export const GifItems = ({title, url}) => {

    console.log({title, url})
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
