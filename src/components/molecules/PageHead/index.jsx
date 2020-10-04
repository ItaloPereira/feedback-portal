import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { Primary } from '@assets/styles/colors';

const PageHead = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`Feedback Portal - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta property="og:site_name" content={`Feedback Portal - ${title}`} />
      <meta property="og:image" content="/static/img/share/share.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Feedback Portal - ${title}`} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <link rel="icon" sizes="48x48" href="/static/img/favicon/favicon.ico" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content={Primary} />
    </Helmet>
  );
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageHead;
