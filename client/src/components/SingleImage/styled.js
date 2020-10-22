import { motion } from "framer-motion";
import styled from "styled-components";

export const SingleImage = styled(motion.div)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 20px;
  height: 750px;
  overflow: hidden auto;
  width: 750px;
`;

const Wrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;

  * {
    pointer-events: all;
  }
`;

export default Wrapper;

// position: absolute;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// display: flex;
// justify-content: center;
// align-items: center;
// pointer-events: none;

// border-radius: 20px;
// width: 500px;
// height: 300px;
// box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 20px;
