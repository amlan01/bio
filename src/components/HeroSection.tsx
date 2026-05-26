import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MapIcon from '@mui/icons-material/Map';
import WaterIcon from '@mui/icons-material/Water';

function scrollToSection(id: string) {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #005b4f 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 3, md: 6 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,137,123,0.2) 0%, transparent 40%)',
        },
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '3%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Box
        sx={{
          maxWidth: 900,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          <Chip
            icon={<DataObjectIcon sx={{ fontSize: 16 }} />}
            label="Data Engineering"
            size="small"
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.3)', border: '1px solid' }}
          />
          <Chip
            icon={<WaterIcon sx={{ fontSize: 16 }} />}
            label="Hydro-Informatics"
            size="small"
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.3)', border: '1px solid' }}
          />
          <Chip
            icon={<MapIcon sx={{ fontSize: 16 }} />}
            label="GIS & Geospatial"
            size="small"
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.3)', border: '1px solid' }}
          />
        </Stack>

        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            lineHeight: 1.1,
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          Amlan Saikia
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 400,
            mb: 3,
            fontSize: { xs: '1.1rem', md: '1.4rem' },
          }}
        >
          Scientific Officer (IT) · Data-Driven Digital Transformation
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 660,
            mx: 'auto',
            mb: 5,
            lineHeight: 1.8,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
          }}
        >
          
          Data-driven technology and consulting professional with 9+ years of experience delivering large-scale government and 
          World Bank-funded digital transformation initiatives across water resources, geospatial systems and decision intelligence platforms. 
          Proven expertise in IT consulting, stakeholder engagement, data engineering and decision support systems, with a strong track record 
          of translating complex domain requirements into scalable, analytics-driven solutions.

          Specializes in data engineering, hydro-informatics, GIS and data platforms, with hands-on experience across ETL pipelines, dashboard 
          and enterprise system design supporting policy and infrastructure decision-making.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection('projects')}
            sx={{
              bgcolor: 'white',
              color: 'primary.dark',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.2s',
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollToSection('contact')}
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s',
            }}
          >
            Get In Touch
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
        onClick={() => scrollToSection('about')}
      >
        <KeyboardArrowDownIcon sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 36 }} />
      </Box>
    </Box>
  );
}
