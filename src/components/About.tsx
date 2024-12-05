import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import WorkIcon from '@mui/icons-material/Work';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DataObjectIcon from '@mui/icons-material/DataObject';

const About = () => {
  const introSections = [
    {
      icon: <WorkIcon fontSize="large" />,
      title: "Professional Journey",
      content: "As a Lead Data Engineering Consultant, I specialize in transforming complex data challenges into efficient, scalable solutions. My journey in technology is driven by a passion for innovation and a commitment to sustainable computing practices."
    },
    {
      icon: <SchoolOutlinedIcon fontSize="large" />,
      title: "Academic Background",
      content: "With an MSc in Data Science and BSc in Computer Science from Newcastle University, I bring a unique blend of theoretical knowledge and practical expertise. My work spans from computer vision applications in healthcare to energy optimization in IT infrastructure. My research work in energy-aware management systems, published in the Practical Applications of Stochastic Modelling conference, demonstrates my commitment to sustainable IT practices. Whilst my experience at Crownpeak (formerly Attraqt) has been invaluable in refining my skills in ETL development and domain expertise in the E-commerce industry."
    },
    {
      icon: <LightbulbOutlinedIcon fontSize="large" />,
      title: "Areas of Interest",
      content: "I'm particularly interested in the applications of machine learning, developing solutions that not only solve complex problems but also consider their environmental impact, efficiency and sustainability."
    }
  ];

  const techStack = {
    languages: {
      icon: <DataObjectIcon fontSize="large" />,
      title: "Programming Languages",
      items: ['Python', 'R', 'SQL', 'TypeScript/JavaScript', 'Java']
    },
    libraries: {
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      title: "Libraries & Frameworks",
      items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Tidyverse', 'ggplot2', 'React', 'Material-UI']
    },
    tools: {
      icon: <BuildOutlinedIcon fontSize="large" />,
      title: "Tools & Platforms",
      items: ['PowerBI', 'Tableau', 'Git', 'Docker', 'AWS', 'Azure']
    },
    etlTools: {
      icon: <StorageOutlinedIcon fontSize="large" />,
      title: "ETL & Data Integration",
      items: ['Pentaho Data Integration', 'Apache Hop', 'Apache Spark', 'Apache Airflow']
    }
  };

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
          <Typography variant="h3" component="h2" sx={{ mb: 6 }}>
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {introSections.map((section, index) => (
            <Grid item xs={12} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box sx={{ color: 'primary.main', mt: 1 }}>
                      {section.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                        {section.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {section.content}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Tech Stack
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {Object.values(techStack).map((category, index) => (
            <Grid item xs={12} md={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    height: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                    <Box sx={{ color: 'primary.main' }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h6">
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.items.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          bgcolor: 'background.default',
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          fontSize: '0.9rem',
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Skills & Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
              >
                <Paper 
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderRadius: 2
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
