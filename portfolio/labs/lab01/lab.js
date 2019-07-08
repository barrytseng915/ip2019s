/*

*/


function start(e) {
    var name = [
        {
            char: '曾',
            big5: 'B4BF',
            cns:  '1-5F64',
            unicode: '66FE'
        },
        {
            char: '勻',
            big5: 'A4C3',
            cns:  '1-4524',
            unicode: '52FB'
        },
        {
            char: '搴',
            big5: 'BA53',
            cns:  '1-687A',
            unicode: '6434'
        }
    ];

    var ele = document.getElementById("div123");

    console.log(ele);

    for (var i = 0; i < 3; i++) {

        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
        console.log('name = ' + name[i].char);

    }
};

window.addEventListener("load", start , false);