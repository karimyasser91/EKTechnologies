function addProject(){
    $.ajax({
                url: "http://localhost/ProjectManagmentAPI/Source/v1/addproject",
                datatype: "JSON",
                type: "Post",
                success: function (data) {
                    debugger;
                    for(var i=0;i<data.length;i++)
                    {
                        var opt = new Option(data[i].Bname);
                        $("#op1").append(opt);
                    }
                }
            });
}