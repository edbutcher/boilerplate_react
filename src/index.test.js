import React from 'react';
import renderer from 'react-test-renderer';

import ab from './index';


test('Should return a+b: ', () => {
    expect(ab(1, 2)).toBe(3);
});