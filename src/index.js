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
    return await response.json();
  }
  async execute(id, framework='', inputs='') {
    
  }

  async getToken() {
    const requestOptions = {
      method: 'POST',
      headers: new Headers().append("Content-Type", "application/json"),
      body: JSON.stringify({"key": this.key,"secret": this.secret}),
      redirect: 'follow'
    };
    const response = await this.makeRequest("https://api.lyrid.io/auth", requestOptions);
    response.then(data => {
      this.token = data.token;
    });
  }  
  
  ///api/serverless/app/get
  getApps() {
    const lyridHeaders = new Headers();
    lyridHeaders.append("Content-Type", "text/plain");
    lyridHeaders.append("Authorization", "Bearer " + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1ETkJPVGd6UTBNMVFUQTBNRGMzTlRjeE1EZzJNRVkwT0RVNFF6TkdNVGsxUTBKRVFURkNNQSJ9.eyJpc3MiOiJodHRwczovL2x5cmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJRU3BBTzZ4R1h6Mnp3RTA4UXM4cndxT1F4VEpoeW9DNEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9seXJpZC5pby9hY2Nlc3MvYXV0aCIsImlhdCI6MTU5MTA4NzU2NiwiZXhwIjoxNTkxMTczOTY2LCJhenAiOiJRU3BBTzZ4R1h6Mnp3RTA4UXM4cndxT1F4VEpoeW9DNCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.cVvmFFO0VtaeYFFV7R_XROq8iFGFb4alzKk5dawU97b1_diqlAc3-WrjHjzH0BTKvhM24IzksT7pPunNv6FyQiAGJVWvF8lrks9NoDS66nyu09wAYv5EdiMW2uo3BY2ZGaXg0o56pachlcjYZven7fEA4F1CN46eNH-gO28IUDClKoS41xvW2xCFPTcPafQGQdxrI98vjxzr095DSN322pWtnyv3lRa_XZlxqKujh9KYaeoEJWvJ1R-ZIO3KPvCwd8CW8vTbIGBiPw0Ondjt9uz8sZb6o8g9tbkkxh-wny6LXNKMVamsfTeCBdJKzSPDpDzODNpO8E1bDkro2i3Z3w");
    const requestEndpoint = lyridEndpoint + 'api/serverless/app/get';
    const requestOptions = {
      method: 'GET',
      headers: lyridHeaders,
      redirect: 'follow'
    };
    const response = this.makeRequest(requestEndpoint, requestOptions);
    response.then(data => {
      console.log(data);
    });
  }

  async getModules(appId) {
    
  }
  
  async getRevisions(appId, moduleId) {
    
  }

  async getFunctions(appId, moduleId, revisionId) {
    
  }

}

module.exports = Lyrid;
