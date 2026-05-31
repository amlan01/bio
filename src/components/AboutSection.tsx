import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';

const highlights = [
  {
    icon: <WorkIcon sx={{ fontSize: 32 }} />,
    value: '9+',
    label: 'Years Experience',
    color: 'primary.main',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 32 }} />,
    value: 'M.Tech',
    label: 'AI — IIT Jodhpur',
    color: 'secondary.main',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />,
    value: '2x',
    label: 'Mapathon Champion',
    color: 'warning.main',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
    value: '5+',
    label: 'Certifications',
    color: 'success.main',
  },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
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
            About Me
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Scientific Officer(IT)
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3, fontSize: '1.05rem' }}>
              I specialize in designing and implementing end-to-end data engineering ecosystems that transform raw geospatial and hydrological data into actionable intelligence for policy makers and resource managers. With 9+ years of work experience across multiple IT based roles in government and private sector, I've architected scalable ETL pipelines, data platforms and decision support systems that empower critical decision-making across multiple governance domains including water resources management, flood forecasting and flood monitoring.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3, fontSize: '1.05rem' }}>
              Currently at the Hydro-Informatics Unit (Government of Assam), I lead the team engaged in design of a state-level Flood Early Warning & Decision Support System, orchestrating complex ETL workflows via Python and Apache Airflow to ingest real-time hydrological data, manage geospatial PostGIS databases and surface insights through interactive dashboards. My approach emphasizes robust data architecture, quality assurance and stakeholder alignment to ensure data platforms scale reliably across government agencies.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3, fontSize: '1.05rem' }}>
              My expertise spans the full data engineering lifecycle: ETL pipeline orchestration (Apache Airflow, NiFi), data modeling and geospatial databases (PostgreSQL, PostGIS), analytics and visualization (Metabase, Power BI, ArcGIS), and decision intelligence systems. I've successfully built WebGIS platforms, crime analytics dashboards and real-time governance systems that integrate multi-source data into coherent intelligence layers.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.05rem' }}>
              I hold an M.Tech in Artificial Intelligence from IIT Jodhpur, where I researched spatiotemporal patterns using machine learning. I'm passionate about translating complex domain requirements — hydro-informatics, geospatial intelligence, multi-stakeholder coordination — into engineered data solutions that empower evidence-based governance.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={2}>
              {highlights.map((item) => (
                <Grid key={item.label} size={{ xs: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: 'all 0.25s',
                      '&:hover': {
                        borderColor: item.color,
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                      },
                    }}
                  >
                    <Stack alignItems="center" spacing={1}>
                      <Box sx={{ color: item.color }}>{item.icon}</Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: item.color, lineHeight: 1 }}>
                        {item.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center', lineHeight: 1.4 }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
