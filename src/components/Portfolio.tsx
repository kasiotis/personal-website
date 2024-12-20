import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

interface Project {
  title: string;
  description: string;
  link: string;
  blogPath?: string;
  tech: string[];
  isPublication?: boolean;
}

const Portfolio = () => {
  const navigate = useNavigate();
  
  const handleCardClick = (blogPath: string): void => {
    navigate(blogPath);
  };

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

        <Box 
          sx={{
            columnCount: {xs:1, sm: 1, md: 2, lg: 2 , xl: 3 },
            columnGap: 3,
            '& > *': {
              breakInside: 'avoid',
              marginBottom: 3
            }
          }}
        >
          {projects.map((project, index) => (
            <Box key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Paper
                  elevation={0}
                  onClick={() => project.blogPath && handleCardClick(project.blogPath)}
                  sx={{
                    p: 4,
                    backgroundColor: 'background.paper',
                    cursor: project.blogPath ? 'pointer' : 'default',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': project.blogPath ? {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    } : {},
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
                      onClick={(e) => e.stopPropagation()}
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
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Portfolio;
