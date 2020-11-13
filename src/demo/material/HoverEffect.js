import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/styles";
import {
  List,
} from "@material-ui/core";
import Conversation from './Conversation'

const loadChat=()=>{
    return Conversation();
}

const HoverEffect = () => {
  return (
    <div>
      <List>{loadChat()}</List>
    </div>
  );
};

export default HoverEffect;
