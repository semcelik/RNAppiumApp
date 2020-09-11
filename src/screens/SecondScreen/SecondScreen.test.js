import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SecondScreen from './SecondScreen';

describe('SecondScreen', () => {
  const navigationProps = {
    navigate: jest.fn(),
  };

  it('should render SecondScreen', () => {
    render(<SecondScreen navigation={navigationProps} />);
  });

  it('should navigate to ThirdScreen when button is clicked', () => {
    const { getByA11yLabel } = render(
      <SecondScreen navigation={navigationProps} />,
    );
    const thirdScreenButton = getByA11yLabel('thirdButtonx');

    expect(navigationProps.navigate).toBeCalledTimes(0);

    fireEvent.press(thirdScreenButton);
    expect(navigationProps.navigate).toBeCalledTimes(1);
    expect(navigationProps.navigate).toBeCalledWith('ThirdScreen');
  });
});
