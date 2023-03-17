import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SaettaButtonComponent extends Component {
  get color() {
    let classes = [];

    switch (this.args.color) {
      case 'danger':
        classes.push('bg-red-600');
        classes.push('text-white');
        classes.push('border border-red-600');
        break;
      case 'warning':
        classes.push('bg-orange-600');
        classes.push('text-white');
        classes.push('border border-orange-600');

        break;
      case 'info':
        classes.push('bg-cyan-600');
        classes.push('text-white');
        classes.push('border border-cyan-600');
        break;
      case 'success':
        classes.push('bg-green-600');
        classes.push('text-white');
        classes.push('border border-green-600');
        break;
      case 'primary':
        classes.push('bg-blue-600');
        classes.push('text-white');
        classes.push('border border-blue-600');
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

  get size() {
    let classes = [];

    switch (this.args.size) {
      case 'xsmall':
        classes.push('text-xs');
        break;
      case 'small':
        classes.push('text-sm');
        break;
      case 'large':
        classes.push('text-lg');
        break;
      case 'xlarge':
        classes.push('text-xl');
        break;
      case 'normal':
      default:
        classes.push('text-base');
        break;
    }

    return classes.join(' ');
  }

  @action
  onClick() {
    this.args.onClick();
  }
}
