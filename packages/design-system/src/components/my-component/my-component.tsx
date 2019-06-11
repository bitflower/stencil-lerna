import { Component, Prop, h, Method } from '@stencil/core';
import { format } from '../../utils/utils';

import * as p1 from '@ryancavanaugh/pkg1';
import * as p2 from '@ryancavanaugh/pkg2';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string = '';

  /**
   * The middle name
   */
  @Prop() middle: string = '';

  /**
   * The last name
   */
  @Prop() last: string = '';

  @Method()
  public async callMe(smth: string): Promise<void> {
    console.log(smth);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log('BLUB', p1.fn());

    return (
      <div>
        <p>Hello! I'm {this.getText()}</p>
        <p>{p1.fn()}</p>
        <p>{p2.fn()}</p>
        <p>{p2.connectServer()}</p>
      </div>
    );
  }
}
