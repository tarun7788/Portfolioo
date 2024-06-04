import './project.css';
import React from 'react'
import {Link} from 'react-scroll';


export default function Project() {
    return (
        <div id="projects" class="background-alt">
        <h2 class="heading">Projects</h2>
        <div class="container">
            <div class="row">
                <div class="project shadow-large">
                    <div class="project-image">
                        <img className='photo' src={require('./image copy 2.png')} />
                    </div>
                    <div class="project-info">
                        <h3>Rent | It</h3>
                        <p>
                            "Rent | It" revolutionizes clothing rental with our MERN stack website. Browse, select, and rent stylish attire hassle-free. <br/> Experience seamless transactions and trendy wardrobe updates with just a few clicks. Join the sustainable fashion movement today!
                        </p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                <div class="project shadow-large" id='middle'>
                    <div class="project-info" id='middle1'>
                        <h3>Patient Review Analysis Model|Python, ML, Pandas, NLTK, SKlearn.</h3>
                        <p>
                        • Collected data using apify of all the hospitals in a particular city with attributes like Name,
                        Reviews, ratings and location. <br/> • Created a NLP based Machine Learning model then preprocessed the data and feed it to the model
                        to analyze the reviews of patients on that hospital and visualize the results using python libraries.<br/>
                        • This model can be used by the hospital to know the area of improvement.<br/>
                        • This can also be used by the public bodies in the healthcare sector to create a ranking wise list of
                            hospitals in the City.
                        </p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                <div class="project shadow-large">
                    <div class="project-image">
                        <img  className='photo' src={require('./image copy.png')}  />
                    </div>
                    <div class="project-info">
                        <h3>Portfolio</h3>
                        <p>
                            The portfolio website project aims to create a captivating online presence that effectively communicates my skills, projects, and experiences to potential clients or employers.</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    )
}
