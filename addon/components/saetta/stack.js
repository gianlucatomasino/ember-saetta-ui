import Component from '@glimmer/component';

export default class SaettaStackComponent extends Component {
  get gap() {
    switch (this.args.density) {
      case 'comfortable':
        return 'gap-2';
      case 'compact':
        return 'gap-1';
      default:
        return 'gap-3';
    }
  }
}