// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas"

import Contact, { EmailAddress } from "nylas/lib/models/contact.js";

// Configure your Nylas client
Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);
const nylasMessages = nylas.messages;

/* Create contacts from emails */
try {  
  const messages = await nylasMessages;
  const emails = await messages.list({ limit: 3 });

  emails.map(email => {
    email.from.map(async ({ name, email }) => {
      const firstName = name.split(' ').slice(0, -1).join(" ");
      const lastName = name.split(' ').slice(-1).join(" ");
  
      const emailAddress = new EmailAddress({ type: 'work', email});
  
      const contact = new Contact.default(nylas, {
        givenName: firstName,
        surname: lastName,
        emailAddresses: [emailAddress],
      });
  
      const response = await contact.save();
      console.log("Contact created:", response);
    })
  })
} catch (err) {
  console.error("Create contacts from emails error:\n", err);
}