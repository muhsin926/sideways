'use-client'
import React, { useRef } from 'react';
import styles from './Achievements.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { 
    number: '400+', 
    label: 'Beautiful Events',
    image: '/images/beautiful-event.jpg' // Table setup with flowers image
  },
  { 
    number: '60+', 
    label: 'Successful Activations',
    image: '/images/services/BTL ACTIVATIONS.jpg' // Wedding ceremony setup image
  },
  { 
    number: '50+', 
    label: 'Happy Clients',
    image: '/images/happy-client.avif' // People celebrating image
  },
];

const Achievements = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  
  useGSAP(() => {
    // Set initial state for all cards
    cardsRef.current.forEach(card => {
      gsap.from(card, {
        opacity: 1,
        rotateX: 40,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%", 
          end: "top 20%",
          scrub: 2,
          toggleActions: 'play play reverse reverse',
        }
      })
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });
  
  return (
    <div className={styles.container} id='achievements' ref={containerRef} role="region" aria-label="Our achievements">
      {achievements.map((achievement, index) => (
        <div 
          key={index} 
          className={styles.achievementCard}
          ref={el => cardsRef.current[index] = el}
          role="article"
          aria-labelledby={`achievement-${index}`}
        >
          <img 
            src={achievement.image} 
            alt={`Illustration for ${achievement.label}`}
            className={styles.backgroundImage}
            aria-hidden="true"
          />
          <div className={styles.content}>
            <div className={styles.number} id={`achievement-${index}`} role="text">{achievement.number}</div>
            <div className={styles.label} role="text">{achievement.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements; 