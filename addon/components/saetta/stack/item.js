import Component from '@glimmer/component';

export default class SaettaStackItemComponent extends Component {
  get grow() {
    if (this.args.canGrow) return 'grow';
    return '';
  }
}
