import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/molecules/navbar';

/**
 * @description default layout of the website
 * @return {*}
 * @constructor
 * @param {Object} props
 */
export function DefaultLayout({ children, title }) {
  return (
    <main>
      <title>{`${title} | Lasles VPN`}</title>
      <Navbar />
      {children}
    </main>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};
