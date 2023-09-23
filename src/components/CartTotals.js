import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <Content>
        <article>
          <Subtotal>
            subtotal :<span>{formatPrice(total_amount)}</span>
          </Subtotal>
          <ShippingFee>
            shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </ShippingFee>
          <HorizontalRule />
          <OrderTotal>
            order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </OrderTotal>
        </article>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (min-width: 776px) {
    justify-content: flex-end;
  }
`;

const Content = styled.div`
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
`;

const Subtotal = styled.h5`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const ShippingFee = styled.p`
  display: grid;
  grid-template-columns: 200px 1fr;
  text-transform: capitalize;
`;

const HorizontalRule = styled.hr`
  margin-top: 1.5rem;
`;

const OrderTotal = styled.h4`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-top: 2rem;
`;

export default CartTotals;
