import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description blank layout of the website without navbar
 * @return {*}
 * @constructor
 * @param {Object} props
 */
export function BlankLayout({ children, title }) {
  return (
    <main>
      <title>{`${title} | Lasles VPN`}</title>
      {children}
    </main>
  );
}

BlankLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};
