import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" color="primary">
            Hi, I'm
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            Antreas Kasiotis
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
            Data Scientist - Data Engineer
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mb: 4, textAlign: 'center' }}>
            Experienced in Data Engineering, Machine Learning, and Data Analysis. 
            Passionate about creating impactful solutions and driving innovation in data-driven technologies.
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              href="https://github.com/kasiotis"
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              href="https://linkedin.com/in/antreaskasiotis/"
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
