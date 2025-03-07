
    function com() {
        
        var comment=document.getElementById("textareac")
        var commentbox=document.getElementById("drop")
        
        var commentvalue=comment.value.trim()
        if(commentvalue===' '){
            alert("Type a comment something")
            return;
        }
        var com=document.createElement("option")
        com.text=commentvalue
        commentbox.append(com)
        comment.value=' '
        alert("comment is saved")
    }
