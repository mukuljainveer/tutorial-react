import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// import {CommentIcon} from "@material-ui/icons";

const styles = (theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
  listItemSecondaryAction: {
    visibility: "hidden",
  },
  listItem: {
    border: "1px solid blue",
    "&:hover $listItemSecondaryAction": {
      visibility: "inherit",
    },
  },
});


// DEMO
// https://codesandbox.io/s/649v7kozm3?file=/demo.js:0-2194

class CheckboxList extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = (value) => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <ListItem
            dense
            button
            classes={{
              container: classes.listItem,
            }}
          >
            sad
            <ListItemSecondaryAction
              className={classes.listItemSecondaryAction}
            >
              <IconButton aria-label="Comments">2</IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        {/* <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              dense
              button
              onClick={this.handleToggle(value)}
              classes={{
                container: classes.listItem
              }}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction
                className={classes.listItemSecondaryAction}
              >
                <IconButton aria-label="Comments">
                  2
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List> */}
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
