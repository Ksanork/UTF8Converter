$(() => {
    $("#test").click(() => {
        $.ajax({
            url : "http://localhost:3000",
            method : "post",
            dataType : "json",
            data : {
                name : "Karol",
                age : 13
            }
        })
    });
});
