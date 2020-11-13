import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  listItem: {
    border: "1px solid blue",
    "&:hover $listItemSecondaryAction": {
      visibility: "inherit",
    },
  },
  listItemSecondaryAction: {
    visibility: "hidden",
  },
}));

const Conversation = () => {
  const classes = styles();
  return (
    <ListItem
      dense
      button
      onClick={()=>alert('Item')}
      classes={{
        container: classes.listItem,
      }}
    >
      sad
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        <IconButton onClick={()=>alert('Button')} aria-label="Comments">2</IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Conversation;
