import React, { Component } from 'react';

import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart color="#fff" size={16} /> 3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
