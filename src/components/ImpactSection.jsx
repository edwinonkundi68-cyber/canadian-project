import ImpactCard from "./ImpactCard"
const ImpactSection=() => {
    return(
        <div className="impact-section">
            <h2>Our Impact</h2>
            <p>Since our inception, the Canadian Peace Project has made significant strides in promoting peace and understanding across the country. Through our various initiatives, we have reached thousands of individuals and communities, fostering a culture of harmony and cooperation.</p>
            <div className="impact-cards">
                <ImpactCard     
                    title="Community Engagement"
                    description="We have organized numerous community events and workshops that have brought people together to discuss and promote peace."
                />
                <ImpactCard 

                    title="Educational Programs"        
                    description="Our educational programs have reached schools and universities across Canada, educating young minds about the importance of peace and conflict resolution."
                />
                <ImpactCard 
                    title="Advocacy and Awareness"
                    description="Through our advocacy efforts, we have raised awareness about key issues related to peace and have influenced policy changes at various levels of government."
                />      
            </div>
        </div>
    )
}   
export default ImpactSection    