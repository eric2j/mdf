'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('2015/sales/input2.txt').toString();
var input = sfile.split('\n');

var nb = input.shift(); /*?*/
var countries = input.shift().split(';'); /*?*/

input;
var r = input.reduce((r, e) => {
    var person = e.split(';');
    var id = person.slice(0, 3).join(';'); /*?*/
    if (r.uniq.includes(id)) {
        r.doublons++;
    } else {
        r.uniq.push(id)
    var re = /\+[0-9]{1,3}-[0-9]{9,11}/;
    if (!re.test(person[3])) {
        person[3]; /*?*/
        r.telephoneErrones++;
    }
    if(!countries.includes(person[4])) r.horsZone++;
    }
    return r;
}, { uniq: [], doublons: 0, telephoneErrones: 0, horsZone: 0 })

console.log(r.doublons,r.telephoneErrones,r.horsZone);