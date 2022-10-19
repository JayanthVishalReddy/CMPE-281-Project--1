function FetchData() {
    $.ajax({
        async: false,
        type: "GET",
        url: "Your_WebService_URL",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, object) {
                if(i==="title"){
                    document.getElementById("title").InnerHTML = object;
                }
                if(i==="home_image"){
                    document.getElementById("title").InnerHTML = '<img src="'+object+'"/>';
                }
    
            });
        },
        error: function() {
            alert("There was an error loading the feed");
        }
    });