import styled from 'styled-components';

export const HeadingSecondary = styled.h2`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin: ${(props) => props.margin || ''};
  font-size: ${(props) => props.fs || ''};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  left: ${(props) => props.left || ''};
  bottom: ${(props) => props.bottom || ''};
  background-color: ${(props) => props.backgroundColor || ''};
  padding: ${(props) => props.padding || ''};
  border-radius: ${(props) => props.borderRadius || ''};

  text-shadow: ${(props) =>
    props.shadow &&
    ` 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4),
    0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)`};
`;

export const HeadingPrimary = styled.h1`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 3em;
  margin: 0;
  text-shadow: ${(props) =>
    props.shadow &&
    ` 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4),
    0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)`};

  @media (max-width: 900px) {
    font-size: ${(props) => props.fSizeLg || props.fSize || '3em'};
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.fSizeMd || props.fSize || '3em'};
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.fSizeSm || props.fSize || '3em'};
  }
`;

export const RegularText = styled.p`
  font-weight: ${(props) => props.fw || '600'};
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fSize || '0.9em'};
  z-index: ${(props) => props.zIndex || '0'};

  font-family: "Montserrat", sans-serif;
  text-shadow: ${(props) =>
    props.shadow &&
    ` 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4),
    0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)`};

  margin: ${(props) => props.margin || '0'};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  left: ${(props) => props.left || ''};
  bottom: ${(props) => props.bottom || ''};
  background-color: ${(props) => props.backgroundColor || ''};
  border-radius: ${(props) => props.borderRadius || ''};
  padding: ${(props) => props.padding || ''};

  @media (max-width: 900px) {
    font-size: ${(props) => props.fSizeLg || props.fSize || '0.9em'};
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.fSizeMd || props.fSize || '0.9em'};
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.fSizeSm || props.fSize || '0.9em'};
  }
`;
