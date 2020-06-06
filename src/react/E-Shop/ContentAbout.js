import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import { TweenLite } from 'gsap'

let Element = Scroll.Element

const ContentAbout = () => {

    const [enter, setEnter] = useState(true)
    const [number, setNumber] = useState(0)

    const handleProgress = (e) => {
        console.log(e)
        if (e.progress > 0.3 && e.progress < 1) {
            if (enter) {
                setEnter(false)
                let number = { val: 60 };
                TweenLite.to(number, 2.5, {
                    val: 100, 
                    roundProps: "val", 
                    ease: 'power1.out', 
                    onUpdate: () => {
                        setNumber(number.val)
                    }
                })
            }
        }
    }

    return (
        <Element name="About">
            <ScrollTrigger onProgress={handleProgress}>
                <div className="e-shop_contentabout d-flex flex-column flex-md-row">
                    <div className="image_side d-flex col-12 col-md-6 justify-content-center">
                        <div className="content d-flex justify-content-center align-items-center flex-column" style={enter?{opacity: 0, top: "20%"}:{opacity: 1, top: "-10%"}}>
                            <h1>{number}</h1>
                            <h4>MILLION USERS</h4>
                        </div>
                    </div>
                    <div className="text_right d-flex col-12 col-md-6 flex-column justify-content-center">
                        <h1>Why Ultimate</h1>
                        <p>
                            Our team developed The Ultimate Pencil to provide a long term solution for your writing and drawing needs.<br></br>
                        It is our priority to serve a <span>sharp, thin and stable</span> line of graphite.<br></br>
                        That's exactly what The Ultimate Pencil does!
                    </p>
                    </div>
                </div>
            </ScrollTrigger>
        </Element>
    )
}

export default ContentAbout