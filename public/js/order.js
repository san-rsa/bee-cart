function preview() {
    let option = document.getElementById("Lsnail").value;

    let hd1 = document.getElementById("hd1").childNodes[0].data;

   console.log(hd1);

    if (option == "small") {
        console.log(option);
        var imagesrc = "../img/frs.jpeg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

    } else if (option == "medium") {
        var imagesrc = "../img/frm.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);
        
    } else if (option == "large"){
        var imagesrc = "../img/frl.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

    } else {
        var imagesrc = "../img/frl.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

    }

};

preview()
   console.log(hd1);





// img();
