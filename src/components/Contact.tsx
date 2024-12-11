import React, { useState, useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Modal,
  Fade,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const contactMethods = [
    {
      id: 'email',
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'kasiotisandreas@gmail.com',
      color: '#EA4335',
      action: () => setIsModalOpen(true)
    },
    {
      id: 'linkedin',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      title: 'LinkedIn',
      content: 'Connect with me professionally',
      color: '#0A66C2',
      action: () => window.open('https://linkedin.com/in/antreaskasiotis/', '_blank')
    },
    {
      id: 'github',
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      title: 'GitHub',
      content: 'Check out my projects',
      color: '#171515',
      action: () => window.open('https://github.com/kasiotis', '_blank')
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          py: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Create Something Together
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            Have an idea? Want to collaborate? Or just want to say hi?
            Choose your preferred way to connect!
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 3,
            width: '100%'
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                onClick={method.action}
                sx={{
                  p: 3,
                  height: '100%',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: `0 8px 30px rgba(${method.color}, 0.2)`
                  }
                }}
              >
                <Box
                  sx={{
                    color: method.color,
                    mb: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.1)' }
                  }}
                >
                  {method.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {method.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {method.content}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Fade in={isModalOpen}>
            <Box
              sx={{
                position: 'relative',
                width: isMobile ? '90%' : '400px',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'text.secondary'
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3
                }}
              >
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Send a Message
                </Typography>

                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />

                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>

        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;
