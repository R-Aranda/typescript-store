import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { StoreItem } from "../components/StoreItem";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Store = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data?.map((item) => (
          <Col key={item.id}>
            <StoreItem item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
