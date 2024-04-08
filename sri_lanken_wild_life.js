// Introduction section 
const srilankanWildLife = {
    content02:'',
    aboutOne:'',
    aboutTow:'',
    aboutThree:'',
    aboutFour:'',
    aboutFive:'',
    Minneriya:'',
    minneriyaContent:'',
    horton:'',
    hortonContent:'',
    sinharaja:'',
    sinharajaContent:'',
    minneriyaPark:'',
    minneriyaContent01:'',
    minneriyaContent02:'',
    Horton01:'',
    hortonContent01:'',
    hortonContent02:'',
    sinharaja01:'',
    sinharajaContent01:'',
    sinharajaContent02:'',
    banner01:'',
    wildL:'',
    footer:'',
    footer02:'',

    

}


// fetch the JSON data
fetch('sri_lanken_wild_life02.json')
    .then(response => response.json())
    .then(data => {
        srilankanWildLife.content02 = data.content02;
        srilankanWildLife.aboutOne = data.aboutOne;
        srilankanWildLife.aboutTow = data.aboutTow;
        srilankanWildLife.aboutThree = data.aboutThree;
        srilankanWildLife.aboutFour = data.aboutFour;
        srilankanWildLife.aboutFive = data.aboutFive;
        srilankanWildLife.Minneriya = data.Minneriya;
        srilankanWildLife.minneriyaContent = data.minneriyaContent;
        srilankanWildLife.horton = data.horton;
        srilankanWildLife.hortonContent = data.hortonContent;
        srilankanWildLife.sinharaja = data.sinharaja;
        srilankanWildLife.sinharajaContent = data.sinharajaContent;
        srilankanWildLife.minneriyaPark = data.minneriyaPark;
        srilankanWildLife.minneriyaContent01 = data.minneriyaContent01;
        srilankanWildLife.minneriyaContent02 = data.minneriyaContent02;
        srilankanWildLife.Horton01 = data.Horton01;
        srilankanWildLife.hortonContent01 = data.hortonContent01;
        srilankanWildLife.hortonContent02 = data.hortonContent02;
        srilankanWildLife.sinharaja01 = data.sinharaja01;
        srilankanWildLife.sinharajaContent01 = data.sinharajaContent01;
        srilankanWildLife.sinharajaContent02 = data.sinharajaContent02;
        srilankanWildLife.banner01 = data.banner01;
        srilankanWildLife.wildL = data.wildL;
        srilankanWildLife.footer = data.footer;
        srilankanWildLife.footer02 = data.footer02;


        localStorage.setItem('srilankenWildLife2',JSON.stringify(data));

        loadDataFromLocalStorage(); // Call the function to load data after storing

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section










function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("srilankenWildLife2");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        srilankanWildLife.content02 = parsedData.content02;
        srilankanWildLife.aboutOne = parsedData.aboutOne;
        srilankanWildLife.aboutTow = parsedData.aboutTow;
        srilankanWildLife.aboutThree = parsedData.aboutThree;
        srilankanWildLife.aboutFour = parsedData.aboutFour;
        srilankanWildLife.aboutFive = parsedData.aboutFive;
        srilankanWildLife.Minneriya = parsedData.Minneriya;
        srilankanWildLife.minneriyaContent = parsedData.minneriyaContent;
        srilankanWildLife.horton = parsedData.horton;
        srilankanWildLife.hortonContent = parsedData.hortonContent;
        srilankanWildLife.sinharaja = parsedData.sinharaja;
        srilankanWildLife.sinharajaContent = parsedData.sinharajaContent;
        srilankanWildLife.minneriyaPark = parsedData.minneriyaPark;
        srilankanWildLife.minneriyaContent01 = parsedData.minneriyaContent01;
        srilankanWildLife.minneriyaContent02 = parsedData.minneriyaContent02;
        srilankanWildLife.Horton01 = parsedData.Horton01;
        srilankanWildLife.hortonContent01 = parsedData.hortonContent01;
        srilankanWildLife.hortonContent02 = parsedData.hortonContent02;
        srilankanWildLife.sinharaja01 = parsedData.sinharaja01;
        srilankanWildLife.sinharajaContent01 = parsedData.sinharajaContent01;
        srilankanWildLife.sinharajaContent02 = parsedData.sinharajaContent02;
        srilankanWildLife.banner01 = parsedData.banner01;
        srilankanWildLife.wildL = parsedData.wildL;
        srilankanWildLife.footer = parsedData.footer;
        srilankanWildLife.footer02 = parsedData.footer02;
      
        console.log("Data loaded from local storage:", srilankanWildLife);
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
   
   
    const pop = document.getElementById('pop');
    pop.innerText = document.getElementById('con01').innerText;

    const pop01 = document.getElementById('pop01');
    pop01.innerText = document.getElementById('ab').innerText;

    const pop02 = document.getElementById('pop02');
    pop02.innerText = document.getElementById('adt').innerText;

    const pop03 = document.getElementById('pop03');
    pop03.innerText = document.getElementById('adth').innerText; 

    const pop04 = document.getElementById('pop04');
    pop04.innerText = document.getElementById('adf').innerText;

    const pop05 = document.getElementById('pop05');
    pop05.innerText = document.getElementById('adfi').innerText;

    const pop06 = document.getElementById('pop06');
    pop06.innerText = document.getElementById('wil01').innerText;

    const pop07 = document.getElementById('pop07');
    pop07.innerText = document.getElementById('min01').innerText;

    const pop08 = document.getElementById('pop08');
    pop08.innerText = document.getElementById('min02').innerText;

    const pop09 = document.getElementById('pop09');
    pop09.innerText = document.getElementById('ho').innerText;

    const pop10 = document.getElementById('pop10');
    pop10.innerText = document.getElementById('hor').innerText;

    const pop11 = document.getElementById('pop11');
    pop11.innerText = document.getElementById('sin').innerText;

    const pop12 = document.getElementById('pop12');
    pop12.innerText = document.getElementById('sin01').innerText;

    const pop13 = document.getElementById('pop13');
    pop13.innerText = document.getElementById('min100').innerText;

    const pop14 = document.getElementById('pop14');
    pop14.innerText = document.getElementById('min200').innerText;

    const pop15 = document.getElementById('pop15');
    pop15.innerText = document.getElementById('min300').innerText;

    const pop16 = document.getElementById('pop16');
    pop16.innerText = document.getElementById('hor100').innerText;

    const pop17 = document.getElementById('pop17');
    pop17.innerText = document.getElementById('hor200').innerText;

    const pop18 = document.getElementById('pop18');
    pop18.innerText = document.getElementById('hor300').innerText;

    const pop19 = document.getElementById('pop19');
    pop19.innerText = document.getElementById('sinh100').innerText;

    const pop20 = document.getElementById('pop20');
    pop20.innerText = document.getElementById('sinh200').innerText;

    const pop21 = document.getElementById('pop21');
    pop21.innerText = document.getElementById('sinh300').innerText;

    const pop22 = document.getElementById('pop22');
    pop22.innerText = document.getElementById('ban100').innerText;

    const pop23 = document.getElementById('pop23');
    pop23.innerText = document.getElementById('fo111').innerText;

    const pop24 = document.getElementById('pop24');
    pop24.innerText = document.getElementById('fo222').innerText;


  


    
}

const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);





