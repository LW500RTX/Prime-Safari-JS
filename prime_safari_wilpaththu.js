const wilpattuNatinal={
    wilpattuContent:'',
    Wilpattu01:'',
    Wilpattu02:'',
    Wilpattu03:'',
    Wilpattu04:'',
    Unique:'',
    contentW01:'',
    contentW02:'',
    contentW03:'',
    his:'',
    his01:'',
    his02:'',
    tit:'',
    banner:'',
    footer:'',
    footer02:'',
}

fetch('prime_safari_wilpaththu.json')
.then(response => response.json())
    .then(data => {
        
        wilpattuNatinal.wilpattuContent = data.wilpattuContent;
        wilpattuNatinal.Wilpattu01 = data.Wilpattu01;
        wilpattuNatinal.Wilpattu02 = data.Wilpattu02;
        wilpattuNatinal.Wilpattu03 = data.Wilpattu03;
        wilpattuNatinal.Wilpattu04 = data.Wilpattu04;
        wilpattuNatinal.Unique = data.Unique;
        wilpattuNatinal.contentW01 = data.contentW01;
        wilpattuNatinal.contentW02 = data.contentW02;
        wilpattuNatinal.contentW03 = data.contentW03;
        wilpattuNatinal.his = data.his;
        wilpattuNatinal.his01 = data.his01;
        wilpattuNatinal.his02 = data.his02;
        wilpattuNatinal.tit = data.tit;
        wilpattuNatinal.banner = data.banner;
        wilpattuNatinal.footer = data.footer;
        wilpattuNatinal.footer02 = data.footer02;

        localStorage.setItem('wilpattuNatinal2',JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section














function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("wilpattuNatinal2");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        wilpattuNatinal.yalaN = parsedData.yalaN;
        wilpattuNatinal.descriptionIntr = parsedData.descriptionIntr;
        wilpattuNatinal.descriptionIntrOne = parsedData.descriptionIntrOne;
        wilpattuNatinal.numberOne = parsedData.numberOne;
        wilpattuNatinal.numberTow = parsedData.numberTow;
        wilpattuNatinal.numberThree = parsedData.numberThree;
        wilpattuNatinal.Yala = parsedData.Yala;
        wilpattuNatinal.YalaText = parsedData.YalaText;
        wilpattuNatinal.Wilpattu = parsedData.Wilpattu;
        wilpattuNatinal.wilpattuText = parsedData.wilpattuText;
        wilpattuNatinal.Udawalawe = parsedData.Udawalawe;
        wilpattuNatinal.UdawalaweText = parsedData.UdawalaweText;
        wilpattuNatinal.Biodiversity = parsedData.Biodiversity;
        wilpattuNatinal.Species = parsedData.Species;
        
      
        console.log("Data loaded from local storage:", wilpattuNatinal);
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
    pop01.innerText = document.getElementById('wil').innerText;

    const pop02 = document.getElementById('pop02');
    pop02.innerText = document.getElementById('wil01').innerText;

    const pop03 = document.getElementById('pop03');
    pop03.innerHTML = document.getElementById('wil02').innerText;

    const pop04 = document.getElementById('pop04');
    pop04.innerText = document.getElementById('wil03').innerText;

    const pop05 = document.getElementById('pop05');
    pop05.innerText = document.getElementById('wil04').innerText;

    const pop06 = document.getElementById('pop06');
    pop06.innerText = document.getElementById('uni').innerText;

    const pop07 = document.getElementById('pop07');
    pop07.innerText = document.getElementById('con').innerText;

    const pop08 = document.getElementById('pop08');
    pop08.innerText = document.getElementById('con01').innerText;

    const pop09 = document.getElementById('pop09');
    pop09.innerText = document.getElementById('con02').innerText;

    const pop10 = document.getElementById('pop10');
    pop10.innerText = document.getElementById('h').innerText;

    const pop11 = document.getElementById('pop11');
    pop11.innerText = document.getElementById('h1').innerText;

    const pop12 = document.getElementById('pop12');
    pop12.innerText = document.getElementById('h2').innerText;

    const pop13 = document.getElementById('pop13');
    pop13.innerText = document.getElementById('t').innerText;

    const pop14 = document.getElementById('pop14');
    pop14.innerText = document.getElementById('ba').innerText;

    const pop15 = document.getElementById('pop15');
    pop15.innerText = document.getElementById('fo001').innerText;

    const pop16 = document.getElementById('pop16');
    pop16.innerText = document.getElementById('fo002').innerText;

   


    
}

const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);





function editTitle() {
    const newTitle = document.getElementById("pop01").innerText;
    wilpattuNatinal.wilpattuContent = newTitle;

    const newTitle1 = document.getElementById("pop02").innerText;
    wilpattuNatinal.Wilpattu01 = newTitle1;

    const newTitle2 = document.getElementById("pop03").innerText;
    wilpattuNatinal.Wilpattu02 = newTitle2;

    const newTitle3 = document.getElementById("pop04").innerText;
    wilpattuNatinal.Wilpattu03 = newTitle3;

    const newTitle4 = document.getElementById("pop05").innerText;
    wilpattuNatinal.Wilpattu04 = newTitle4;

    const newTitle5 = document.getElementById("pop06").innerText;
    wilpattuNatinal.Unique = newTitle5;

    const newTitle6 = document.getElementById("pop07").innerText;
    wilpattuNatinal.contentW01 = newTitle6;

    const newTitle7 = document.getElementById("pop08").innerText;
    wilpattuNatinal.contentW02 = newTitle7;

    const newTitle8 = document.getElementById("pop09").innerText;
    wilpattuNatinal.contentW03 = newTitle8;

    const newTitle9 = document.getElementById("pop10").innerText;
    wilpattuNatinal.his = newTitle9;

    const newTitle10 = document.getElementById("pop11").innerText;
    wilpattuNatinal.his01 = newTitle10;

    const newTitle11 = document.getElementById("pop12").innerText;
    wilpattuNatinal.his02 = newTitle11;

    const newTitle12 = document.getElementById("pop13").innerText;
    wilpattuNatinal.tit = newTitle12;

    const newTitle13 = document.getElementById('pop14').innerText;
    wilpattuNatinal.banner = newTitle13;

    const newTitle14 = document.getElementById('pop15').innerText;
    wilpattuNatinal.footer = newTitle14;

    const newTitle15 = document.getElementById('pop16').innerText;
    wilpattuNatinal.footer02 = newTitle15;

 

   

    document.title = newTitle; // Change the document title as well


    localStorage.setItem("wilpattuNatinal2", JSON.stringify(wilpattuNatinal)); // Update local storage

    document.getElementById("wil").innerText = newTitle;
    document.getElementById("wil01").innerText = newTitle1;
    document.getElementById("wil02").innerText = newTitle2;
    document.getElementById("wil03").innerText = newTitle3;
    document.getElementById("wil04").innerText = newTitle4;
    document.getElementById("uni").innerText = newTitle5;
    document.getElementById("con").innerText = newTitle6;
    document.getElementById("con01").innerText = newTitle7;
    document.getElementById("con02").innerText = newTitle8;
    document.getElementById("his").innerText = newTitle9;
    document.getElementById("his01").innerText = newTitle10;
    document.getElementById("his02").innerText = newTitle11;
    document.getElementById("tit").innerText = newTitle12;
    document.getElementById("ba").innerText = newTitle13;
    document.getElementById("fo001").innerText = newTitle14;
    document.getElementById("fo002").innerText = newTitle15;


}
function closeDialog() {
    loginDialog.close(); // Close the dialog
}






