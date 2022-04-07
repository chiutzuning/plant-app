import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";


import one from '../asset/banner/2.png'
import two from '../asset/banner/3.png'
import three from '../asset/banner/4.png'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  top: 60%;
  left: 5%;
  position: absolute;

  &:hover {
    background-color: teal;
    border: none;
    color: white;
  }
`;

const SecButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  top: 55%;
  right: 30%;
  position: absolute;

  &:hover {
    background-color: teal;
    border: none;
  }
`;


const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    one,
    two,
    three,
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((item, id) => (
          <Slide key={id}>
              <Image src={item} layout="fill" objectFit="contain" />
            {index !== 0  ? (
                  <SecButton>SHOW NOW</SecButton>
             ) : (
                  <Button>SHOW NOW</Button>
             )}
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
