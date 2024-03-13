import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, checkinMainImgWithThumbnail} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickThumbnail = () => {
    checkinMainImgWithThumbnail(id)
  }
  return (
    <li className="each-thumbnail-item">
      <button
        type="button"
        className="button-thumbnail"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ThumbnailItem
