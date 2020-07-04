import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import { TweenLite } from 'gsap'
import Statistic from './Statistic'

let Element = Scroll.Element

const ContentAbout = () => {

    const [enter, setEnter] = useState(true)
    const [users, setUsers] = useState(0)
    const [colors, setColors] = useState(0)
    const [days, setDays] = useState(0)

    const handleProgress = (e) => {
        if (e.progress > 0.3 && e.progress < 1) {
            if (enter) {
                setEnter(false)
                let users = { val: 60 };
                let colors = { val: 0 };
                let days = {val: 0};
                TweenLite.to(users, 4, {
                    val: 100, 
                    roundProps: "val", 
                    ease: 'power1.out', 
                    onUpdate: () => {
                        setUsers(users.val)
                    }
                })
                TweenLite.to(colors, 5, {
                    val: 8, 
                    roundProps: "val", 
                    ease: 'power1.out', 
                    onUpdate: () => {
                        setColors(colors.val)
                    }
                })
                TweenLite.to(days, 3, {
                    val: 16, 
                    roundProps: "val", 
                    ease: 'power1.out', 
                    onUpdate: () => {
                        setDays(days.val)
                    }
                })
            }
        }
    }

    return (
        <Element name="About">
            <ScrollTrigger onProgress={handleProgress}>
                <div className="e-shop_contentabout d-flex">
                    <div className="container d-flex flex-column">
                    <div className="text_right d-flex flex-column">
                        <h1>Why Ultimate</h1>
                        <p>
                            Our team developed The Ultimate Pencil to provide a long term solution for your writing and drawing needs.
                        It is our priority to serve a <span>sharp, thin and stable</span> line of graphite.
                        That's exactly what The Ultimate Pencil contains! Furthermore, it is styled as an ultimate writing machine.
                    </p>
                    <p>
                        The Ultimate Pencil can endure up to two weeks of constant writing. <span>We have tested it!</span>
                    </p>
                    </div>
                    <div className="image_side d-flex justify-content-around align-items-center flex-column flex-md-row">
                        <Statistic number={days} text="DAYS OF CONSTANT WRITING" delay="0s" visible={enter}/>
                        <Statistic number={users} text="MILLION USERS" delay="0.3s" visible={enter}/>
                        <Statistic number={colors} text="COLORS" delay="0.6s" visible={enter}/>
                    </div>
                    </div>
                </div>
            </ScrollTrigger>
        </Element>
    )
}

export default ContentAbout