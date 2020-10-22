import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  background: white;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const RootWrapper = styled.div`
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RootWrapper;
