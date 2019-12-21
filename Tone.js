// get Tone_Analysis response 
// must input parameter
function get_tone_analysis(input_Tone_Analysis){
  return new Promise(function(resolve,reject){
    const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');

    // set apikey and url
    const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
      apikey: 'IR3urmeUo9Uft1XXq2qAAzE5L_opLhxsyVepEwivFwlt',
    }),
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
  });


  // set Tone_Analysis parameter
    const toneParams = {
    toneInput: { 'text': input_Tone_Analysis },
    contentType: 'application/json',
  };

    toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
    data=JSON.stringify(toneAnalysis, null, 2);
      // console.log(data);
      resolve(data);
    })
    .catch(err => {
      console.log('error:', err);
    });
    })
  }

  // input from translate --->阿棋
  input = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';


  get_tone_analysis(input).then(function(value){
    console.log(value);
  })