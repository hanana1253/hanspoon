import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';

import { BsBookmarkHeartFill } from 'react-icons/bs';
import { RiTimerFill } from 'react-icons/ri';

export function Label({ type, text }) {
  const iconStyle = {
    marginRight: '20px',
    fontSize: '26px',
    verticalAlign: 'bottom',
  };

  const renderByType = (type) => {
    switch (type) {
      case 'time':
        return (
          <>
            <RiTimerFill style={iconStyle} /> Ready in <strong className={styles.bold}>{text} minutes </strong>
          </>
        );
      case 'bookmark':
        return (
          <>
            {<BsBookmarkHeartFill style={iconStyle} />}
            <strong className={styles.bold}>{text}</strong> saved
          </>
        );
      default:
        return null;
    }
  };
  return <p className={styles.label}>{renderByType(type)}</p>;
}

Label.propTypes = {
  type: PropTypes.oneOf(['time', 'bookmark']).isRequired,
  text: PropTypes.string.isRequired,
};
