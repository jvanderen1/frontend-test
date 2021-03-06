// Imports
// -------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import DetailView from './index';

// Mocks
// -----

jest.mock("../Hero", () => 'Hero');

// Internal
// --------

const getComponent = (props = {}) => renderer.create(
    <DetailView {...props} />,
);

// Tests
// -----

describe('src/ts/components/DetailView', () => {
    let component;

    describe('Rendering', () => {
        it('renders default correctly', () => {
            component = getComponent();
            expect(component).toMatchSnapshot();
        });
    });
});
