import React from "react";
import { Helmet } from 'react-helmet';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { AiOutlineContacts } from 'react-icons/ai';
import { GrMap } from 'react-icons/gr';
import { FiAtSign } from 'react-icons/fi';
import { GrPhone } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaAngellist } from 'react-icons/fa';

import Smallstep from '../icons/Smallstep';
import Tentmaker from '../icons/Tentmaker';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f6f6f6',
    },
  },
  typography: {
    fontSize: 16,
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

const ItemLink = ({ download = undefined, icon, href, mb = 1, urlProp, sameAsProp, children, ...props }) => console.log(props) || (
  <Typography component="div" variant="body1" {...props}>
    <Box display="flex" mb={mb}>
      <Box display="flex" alignItems="center" mr={1.5}>{icon}</Box>
      <Link download={download} href={href} {...(urlProp ? { itemProp: 'url' } : {})} {...(sameAsProp ? { itemProp: 'sameAs' } : {})}>{children}</Link>
    </Box>
  </Typography>
);

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title="Alan Christopher Thomas — Windsor, CO"
      meta={[
        {
          name: `description`,
          content: 'Personal site for Alan Christopher Thomas (alanchrt)',
        },
        {
          property: `og:title`,
          content: 'Personal site for Alan Christopher Thomas (alanchrt)',
        },
        {
          property: `og:description`,
          content: 'Personal site for Alan Christopher Thomas (alanchrt)',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Alan Christopher Thomas',
        },
        {
          name: `twitter:title`,
          content: 'Alan Christopher Thomas — Windsor, CO',
        },
        {
          name: `twitter:description`,
          content: 'Personal site for Alan Christopher Thomas (alanchrt)',
        },
      ]}
      link={[
        {

          rel: 'openid2.provider',
          href: 'https://www.google.com/accounts/o8/ud?source=profiles',
        },
        {
          rel: 'openid2.local_id',
          href: 'https://plus.google.com/102133134317482509497',
        }
      ]}
    />

    <CssBaseline />

    <Box m={4} itemScope itemType="http://schema.org/Person">
      <Container maxWidth="xs">
        <Paper elevation={1}>
          <Box p={4}>
            <Box mb={2} itemProp="name">
              <Typography variant="h3" component="h1">
                <span itemProp="givenName">Alan</span>{' '}
                <span itemProp="additionalName">Christopher</span>{' '}
                <span itemProp="familyName">Thomas</span>
              </Typography>
            </Box>

            <ItemLink icon={<GrMap />} href="https://www.google.com/maps/search/?api=1&query=Windsor,+CO" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <span itemProp="addressLocality">Windsor</span>,{' '}
              <span itemProp="addressRegion">Colorado</span>
            </ItemLink>
            <ItemLink icon={<FiAtSign />} href="mailto:alan@chrt.me" itemProp="email">alan@chrt.me</ItemLink>
            <ItemLink icon={<GrPhone />} href="tel:+18168054272" itemProp="telephone">816-805-4272</ItemLink>
            <ItemLink download icon={<AiOutlineContacts />} href="/alanchrt.vcf" mb={0}>Contact card</ItemLink>

            <Box my={4}>
              <Divider />
            </Box>

            <Box mb={2}>
              <Typography variant="h5">Social</Typography>
            </Box>

            <ItemLink icon={<GrGithub />} href="https://github.com/alanchrt" sameAsProp>alanchrt</ItemLink>
            <ItemLink icon={<FiTwitter />} href="https://twitter.com/alanchrt" sameAsProp>alanchrt</ItemLink>
            <ItemLink icon={<GrFacebookOption />} href="https://www.facebook.com/alanchrt" sameAsProp>alanchrt</ItemLink>
            <ItemLink icon={<GrLinkedinOption />} href="https://www.linkedin.com/in/alanchrt" sameAsProp>alanchrt</ItemLink>
            <ItemLink icon={<FaAngellist />} href="https://angel.co/u/alanchrt" sameAsProp>alanchrt</ItemLink>

            <Box my={4}>
              <Divider />
            </Box>

            <Box mb={2}>
              <Typography variant="h5">Professional</Typography>
            </Box>

            <ItemLink icon={<Smallstep />} href="https://smallstep.com" itemProp="worksFor" itemScope itemType="http://schema.org/Organization" urlProp>
              <span itemProp="name">smallstep</span>
            </ItemLink>
            <ItemLink icon={<Tentmaker />} href="https://tentmaker.co" mb={0} itemProp="brand" itemScope itemType="http://schema.org/Organization" urlProp>
              <span itemProp="name">tentmaker</span>
            </ItemLink>
          </Box>
        </Paper>
      </Container>
    </Box>
  </ThemeProvider>
)

export default IndexPage;
