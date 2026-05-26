import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Assam, India',
    color: '#c62828',
  },
  {
    icon: <WorkIcon />,
    label: 'Current Role',
    value: 'Scientific Officer (IT), HIU, WRD, Govt. of Assam',
    color: '#0d47a1',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'amlan.saikia01@gmail.com',
    color: '#00897b',
    href: 'mailto:amlan.saikia01@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amlansaikia',
    color: '#0077b5',
    href: 'https://linkedin.com/in/amlansaikia',
  },
];

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #005b4f 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(255,255,255,0.04) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: 3, mb: 1, display: 'block' }}
          >
            Let's Connect
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
            Get In Touch
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.light', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                Open to Collaboration
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, mb: 3 }}>
                I am actively engaged in government digital transformation and open to consulting
                opportunities, research collaborations and knowledge-sharing in the areas of
                hydro-informatics, geospatial analytics and data engineering.
              </Typography>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', mb: 3 }} />

              <Stack spacing={2.5}>
                {contactInfo.map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    component={item.href ? 'a' : 'div'}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      textDecoration: 'none',
                      cursor: item.href ? 'pointer' : 'default',
                      transition: 'transform 0.2s',
                      '&:hover': item.href ? { transform: 'translateX(4px)' } : {},
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.25,
                        borderRadius: 2,
                        bgcolor: `${item.color}22`,
                        border: '1px solid',
                        borderColor: `${item.color}44`,
                        color: 'white',
                        display: 'flex',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<SendIcon />}
                href="mailto:amlan.saikia01@gmail.com"
                sx={{
                  mt: 4,
                  bgcolor: 'white',
                  color: 'primary.dark',
                  fontWeight: 600,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                Send a Message
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Amlan Saikia · Scientific Officer (IT) · Government of Assam
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
