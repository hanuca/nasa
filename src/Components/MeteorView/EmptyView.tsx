import "./MeteorView.css"

const EmptyView = () => {
    return (
        <div className="empty-view">
            <div> There is no meteors to present. </div>
            <div> Please try to use filter. </div>
        </div>)
}

export default EmptyView;