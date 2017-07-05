import PhoneBasicInfo from './PhoneBasicInfo';
import { render } from 'enzyme';

describe('PhoneBasicInfo', () => {
  it('test', () => {
    const props = {
      data: {
        cover: 'Test cover',
        title: 'Test title',
        price: 'Test price',
      },
      url: 'http://test.url'
    };
    const wrapper = render(<PhoneBasicInfo {...props} />);
    expect(wrapper.find('.phone-basic-info-title').text()).to.contain(props.data.title);
    expect(wrapper.find('.phone-basic-info-title').attr('href')).to.contain(props.url);
    expect(wrapper.find('.phone-basic-info-price').html()).to.contain(props.data.price);
    expect(wrapper.find('.cover').attr('src')).to.contain(props.data.cover);
  });
});