import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked optSelected;
  @tracked pageNumber = 1;
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

  get pagination() {
    return {
      number: this.pageNumber,
      totalPages: this.totalPages,
      totalRecords: this.totalRecords,
    };
  }

  @action
  onFirstPage() {
    this.pageNumber = 1;
  }

  @action
  onNextPage() {
    this.pageNumber++;
  }

  @action
  onPreviousPage() {
    this.pageNumber--;
  }

  @action
  onLastPage() {
    this.pageNumber = this.totalPages;
  }
}
