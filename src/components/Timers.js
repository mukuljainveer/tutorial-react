import React from "react";
import Timer from "react-compound-timer";

function Timers() {
  return (
    <div>
      <Timer
        initialTime={00000}
        startImmediately={false}
        onStart={() => console.log("onStart hook")}
        onResume={() => console.log("onResume hook")}
        onPause={() => console.log("onPause hook")}
        onStop={() => console.log("onStop hook")}
        onReset={() => console.log("onReset hook")}
      >
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
              {/* <Timer.Days /> days
              <Timer.Hours /> hours */}
              <Timer.Minutes /> minutes
              <Timer.Seconds /> seconds
              {/* <Timer.Milliseconds /> milliseconds */}
            </div>
            <div>{timerState}</div>
            <br />
            <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
              <button onClick={resume}>Resume</button>
              <button onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}

export default Timers;
