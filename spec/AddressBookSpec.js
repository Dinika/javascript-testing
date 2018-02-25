describe('Address Book', function() {
	var addressBook, 
		newContact;

	beforeEach(function() {
		addressBook = new AddressBook();
		newContact = new Contact();
	});

	it('should be able to add a contact in Address Book', function() {

		addressBook.addContact(newContact);

		expect(addressBook.getContact(0)).toBe(newContact);
	});

	it('should be able to delete a contact', function() {

		addressBook.addContact(newContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();
	});

});

describe('Async Address Book', function() {
	var addressBook = new AddressBook();
	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it('should grab inital contacts', function(done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});