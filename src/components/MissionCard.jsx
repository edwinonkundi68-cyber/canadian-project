const MissionCard = ({ title, description }) => {
    return (
        <div className="mission-card">  
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}   
export default MissionCard  