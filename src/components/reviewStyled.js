import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';

export const Star = styled.span`
  font-size: 2rem;
  color: ${(props) => (props.active ? '#FFD700' : '#e4e5e9')};
  cursor: pointer;
  transition: color 0.2s ease;
`;

export const StarIcon = styled(IoIosStar)`
  @media (max-width: 400px) {
    font-size: 0.8em;
  }
`;
export const StarsContainer = styled.div`
  display: flex;
  margin: 10px 0px;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
