import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SaettaToggleComponent extends Component {
  @tracked enabled = this.args.enabled ?? false;

  @action
  onClick() {
    this.enabled = !this.enabled;
    if (this.args.onChange) this.args.onChange(this.enabled);
  }
}
