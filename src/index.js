import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Player ,ControlBar, VolumeMenuButton, Shortcut } from "video-react";
import "video-react/dist/video-react.css";
import Vertical from '../src/sample_videos/vertical.mp4';
import verticalWithoutSound from '../src/sample_videos/vertical_without _sound.mp4';
import Square from '../src/sample_videos/Square.mp4';

//test url src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Square Video" />
    <Player autoPlay muted loop>
      <source
        src={Square}
        type="video/mp4"
      />
      <Shortcut clickable={false}/>
      <ControlBar autoHide={false} disableDefaultControls>
        <VolumeMenuButton />
      </ControlBar>
    </Player>
    <Hello name="Vertical Video" />
    <Player autoPlay muted loop>
      <source
        src={Vertical}
        type="video/mp4"
      />
      <Shortcut clickable={false}/>
      <ControlBar autoHide={false} disableDefaultControls>
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
    <Hello name="Vertical Video without sound" />
    <Player autoPlay muted loop>
      <source
        src={verticalWithoutSound}
        type="video/mp4"
      />
      <Shortcut clickable={false}/>
      <ControlBar autoHide={false} disableDefaultControls>
      </ControlBar>
    </Player>
  </div>
);

render(<App />, document.getElementById("root"));
