const request = require('request')

// https://docs.awesomeapi.com.br/api-de-moedas

const currency = 'USD-BRL,EUR-BRL,BTC-BRL'

const options = { 
    url:`https://economia.awesomeapi.com.br/last/${currency}`,
    method:'GET' ,
    Headers: {
        'Accept' : 'application/json',
        'Accept-Charset': 'utf-8'
    } 
} 

const callback_all_accounts = function (erro, res, body) {
    let json = JSON.parse(body)
    console.log(json)
}

request (options, callback_all_accounts)