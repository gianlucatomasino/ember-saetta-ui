import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked optSelected;
  @tracked currentPage = 1;
  @tracked totalRecords = 100;
  @tracked totalPages = 3;

  @action
  onOptionSelected(value) {
    this.optSelected = value;
  }

  @action
  search(value) {
    console.log(`Searching... ${value}`);
  }

  @action
  onPageChange(page) {
    this.currentPage = page;
  }
}
