import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description blank layout of the website
 * @param {object} props
 * @returns {*}
 * @constructor
 */

export function BlankLayout({ children, title }) {
  return (
    <section>
      <title>{`${title} Lasles VPN`}</title>
      {children}
    </section>
  );
}

BlankLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node)]).isRequired,
  title: PropTypes.string.isRequired,
};
