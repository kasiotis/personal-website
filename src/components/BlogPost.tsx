import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Import projects data
import { projects } from './Portfolio';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the project that matches the current URL slug
  const project = projects.find(p => {
    const blogPath = p.blogPath?.split('/').pop(); // Get the last part of the path
    return blogPath === slug;
  });

  if (!project) {
    return (
      <Container>
        <Box sx={{ py: 12 }}>
          <Typography variant="h4">Project not found</Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/portfolio')}
            sx={{ mt: 2 }}
          >
            Back to Portfolio
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/portfolio')}
            sx={{ mb: 4 }}
          >
            Back to Portfolio
          </Button>

          <Paper
            elevation={0}
            sx={{
              p: 6,
              backgroundColor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
              {project.title}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {project.tech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor: 'background.default',
                    color: 'primary.main',
                  }}
                />
              ))}
            </Box>

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
                mb: 4,
              }}
            >
              {project.isPublication ? 'View Publication' : 'View Project'}
            </Button>

            <Divider sx={{ mb: 4 }} />

            <Typography variant="h5" sx={{ mb: 3 }}>
              Project Overview
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              {project.description}
            </Typography>

            <Typography variant="h5" sx={{ mb: 3 }}>
              Technical Details
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              This project utilizes {project.tech.join(', ')} to deliver a robust solution.
              {project.isPublication && ' The research has been published and peer-reviewed, demonstrating its academic significance.'}
            </Typography>

            <Typography variant="h5" sx={{ mb: 3 }}>
              Key Features
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 4 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Implemented using industry-standard technologies and best practices
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Thoroughly documented and maintained codebase
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Scalable and maintainable architecture
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ mb: 3 }}>
              Future Improvements
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              While the current implementation successfully meets its objectives, there are several potential areas for future enhancement:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Enhanced feature set and capabilities
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Improved performance optimizations
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Additional documentation and examples
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default BlogPost;