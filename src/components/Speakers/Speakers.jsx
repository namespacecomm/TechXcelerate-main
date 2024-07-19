import React from 'react';
import './Speakers.css';
import { LinkedIn, YouTube } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X'
import speakers from './speakersData.js'

const Speakers = () => {
    return (
        <section id='speakers'>
            <div className="speakers-container">
                <h1 className='pink-red-text pb-4 pt-6 text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer'
                    style={{
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 700,
                        textAlign: "center",
                    }}>
                    Featured Speakers
                </h1>
                <div className="speakers-list">
                    {speakers.map(speaker => (
                        <div key={speaker.id} className="speaker-card">
                            <div className="speaker-image">
                                <img src={speaker.photo} alt={speaker.fullName} />
                                <div className="social-links">
                                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                                        <XIcon />
                                    </a>
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                                        <LinkedIn />
                                    </a>
                                    <a href={speaker.youtube} target="_blank" rel="noopener noreferrer">
                                        <YouTube />
                                    </a>
                                </div>
                            </div>
                            <div className="speaker-details">
                                <h3>{speaker.fullName}</h3>
                                <p>{speaker.designation}</p>
                                <p>{speaker.note}</p>
                                <p><strong>Date and Time:</strong> {speaker.workshopDateTime}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
