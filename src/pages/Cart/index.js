import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://avatars0.githubusercontent.com/u/54104600?s=460&v=4"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Cool tenis bro</strong>
              <span>R$129,2</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$255,20</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">CHECKOUT</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1220,25</strong>
        </Total>
      </footer>
    </Container>
  );
}
