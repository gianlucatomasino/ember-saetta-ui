import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked optSelected;

  @action
  onOptionSelected(value) {
    this.optSelected = value;
  }

  @action
  search(value) {
    console.log(`Searching... ${value}`);
  }
}
