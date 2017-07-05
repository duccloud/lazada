import PhoneSpecification from './PhoneSpecification';
import { render } from 'enzyme';

describe('PhoneSpecification', () => {
  it('test', () => {
    const props = {
      data: {
        include: 'test include',
        info: '<b>Test HTML</b>'
      }
    };
    const wrapper = render(<PhoneSpecification {...props} />);
    expect(wrapper.find('.wrapper-phone-spec > p').text()).to.contain(props.data.include);
    expect(wrapper.find('.wrapper-phone-spec > div').html()).to.contain(props.data.info);
  });
});