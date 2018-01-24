function importJS() {  
    var scripts = new Array(
        'js/controllers/Setting.js',
        'js/controllers/ToThanksList.js',
        'js/controllers/ChooseDesign.js',
        'js/controllers/RecieveBox.js',
        'js/controllers/RecieveContext.js',
        'js/services/ToThanksUser.js',
        'js/services/SendData.js',
        'js/services/RecieveData.js'
        
    );
    for (var i=0; i < scripts.length; i++) {
        document.write('<script type="text/javascript" src="' +scripts[i] +'"></script>');
    }
}
importJS();