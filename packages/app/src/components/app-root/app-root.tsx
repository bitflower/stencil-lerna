import { Component, Element, h } from '@stencil/core';
import * as p2 from '@ryancavanaugh/pkg2';

const d = p2.getLogger('app-root.tsx');

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Element()
  private $elm: HTMLAppRootElement;

  public async componentDidLoad(): Promise<void> {
    d('componentDidLoad');
    // const myComp: null | HTMLMyComponentElement[] = this.$elm.querySelectorAll(
    const myComp: null | HTMLMyComponentElement = this.$elm.shadowRoot
      ? this.$elm.shadowRoot.querySelector('my-component')
      : null;
    d('myComp', myComp);
    if (myComp) {
      await myComp.callMe('Yo');
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>

          <h2>Here's the DESIGN SYSTEM component:</h2>
          <my-component first='Matthias' last='Max' />

          <h2>Here's PKG2 consumed directly from "app"</h2>
          <p>{p2.fn()}</p>
          {/* <p>{p2.connectServer()}</p> */}
        </main>
      </div>
    );
  }
}
