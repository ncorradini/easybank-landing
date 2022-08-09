import { Box, Button, Container } from '@mui/material';
import logoEasyBank from '../../assets/logo.svg';
import { SECTIONS } from './const_sections';

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <Container maxWidth="1440px" sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        <img
          src={logoEasyBank}
          alt="Logo EasyBank"
        />
        <Box sx={{
          display: 'flex',
          height: '100%',
        }}>
          {SECTIONS.map(section => (
            <Button
              key={section}
              disableRipple={true}
              sx={{
                fontFamily: 'Public Sans',
                fontWeight: 400,
                textTransform: 'none',
                fontSize: '16px',
                color: '#9698a6',
                display: 'block',
                margin: '0px 5px 0px 5px',
                borderRadius: 0,
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                  color: '#2d314d',
                  fontWeight: 700,
                  borderBottom: '4px solid transparent',
                  borderImage: 'linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%)',
                  borderImageSlice: 1,
                },
              }}>
              {section}
            </Button>
          ))}
        </Box>
        <Button sx={{
          background: 'linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%)',
          color: '#ffff',
          fontSize: '16px',
          padding: '8px 25px',
          borderRadius: '30px',
          textTransform: 'none',
          fontFamily: 'Public Sans',
          fontWeight: 700,
          transition: '0.5s',
          '&.MuiButtonBase-root:hover': {
            opacity: 0.5,
          },
        }}>
          Request Invite
        </Button>
      </Container>
    </Box>
  );
};

export default Navbar;
