var incompleteFields = {
  missingFirstAndLastName: {
    emailAddress: 'mithrandir@rivendell.org',
    subject: 'Take heed',
    message: 'All that we can do is decide what to do with the time that is given to us.',
    error: 'Name is required.',
    errorSelector: '.form-item.fields.name .field-error'
  },
  missingFirstName: {
    lastName: 'The Grey',
    emailAddress: 'mithrandir@rivendell.org',
    subject: 'Take heed',
    message: 'All that we can do is decide what to do with the time that is given to us.',
    error: 'Name is missing required subfields: First',
    errorSelector: '.form-item.fields.name .field-error'
  },
  missingLastName: {
    firstName: 'Gnadalf',
    emailAddress: 'mithrandir@rivendell.org',
    subject: 'Take heed',
    message: 'All that we can do is decide what to do with the time that is given to us.',
    error: 'Name is missing required subfields: Last',
    errorSelector: '.form-item.fields.name .field-error'
  },
  missingEmail: {
    firstName: 'Gandalf',
    lastName: 'The Grey',
    subject: 'Take heed',
    message: 'All that we can do is decide what to do with the time that is given to us.',
    error: 'Emailaddress is required.',
    errorSelector: '.form-item.field.email .field-error'
  },
  missingSubject: {
    firstName: 'Gandalf',
    lastName: 'The Grey',
    emailAddress: 'mithrandir@rivendell.org',
    message: 'All that we can do is decide what to do with the time that is given to us.',
    error: 'Subject is required.',
    errorSelector: '.form-item.field.text .field-error'
  },
  missingMessage: {
    firstName: 'Gandalf',
    lastName: 'The Grey',
    emailAddress: 'mithrandir@rivendell.org',
    subject: 'Take heed',
    error: 'Message is required.',
    errorSelector: '.form-item.field.textarea .field-error'
  }
};

describe('Submit Form', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  beforeEach(function (client, done) {
    client.contact.navAndVerify();
    done();
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be unable to submit form with missing required fields', function (client) {
    Object.keys(incompleteFields).forEach((fields) => {
      client
        .contact.submitForm(incompleteFields[fields])
        .waitForElementVisible(incompleteFields[fields].errorSelector)
        .expect.element(incompleteFields[fields].errorSelector)
        .text.to.equal(incompleteFields[fields].error).before(2000);

      client.contact.clearForm();
    });
    client.url('https://google.com')
  });

  it('should be able to submit form after populating all fields', function (client) {
    var fields = {
      firstName: 'Gandalf',
      lastName: 'The Grey',
      emailAddress: 'mithrandir@rivendell.org',
      subject: 'Take heed',
      message: 'All that we can do is decide what to do with the time that is given to us.',
    };

    client
      .contact.fillOuForm(fields)
      .contact.submitForm(fields)
      .waitForElementVisible(client.contact.selectors.confirmationMessage)
      .expect.element(client.contact.selectors.confirmationMessage)
      .text.to.contain('Thanks for reaching out!').before(2000);
  });
});
