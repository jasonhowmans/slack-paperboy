'use strict';

const imaps = require('imap-simple');
const Readable = require('stream').Readable;

module.exports = Object.create(imap.prototype, {});

function imap() {}

imap.prototype.connect = function(newsletter) {
  const self = this;

  const name = newsletter.name;
  const box = newsletter.box.toUpperCase();
  /*
    Requires IMAP_:uppercase 'box' name:_X
   */
  const config = {
    user: process.env[`IMAP_${box}_USER`],
    password: process.env[`IMAP_${box}_PASSWORD`],
    host: process.env[`IMAP_${box}_HOST`],
    port: process.env[`IMAP_${box}_PORT`],
    tls: process.env[`IMAP_${box}_TLS`],
    authTimeout: 3000
  };
  const client = imaps;

  console.log(`connect for ${name}`);

  return new Promise(function (resolve, reject) {
    client.connect(config).then(function(err, connection){
      if (err) {
        reject(err);
      }
      console.log('connected');

      return connection.openBox('INBOX').then(function() {
        var searchCriteria = ['HEADER', 'FROM', 'jsw@peterc.org'];
        var fetchOptions = {
          bodies: ['HEADER', 'TEXT'],
          markSeen: false
        };

        return connection.search(searchCriteria, fetchOptions).then(function (results) {
          var subjects = results.map(function (res) {
            return res.parts.filter(function (part) {
              return part.which === 'HEADER';
            })[0].body.subject[0];
          });

          resolve(subjects);
        });
      });
    });
  });
};

imap.prototype.poll = function (seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError(`seconds argument should be a Number, passed ${typeof seconds}`);
  }

  const stream = new Readable;
  const clientOptions = {
    max: 10,
  };

  const inbox = client.messages('label:inbox', clientOptions);
  inbox.on('data', (data) => stream.push(data));

  return stream;
};
