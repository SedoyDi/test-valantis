import md5 from "md5";

let _timeStamp = new Date();

const year = _timeStamp.getFullYear();
const month = String(_timeStamp.getMonth() + 1).padStart(2, '0');
const day = String(_timeStamp.getDate()).padStart(2, '0');

_timeStamp = year + month + day;

// const BASE_URL = "http://api.valantis.store:40000/";
const BASE_URL = "https://api.valantis.store:41000/";
const AUTH_KEY = md5(`Valantis_${_timeStamp}`);


export { AUTH_KEY, BASE_URL }