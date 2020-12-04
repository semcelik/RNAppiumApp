import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  const navigationProps = {
    navigate: jest.fn(),
  };

  it('should render HomeScreen', () => {
    render(<HomeScreen navigation={navigationProps} />);
  });

  it('should navigate to FirstScreen when button is clicked', () => {
    const { getByA11yLabel } = render(
      <HomeScreen navigation={navigationProps} />,
    );
    const firstScreenButton = getByA11yLabel('firstButton');

    expect(navigationProps.navigate).toBeCalledTimes(0);

    fireEvent.press(firstScreenButton);
    expect(navigationProps.navigate).toBeCalledTimes(1);
    expect(navigationProps.navigate).toBeCalledWith('FirstScreen');
  });

  it('should navigate to SecondScreen when button is clicked', () => {
    const { getByA11yLabel } = render(
      <HomeScreen navigation={navigationProps} />,
    );
    const firstScreenButton = getByA11yLabel('secondButton');

    expect(navigationProps.navigate).toBeCalledTimes(0);

    fireEvent.press(firstScreenButton);
    expect(navigationProps.navigate).toBeCalledTimes(1);
    
    expect(navigationProps.navigate).toBeCalledWith('SecondScreen');
  });
});
