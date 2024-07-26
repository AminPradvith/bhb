import { LightningElement, api } from 'lwc';

export default class TestCompo extends LightningElement {
  @api jobData;
  showForm = false;

  handleApplyClick() {
    this.showForm = true;
  }

  handleSaveClick() {
    // Implement logic to handle form submission (e.g., send data to server)
    console.log('Application submitted!');
    this.showForm = false;
  }
}