# Decoupla Gatsby Starter

This project is a starter Gatsby application built with TypeScript, demonstrating how to integrate with Decoupla CMS, using the [gatsby-source-decoupla](https://www.npmjs.com/package/gatsby-source-decoupla) plugin. It's designed to provide a quick setup for a blog, fetching content from a pre-configured Decoupla sandbox account.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
* Node.js: Version 14 or higher (LTS recommended).

## Getting Started

### Install Dependencies

```bash
npm install
# OR
yarn install
```

### Run the Development Server

```bash
npm run develop
# OR
yarn develop
```

This command will:
* Start a local development server.
* Fetch data from the Decoupla workspace.
* Build the Gatsby site.

You can then open your browser and navigate to [http://localhost:8000](http://localhost:8000) to view the running application. The GraphQL playground will be available at [http://localhost:8000/___graphql](http://localhost:8000/___graphql).


## Connecting to Your Own Decoupla Project

To connect this starter project to your own Decoupla workspace:
* Generate API Credentials: In your Decoupla dashboard, navigate to your workspace's API settings and obtain your Workspace ID and the API Token.
* Update .env: Modify the .env file in the root of this project with your new Decoupla credentials:

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.
