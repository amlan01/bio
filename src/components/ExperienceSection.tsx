import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import WaterIcon from '@mui/icons-material/Water';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ComputerIcon from '@mui/icons-material/Computer';

const experiences = [
  {
    period: '2023 – Present',
    role: 'Scientific Officer (IT)',
    org: 'Hydro-Informatics Unit, Water Resources Dept., Govt. of Assam',
    icon: <WaterIcon />,
    iconBg: '#e3f2fd',
    iconColor: '#0d47a1',
    accentColor: '#0d47a1',
    tags: ['World Bank', 'Flood EWS', 'Apache Airflow', 'PostgreSQL', 'ETL'],
    highlights: [
      'Leading design & development of a state-level Flood Early Warning & Decision Support System under the World Bank-funded AIRBMP',
      'Integrating real-time and historical hydrological datasets from CWC, NWIC, and Disaster Management Authority',
      'Driving data platform architecture including ETL pipelines via Python with transition to Apache Airflow DAG systems (2026)',
      'Designing data cataloging and ingestion frameworks for multi-source data integration',
      'Managing PostgreSQL-based geospatial databases and enabling analytics & modelling data accessibility',
      'Conceptualizing a State Water Informatics Centre aligned with central digital infrastructure strategy',
    ],
  },
  {
    period: '2017 – 2023',
    role: 'Project Scientist',
    org: 'Assam State Space Application Centre, STCCD, Govt. of Assam',
    icon: <SatelliteAltIcon />,
    iconBg: '#e0f2f1',
    iconColor: '#00897b',
    accentColor: '#00897b',
    tags: ['WebGIS', 'GIS Systems', 'COVID-19 Response', 'CRIME GIS', 'Dashboard'],
    highlights: [
      'Improved data-driven decision-making across policing, rural development, and education sectors',
      'Enabled real-time visibility and governance efficiency during COVID-19 response operations',
      'Led IT consulting engagements delivering end-to-end WebGIS applications for multiple state departments',
      'Designed and implemented the CRIME GIS system for law enforcement across Assam',
    ],
  },
  {
    period: '2016 – 2017',
    role: 'Software Developer',
    org: 'BoldTek India Pvt. Ltd. (formerly Simplistic Solutions Pvt. Ltd.)',
    icon: <ComputerIcon />,
    iconBg: '#e8f5e9',
    iconColor: '#2e7d32',
    accentColor: '#2e7d32',
    tags: ['HRMS', 'React', 'Node.js', 'Tableau', 'ETL', 'International Client'],
    highlights: [
      'Developed HRMS platform and enterprise web applications using modern web technologies',
      'Executed data ETL processes for international client Gary Community Investment, USA',
      'Built interactive data visualizations using Tableau for business reporting',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Box
      id="experience"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 3, mb: 1, display: 'block' }}
          >
            Career Journey
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Work Experience
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Vertical line */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: 28,
              top: 28,
              bottom: 28,
              width: 2,
              bgcolor: 'divider',
            }}
          />

          <Stack spacing={4}>
            {experiences.map((exp, idx) => (
              <Box key={idx} sx={{ display: 'flex', gap: 3 }}>
                {/* Icon dot */}
                <Box
                  sx={{
                    flexShrink: 0,
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'flex-start',
                    pt: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      bgcolor: exp.iconBg,
                      color: exp.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid white',
                      boxShadow: `0 0 0 2px ${exp.accentColor}40`,
                      zIndex: 1,
                    }}
                  >
                    {exp.icon}
                  </Box>
                </Box>

                {/* Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    flex: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    transition: 'all 0.25s',
                    '&:hover': {
                      borderColor: exp.accentColor,
                      boxShadow: `0 8px 32px ${exp.accentColor}15`,
                    },
                  }}
                >
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} sx={{ mb: 1.5 }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: exp.accentColor, fontWeight: 500 }}>
                        {exp.org}
                      </Typography>
                    </Box>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        mt: { xs: 1, sm: 0 },
                        bgcolor: `${exp.accentColor}12`,
                        color: exp.accentColor,
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        alignSelf: 'flex-start',
                      }}
                    />
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
                    {exp.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: `${exp.accentColor}50`,
                          color: exp.accentColor,
                          fontWeight: 500,
                          fontSize: '0.72rem',
                        }}
                      />
                    ))}
                  </Stack>

                  <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                    {exp.highlights.map((point, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.75, mb: 0.5 }}
                      >
                        {point}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
