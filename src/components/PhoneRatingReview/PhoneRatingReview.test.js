import PhoneRatingReview from './PhoneRatingReview';
import { render } from 'enzyme';

describe('PhoneRatingReview', () => {
  it('test', () => {
    const props = {
      data: 'Test rating review'
    };
    const wrapper = render(<PhoneRatingReview {...props} />);
    expect(wrapper.find('.phone-rating-review').text()).to.contain(props.data);
  });
});