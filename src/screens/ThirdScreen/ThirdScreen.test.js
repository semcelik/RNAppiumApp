import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ThirdScreen from './ThirdScreen';

describe('ThirdScreen', () => {
  const navigationProps = {
    navigate: jest.fn(),
  };

  it('should render ThirdScreen', () => {
    render(<ThirdScreen navigation={navigationProps} />);
  });

  it('should navigate to HomeScreen when button is clicked', () => {
    const { getByA11yLabel } = render(
      <ThirdScreen navigation={navigationProps} />,
    );
    const homeScreenButton = getByA11yLabel('homeButton');

    expect(navigationProps.navigate).toBeCalledTimes(0);

    fireEvent.press(homeScreenButton);
    expect(navigationProps.navigate).toBeCalledTimes(1);
    expect(navigationProps.navigate).toBeCalledWith('HomeScreen');
  });
});
