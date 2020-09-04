//jQuery
 
$(document).ready(function (){
  
    //Variable declarations that use or refer to jquery should be INSIDE the ready function to make sure jquery is instanciated. 
    $name = $('input[name="item-name"'); //notice the different declaration…
    $amount = $('input[name="amount"'); 
    $type = $('select[name="type"');
    $date = $('input[name="date"');
    
    
    //Notice the $varname - Now each of these is is a jquery object corresponding to the DOM element and can be used to call the .val() method directly at any time. The way you had it before would only grab the value at the time of the declarations - ie before the values are set.
    
    $('#button').click(function () {
      // Making it always add a icon in the type row
      var type_icon; //Store the html fragment to a variable when needed.
      if ($type.val() == 'card') {
        type_icon = "<i class='fa fa-credit-card'></i>";
      } else if ($type.val() == 'cash') {
        type_icon = "<i class='fa fa-money'></i>";
      } else if ($type.val() == 'cryptocoin') {
        type_icon = "<i class='fa fa-bitcoin'></i>";
      } else if ($type.val() == 'other') {
        type_icon = "<i class='fa fa-question-circle'></i>";
      }
      
      var form_validated = true;
      //Add your validation tests, have them set form_validated to false if they fail
      //TODO
      
      if(form_validated) {
        //Now we can use our references we made before
        $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount">$'+$amount.val()+'</td></tr>');
        $date.val(null);
        $amount.val(null);
        $name.val(null);
        $("#if-empty").remove();
      };
    });
    
  });