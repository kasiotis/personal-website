import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Portfolio = () => {
  const projects = [
    {
      title: 'Towards Energy-Aware Management of Shared Printers',
      description: 'Research published in Practical Applications of Stochastic Modelling conference. Proposed and evaluated optimization strategies for printer energy policy management through forcasted demand, achieving 4.8% reduction in operating time and 35% reduction in state transitions. The work addresses energy efficiency in institutional IT infrastructure.',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-44053-3_6',
      tech: ['Stochastic Modelling', 'Data Analysis', 'Machine Learning', 'Time Series', 'Empirical Research', 'R&D', 'Simulation', 'Energy Management', 'Sustainability'],
      isPublication: true
    },
    {
      title: 'Skin Cancer dermoscopic image Classification',
      description: 'Implementation of three different image classifiers (CNN, LSTM, SVM) for skin cancer detection using the HAM10000 dataset. Comparative analysis of classifier performance with grayscale and RGB images. The project demonstrates practical application of image classification in computer vision.',
      link: 'https://github.com/kasiotis/Skin-Cancer-MNIST-HAM10000',
      tech: ['Python', 'CNN', 'LSTM', 'SVM', 'Empirical Research', 'Image Classification', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'LLM-Powered CV and Job Matching System',
      description: 'An AI application using an LLM to compare CVs with job descriptions in order to find the best matching profiles. This innovative Proof of Concept (PoC) demonstrates the potential of LLMs in the field of job matching. The PoC streamlines the recruitment process by analyzing candidate resumes against job requirements, using the heuristics of LLM models.',
      link: 'https://github.com/kasiotis/resume-to-job-checker',
      tech: ['Python', 'LLM', 'AI', 'Web Application', 'Streamlit', 'Prompt Engineering'],
    },
    {
      title: 'Bird Species Classifier',
      description: 'Developed an image classification model using transfer learning from pre-trained models, fine-tuned on a dataset of bird species. This project demonstrates practical application of transfer learning and fine-tuning in computer vision.',
      link: 'https://github.com/kasiotis/bird-image-classifier-task',
      tech: ['Python', 'Transfer Learning', 'Fine-tuning', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'LSTM Language Model',
      description: 'Developed an autocomplete language model using LSTM architecture that mimics the writing style of specific books. The model learns patterns and structure from the training text to generate contextually relevant suggestions.',
      link: 'https://github.com/kasiotis/language-model-task',
      tech: ['Python', 'NLP', 'LSTM', 'Deep Learning',]
    },
    {
      title: 'TeraScope Supercomputer Analysis',
      description: 'Investigation into software system and hardware performance of supercomputers running Terapixel visualization applications. Includes comprehensive performance analysis and optimization strategies.',
      link: 'https://github.com/kasiotis/TeraScope-Supercomputer-performance-EDA',
      tech: ['R', 'Cloud Computing', 'Performance Analysis', 'CRISP-DM']
    },
    {
      title: 'Sorting Algorithms Implementation',
      description: 'Comprehensive implementation and comparison of various sorting algorithms. This project demonstrates algorithm efficiency and performance analysis.',
      link: 'https://github.com/kasiotis/Sorting-Algorithms',
      tech: ['Java', 'Algorithms', 'Data Structures']
    },
    {
      title: 'Data Management & EDA',
      description: 'Comprehensive data management and exploratory data analysis project showcasing data cleaning, preprocessing, statistical analysis, and visualization techniques using real-world datasets.',
      link: 'https://github.com/kasiotis/Data-Management-and-Exploratory-Data-Analysis',
      tech: ['R', 'Visualization', 'Exploratory Data Analysis', 'Business Analysis', 'tidyverse', 'dplyr', 'tidytext', 'lubridate', 'stringi/stringr', 'ggplot2', 'reshape2']
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
            Portfolio
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper'
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.tech.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          bgcolor: 'background.default',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="outlined"
                      href={project.link}
                      target="_blank"
                      startIcon={project.isPublication ? <MenuBookIcon /> : <GitHubIcon />}
                      sx={{
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        padding: '8px 16px',
                      }}
                    >
                      {project.isPublication ? 'View Publication' : 'View Project'}
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
