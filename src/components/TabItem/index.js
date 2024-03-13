import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const activeClassName = isActive ? 'active-tab-item' : 'tab-item'
  const onClickTab = () => {
    onChangeActiveTabId(tabId)
  }

  return (
    <li className="each-tab-item">
      <button className="tab-btn" type="button" onClick={onClickTab}>
        <p className={activeClassName}>{displayText}</p>
        {isActive && <hr className="separator" />}
      </button>
    </li>
  )
}
export default TabItem
