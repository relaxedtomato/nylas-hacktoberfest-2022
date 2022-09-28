# create-contacts-from-email

This sample will show you to easily create contacts from an email with the Nylas Node.js SDK.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a new `.env` file:

```bash
$ touch .env # Then add your env variables
```

Alternatively, you can just rename `.env.example` and replace the environment variables.

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using the `node` command:

```bash
$ node index.js
```

When your message is successfully sent, you'll get the following output in your terminal:

```text
Message "Contact created" with the response body from the Nylas API.
```