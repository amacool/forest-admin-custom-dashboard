import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Button, MenuItem, MenuList, Popper, Grow, Paper, ClickAwayListener,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

/**
 * @params
 * className: className
 * width: Menu width
 * height: Menu height
 * backgroundColor: Menu backgroundColor
 * button: Menu Button content
 * items: MenuItems Array [{key: 'exampleKey', label: 'exampleLabel'}]
 * handleMenuItemClick: handle MenuItem click event - return item.key
 */

const useStyles = makeStyles(() => ({
  selectIcon: {
    marginLeft: 'auto',
  },
}));

const CustomMuiTheme = (props) => createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: props.backgroundColor,
        '&:hover': {
          backgroundColor: 'none',
        },
      },
      label: {
        textTransform: 'none',
      },
    },
    MuiButtonBase: {
      root: {
        width: props.width,
        height: props.height,
        marginLeft: 16,
        marginRight: 16,
        zIndex: 2,
      },
    },
    MuiPaper: {
      root: {
        width: props.width,
        backgroundColor: props.backgroundColor,
        paddingTop: props.height,
        marginTop: -props.height,
        zIndex: 1,
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiMenuItem: {
      root: {
        margin: 0,
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
      gutters: {
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
  },
});

const CustomMenu = (props) => {
  const {
    className, width, height, backgroundColor, button, items, handleMenuItemClick,
  } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleItemClick = (key) => (event) => {
    handleMenuItemClick(key);
    handleClose(event);
  };

  return (
    <ThemeProvider theme={CustomMuiTheme({ width, height, backgroundColor })}>
      <div className={className}>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {button}
          <UnfoldMoreIcon className={classes.selectIcon} />
        </Button>
        <Popper
          style={{ zIndex: 1 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {items.length === 0 && <MenuItem onClick={handleClose}>No Content</MenuItem>}
                    {items.map((item) => (
                      <MenuItem onClick={handleItemClick(item.key)} key={item.key}>{item.label}</MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </ThemeProvider>
  );
};

CustomMenu.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  button: PropTypes.node,
  items: PropTypes.array,
  handleMenuItemClick: PropTypes.func,
};

CustomMenu.defaultProps = {
  className: null,
  width: 200,
  height: 50,
  backgroundColor: '#FFFFFF',
  button: <span>Custom Menu</span>,
  items: [],
  handleMenuItemClick: () => {},
};

export default CustomMenu;
