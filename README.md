## Running the Application locally

**First clone the repository by running this command:**

**`HTTPS`**

```bash
git clone https://github.com/iamNilotpal/rbac-fastify.git
```

**Update Node Version**

Check to see if you have node version `v18.16.0` or later installed. If you
have, you are ready to go to the next level. If not, go to the
[Node.JS Official Website](https://nodejs.org/en) and download the LTS version,
or use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage and
install multiple node versions. After installation, use `node -v` to check your
node version and ensure you have the most recent version (18.16.0) chosen.

**Installing Dependencies**

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

```bash
npm run dev
```

Runs the app in the development mode
[http://localhost:3001](http://localhost:3001)

```bash
npm run build
```

Builds the app for production to the **`dist`** folder.

## Update your .env file

```bash
APP_PORT=
APP_HOST=
NODE_ENV=
APP_BASE_URL=
DATABASE_URL=
APP_LOG_LEVEL=
```
