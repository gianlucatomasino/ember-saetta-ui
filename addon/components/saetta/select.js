import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SaettaSelectComponent extends Component {
  @action
  onChange(value) {
    if (this.args.onChange) this.args.onChange(value);
  }
}
