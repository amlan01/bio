import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import WaterIcon from '@mui/icons-material/Water';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MapIcon from '@mui/icons-material/Map';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

const projects = [
  {
    icon: <WaterIcon sx={{ fontSize: 40 }} />,
    iconColor: '#0d47a1',
    bgColor: '#e3f2fd',
    title: 'Flood Early Warning & Decision Support System',
    org: 'Govt. of Assam / World Bank AIRBMP',
    description:
      'State-level integrated flood early warning system combining real-time sensor data, historical hydrological records and predictive modelling to support disaster management decision-making across Assam.',
    tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'PostGIS', 'Decision Intelligence'],
    status: 'In Progress',
    statusColor: 'warning' as const,
    url: 'https://assam.mike-cloud.com/',
  },
  {
    icon: <DataThresholdingIcon sx={{ fontSize: 40 }} />,
    iconColor: '#00897b',
    bgColor: '#e0f2f1',
    title: 'State Water Data Portal',
    org: 'Hydro-Informatics Unit, Govt. of Assam',
    description:
      'Timeseries data platform for hydrological and hydromet data — integrating Water Level, Discharge, Rainfall, Evapotranspiration and allied observations from distributed sensor networks. Enables stakeholders to query, visualize and analyze temporal water dynamics.',
    tags: ['Timeseries Data', 'Hydrological Data', 'Real-time Ingestion', 'Data API', 'PostgreSQL'],
    status: 'In Progress',
    statusColor: 'warning' as const,
    url: '',
  },
  {
    icon: <MapIcon sx={{ fontSize: 40 }} />,
    iconColor: '#1565c0',
    bgColor: '#e3f2fd',
    title: 'State Water Resources Information System',
    org: 'Hydro-Informatics Unit, Govt. of Assam',
    description:
      'Geospatial information system for stakeholders requiring spatial datasets across administrative boundaries, socio-economic indices, environmental layers, urban assets and river basin infrastructures. Integrates vector, raster, and multi-source geospatial data.',
    tags: ['Geospatial Data', 'GIS', 'PostGIS', 'River Basins', 'Multi-theme', 'WebGIS'],
    status: 'In Progress',
    statusColor: 'warning' as const,
    url: '',
  },
  {
    icon: <MapIcon sx={{ fontSize: 40 }} />,
    iconColor: '#1565c0',
    bgColor: '#e3f2fd',
    title: 'Gaon Panchayat Resource Information System (GPRIS)',
    org: 'Assam State Space Application Centre',
    description:
      'WebGIS portal for the Panchayat & Rural Development Department, Government of Assam, providing geospatial intelligence and resource information across 22000+ Gaon Panchayats to support decentralized planning and rural development initiatives.',
    tags: ['Tabular Data', 'Geospatial Data', 'PostGIS', 'PostgreSQL', 'Dashboard', 'WebGIS'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: 'https://gpris.assac.in/GPRIS/',
  },
  {
    icon: <SpaceDashboardIcon sx={{ fontSize: 40 }} />,
    iconColor: '#00897b',
    bgColor: '#e3f2fd',
    title: 'School Dashboard for Sarba Siksha Abhiyan, Assam',
    org: 'Assam State Space Application Centre',
    description:
      'Interactive dashboard for monitoring and analyzing educational outcomes based on key indicators across schools in Assam, providing insights for policy makers and administrators.',
    tags: ['Tabular Data', 'Geospatial Data', 'PostGIS', 'PostgreSQL', 'Educational Analytics', 'Dashboard'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: 'https://gis.assac.in/ssa/',
  },
  {
    icon: <MapIcon sx={{ fontSize: 40 }} />,
    iconColor: '#1565c0',
    bgColor: '#e3f2fd',
    title: 'Higher Education Dashboard for RUSA, Assam',
    org: 'Assam State Space Application Centre',
    description:
      'Interactive WebGIS portal to improve access, equity and quality in higher education through planned development of higher education at the state level. ',
    tags: ['Tabular Data', 'Geospatial Data', 'PostGIS', 'PostgreSQL', 'WebGIS'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: 'https://rusa.assac.in/',
  },
  {
    icon: <LocalPoliceIcon sx={{ fontSize: 40 }} />,
    iconColor: '#c62828',
    bgColor: '#ffebee',
    title: 'CRIME GIS — Law Enforcement Analytics for Assam Police',
    org: 'Assam State Space Application Centre',
    description:
      'End-to-end WebGIS system for the Assam Police enabling spatial crime mapping, pattern analysis, hotspot detection and jurisdiction-level reporting for data-driven law enforcement.',
    tags: ['WebGIS', 'Leaflet.js', 'Spatial Analysis', 'React', 'PostgreSQL'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: '',
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
    iconColor: '#2e7d32',
    bgColor: '#e8f5e9',
    title: 'COVID-19 Real-Time Governance Dashboard for Assam Police',
    org: 'Assam State Space Application Centre',
    description:
      'Real-time visibility platform enabling coordinated COVID-19 response across Assam — tracking field resources, medical supply chains, isolation facilities and district-level outbreak patterns.',
    tags: ['Real-time Data', 'Dashboard', 'GIS', 'Apache Superset', 'Node.js'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: '',
  },
  // {
  //   icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
  //   iconColor: '#6a1b9a',
  //   bgColor: '#f3e5f5',
  //   title: 'Spatiotemporal Crime Pattern Analysis',
  //   org: 'M.Tech Thesis — IIT Jodhpur',
  //   description:
  //     "Research project analyzing the influence of multimodal aspects on spatiotemporal crime patterns in New York cities using Machine Learning techniques. Published as M.Tech thesis in AI.",
  //   tags: ['Python', 'Scikit-learn', 'Spatial ML', 'pandas', 'Research'],
  //   status: 'Published',
  //   statusColor: 'info' as const,
  //   url: '',
  // },

  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    iconColor: '#e65100',
    bgColor: '#fff3e0',
    title: 'HRMS & Enterprise Data Platform',
    org: 'BoldTek India / Gary Community Investment, USA',
    description:
      'Full-stack HRMS platform. Developed ETL pipelines for an international nonprofit client, enabling people analytics and operational reporting.',
    tags: ['React', 'Node.js', 'ETL', 'Tableau', 'HRMS'],
    status: 'Delivered',
    statusColor: 'success' as const,
    url: '',
  },
];

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
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
            Portfolio
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Key Projects
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s',
                  '&:hover': {
                    borderColor: project.iconColor,
                    transform: 'translateY(-6px)',
                    boxShadow: `0 16px 48px ${project.iconColor}18`,
                  },
                }}
              >
                <CardActionArea
                  sx={{ flexGrow: 1 }}
                  component="a"
                  href={project.url || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={!project.url}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2.5,
                          bgcolor: project.bgColor,
                          color: project.iconColor,
                          display: 'flex',
                        }}
                      >
                        {project.icon}
                      </Box>
                      <Chip
                        label={project.status}
                        size="small"
                        color={project.statusColor}
                        variant="outlined"
                        sx={{ fontWeight: 600, fontSize: '0.7rem' }}
                      />
                    </Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5, lineHeight: 1.3 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: project.iconColor, fontWeight: 600, display: 'block', mb: 1.5 }}>
                      {project.org}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.75}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: `${project.iconColor}10`,
                            color: project.iconColor,
                            fontWeight: 500,
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ px: 3, pb: 2, pt: 0 }}>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ width: '100%' }}>
                    <IconButton
                      size="small"
                      component="a"
                      href={project.url || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!project.url}
                      sx={{ color: project.url ? project.iconColor : 'text.disabled' }}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
