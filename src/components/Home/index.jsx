import { Box, Button, Typography } from '@mui/material';
import bgHome from '../../assets/bg-intro-desktop.svg';
import mockupsHome from '../../assets/image-mockups.png';

const Home = () => {
  return (
    <Box sx={{
      position: 'relative',
      maxWidth: '1440px',
      height: '750px',
      margin: 'auto',
      paddingX: '50px',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${bgHome})`,
      backgroundSize: '1300px',
      backgroundPositionY: -190,
      backgroundPositionX: 530,
      backgroundRepeat: 'no-repeat',
    }}>
      <Box sx={{ width: '50%' }}>
        <Typography sx={{
          marginTop: '50px',
          fontFamily: 'Public Sans',
          fontSize: '60px',
          lineHeight: 1.2,
          color: '#2d314d',
        }}>
          Next generation<br />
          digital banking
        </Typography>
        <Typography sx={{
          marginTop: '30px',
          width: '78%',
          fontFamily: 'Public Sans',
          fontSize: '18px',
          color: '#9698a6',
        }}>
          Take your financial life online. Your Easybank account will be a one-top-shop for spending, saving, budgeting, investing, and mucho more.
        </Typography>
        <Button sx={{
          marginTop: '30px',
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
        }}>Request invite</Button>
      </Box>
      <Box sx={{ width: '50%' }}>
        <img
          src={mockupsHome}
          style={{
            paddingLeft: '80px',
            position: 'absolute',
            top: -40,
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
