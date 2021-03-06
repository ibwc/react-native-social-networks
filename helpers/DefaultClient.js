
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


export class DefaultClient {

  token = undefined;

  static _instance;

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  getProfile() {
    return this.request('/user/profile', {});
  }

  request(path, data) {
    data.token = this.token;
    return fetch('https://vertical-social-networks.herokuapp.com' + path,
      {
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      })
      .then((response) => {
        let _json = response.json()
        return _json
      })
      .then((responseJson) => {
        return responseJson;
      });
  }


  isAuthorized() {
    return AsyncStorage.getItem('auth_token', (err, result) => {
      return result;
    }).then((token) => {
      this.token = token;
      if (token != undefined) {
        return true;
      } else {
        return false;
      }
    });
  }


  auth(username, password) {
    return this.request('/authenticate', { username, password });
  }

  getUsers(position) {
    return this.request('/users',
      {
        position: position.coords.latitude + ',' + position.coords.longitude
      });
  }

  getPosts(position) {
    console.log('getPosts?')
    return new Promise(function (resolve, reject) {
      resolve({
        "code": 0, "message": "", "result": [
          {
            "_id": 11111,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000, "text": "What Ever1", "photos": [
              "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            ]
          },
          {
            "_id": 11112,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000, "text": "What Ever2", "photos": [
              "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            ]
          },
          {
            "_id": 11113,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever?",
            "photos": [
              "https://adeshpande3.github.io/assets/GoogLeNet5.png",
            ]
          },
          {
            "_id": 11114,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32247281_266447213756365_2640353887067832320_n.jpg?_nc_cat=0&_nc_eui2=AeEFd2RmdifskxXA_VnNAE2u6stmMikO3Zerh_0EJCUbvZ-Facgb4v5Nw_j_ew8XldZGHyiyvO4OrRNxE_xRdByF35QLhBfwWB2y2w6wgqbQBQ&oh=0d6291ac62db1a77fde18998cbadc247&oe=5B8B0DBD",
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32228777_1602760306489596_9073635629941653504_n.jpg?_nc_cat=0&oh=809f4bf363cc1b283ac93b35df6e2b19&oe=5B763389",
            ]
          },
          {
            "_id": 11115,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32228777_1602760306489596_9073635629941653504_n.jpg?_nc_cat=0&oh=809f4bf363cc1b283ac93b35df6e2b19&oe=5B763389",
            ]
          },
          {
            "_id": 11116,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32378489_1106345419504311_1116611224021237760_o.jpg?_nc_cat=0&oh=5f2624e531c402b2a3e9949eea738de9&oe=5B86FB7F",
            ]
          },
          {
            "_id": 11117,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32228777_1602760306489596_9073635629941653504_n.jpg?_nc_cat=0&oh=809f4bf363cc1b283ac93b35df6e2b19&oe=5B763389",
              "https://adeshpande3.github.io/assets/GoogLeNet5.png",
            ]
          },
          {
            "_id": 11118,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://adeshpande3.github.io/assets/GoogLeNet5.png",
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32934292_1360302764071032_7191684581215436800_n.jpg?_nc_cat=0&oh=98afd7684bb177a54333121dbd9dc614&oe=5B9AB0DD",
              "https://adeshpande3.github.io/assets/GoogLeNet5.png",
            ]
          },
          {
            "_id": 11119,
            "user_id": 11111,
            "user_picture": "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460",
            "timestamp": 1000000,
            "text": "What Ever",
            "photos": [
              "https://adeshpande3.github.io/assets/GoogLeNet5.png",
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32378489_1106345419504311_1116611224021237760_o.jpg?_nc_cat=0&oh=5f2624e531c402b2a3e9949eea738de9&oe=5B86FB7F",
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32228777_1602760306489596_9073635629941653504_n.jpg?_nc_cat=0&oh=809f4bf363cc1b283ac93b35df6e2b19&oe=5B763389",
              "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/32228777_1602760306489596_9073635629941653504_n.jpg?_nc_cat=0&oh=809f4bf363cc1b283ac93b35df6e2b19&oe=5B763389",
            ]
          },
        ], "version": 1
      })
    });
  }


  login(username, password) {
    return this.auth(username, password)
      .then((response) => {
        if (response.code == 0) {
          AsyncStorage.setItem('auth_token', response.result)
          this.token = response.result;
          console.log('saved token: ' + response.result);
        }

        return response;
      })
  }

  logout() {
    this.token = undefined;
    return AsyncStorage.removeItem('auth_token')
  }
}