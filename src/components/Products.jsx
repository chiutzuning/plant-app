import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 45px;
    text-align: center;
    margin: 0 auto;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: center;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {

  return (
    <Container>
      <Title>Our Products</Title>
      <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
      </Desc>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
