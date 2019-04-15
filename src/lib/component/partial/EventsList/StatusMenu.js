import React from "/vendor/react";
import PropTypes from "prop-types";

import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "/vendor/@material-ui/core";

import { CheckStatusIcon } from "/lib/component/base";
import { ErrorHollowIcon } from "/lib/component/icon";

class StatusMenu extends React.Component {
  static propTypes = {
    anchorEl: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    anchorEl: undefined,
    className: undefined,
    onChange: undefined,
    onClose: undefined,
  };

  render() {
    const { anchorEl, className, onClose, onChange } = this.props;

    return (
      <Menu anchorEl={anchorEl} className={className} onClose={onClose} open>
        <MenuItem key="incident" onClick={() => onChange("incident")}>
          <ListItemIcon>
            <ErrorHollowIcon />
          </ListItemIcon>
          <ListItemText primary="Incident" />
        </MenuItem>
        <MenuItem key="warning" onClick={() => onChange("warning")}>
          <ListItemIcon>
            <CheckStatusIcon statusCode={1} />
          </ListItemIcon>
          <ListItemText primary="Warning" />
        </MenuItem>
        <MenuItem key="critical" onClick={() => onChange("critical")}>
          <ListItemIcon>
            <CheckStatusIcon statusCode={2} />
          </ListItemIcon>
          <ListItemText primary="Critical" />
        </MenuItem>
        <MenuItem key="unknown" onClick={() => onChange("unknown")}>
          <ListItemIcon>
            <CheckStatusIcon statusCode={3} />
          </ListItemIcon>
          <ListItemText primary="Unknown" />
        </MenuItem>
        <MenuItem key="passing" onClick={() => onChange("ok")}>
          <ListItemIcon>
            <CheckStatusIcon statusCode={0} />
          </ListItemIcon>
          <ListItemText primary="Passing" />
        </MenuItem>
      </Menu>
    );
  }
}

export default StatusMenu;