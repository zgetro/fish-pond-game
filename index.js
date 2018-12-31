$(document).ready(function() {
    var next = 0;
    $("#add-more").click(function(e) {
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field' + next + '" name="field' + next + '">' + '<div class="form-group">' + '<label class="col-md-4 control-label" for="wish">Fish</label>' + '<div class="col-md-5"> <textarea id="wish" name="wish[]" placeholder="What is in your mind!" required class="form-control input-md" > </textarea></div>' + '</div>' + '</div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button><br/><br/><br/>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);
        $('.remove-me').click(function(e) {
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length - 1);
            var fieldID = "#field" + fieldNum;
            $(this).next('br').remove();
            $(this).next('br').remove();
            $(this).next('br').remove();
            $(this).remove();
            $(fieldID).remove();
        });
    });
});