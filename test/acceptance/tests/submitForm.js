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

module.exports = {
  'Verify able to open Contact page': (client) => {
    client.contact.navAndVerify();
  },

  'Verify unable to submit form with missing required fields': (client) => {
    Object.keys(incompleteFields).forEach((fields) => {
      client
        .contact.submitForm(incompleteFields[fields])
        .waitForElementVisible(incompleteFields[fields].errorSelector)
        .expect.element(incompleteFields[fields].errorSelector)
        .text.to.equal(incompleteFields[fields].error).before(2000);

      client.contact.clearForm();
    });
  },

  'Verify able to submit form after populating all fields': (client) => {
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
  }
};
