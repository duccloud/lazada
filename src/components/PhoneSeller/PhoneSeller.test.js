import PhoneSeller from './PhoneSeller';
import { render } from 'enzyme';

describe('PhoneSeller', () => {
  it('test', () => {
    const props = {
      data: {
        url: 'Test url',
        name: 'Test name',
        rating: '3',
        size: '3',
        timeOnUnitTime: 'year',
        timeOn: '1',
      }
    };
    const wrapper = render(<PhoneSeller {...props} />);
    expect(wrapper.find('.seller-name').text()).to.contain(props.data.name);
    expect(wrapper.find('.seller-name').attr('href')).to.contain(props.data.url);
    expect(wrapper.find('.seller-size').text()).to.contain(props.data.size);
    expect(wrapper.find('.seller-time').text()).to.contain(props.data.timeOn + ' ' + props.data.timeOnUnitTime);
    expect(wrapper.find('.seller-rating').text()).to.contain(props.data.rating);
  });
});