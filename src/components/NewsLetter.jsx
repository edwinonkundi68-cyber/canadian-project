const NewsLetter = () => {
    return (
        <div className="newsletter-section">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest news, events, and initiatives from the Canadian Peace Project. Join our community of peace advocates and be part of the movement for a better Canada.</p>
            <form className="newsletter-form">
                <input type="email" placeholder="Enter your email address" required />  
                <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
        </div>
    )
}       
export default NewsLetter   