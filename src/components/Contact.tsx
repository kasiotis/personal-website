import React from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactMethods = [
    {
      id: 'email',
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'kasiotisandreas@gmail.com',
      color: '#EA4335',
      action: () => window.location.href = 'mailto:kasiotisandreas@gmail.com'
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
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
      <Box
        sx={{
          minHeight: '100vh',
          pt: { xs: 15, sm: 18 },
          pb: { xs: 8, sm: 10 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          mx: 'auto',
          maxWidth: 'md'
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
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
            gap: 3,
            width: '100%',
            '& > *': {
              minWidth: 0,
              width: '100%'
            }
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: '100%' }}
            >
              <Box
                onClick={method.action}
                sx={{
                  p: 3,
                  height: { xs: '160px', sm: '100%' },
                  width: '100%',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#1a365d',
                    boxShadow: `0 8px 30px rgba(100, 255, 218, 0.1)`
                  }
                }}
              >
                <Box
                  sx={{
                    color: method.color,
                    mb: 1.5,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.1)' }
                  }}
                >
                  {method.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  {method.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  lineHeight: { xs: 1.4, sm: 1.5 },
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  px: 1
                }}>
                  {method.content}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
