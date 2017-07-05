import PhoneVariant from './PhoneVariant';
import { render } from 'enzyme';

describe('PhoneVariant', () => {
  it('test', () => {
    const props = {
      data: {
        colors: [
          'http://test.url',
          'http://test.url',
          'http://test.url',
          'http://test.url'
        ]
      }
    };
    const wrapper = render(<PhoneVariant {...props} />);
    expect(wrapper.find('img')).to.have.length(props.data.colors.length);
  });
});