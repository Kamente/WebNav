import React from 'react'
import { Button } from './Button';
import './BodySection.css'
import "./Button.css"

function BodySection() {
    return (
        <div className='bodysection-container'>
            <video src='/public/videos/video-2.mp4' autoPlay loop muted></video>
            <h2>Ready for Wonder Land ?</h2>
            <div className='body-btns'>
                <Button className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default BodySection;
