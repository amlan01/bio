import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import MapIcon from '@mui/icons-material/Map';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';

const skillCategories = [
  {
    icon: <CodeIcon />,
    title: 'Application Development',
    color: '#0d47a1',
    skills: ['React', 'Node.js', 'Leaflet.js', 'Chart.js', 'TypeScript', 'REST APIs'],
  },
  {
    icon: <StorageIcon />,
    title: 'Database Management',
    color: '#00897b',
    skills: ['PostgreSQL', 'PostGIS', 'MongoDB', 'MySQL', 'Geospatial DBs'],
  },
  {
    icon: <SyncAltIcon />,
    title: 'Data ETL & Pipelines',
    color: '#e65100',
    skills: ['Apache Airflow', 'Apache NiFi', 'Pentaho PDI', 'Talend', 'Python ETL'],
  },
  {
    icon: <BarChartIcon />,
    title: 'Reporting & Visualization',
    color: '#1565c0',
    skills: ['Power BI', 'Metabase', 'Apache Superset', 'ArcGIS Dashboards', 'Tableau'],
  },
  {
    icon: <AssessmentIcon />,
    title: 'Data Analysis',
    color: '#2e7d32',
    skills: ['Python (pandas, numpy)', 'matplotlib', 'seaborn', 'PySpark', 'MS Excel'],
  },
  {
    icon: <MapIcon />,
    title: 'GIS & Geospatial',
    color: '#6a1b9a',
    skills: ['QGIS', 'ArcGIS Pro', 'ArcGIS Enterprise', 'WebGIS', 'Spatial Analysis'],
  },
  {
    icon: <PsychologyIcon />,
    title: 'Machine Learning & AI',
    color: '#c62828',
    skills: ['Scikit-learn', 'Computer Vision', 'Deep Learning', 'RASA Chatbot', 'Gen AI'],
  },
  {
    icon: <GroupsIcon />,
    title: 'Project Management',
    color: '#4527a0',
    skills: ['JIRA', 'Asana', 'Slack', 'IT Consulting', 'Stakeholder Engagement'],
  },
];

export default function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 3, mb: 1, display: 'block' }}
          >
            Technical Expertise
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Skills & Technologies
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={3}>
          {skillCategories.map((cat) => (
            <Grid key={cat.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'all 0.25s',
                  '&:hover': {
                    borderColor: cat.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 32px ${cat.color}22`,
                  },
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        bgcolor: `${cat.color}18`,
                        color: cat.color,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.3 }}>
                      {cat.title}
                    </Typography>
                  </Stack>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {cat.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: `${cat.color}10`,
                          color: cat.color,
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          '&:hover': { bgcolor: `${cat.color}20` },
                        }}
                      />
                    ))}
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
