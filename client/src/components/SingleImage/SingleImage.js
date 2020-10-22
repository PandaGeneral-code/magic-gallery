import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Wrapper, { SingleImage as SI } from "./styled";

const SingleImage = ({ children, color }) => {
  return (
    <Wrapper>
      <SI layout layoutId={color} style={{ backgroundColor: color }}>
        <Scrollbars autoHide>{children}</Scrollbars>
      </SI>
    </Wrapper>
  );
};

export default SingleImage;

// import { Scrollbars } from 'react-custom-scrollbars';

// class App extends Component {
//   render() {
//     return (
//       <Scrollbars style={{ width: 500, height: 300 }}>
//         <p>Some great content...</p>
//       </Scrollbars>