function editTitle() {
    const newTitle = document.getElementById("pop").innerText;
    srilankanWildLife.content02 = newTitle;

    const newTitle1 = document.getElementById("pop01").innerText;
    srilankanWildLife.aboutOne = newTitle1;
    
    const newTitle2 = document.getElementById("pop02").innerText;
    srilankanWildLife.aboutTow = newTitle2;

    const newTitle3 = document.getElementById("pop03").innerText;
    srilankanWildLife.aboutThree = newTitle3;

    const newTitle4 = document.getElementById("pop04").innerText;
    srilankanWildLife.aboutFour = newTitle4;

    const newTitle5 = document.getElementById("pop05").innerText;
    srilankanWildLife.aboutFive = newTitle5;

    const newTitle6 = document.getElementById("pop06").innerText;
    srilankanWildLife.wildL = newTitle6;

    const newTitle7 = document.getElementById("pop07").innerText;
    srilankanWildLife.Minneriya = newTitle7;

    const newTitle8 = document.getElementById("pop08").innerText;
    srilankanWildLife.minneriyaContent = newTitle8;

    const newTitle09 = document.getElementById("pop09").innerText;
    srilankanWildLife.horton = newTitle09;

    const newTitle10 = document.getElementById("pop10").innerText;
    srilankanWildLife.hortonContent = newTitle10;

    const newTitle11 = document.getElementById("pop11").innerText;
    srilankanWildLife.sinharaja = newTitle11;

    const newTitle12 = document.getElementById("pop12").innerText;
    srilankanWildLife.sinharajaContent = newTitle12;

    const newTitle13 = document.getElementById("pop13").innerText;
    srilankanWildLife.minneriyaPark = newTitle13; 

    const newTitle14 = document.getElementById("pop14").innerText;
    srilankanWildLife.minneriyaContent01 = newTitle14;

    const newTitle15 = document.getElementById("pop15").innerText;
    srilankanWildLife.minneriyaContent02 = newTitle15;

    const newTitle16 = document.getElementById("pop16").innerText;
    srilankanWildLife.Horton01 = newTitle16;

    const newTitle17 = document.getElementById("pop17").innerText;
    srilankanWildLife.hortonContent01 = newTitle17;

    const newTitle18 = document.getElementById("pop18").innerText;
    srilankanWildLife.hortonContent02 = newTitle18;

    const newTitle19 = document.getElementById("pop19").innerText;
    srilankanWildLife.sinharaja01 = newTitle19;

    const newTitle20 = document.getElementById("pop20").innerText;
    srilankanWildLife.sinharajaContent01 = newTitle20;

    const newTitle21 = document.getElementById("pop21").innerText;
    srilankanWildLife.sinharajaContent02 = newTitle21;

    const newTitle22 = document.getElementById("pop22").innerText;
    srilankanWildLife.banner01 = newTitle22;

    const newTitle23 = document.getElementById("pop23").innerText;
    srilankanWildLife.footer = newTitle23;

    const newTitle24 = document.getElementById("pop24").innerText;
    srilankanWildLife.footer02 = newTitle24;

   

    

    document.title = newTitle; // Change the document title as well


    localStorage.setItem("srilankenWildLife2", JSON.stringify(srilankanWildLife)); // Update local storage

    document.getElementById("con01").innerText = newTitle;
    document.getElementById("ab").innerText = newTitle1;
    document.getElementById("adt").innerText = newTitle2;
    document.getElementById("adth").innerText = newTitle3;
    document.getElementById("adf").innerText = newTitle4;
    document.getElementById("adfi").innerText = newTitle5;
    document.getElementById("wil01").innerText = newTitle6;
    document.getElementById("min01").innerText = newTitle7;
    document.getElementById("min02").innerText = newTitle8;
    document.getElementById("ho").innerText = newTitle09;
    document.getElementById("hor").innerText = newTitle10;
    document.getElementById("sin").innerText = newTitle11;
    document.getElementById("sin01").innerText = newTitle12;
    document.getElementById("min100").innerText = newTitle13;
    document.getElementById("min200").innerText = newTitle14;
    document.getElementById("min300").innerText = newTitle15;
    document.getElementById("hor100").innerText = newTitle16;
    document.getElementById("hor200").innerText = newTitle17;
    document.getElementById("hor300").innerText = newTitle18;
    document.getElementById("sinh100").innerText = newTitle19;
    document.getElementById("sinh200").innerText = newTitle20;
    document.getElementById("sinh300").innerText = newTitle21;
    document.getElementById("ban100").innerText = newTitle22;
    document.getElementById("fo111").innerText = newTitle23;
    document.getElementById("fo222").innerText = newTitle24;
    
    

}
function closeDialog() {
    loginDialog.close(); // Close the dialog
}



















