import axios from 'axios';

import { decode as atob, encode as btoa } from 'base-64';

import qs from 'qs';

import {
    hostApiServer,
    portApiServer,
    hostLoftecLoginServer,
    portLoftecLoginServer,
    herokuappServer,
    herokuappPort
} from '../etc/config.json';

export default {
    getMarkers() {
        const basicAuth = 'Basic ' + btoa("123" + ':' + "123456");
        const request = axios.create({
            headers: {
                "Authorization": basicAuth,
                "Content-Type": "application/json; charset=utf-8",
                'Accept': 'application/json',
                "Cache-Control": "no-store, no-cache, must-revalidate"
            }
        });
        return request.get(`${hostApiServer}:${portApiServer}/charge_stations`); ///${id}
    },
}