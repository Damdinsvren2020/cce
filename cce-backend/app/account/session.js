const uuid = require('uuid/v4');
const { hash } = require('./helper');

const SEPERATOR = '|';

class Session {
	constructor({ email }) {
		this.email = email;
		this.id = uuid();		
	}

	toString() {
		const { email, id } = this;

		return Session.sessionString({ email, id });
	}

	static parse(sessionString) {
		const sessionData = sessionString.split(SEPERATOR);

		return {
			email: sessionData[0],
			id: sessionData[1],
			sessionHash: sessionData[2]
		};
	}

	static verify(sessionString) {
		const { email, id, sessionHash } = Session.parse(sessionString);

		const accountData = Session.accountData({ email, id });

		return hash(accountData) === sessionHash;
	}

	static accountData({ email, id }) {
		return `${email}${SEPERATOR}${id}`;
	}

	static sessionString({ email, id }){
		const accountData = Session.accountData({ email, id });

		return `${accountData}${SEPERATOR}${hash(accountData)}`;
	}
}

module.exports = Session;