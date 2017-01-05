var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: '.page-map',
    form: {
      firstName: 'input[x-autocompletetype="given-name"]',
      lastName: 'input[x-autocompletetype="surname"]',
      emailAddress: 'input[x-autocompletetype="email"]',
      subject: '.form-item.field.text .text',
      message: 'textarea[class="field-element "]',
      submitButton: '.button'
    },
    errors: {
      nameFieldError: '.form-item.fields.name .field-error',
      emailFieldError: '.form-item.field.email .field-error',
      subjectFieldError: '.form-item.field.text .field-error',
      messageFieldError: '.form-item.field.textarea .field-error'
    },
    confirmationMessage: '.form-submission-text'
  };

  this.url = '/contact';

  this.nav = () => {
    client.url(`${client.globals.url}${this.url}`);
    return client;
  };

  this.verifyPageLoaded = () => {
    client
      .waitForElementVisible(this.selectors.pageLoaded)
      .waitForElementVisible(commonSelectors.footer.footerImage);
    return client;
  };

  this.navAndVerify = () => {
    this.nav();
    this.verifyPageLoaded();
    return client;
  };

  this.fillOuForm = (fields) => {
    Object.keys(fields).forEach((field) => {
      if (field !== 'error' && field !== 'errorSelector') {
        client.util.clearValue(this.selectors.form[field]);
        client.util.setValue(this.selectors.form[field], fields[field]);
      }
    });
    return client;
  };

  this.submitForm = (fields) => {
    this.fillOuForm(fields);
    client.util.click(this.selectors.form.submitButton);
    return client;
  };

  this.clearForm = () => {
    Object.keys(this.selectors.form).forEach((field) => {
      if (field !== 'error' && field !== 'errorSelector') {
        client.util.clearValue(this.selectors.form[field]);
      }
    });
    return client;
  };
};
