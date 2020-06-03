const regeneratorRuntime = require("regenerator-runtime");
const fetch = require('node-fetch');
const lyridEndpoint = 'https://api.lyrid.io/';
global.Headers = fetch.Headers;


class Lyrid {
  constructor(key, secret, token='') {
    this.key = key;
    this.secret = secret;
    this.token = token;
  }
  
  async makeRequest(requestEndpoint, requestOptions) {
    const response = await fetch(requestEndpoint, requestOptions);
    const status = await response.status;
    if (status >= 200 && status < 300) {
        return await response.json();
    } else {
        return await response.text();
    }
  }
  async execute(id, framework='', inputs='') {
    
  }

  async getToken() {
    let token = this.token;
    if (!token) {
      token = await this.refreshToken();
    }
    return token;
  }
  
  async refreshToken() {
    let token = '';
    const requestOptions = {
      method: 'POST',
      headers: new Headers().append("Content-Type", "application/json"),
      body: JSON.stringify({"key": this.key,"secret": this.secret}),
      redirect: 'follow'
    };
    const response = await fetch("https://api.lyrid.io/auth", requestOptions);
    const status = await response.status;
    if (status >= 200 && status < 300) {
      const json = await response.json();
      this.token = await json.token;
      token = this.token;
    }
    return token;
  }
  
  // /api/serverless/app/get
  async getApps() {
    console.log("Get apps");
    const token = await this.getToken();
    const lyridHeaders = new Headers();
    lyridHeaders.append("Content-Type", "text/plain");
    lyridHeaders.append("Authorization", "Bearer " + token);
    const requestEndpoint = lyridEndpoint + 'api/serverless/app/get';
    const requestOptions = {
      method: 'GET',
      headers: lyridHeaders,
      redirect: 'follow'
    };
    const response = await fetch(requestEndpoint, requestOptions);
    console.log(response);
    const status = await response.status;
    console.log(status);
    if (status >= 200 && status < 300) {
      return await response.json();
    } else {
      const resBody = await response.text();
      if (resBody == "Expired authorization token") {
        const token = await this.refreshToken();
        return await this.getApps();
      }
    }
  }

  // /api/serverless/app/get/{appid}
  async getModules(appId) {
    console.log("Get Modules");
    const token = await this.getToken();
    const lyridHeaders = new Headers();
    lyridHeaders.append("Content-Type", "text/plain");
    lyridHeaders.append("Authorization", "Bearer " + token);
    const requestEndpoint = lyridEndpoint + 'api/serverless/app/get/' + appId;
    const requestOptions = {
      method: 'GET',
      headers: lyridHeaders,
      redirect: 'follow'
    };
    const response = await fetch(requestEndpoint, requestOptions);
    console.log(response);
    const status = await response.status;
    console.log(status);
    if (status >= 200 && status < 300) {
      return await response.json();
    } else {
      const resBody = await response.text();
      if (resBody == "Expired authorization token") {
        const token = await this.refreshToken();
        return await this.getModules(appId);
      }
    }
  }
  
  async getRevisions(appId, moduleId) {
    
  }

  async getFunctions(appId, moduleId, revisionId) {
    
  }

}

module.exports = Lyrid;
