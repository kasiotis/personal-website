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
      content: "As a Data Engineering Consultant, I specialize in transforming complex data challenges into efficient, scalable solutions. My experience at Crownpeak (formerly Attraqt) has been invaluable in refining my skills in ETL development and domain expertise in the E-commerce industry. In my role, I've successfully collaborated with cross-functional teams in delivering multiple projects, focusing on data enrichments and external integrations for client ETLs. I've enhanced product recommendations and marketing use cases through key data-driven analytics integration, while maintaining high standards in code quality through code reviews and CI/CD pipelines. This hands-on experience in team leadership and technical implementation demonstrates my ability to deliver complex solutions that drive business value."
    },
    {
      icon: <SchoolOutlinedIcon fontSize="large" />,
      title: "Academic Background",
      content: "Holding a Master's in Data Science (Distinction) and a BSc in Computer Science (1st Class) from Newcastle University, I've developed a comprehensive skill set in data science and software engineering. My expertise spans machine learning, big data analytics, and software development. During my MSc, I specialized in advanced machine learning techniques, working with classification models, deep learning architectures, and big data technologies using R and Python. My research culminated in a published paper on energy-aware management systems, where I applied stochastic modeling to optimize IT infrastructure efficiency. My computer science foundation includes strong programming principles, algorithm design, and system architecture, complemented by practical experience in database systems and security protocols."
    },
    {
      icon: <LightbulbOutlinedIcon fontSize="large" />,
      title: "Areas of Interest",
      content: "My passion lies in the intersection of machine learning, data engineering, and sustainable computing. I'm particularly focused on developing scalable data solutions that leverage advanced ML techniques, from computer vision applications in healthcare to natural language processing in recruitment. I'm deeply interested in optimizing system performance and energy efficiency in IT infrastructure, as demonstrated through my research in stochastic modeling. I'm constantly exploring new ways to apply data-driven approaches to solve complex business challenges while maintaining a strong focus on sustainability and efficiency."
    }
  ];

  const techStack = {
    languages: {
      icon: <DataObjectIcon fontSize="large" />,
      title: "Programming Languages",
      items: ['R', 'Python', 'SQL', 'Java', 'C', 'TypeScript', 'JavaScript', 'Dart', 'Bash', 'regex', 'VDM-SL']
    },
    libraries: {
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      title: "Libraries",
      items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Dplyr','tidyverse', 'caret', 'e1071', 'Seaborn', 'ggplot2', 'knitr']
    },
    frameworks: {
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      title: "Frameworks",
      items: ['React', 'Flutter', 'Flask', 'Keras', 'PyTorch', 'TensorFlow', 'Apache Spark', 'CRISP-DM', 'Neo4j']
    },
    tools: {
      icon: <BuildOutlinedIcon fontSize="large" />,
      title: "Tools & Platforms",
      items: ['PowerBI', 'Neo4j', 'Jupyter', 'Git', 'Jira', 'AWS', 'Azure', 'Databricks']
    },
    etlTools: {
      icon: <StorageOutlinedIcon fontSize="large" />,
      title: "ETL & Data Integration",
      items: ['Pentaho Data Integration', 'Azure Data Factory', 'Apache Hop']
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
            Skills & Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
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
                transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
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
      </Box>
    </Container>
  );
};

export default About;
