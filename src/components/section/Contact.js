import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    const [state, handleSubmit] = useForm("mknkqpjj");
    if (state.succeeded) {
        return <p>Thanks for your inquiry. I'll be sure to get back with you in no time.</p>;
    }

    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                             />
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        <button style={{cursor: 'pointer'}} type="submit" disabled={state.submitting}><label style={{cursor: 'pointer'}} id="not-dark">Send Message</label></button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )
    
}

export default Contact
