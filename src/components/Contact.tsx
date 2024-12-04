import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
            Contact
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '600px' }}>
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </Typography>
        </motion.div>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: 'background.paper',
            maxWidth: '600px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1">
                  kasiotisandreas@gmail.com
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body1">
                  Newcastle upon Tyne, United Kingdom
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                  variant="contained"
                  href="mailto:kasiotisandreas@gmail.com"
                  startIcon={<EmailIcon />}
                >
                  Send Email
                </Button>
                <Button
                  variant="outlined"
                  href="https://linkedin.com/in/antreaskasiotis/"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;
