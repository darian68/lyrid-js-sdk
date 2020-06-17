# Lyrid JavaScript SDK
A NPM package that consume [Lyrid](https://lyrid.io/) functions.

## Requirements

To use this SDK, you will need:

- [Node.js **v6.3.0 or above**](https://nodejs.org/)

Node installation will include [NPM](https://www.npmjs.com/), which is
responsible for dependency management.

## Installation

### Node.js

`npm i lyrid-js-sdk-dev`

`import Lyrid from 'lyrid-js-sdk-dev'`

### Use the SDK as single js file

```html
<script src="https://cdn.jsdelivr.net/gh/darian68/lyrid-js-sdk@latest/lyrid.js" type="text/javascript"></script>
```

## Usage

This SDK relies heavily on [Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises),
making it easier to handle the asynchronous requests made to the API. The SDK
provides a `Lyrid` object containing several methods which map to the
calls and parameters described in
[Lyrid REST API](https://api.lyrid.io/swagger/index.html).

The following snippet is a generic example of how to use the SDK. If you need
details for a specific module, refer to the
[samples](https://github.com/darian68/sdk-react-sample).

Before executing any request, you need to provide key and secret to the API:


#### Create Lyrid object

```js
const lyrid = new Lyrid(<key>, <secret>);
```
You can provide the token also if you alrady have it

```js
const lyrid = new Lyrid(<key>, <secret>, <token>);
```

#### Making requests

```js
    lyrid.execute(<function ID>, <framework>, <input>).then(data =>{
      console.log(data);
    }, () =>{
      console.log("Error on execute function");
    });
```

