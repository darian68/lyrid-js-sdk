import * as assert from 'assert';
import Lyrid from '../src/index';

//const lc = new Lyrid('RsliNzH8xQrdVIWJqOwd', 'bJq0YT7CRNKz4p0xh8rnQJB4VfYNwINEI3zlFJ67V25VGd8eXZ', "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1ETkJPVGd6UTBNMVFUQTBNRGMzTlRjeE1EZzJNRVkwT0RVNFF6TkdNVGsxUTBKRVFURkNNQSJ9.eyJpc3MiOiJodHRwczovL2x5cmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJRU3BBTzZ4R1h6Mnp3RTA4UXM4cndxT1F4VEpoeW9DNEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9seXJpZC5pby9hY2Nlc3MvYXV0aCIsImlhdCI6MTU5MTA4NzU2NiwiZXhwIjoxNTkxMTczOTY2LCJhenAiOiJRU3BBTzZ4R1h6Mnp3RTA4UXM4cndxT1F4VEpoeW9DNCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.cVvmFFO0VtaeYFFV7R_XROq8iFGFb4alzKk5dawU97b1_diqlAc3-WrjHjzH0BTKvhM24IzksT7pPunNv6FyQiAGJVWvF8lrks9NoDS66nyu09wAYv5EdiMW2uo3BY2ZGaXg0o56pachlcjYZven7fEA4F1CN46eNH-gO28IUDClKoS41xvW2xCFPTcPafQGQdxrI98vjxzr095DSN322pWtnyv3lRa_XZlxqKujh9KYaeoEJWvJ1R-ZIO3KPvCwd8CW8vTbIGBiPw0Ondjt9uz8sZb6o8g9tbkkxh-wny6LXNKMVamsfTeCBdJKzSPDpDzODNpO8E1bDkro2i3Z3w");
const lc = new Lyrid('RsliNzH8xQrdVIWJqOwd', 'bJq0YT7CRNKz4p0xh8rnQJB4VfYNwINEI3zlFJ67V25VGd8eXZ');
//const response = lc.getToken();
/*
lc.getApps().then(data =>{
  console.log(data)
});
lc.getRevisions('56edc263-b0c5-4672-b6cf-ca45a5c4e033','3ae6b878-30f3-4729-aa92-b1bfd5c376a9').then(data =>{
  console.log(data)
});*/
const input = JSON.stringify({"InputSample":"Hello"});
lc.execute('e7672cd0-ed0d-44ee-9068-c30feb5c7a8a', "LYR", input).then(data =>{
  console.log(data)
});
