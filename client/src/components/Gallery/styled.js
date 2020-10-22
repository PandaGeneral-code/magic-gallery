import { motion } from "framer-motion";
import styled from "styled-components";

export const GalleryItem = styled(motion.li).attrs(() => ({}))`
  cursor: pointer;
  border-radius: 10px;
  flex: 1 1 100px;
  margin: 20px 0 0 20px;
  padding: 20px;
`;

const Wrapper = styled.ul`
  align-items: space-between;
  background-color: #eeeeee;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  justify-content: space-between;
  list-style: none;
  padding: 0 20px 20px 0;
  width: 500px;
`;

export default Wrapper;

// border-radius: 10px;
// padding: 20px;
// cursor: pointer;
// margin: 20px 0 0 20px;
// flex: 1 1 100px;
