import { render } from '@testing-library/react';

import ReactHeader from './react-header';

describe('ReactHeader', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ReactHeader />);
        expect(baseElement).toBeTruthy();
    });
});
