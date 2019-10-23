import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactPagination from '../src/main';

configure({ adapter: new Adapter() });

describe('Basic Test', () => {
  test('Total should be the ceil value 112/10 => 12', () => {
    const pagination = shallow(<ReactPagination total={112} size={10} />);
    const total =
      1 * pagination.find('.react-pagination__statistics .is-total').text();

    expect(total).toBe(12);
  });

  test('Set value for the property value & get the current value', () => {
    const pagination = shallow(
      <ReactPagination value={4} total={112} size={10} />
    );
    const current =
      1 * pagination.find('.react-pagination__statistics .is-current').text();

    expect(current).toBe(4);
  });

  test('Action: click first', () => {
    const pagination = shallow(
      <ReactPagination value={4} total={112} size={10} />
    );

    // simulate with dataset value:
    pagination
      .find('.react-pagination__actions .is-first')
      .simulate('click', { target: { dataset: { value: 1 } } });

    const current =
      1 * pagination.find('.react-pagination__statistics .is-current').text();
    expect(current).toBe(1);
  });
});
