import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SaettaSearchBoxComponent extends Component {
  @action
  onInput(value) {
    if (this.args.onSearch) this.args.onSearch(value.target.value);
  }
}
