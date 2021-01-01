import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    height: "200px",
    overflow: "auto",
  },
});

function BottomScroller() {
  const classes = useStyles();
  const divRef = useRef();
  const [data,setData] =useState([{text:'hello1'}]);

  useEffect(() => {
    console.log("Effect");
    return console.log('cleanup')
  });

  useEffect(() => {
    console.log("Effect Once");
    divRef.current.scrollIntoView({ behavior: 'smooth' });
    return console.log('cleanup Once')
  }, [data]);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
            setData([...data,{text:'push New Data'}])
        }}
      >
        Push Message
      </Button>

      <Box className={classes.root}>
        {data.map((item, index) => {
          return  <Box>{item.text}</Box>;
        })}
        <div ref={divRef} />
      </Box>
    </>
  );
}

export default BottomScroller;
