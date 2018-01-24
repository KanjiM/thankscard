//var myApp = ons.bootstrap(['myApp']);

app.factory('RecieveData', function(){
    var recieveData = {};

    recieveData.items = [
        { 
           name: '道原寛治',
           recieveTime:'2018/1/9',
           cardNumber:'01',
           context:'ありがとうございました。'
        },
        { 
           name: '柏崎',
           recieveTime:'2018/1/21',
           cardNumber:'02',
           context:'Thank you!!'
        },
        { 
            name: '千葉',
           recieveTime:'2017/10/9',
           cardNumber:'03',
           context:'謝謝'
        },
        { 
            name: '伊藤',
           recieveTime:'2017/12/15',
           cardNumber:'04',
           context:'有難うございました。'
        }
    ]; 
 
    return recieveData;
});