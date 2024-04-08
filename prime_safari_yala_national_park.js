// Introduction section 
const yalaNatinal = {
    yalaN:'',
    yalaNcontent:'',
    yalaNcontent01:'',
    yalaNcontent02:'',
    yalaNcontent03:'',
    uniqueYala:'',
    image01:'',
    image02:'',
    image03:'',
    history:'',
    history01:'',
    banner02:'',
    footer:'',
    footer02:'',
    

    

}


// fetch the JSON data
fetch('prime_safari_yala_national_park.json')
    .then(response => response.json())
    .then(data => {
        yalaNatinal.yalaN = data.yalaN;
        yalaNatinal.yalaNcontent = data.yalaNcontent;
        yalaNatinal.yalaNcontent01 = data.yalaNcontent01;
        yalaNatinal.yalaNcontent02 = data.yalaNcontent02;
        yalaNatinal.yalaNcontent03 = data.yalaNcontent03;
        yalaNatinal.uniqueYala = data.uniqueYala;
        yalaNatinal.image01 = data.image01;
        yalaNatinal.image02  = data.image02;
        yalaNatinal.image03 = data.image03;
        yalaNatinal.history = data.history;
        yalaNatinal.history01 = data.history01;
        yalaNatinal.banner02 = data.banner02;
        yalaNatinal.footer = data.footer;
        yalaNatinal.footer02 = data.footer02;


        localStorage.setItem('yalaNatinal2',JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section











function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("yalaNatinal2");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        yalaNatinal.yalaN = parsedData.yalaN;
        yalaNatinal.descriptionIntr = parsedData.descriptionIntr;
        yalaNatinal.descriptionIntrOne = parsedData.descriptionIntrOne;
        yalaNatinal.numberOne = parsedData.numberOne;
        yalaNatinal.numberTow = parsedData.numberTow;
        yalaNatinal.numberThree = parsedData.numberThree;
        yalaNatinal.Yala = parsedData.Yala;
        yalaNatinal.YalaText = parsedData.YalaText;
        yalaNatinal.Wilpattu = parsedData.Wilpattu;
        yalaNatinal.wilpattuText = parsedData.wilpattuText;
        yalaNatinal.Udawalawe = parsedData.Udawalawe;
        yalaNatinal.UdawalaweText = parsedData.UdawalaweText;
        yalaNatinal.Biodiversity = parsedData.Biodiversity;
        yalaNatinal.Species = parsedData.Species;
        
      
        console.log("Data loaded from local storage:", yalaNatinal);
    } else {
        console.log("No data found in local storage.");
    }
};


// Get reference to the login dialog
const loginDialog = document.getElementById('login-dialog');
// Function to show the login dialog
function showLoginDialog() {
    loginDialog.showModal();
    // Set dialog title dynamically
   
   
    

    const pop01 = document.getElementById('pop01');
    pop01.innerText = document.getElementById('yalasa01').innerText;

    const pop02 = document.getElementById('pop02');
    pop02.innerText = document.getElementById('yalasa02').innerText;

    const pop03 = document.getElementById('pop03');
    pop03.innerText = document.getElementById('yalasa03').innerText;

    const pop04 = document.getElementById('pop04');
    pop04.innerText = document.getElementById('yalasa04').innerText;

    const pop05 = document.getElementById('pop05');
    pop05.innerText = document.getElementById('yalasa05').innerText;

    const pop06 = document.getElementById('pop06');
    pop06.innerText = document.getElementById('uni01').innerText;

    const pop07 = document.getElementById('pop07');
    pop07.innerText = document.getElementById('img01').innerText;
     
    const pop08 = document.getElementById('pop08');
    pop08.innerText = document.getElementById('img02').innerText;

    const pop09 = document.getElementById('pop09');
    pop09.innerText = document.getElementById('img03').innerText;

    const pop10 = document.getElementById('pop10');
    pop10.innerText = document.getElementById('his').innerText;

    const pop11 = document.getElementById('pop11');
    pop11.innerText = document.getElementById('his01').innerText;

    const pop12 = document.getElementById('pop12');
    pop12.innerText = document.getElementById('ban01').innerText;

    const pop13 = document.getElementById('pop13');
    pop13.innerText = document.getElementById('fo').innerText;

    const pop14 = document.getElementById('pop14');
    pop14.innerText = document.getElementById('fo01').innerText;


    
}

const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);





function editTitle() {
    const newTitle = document.getElementById("pop01").innerText;
    yalaNatinal.yalaN = newTitle;

    const newTitle1 = document.getElementById("pop02").innerText;
    yalaNatinal.yalaNcontent = newTitle1;

    const newTitle2 = document.getElementById("pop03").innerText;
    yalaNatinal.yalaNcontent01 = newTitle2;

    const newTitle3 = document.getElementById("pop04").innerText;
    yalaNatinal.yalaNcontent02 = newTitle3;

    const newTitle4 = document.getElementById("pop05").innerText;
    yalaNatinal.yalaNcontent03 = newTitle4;

    const newTitle5 = document.getElementById("pop06").innerText;
    yalaNatinal.uniqueYala = newTitle5;

    const newTitle6 = document.getElementById("pop07").innerText;
    yalaNatinal.image01 = newTitle6;

    const newTitle7 = document.getElementById("pop08").innerText;
    yalaNatinal.image02 = newTitle7;

    const newTitle8 = document.getElementById("pop09").innerText;
    yalaNatinal.image03 = newTitle8;

    const newTitle9 = document.getElementById("pop10").innerText;
    yalaNatinal.history = newTitle9;

    const newTitle10 = document.getElementById("pop11").innerText;
    yalaNatinal.history01 = newTitle10;

    const newTitle11 = document.getElementById("pop12").innerText;
    yalaNatinal.banner02 = newTitle11;

    const newTitle12 = document.getElementById('pop13').innerText;
    yalaNatinal.footer = newTitle12;

    const newTitle13 = document.getElementById('pop14').innerText;
    yalaNatinal.footer02 = newTitle13;

   

    document.title = newTitle; // Change the document title as well


    localStorage.setItem("yalaNatinal2", JSON.stringify(yalaNatinal)); // Update local storage

    document.getElementById("yalasa01").innerText = newTitle;
    document.getElementById("yalasa02").innerText = newTitle1;
    document.getElementById("yalasa03").innerText = newTitle2;
    document.getElementById("yalasa04").innerText = newTitle3;
    document.getElementById("yalasa05").innerText = newTitle4;
    document.getElementById("uni01").innerText = newTitle5;
    document.getElementById("img01").innerText = newTitle6;
    document.getElementById("img02").innerText = newTitle7;
    document.getElementById("img03").innerText = newTitle8;
    document.getElementById("his").innerText = newTitle9;
    document.getElementById("his01").innerText = newTitle10;
    document.getElementById("ban01").innerText = newTitle11;
    document.getElementById("fo").innerText = newTitle12;
    document.getElementById("fo01").innerText = newTitle13;


}
function closeDialog() {
    loginDialog.close(); // Close the dialog
}






