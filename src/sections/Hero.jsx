import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, ArrowRight, MapPin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) setStarted(true);
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const num = parseInt(end);
        let start = 0;
        const step = num / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= num) { setCount(num); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const Hero = () => {
    const stats = [
        { value: '450', suffix: '+', label: 'DSA Problems' },
        { value: '95', suffix: '%', label: 'Model Accuracy' },
        { value: '3', suffix: '+', label: 'Hackathons' },
        { value: '1', suffix: ' Yr', label: 'Experience' },
    ];

    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 24px 60px', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ width: '100%' }}>
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '100px', marginBottom: '32px' }}
                >
                    <div className="status-dot" />
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#10b981' }}>Available for opportunities</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.03em', marginBottom: '20px', color: '#f0f0f5' }}
                >
                    Aryan <span className="gradient-text">Gupta</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: '17px', color: 'rgba(240,240,245,0.55)', maxWidth: '560px', lineHeight: '1.7', marginBottom: '36px' }}
                >
                    <span style={{ color: '#4f6ef7', fontWeight: '600' }}>Information Technology</span> student & ML Engineer specializing in{' '}
                    <span style={{ color: '#818cf8' }}>LLMs</span>,{' '}
                    <span style={{ color: '#22d3ee' }}>RAG pipelines</span>, and{' '}
                    <span style={{ color: '#f0f0f5' }}>scalable AI products</span>.
                    Building the future of intelligent systems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '56px' }}
                >
                    <a href="#projects" className="btn-primary">
                        View Projects <ArrowRight size={15} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Get in Touch
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '8px' }}>
                        {[
                            { icon: <Github size={18} />, href: portfolioData.contact.github },
                            { icon: <Linkedin size={18} />, href: portfolioData.contact.linkedin },
                            { icon: <Code size={18} />, href: portfolioData.contact.leetcode },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                style={{ color: 'rgba(240,240,245,0.4)', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#f0f0f5'}
                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,245,0.4)'}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px' }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            padding: '0 32px 0 0', marginRight: '32px',
                            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                        }}>
                            <div style={{ fontSize: '28px', fontWeight: '800', color: '#f0f0f5', letterSpacing: '-0.02em' }}>
                                <CountUp end={stat.value} />{stat.suffix}
                            </div>
                            <div style={{ fontSize: '12px', color: 'rgba(240,240,245,0.4)', fontWeight: '500', marginTop: '2px' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '24px', color: 'rgba(240,240,245,0.3)', fontSize: '13px' }}
                >
                    <MapPin size={13} />
                    <span>Bhopal, India · Remote Available</span>
                    <span style={{ margin: '0 8px' }}>·</span>
                    <Mail size={13} />
                    <span>{portfolioData.contact.email}</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
