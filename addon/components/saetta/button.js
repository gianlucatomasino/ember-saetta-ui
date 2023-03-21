import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SaettaButtonComponent extends Component {
  get color() {
    let classes = [];

    switch (this.args.color) {
      case 'critical':
        classes.push('bg-red-100 hover:bg-red-700');
        classes.push('text-red-700 hover:text-white');
        classes.push('border border-red-700');
        break;
      case 'tertiary':
        classes.push('shadow-none');
        classes.push('text-gray-600');
        classes.push(
          'border-0 hover:border hover:border-gray-600 hover:bg-white'
        );
        break;
      case 'primary':
        classes.push('bg-blue-600 hover:bg-blue-700');
        classes.push('text-white');
        classes.push('border border-blue-600');
        break;
      case 'secondary':
        classes.push('bg-neutral-50 hover:bg-white');
        classes.push('text-gray-600');
        classes.push('border border-gray-600');
        break;
      default:
        classes.push('bg-white-600');
        classes.push('text-black');
        classes.push('border border-gray-300');
        break;
    }

    classes.push('hover:opacity-90');
    return classes.join(' ');
  }

  @action
  onClick() {
    if (this.args.onClick) this.args.onClick();
  }
}
