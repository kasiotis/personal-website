import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const About = () => {
  const skills = [
    {
      icon: <StorageIcon fontSize="large" />,
      title: 'Data Engineering',
      description: 'Specialized in building scalable data pipelines, ETL processes, and data warehousing solutions. Experienced with cloud platforms and big data technologies.'
    },
    {
      icon: <BubbleChartIcon fontSize="large" />,
      title: 'Machine Learning',
      description: 'Deep expertise in computer vision, NLP, and time series analysis. Experienced in developing and deploying production-ready ML models for real-world applications.'
    },
    {
      icon: <AnalyticsIcon fontSize="large" />,
      title: 'Data Analysis',
      description: 'Strong foundation in statistical analysis, data visualization, and exploratory data analysis. Proficient in deriving actionable insights from complex datasets.'
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Development',
      description: 'Proficient in Python, R, and various frameworks for building data-driven applications. Experience with web development using React and modern JavaScript.'
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: 'Research',
      description: 'Published researcher in high-performance computing and energy optimization. Experience in empirical research, stochastic modeling, and performance analysis.'
    },
    {
      icon: <EnergySavingsLeafIcon fontSize="large" />,
      title: 'Sustainability',
      description: 'Passionate about green computing and sustainable IT practices. Research focus on energy-efficient systems and environmental impact reduction.'
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
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '800px' }}>
            As a Lead Data Engineering Consultant, I specialize in transforming complex data challenges into efficient, 
            scalable solutions. My journey in technology is driven by a passion for innovation and a commitment to 
            sustainable computing practices.
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '800px' }}>
            With an MSc in Data Science and BSc in Computer Science from Newcastle University, I bring a unique blend of 
            theoretical knowledge and practical expertise. My work spans from computer vision applications in healthcare to energy optimization in IT infrastructure. My research work in energy-aware management systems, 
            published in the Practical Applications of Stochastic Modelling conference, demonstrates my commitment to 
            sustainable IT practices. Whilst my experience at Crownpeak (formerly Attraqt) has been invaluable in 
            refining my skills in ETL development and domain expertise in the E-commerce industry.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            I'm particularly interested in the applications of machine learning, developing solutions 
            that not only solve complex problems but also consider their environmental impact, efficiency and sustainability. 
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
                    backgroundColor: 'background.paper'
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
