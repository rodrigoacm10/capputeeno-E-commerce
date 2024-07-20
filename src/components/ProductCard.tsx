import { formatValue } from "@/utils/formatValue";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-center: center;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;
  cursor: pointer;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    margin: 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-center: center;

    > div {
      height: 1px;
      width: 228px;
      margin: 8px 0px;
      background-color: var(--shapes);
    }
  }
`;

export function ProductCard({ image, title, price, id }: ProductCardProps) {
  const priceCor = formatValue(price);

  const router = useRouter();
  const handleNavigate = () => {
    return router.push(`/product?id=` + id);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>R$ {priceCor}</p>
      </div>
    </Card>
  );
}
