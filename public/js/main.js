$(() => {
    $("#submitBtn").click(() => {
        let data = new FormData($("form").get(0));

        console.log("click");

        $.ajax({
            url : "http://localhost:3000/upload",
            method : "post",
            data: data,
            contentType: false,
            processData: false
        })
    });
});

function buildFormData() {
    let file = $('#uploadFile')[0].files[0];
    const formData = new FormData();
    formData.append('uploads', file);
    return formData;
}