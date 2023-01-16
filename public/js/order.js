
const items = {
    
    Fresh : {
        small: 700,
        medium: 950,
        large: 1500,
        jumbo: 2000
    },

    dried : {
        small: 750,
        medium: 1000,
        large: 1550,
        jumbo: 2000
    },

    peppered : {
        small: 825,
        medium: 1200,
        large: 1800,
        jumbo: 2400
    }
}
  


function preview() {
    let item = document.getElementById("price");
    let option = document.getElementById("Lsnail").value;
    let hd1 = document.getElementById("hd1").childNodes[0].data.slice(1,-1);

    if (option == "small") {
        var imagesrc = "../img/" + hd1 + "/small.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

     if (hd1 == "Fresh") {
            item.innerHTML = items.Fresh.small;
        } else if ( hd1 == "Dried") {
            item.innerHTML =  items.dried.small;        
    }   else if (hd1 == "Peppered") {
            item.innerHTML =  items.peppered.small;
    }
 
    } else if (option == "medium") {
        var imagesrc = "../img/" + hd1 + "/medium.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

        if (hd1 == "Fresh") {
            item.innerHTML =  items.Fresh.medium;
        } else if ( hd1 == "Dried") {
            item.innerHTML = items.dried.medium;        
    }   else if (hd1 == "Peppered") {
            item.innerHTML =  items.peppered.medium;
    }        
        
    } else if (option == "large"){
        var imagesrc = "../img/" + hd1 + "/large.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);
 
        if (hd1 == "Fresh") {
            item.innerHTML =  items.Fresh.large;
        } else if ( hd1 == "Dried") {
            item.innerHTML =  items.dried.large;        
    }   else if (hd1 == "Peppered") {
            item.innerHTML =  items.peppered.large;
    }

    } else {
        var imagesrc = "../img/" + hd1 + "/jumbo.jpg";
        var img1 = document.querySelectorAll("img")[1];
        img1.setAttribute("src", imagesrc);

        if (hd1 == "Fresh") {
            item.innerHTML =  items.Fresh.jumbo;
        } else if ( hd1 == "Dried") {
            item.innerHTML =  items.dried.jumbo;        
    }   else if (hd1 == "Peppered") {
            item.innerHTML =  items.peppered.jumbo;
    }
    }

};

function price() {
    let delivery = Number(document.getElementById("delivery").innerHTML);
    let item = Number(document.getElementById("price").innerHTML);
    let total = document.getElementById("total");
    let input = Number(document.getElementById("qty").value);
 
    let items =  (item * input) + delivery;
    total.innerHTML = items
  
}


preview()
