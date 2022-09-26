import { Card } from "react-bootstrap";
import { CartItemType } from "../pages/Store";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export function StoreItem({ item, handleAddToCart }: Props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={item.image}
        alt={item.title}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
