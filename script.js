var DESCOBRIR = 0;
var tentativas = 0;
var total = 10;

    function refresh(){
        
        var element = document.getElementById('aposta');
        element.value = '';
        
        DESCOBRIR = parseInt(Math.random() * 100);

        console.log('O numero pra descobrir: '+DESCOBRIR);
    }

    refresh();

    function verifyNumber(){
        var element = document.getElementById('aposta');
        var Aposta = element.value;

        if(Aposta > 100 || Aposta < 0)
        {
            alert('Aposta é inválida');
            return;
        }

        if(Aposta > DESCOBRIR)
        {
            tentativas++;
            alert('🚨 O número para ser encontrado é MENOR');
        }
        else if(Aposta < DESCOBRIR)
        {
            tentativas++;
            alert('🚨 O número para ser encontrado é MAIOR')
        }
        else
        {
            alert('✅ Parabéns você acertou!! Com '+tentativas+' erros!');
            location.reload();
        }

        var resultado = total - tentativas;

        var esper = document.getElementById('top10')
        esper.textContent = 'O jogador ainda tem '+resultado+' tentativas'

        if(resultado < 1){
            alert('Você infelizmente perdeu!! O número secreto era '+DESCOBRIR+'')
            location.reload();
        }

    }