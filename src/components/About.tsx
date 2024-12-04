import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const About = () => {
  const skills = [
    {
      icon: <StorageIcon fontSize="large" />,
      title: 'Data Engineering',
      description: 'Expert in ETL pipelines, data processing, and data analysis with extensive experience in handling large-scale data operations.'
    },
    {
      icon: <BubbleChartIcon fontSize="large" />,
      title: 'Machine Learning',
      description: 'Proficient in implementing ML solutions, from traditional algorithms to deep learning models, with expertise in NLP and computer vision.'
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Development',
      description: 'Skilled in Python, R, PySpark, and various other technologies for building robust data solutions and applications.'
    }
  ];

  return (
    <Container>
      <Box sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
            About Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Lead Data Engineering Consultant with expertise in driving impactful results through data-driven solutions. 
            With a strong academic background including an MSc in Data Science and BSc in Computer Science from Newcastle University, 
            I combine theoretical knowledge with practical experience to deliver innovative solutions in data engineering and machine learning.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <Paper 
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'background.default',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
