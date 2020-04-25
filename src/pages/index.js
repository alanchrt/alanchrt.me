import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { GrMap } from 'react-icons/gr';
import { FiAtSign } from 'react-icons/fi';
import { GrPhone } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f6f6f6',
    },
  },
  typography: {
    h1: {
      fontSize: '2.0rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1.125rem',
    },
    h6: {
      fontSize: '1.0rem',
    },
  },
});

const ItemLink = ({ icon, href, children }) => (
  <Box display="flex" mb={1}>
    <Box display="flex" alignItems="center" mr={1.5}>{icon}</Box>
    <Link href={href}>{children}</Link>
  </Box>
);

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box m={4}>
      <Container maxWidth="xs">
        <Paper elevation={1}>
          <Box p={4}>
            <Box mb={2}>
              <Typography variant="h3" component="h1">Alan Christopher Thomas</Typography>
            </Box>
            <Typography variant="body1">
            <Box mb={2}>
              <ItemLink icon={<GrMap />} href="https://goo.gl/maps/r2mXQzCiqWBF8ryL8">Windsor, Colorado, USA</ItemLink>
              <ItemLink icon={<FiAtSign />} href="mailto:alan@chrt.me">alan@chrt.me</ItemLink>
              <ItemLink icon={<GrPhone />} href="tel:+18168054272">816-805-4272</ItemLink>
              <ItemLink icon={<GrGithub />} href="https://github.com/alanchrt">alanchrt</ItemLink>
              <ItemLink icon={<FiTwitter />} href="https://twitter.com/alanchrt">alanchrt</ItemLink>
              <ItemLink icon={<GrFacebookOption />} href="https://www.facebook.com/alanchrt">alanchrt</ItemLink>
              <ItemLink icon={<GrLinkedinOption />} href="https://www.linkedin.com/in/alanchrt">alanchrt</ItemLink>
            </Box>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  </ThemeProvider>
)

export default IndexPage;
