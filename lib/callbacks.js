twilio = Twilio('AC9bdd1d0e921da277279c88901769736f', '41cfd1b27bbe1522ea47f3ea1f85fa5e');

function sendTwilioSms(post) {
  twilio.sendSms({
    to:'+16154797444', 
    from: '+16157510778', 
    body: 'word to your mother.' 
  }, function(err, responseData) {  
    if (!err) { 
      console.log(responseData.from); 
      console.log(responseData.body); 
    }
  });
  return post;
};

Telescope.callbacks.add("postSubmit", sendTwilioSms);