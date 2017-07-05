import PhoneHighlight from './PhoneHighlight';
import { render } from 'enzyme';

describe('PhoneHighlight', () => {
  it('test', () => {
    const props = {
      data: {
        warranty: 'Test warranty',
        details: '<b>details</b>'
      }
    };
    const wrapper = render(<PhoneHighlight {...props} />);
    expect(wrapper.find('.phone-highlight-warranty').text()).to.contain(props.data.warranty);
    expect(wrapper.find('.phone-highlight-details').html()).to.contain(props.data.details);
  });
});