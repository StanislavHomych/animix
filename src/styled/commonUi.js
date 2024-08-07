import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export const ScrollBar = styled(InfiniteScroll)`
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
