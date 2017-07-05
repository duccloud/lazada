import ContextualBackground from './ContextualBackground';
import { render } from 'enzyme';

describe('ContextualBackground', () => {
  it('test', () => {
    const props = {
      class: 'test-class'
    };
    const wrapper = render(
      <ContextualBackground {...props}>
        <p className="p-test">Test children 1</p>
        <p className="p-test">Test children 2</p>
      </ContextualBackground>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.p-test')).to.have.length(2);
  });
});