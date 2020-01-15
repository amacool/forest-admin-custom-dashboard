import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

/**
 * @params
 * className: className
 * href: url link
 * content: content of Link
 * color: color of Link: 'default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'
 * underline: underline setting of Link default value is 'hover'
 * variant: applies the theme typography styles.
 */

const CustomLink = (props) => {
  const {
    className, href, content, color, underline, variant,
  } = props;

  const preventDefault = (event) => event.preventDefault();

  return (
    <Link
      className={className}
      href={href}
      color={color}
      underline={underline}
      variant={variant}
      onClick={preventDefault}
    >
      {content}
    </Link>
  );
};

CustomLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  content: PropTypes.node,
  color: PropTypes.string,
  underline: PropTypes.string,
  variant: PropTypes.string,
};

CustomLink.defaultProps = {
  className: null,
  href: '#',
  content: '#',
  color: 'primary',
  underline: 'hover',
  variant: 'inherit',
};

export default CustomLink;
