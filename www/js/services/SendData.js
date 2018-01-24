//var myApp = ons.bootstrap(['myApp']);

app.factory('SendData', function(){
    var sendData = {};

    sendData.items = [
        { 
            name: '伊藤',
            recieveTime:'2017/12/15',
            cardNumber:'04',
            context:'有難うございました。'
        },
        { 
            name: '千葉',
            recieveTime:'2017/10/9',
            cardNumber:'03',
            context:'謝謝'
        },
        { 
            name: '柏崎',
            recieveTime:'2018/1/21',
            cardNumber:'02',
            context:'Thank you!!'
        },
        { 
            name: '道原寛治',
            recieveTime:'2018/1/9',
            cardNumber:'01',
            context:'ありがとうございました。'
        }
    ]; 
 
    return sendData;
});