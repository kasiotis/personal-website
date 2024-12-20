import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { projects } from '../data/projects';

// Import projects data

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
              {project.content?.overview || project.description}
            </Typography>

            {project.content?.methodology && (
              <>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Methodology
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                  {project.content.methodology}
                </Typography>
              </>
            )}

            <Typography variant="h5" sx={{ mb: 3 }}>
              Technical Stack
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              This project utilizes {project.tech.join(', ')} to deliver a robust solution.
              {project.isPublication && ' The research has been published and peer-reviewed, demonstrating its academic significance.'}
            </Typography>

            {project.content?.results && (
              <>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Results
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                  {project.content.results}
                </Typography>
              </>
            )}

            {project.content?.conclusion && (
              <>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Conclusion
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                  {project.content.conclusion}
                </Typography>
              </>
            )}

            {!project.content?.conclusion && (
              <>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Future Development
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                  This project is actively maintained and open to contributions. Future improvements may include:
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Additional features and capabilities
                  </Typography>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Performance optimizations
                  </Typography>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Extended documentation
                  </Typography>
                </Box>
              </>
            )}
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default BlogPost;
