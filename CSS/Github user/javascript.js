


$(document).ready(function(){
    $('#searchbar').on('keyup',function(e){
        let username=e.target.value
$.ajax({
    url:'https://api.github.com/users/'+username,
    data:{
     client_id:'7964a1ea48ccab992c18',
     client_server:'04a66077ce61f486cc1a8d6d957014668e83ca81'
    }

}).done(function(user){
    $('#profile').html(`
    <div class="panel panel-default">
    <div class="panel-body">
    <h3>${user.name}</h3>
    </div>
    <div class="panel-footer">
    <h3>${user.bio}</h3>
    </div>
  </div>`)
})

    })
})