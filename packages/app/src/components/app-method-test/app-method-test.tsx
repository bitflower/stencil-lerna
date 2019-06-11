import { getLogger } from '@ryancavanaugh/pkg2';
import { Component, Element, h } from '@stencil/core';

const d = getLogger('app-method-test.tsx');

@Component({
  tag: 'app-method-test'
  // styleUrl: 'app-profile.css',
  // shadow: true
})
export class AppMethodTest {
  @Element()
  private $elm: HTMLAppMethodTestElement;

  public async componentWillLoad() {
    const p: any = this.$elm.closest('app-root');
    d('componentWillLoad', p);
    await p.callMe();
  }

  render() {
    return (
      <div>
        <p>App Method Test</p>
      </div>
    );
  }
}
