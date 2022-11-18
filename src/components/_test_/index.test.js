import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '..';
import {expect, test} from '@jest/globals';


test('should render Home component', () => {
  const linkElement = Renderer.create(<Home/>);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});