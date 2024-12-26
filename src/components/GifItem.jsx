export const GifItem = ({id, title, url}) => {
    return (
        <div className="flex-item">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}