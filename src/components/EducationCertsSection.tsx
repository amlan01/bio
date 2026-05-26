import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const education = [
  {
    degree: 'M.Tech — Artificial Intelligence',
    school: 'Indian Institute of Technology, Jodhpur',
    period: '2020 – 2023',
    detail: 'Thesis: "Influence of multimodal aspects on spatio-temporal crime patterns" — spatiotemporal ML analysis of NYC crime data.',
  },
  {
    degree: 'B.E — Computer Science & Engineering',
    school: 'Gauhati University',
    period: '2012 – 2016',
    detail: 'Major project: Design and development of an ROS-based autonomous 4-wheel drive robot.',
  },
];

const certifications = [
  { name: 'Data Science Hands-On with Open Source Tools', issuer: 'IBM Developer Skills Network' },
  { name: 'Data Analysis using PySpark', issuer: 'Coursera' },
  { name: 'Power BI Fundamentals', issuer: 'Corporate Finance Institute / Coursera' },
  { name: 'Secure & Scalable Cloud Infrastructure', issuer: 'Microsoft Azure' },
  { name: 'Programming with Generative AI', issuer: 'IIT Guwahati / Coursera' },
];

const achievements = [
  { year: '2023', title: 'Winner — MAPATHON 2023', org: 'IIT Bombay' },
  { year: '2022', title: 'Champion — MAPATHON 2022', org: 'IIT Bombay & AICTE' },
];

export default function EducationCertsSection() {
  return (
    <Box
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 3, mb: 1, display: 'block' }}
          >
            Credentials
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Education & Certifications
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {/* Education */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SchoolIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Education</Typography>
              </Stack>
              {education.map((edu) => (
                <Paper
                  key={edu.degree}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    borderLeft: '4px solid',
                    borderLeftColor: 'primary.main',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.07)' },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.25 }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500, mb: 0.5 }}>
                    {edu.school}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mb: 1 }}>
                    {edu.period}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {edu.detail}
                  </Typography>
                </Paper>
              ))}

              {/* Achievements */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
                <EmojiEventsIcon sx={{ color: 'warning.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Achievements</Typography>
              </Stack>
              {achievements.map((ach) => (
                <Paper
                  key={ach.title}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    borderLeft: '4px solid',
                    borderLeftColor: 'warning.main',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.07)' },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {ach.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {ach.org}
                      </Typography>
                    </Box>
                    <Chip label={ach.year} size="small" color="warning" variant="outlined" sx={{ fontWeight: 700 }} />
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Certifications */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <VerifiedIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Certifications</Typography>
              </Stack>
              <Stack spacing={2}>
                {certifications.map((cert, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      p: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateX(4px)',
                        boxShadow: '0 4px 16px rgba(0,137,123,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        display: 'flex',
                        flexShrink: 0,
                      }}
                    >
                      <VerifiedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {cert.issuer}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
