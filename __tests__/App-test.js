/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

// import generals components
import Modal from '../src/components/modal';
import Line from '../src/components/line';
import Button from '../src/components/button';
import ButtonBorderLine from '../src/components/button-border-line';
import BackgroundBase from '../src/components/background-base';

// import components from Cart
import CardProductCart from '../src/pages/cart/components/card-products-cart';
import EndButtonBuy from '../src/pages/cart/components/end-button-buy';
import CartLayout from '../src/pages/cart/cart-layout';

// import components from Category
import CardProductCategory from '../src/pages/category/components/card-product';
import EndButtonCart from '../src/pages/category/components/end-button-cart';
import ModalFilter from '../src/pages/category/components/modal-filter';
import OptionOrderShip from '../src/pages/category/components/option-order-chip';
import SubCategoriesShip from '../src/pages/category/components/sub-categories-ship';
import CategoryLayout from '../src/pages/category/category-layout';

// import components from Home
import CardCategory from '../src/pages/home/components/card-category';
import HomeLayout from '../src/pages/home/home-layout';

// import utils
import {formatMoney} from '../src/utils/utils';

const product = {
  quantity: 839,
  price: '$3,767',
  available: false,
  sublevel_id: 12,
  name: 'est',
  id: '58b5a5b18f96294f880390c3',
  image:
    'https://images.unsplash.com/photo-1580378403671-1b9fccdabafa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200',
};

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('Snapshot test for all general components in app', () => {
  test('Render correctly component modal', () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component Line', () => {
    const tree = renderer.create(<Line />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component Button', () => {
    const tree = renderer.create(<Button title="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component ButtonBorderLine', () => {
    const tree = renderer.create(<ButtonBorderLine title="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component BackgroundBase', () => {
    const tree = renderer.create(<BackgroundBase />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Snapshot test for components in page Cart', () => {
  test('Render correctly component CardProduct', () => {
    const tree = renderer
      .create(<CardProductCart product={product} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component EndButtonBuy', () => {
    const tree = renderer.create(<EndButtonBuy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component CartLayout', () => {
    const tree = renderer.create(<CartLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Snapshot test for components in page Category', () => {
  test('Render correctly component CardProductCategory', () => {
    const tree = renderer
      .create(<CardProductCategory product={product} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component EndButtonCart', () => {
    const tree = renderer.create(<EndButtonCart />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component ModalFilter', () => {
    const tree = renderer.create(<ModalFilter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component OptionOrderShip', () => {
    const tree = renderer.create(<OptionOrderShip />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component SubCategoriesShip', () => {
    const tree = renderer.create(<SubCategoriesShip />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component CategoryLayout', () => {
    const tree = renderer.create(<CategoryLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Snapshot test for components in page Home', () => {
  test('Render correctly component CardCategory', () => {
    const tree = renderer
      .create(<CardCategory uriImage="" title="Almuerzos" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render correctly component HomeLayout', () => {
    const tree = renderer.create(<HomeLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test for format correctly string and number to money format', () => {
  test('Format string money correctly', () => {
    expect(formatMoney('10000')).toEqual('$ 10,000');
  });

  test('Format number money correctly', () => {
    expect(formatMoney(10000)).toEqual('$ 10,000');
  });
});
