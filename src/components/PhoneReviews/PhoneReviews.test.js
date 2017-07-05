import PhoneReviews from './PhoneReviews';
import { render } from 'enzyme';

describe('PhoneReviews', () => {
  it('test', () => {
    const props = {
      data: [
        {
          rating: 'Test rating',
          title: 'Test title',
          detail: 'Test detail',
          date: 'Test date',
          author: 'Test author'
        }
      ]
    };
    const wrapper = render(<PhoneReviews {...props} />);
    expect(wrapper.find('.phone-review-item')).to.have.length(props.data.length);
    expect(wrapper.find('.phone-review-item:nth-child(1) .phone-review-item-rating').text()).to.contain(props.data[0].rating);
    expect(wrapper.find('.phone-review-item:nth-child(1) .phone-review-item-title').text()).to.contain(props.data[0].title);
    expect(wrapper.find('.phone-review-item:nth-child(1) .phone-review-item-detail').text()).to.contain(props.data[0].detail);
    expect(wrapper.find('.phone-review-item:nth-child(1) .phone-review-item-date').text()).to.contain(props.data[0].date);
    expect(wrapper.find('.phone-review-item:nth-child(1) .phone-review-item-author').text()).to.contain(props.data[0].author);
  });
});