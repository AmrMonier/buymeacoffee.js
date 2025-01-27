/**
 * Buy Me A Coffee JS | Main File
 * by Waren Gonzaga
 */

import  requester from './requester';

export default class BMC {
    access_token: string
    constructor(access_token) {
        this.access_token = access_token;
    }

    Supporters() {
        return this._sendRequest('supporters');
    }

    Subscriptions() {
        return this._sendRequest('subscriptions');
    }

    Extras() {
        return this._sendRequest('extras');
    }

    async _sendRequest(path) {
        const response = await requester.get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token,
            },
            validateStatus: function (status) {
                return status >= 200 && status < 300; // default
            }
        });
        return response.data;                        
    }
}

