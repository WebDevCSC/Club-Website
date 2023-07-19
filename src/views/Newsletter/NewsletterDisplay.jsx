import React from 'react'
import { Footer, Navbar } from '../../components'
import "./NewsletterDisplay.css"
import { Link } from 'react-router-dom'
import NewsletterCard from '../../components/NewsletterCard/NewsletterCard'
import { useState, useEffect } from "react";


const NewsletterDisplay = () => {
    const [newsletters, setNewsletters] = useState([]);
    useEffect(() => {
        // Fetch the JSON data when the component mounts
        fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
        try {
            const response = await fetch('./newsletters.json');
            // console.log(response);
            const data = await response.json();
            // console.log(data);
            setNewsletters(data);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    };
    return (
        <>
            <Navbar />
            <div id='main'>
                <h1>Newsletters</h1>
                <div className="all">
                    {newsletters.map(newsletter => (
                        <div key={newsletter.title} className="newsletter-card">
                            <NewsletterCard title={newsletter.title} date={newsletter.date} description={newsletter.description} nlink={newsletter.link} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsletterDisplay