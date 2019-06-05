import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

// import { fn } from '@ryancavanaugh/pkg1';
import p1 from '@ryancavanaugh/pkg1';
// import { fn4 } from '@ryancavanaugh/pkg2';
// import * as p2 from '@ryancavanaugh/pkg2';

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

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log('BLUB', p1);

    return (
      <div>
        Hello! I'm {this.getText()}
        {p1.fn()}
        {/* {fn4()} */}
      </div>
    );
  }
}
