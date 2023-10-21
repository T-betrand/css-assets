$(document).ready(function(){
    var dataTable = $('#filterable').DataTable({
        "pageLength":5,
        'aoColumnDefs':[{
            'bSortable':false,
            'aTargets':['nosort'],
        }],
        columndefs:[
            {type:'date-dd-mm-yyyy', aTargets:[5]}
        ],
        "aoColumns":[
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        "order":false,
        "bLengthChange":false,
        "dom":'<"top">ct<"top"p><"clear">'
    });
    $("#filterbox").keyup(function(){
        dataTable.search(this.value).draw();
    });
});