// import React from 'react'
import jenkinsButler from '../../assets/jenkins-butler.svg'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './landing-page.css'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'

const StatsLink = styled(NavLink)({
    display: 'block',
    width: 'full',
    marginBottom: '1rem',
    background: '#939fa1',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Montserrat, Times, “Times New Roman”, serif',
    '&:hover': {
        color: 'blue',
    },
    boxShadow: '1px 4px 5px 0 rgba(0, 0, 0, 0.2)',
    '@media (max-width: 768px)': {
        fontSize: '0.8rem',
        marginBottom: '0.5rem',
    },
})

export default function landingPage() {
    return (
        <>
            <NavBar />
            <Box className="background">
                <a href="https://www.jenkins.io" target="_blank" rel="noopener noreferrer">
                    <img src={jenkinsButler} className="logo" alt="Jenkins Butler Logo" />
                </a>
                <Box sx={{ textAlign: 'center', color: 'black', padding: '0.5rem', zIndex: '999' }}>
                    <Box
                        sx={{
                            margin: '3rem 0 2.3rem 0',
                            '@media (max-width: 768px)': {
                                marginTop: '1.2rem',
                            },
                        }}
                    >
                        <Typography variant="h3" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                            Jenkins Infra-Statistics
                        </Typography>
                        <Typography sx={{ fontFamily: 'Montserrat' }}>
                            Graphical representation of numbers and information around Jenkins
                        </Typography>
                    </Box>
                    <nav className="stats">
                        <StatsLink to={'/statistics'}>Statistics in Detail</StatsLink>
                        <StatsLink to={'/'}>Plugin Installation Trend</StatsLink>
                        <StatsLink to="https://www.jenkins.io">Plugin Versions by Jenkins Version</StatsLink>
                        <StatsLink to="https://www.jenkins.io">Jenkins Plugin Dependency Graph</StatsLink>
                    </nav>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
