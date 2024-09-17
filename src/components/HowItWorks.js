import React, { useEffect } from 'react';
import '../App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Flow1 from '../assets/Flow1.png';
import Flow2 from '../assets/Flow2.png';
import Flow3 from '../assets/Flow3.png';

const HowItWorks = () => {
    useEffect(() => {
        // Register ScrollTrigger with gsap
        gsap.registerPlugin(ScrollTrigger);

        const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)');
        const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');
        const allPhotos = gsap.utils.toArray('.desktopPhoto');

        gsap.set(photos, { yPercent: 101 });

        let mm = gsap.matchMedia();

        mm.add('(min-width: 600px)', () => {
            ScrollTrigger.create({
                trigger: '.gallery',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.right',
            });

            details.forEach((detail, index) => {
                let headline = detail.querySelector('h1');
                let animation = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 });
                ScrollTrigger.create({
                    trigger: headline,
                    start: 'top 80%',
                    end: 'top 50%',
                    animation: animation,
                    scrub: true,
                    markers: false,
                });
            });
        });

        // Cleanup function
        return () => {
            let triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => trigger.kill()); // Correct cleanup method for all ScrollTriggers
            mm.revert(); // Reverts all matchMedia triggers
        };
    }, []);


    return (
        <section className='bg-black text-center'>
              <h2 className='text-4xl font-bold text-white text-center '>How it Works</h2>
            <div className="gallery">
                <div className="left">
                    <div className="desktopContent">

                        <div className="desktopContentSection">
                            <h1 >
                                Upload & Parse Resumes</h1>
                            <p >Upload resumes in bulk or individually.candidhr parses and stores resumes in a searchable repository.</p>
                        </div>
                        <div className="desktopContentSection">
                            <h1>AI Screening & Ranking</h1>
                            <p>The AI matches resumes with job descriptions and ranks candidates, providing a shortlist in seconds.</p>
                        </div>
                        <div className="desktopContentSection">
                            <h1>Conduct Assessments & Interviews</h1>
                            <p>Set up personality screenings with our video/audio interview tools and evaluate technical tests, all within the platform.</p>
                        </div>
                        <div className="desktopContentSection">
                            <h1>AI Screening & Ranking</h1>
                            <p>The AI matches resumes with job descriptions and ranks candidates, providing a shortlist in seconds.</p>
                        </div>
                    </div>
                </div>

                <div className="right -scroll">
                    <div className="desktopPhotos">
                        <div className="desktopPhoto red">
                            <img src={Flow1} alt="Step 1" className='mt-24 p-4' />
                        </div>
                        <div className="desktopPhoto green">
                            <img src={Flow2} alt="Step 1" className='mt-24 p-4' />
                        </div>
                        <div className="desktopPhoto pink">
                            <img src={Flow3} alt="Step 1" className='mt-24 p-4' />

                        </div>
                        <div className="desktopPhoto blue">
                            <img src={Flow1} alt="Step 1" className='mt-24 p-4' />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HowItWorks;