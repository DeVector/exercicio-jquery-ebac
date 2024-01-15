$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const newTarefa = $('#new-tarefa').val();

        const newItem = $(`<li> ${newTarefa} </li>`)

        $(newItem).appendTo('ul');

        $('#new-tarefa').val('');

    })

    $('ul li').click(function (e) { 
        e.preventDefault();
        
        console.log('cliquei');
    });
})