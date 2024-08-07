import styled from "styled-components"

export const RubrickWrapper = styled.div`
  padding: 0 40px;
`

export const RubrickInnerHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 35px 0px 15px 0px;
`

export const RubrickInnerWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  height: 100%;
`

export const WatchAllBtn = styled.button`
  color: #fff;
  font-weight: 500;
  height: 30px;
  border-radius: 40px;
  border: none;
  font-size: 0.7em;
  padding: 0 15px;
  background: rgba(105, 97, 104, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

export const RubrickFullWrapper = styled.div`
  padding: 10vh 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RubrickFullInnerWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  grid-auto-flow: dense;
`
