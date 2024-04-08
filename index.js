

// Introduction section 
const introductionData = {
    h1Intro : '',
    descriptionIntro:'',
    descriptionIntrOne:'',
    numberOne:'',
    numberTow:'',
    numberThree:'',
    Yala:'',
    YalaText:'',
    Wilpattu:'',
    wilpattuText:'',
    Udawalawe:'',
    UdawalaweText:'',
    Biodiversity:'',
    Species:'',
    Efforts:'',
    One:'',
    TOw:'',
    Three:'',
    Four:'',
    Five:'',
    Six:'',
    Seven:'',
    Eght:'',
    banner:'',
    footer:'',
    footer02:'',
    h1res:'',

    

}


// fetch the JSON data
fetch('index.json')
    .then(response => response.json())
    .then(data => {
        introductionData.h1Intro = data.h1Intro;
        introductionData.descriptionIntro = data.descriptionIntro;
        introductionData.descriptionIntrOne = data.descriptionIntrOne;
        introductionData.numberOne = data.numberOne;
        introductionData.numberTow = data.numberTow;
        introductionData.numberThree = data.numberThree;
        introductionData.Yala = data.Yala;
        introductionData.YalaText = data.YalaText;
        introductionData.Wilpattu = data.Wilpattu;
        introductionData.wilpattuText = data.wilpattuText;
        introductionData.Udawalawe = data.Udawalawe;
        introductionData.UdawalaweText = data.UdawalaweText;
        introductionData.Biodiversity = data.Biodiversity;
        introductionData.Species = data.Species;
        introductionData.Efforts = data.Efforts;
        introductionData.One = data.One;
        introductionData.TOw = data.TOw;
        introductionData.Three = data.Three;
        introductionData.Four = data.Four;
        introductionData.Five = data.Five;
        introductionData.Six = data.Six;
        introductionData.Seven = data.Seven;
        introductionData.Eght = data.Eght;
        introductionData.banner = data.banner;
        introductionData.footer = data.footer;
        introductionData.footer02 = data.footer02;
        introductionData.h1res = data.h1res;


        localStorage.setItem('introductionData2',JSON.stringify(data));

        loadDataFromLocalStorage(); // Call the function to load data after storing

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section






function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("introductionData2");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        introductionData.h1Intro = parsedData.h1Intro;
        introductionData.descriptionIntr = parsedData.descriptionIntr;
        introductionData.descriptionIntrOne = parsedData.descriptionIntrOne;
        introductionData.numberOne = parsedData.numberOne;
        introductionData.numberTow = parsedData.numberTow;
        introductionData.numberThree = parsedData.numberThree;
        introductionData.Yala = parsedData.Yala;
        introductionData.YalaText = parsedData.YalaText;
        introductionData.Wilpattu = parsedData.Wilpattu;
        introductionData.wilpattuText = parsedData.wilpattuText;
        introductionData.Udawalawe = parsedData.Udawalawe;
        introductionData.UdawalaweText = parsedData.UdawalaweText;
        introductionData.Biodiversity = parsedData.Biodiversity;
        introductionData.Species = parsedData.Species;
        introductionData.Efforts = parsedData.Efforts;
        introductionData.One = parsedData.One;
        introductionData.TOw = parsedData.TOw;
        introductionData.Three = parsedData.Three;
        introductionData.Four = parsedData.Four;
        introductionData.Five = parsedData.Five;
        introductionData.Six = parsedData.Six;
        introductionData.Seven = parsedData.Seven;
        introductionData.Eght = parsedData.Eght;
        introductionData.banner = parsedData.banner;
        introductionData.footer = parsedData.footer;
        introductionData.footer02 = parsedData.footer02;
        introductionData.h1res = parsedData.h1res;
      
        console.log("Data loaded from local storage:", introductionData);
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
   
   
    const dialogTitle = document.getElementById('dialogTitle');
    dialogTitle.innerText = document.getElementById('introH1').innerText;

    const hello = document.getElementById('hello');
    hello.innerText = document.getElementById('descri01').innerText;

    const dia = document.getElementById('dia');
    dia.innerText = document.getElementById('des02').innerText;

    const pop = document.getElementById('pop');
    pop.innerText = document.getElementById('num01').innerText;

    const pop01 = document.getElementById('pop01');
    pop01.innerText = document.getElementById('num02').innerText;

    const pop02 = document.getElementById('pop02');
    pop02.innerText = document.getElementById('num03').innerText;

    const pop03 = document.getElementById('pop03');
    pop03.innerText = document.getElementById('ya').innerText;

    const pop04 = document.getElementById('pop04');
    pop04.innerText = document.getElementById('ya01').innerText;

    const pop05 = document.getElementById('pop05');
    pop05.innerText = document.getElementById('wil').innerText;

    const pop06 = document.getElementById('pop06');
    pop06.innerText = document.getElementById('wil01').innerText;

    const pop07 = document.getElementById('pop07');
    pop07.innerText = document.getElementById('uda').innerHTML;

    const pop08 = document.getElementById('pop08');
    pop08.innerText = document.getElementById('uda01').innerText;

    const pop09 = document.getElementById('pop09');
    pop09.innerText = document.getElementById('bio').innerText;

    const pop10 = document.getElementById('pop10');
    pop10.innerText = document.getElementById('spe').innerText;

    const pop11 = document.getElementById('pop11');
    pop11.innerText = document.getElementById('ef').innerText;

    const pop12 = document.getElementById('pop12');
    pop12.innerText = document.getElementById('on').innerText;

    const pop13 = document.getElementById('pop13');
    pop13.innerText = document.getElementById('to').innerText;

    const pop14 = document.getElementById('pop14');
    pop14.innerText = document.getElementById('th').innerText;

    const pop15 = document.getElementById('pop15');
    pop15.innerText = document.getElementById('fo').innerText;

    const pop16 = document.getElementById('pop16');
    pop16.innerText = document.getElementById('fi').innerText;

    const pop17 = document.getElementById('pop17');
    pop17.innerText = document.getElementById('si').innerText;

    const pop18 = document.getElementById('pop18');
    pop18.innerText = document.getElementById('se').innerText;

    const pop19 = document.getElementById('pop19');
    pop19.innerText = document.getElementById('eg').innerText;

    const pop20 = document.getElementById('pop20');
    pop20.innerText = document.getElementById('ba').innerText;

    const pop21 = document.getElementById('pop21');
    pop21.innerText = document.getElementById('fo01').innerText;

    const pop22 = document.getElementById('pop22');
    pop22.innerText = document.getElementById('fo02').innerText;

}

const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);





function editTitle() {
    const newTitle = document.getElementById("dialogTitle").innerText;
    introductionData.h1Intro = newTitle;

    const newTitle2 = document.getElementById("hello").innerText;
    introductionData.descriptionIntro = newTitle2;

    const newTitle3 = document.getElementById("dia").innerText;
    introductionData.descriptionIntrOne = newTitle3;

    const newTitle4 = document.getElementById("pop").innerText;
    introductionData.numberOne = newTitle4;

    const newTitle5 = document.getElementById("pop01").innerText;
    introductionData.numberTow = newTitle5;

    const newTitle6 = document.getElementById("pop02").innerText;
    introductionData.numberThree = newTitle6;

    const newTitle7 = document.getElementById("pop03").innerText;
    introductionData.Yala = newTitle7;

    const newTitle8 = document.getElementById("pop04").innerText;
    introductionData.YalaText = newTitle8;

    const newTitle9 = document.getElementById("pop05").innerText;
    introductionData.Wilpattu = newTitle9;

    const newTitle10 = document.getElementById("pop06").innerText;
    introductionData.wilpattuText = newTitle10;

    const newTitle11 =document.getElementById("pop07").innerText;
    introductionData.Udawalawe = newTitle11;

    const newTitle12 = document.getElementById("pop08").innerText;
    introductionData.UdawalaweText = newTitle12;

    const newTitle13 = document.getElementById("pop09").innerText;
    introductionData.Biodiversity = newTitle13;

    const newTitle14 = document.getElementById("pop10").innerText;
    introductionData.Species = newTitle14;

    const newTitle15 = document.getElementById("pop11").innerText;
    introductionData.Efforts = newTitle15;

    const newTitle16 = document.getElementById("pop12").innerText;
    introductionData.One = newTitle16;

    const newTitle17 = document.getElementById("pop13").innerText;
    introductionData.TOw = newTitle17;

    const newTitle18 = document.getElementById("pop14").innerText;
    introductionData.Three = newTitle18;

    const newTitle19 = document.getElementById("pop15").innerText;
    introductionData.Four = newTitle19;

    const newTitle20 = document.getElementById("pop16").innerText;
    introductionData.Five = newTitle20;

    const newTitle21 = document.getElementById("pop17").innerText;
    introductionData.Six = newTitle21;

    const newTitle22 = document.getElementById("pop18").innerText;
    introductionData.Seven = newTitle22;

    const newTitle23 = document.getElementById("pop19").innerText;
    introductionData.Eght = newTitle23;

    const newTitle24 = document.getElementById("pop20").innerText;
    introductionData.banner = newTitle24;

    const newTitle25 = document.getElementById("pop21").innerText;
    introductionData.footer = newTitle25;

    const newTitle26 = document.getElementById("pop22").innerText;
    introductionData.footer02 = newTitle26;

    document.title = newTitle; // Change the document title as well


    localStorage.setItem("introductionData2", JSON.stringify(introductionData)); // Update local storage

    document.getElementById("introH1").innerText = newTitle;
    document.getElementById("descri01").innerText = newTitle2;
    document.getElementById("des02").innerText = newTitle3;
    document.getElementById("num01").innerText = newTitle4;
    document.getElementById("num02").innerText = newTitle5;
    document.getElementById("num03").innerText = newTitle6;
    document.getElementById("ya").innerText = newTitle7;
    document.getElementById("ya01").innerText = newTitle8;
    document.getElementById("wil").innerText = newTitle9;
    document.getElementById("wil01").innerText = newTitle10;
    document.getElementById("uda").innerText = newTitle11;
    document.getElementById("uda01").innerText = newTitle12;
    document.getElementById("bio").innerText = newTitle13;
    document.getElementById("spe").innerText = newTitle14;
    document.getElementById("ef").innerText = newTitle15;
    document.getElementById("on").innerText = newTitle16;
    document.getElementById("to").innerText = newTitle17;
    document.getElementById("th").innerText = newTitle18;
    document.getElementById("fo").innerText = newTitle19;
    document.getElementById("fi").innerText = newTitle20;
    document.getElementById("si").innerText = newTitle21;
    document.getElementById("se").innerText = newTitle22;
    document.getElementById("eg").innerText = newTitle23;
    document.getElementById("ba").innerText = newTitle24;
    document.getElementById("fo01").innerText = newTitle25;
    document.getElementById("fo02").innerText = newTitle26;

}
function closeDialog() {
    loginDialog.close(); // Close the dialog
}





function storeNewsLetter() {
    let email = document.getElementById("emailInput").value;

    let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];

    if (getEmail.some(v => v.email === email)) {
      alert("Duplicate Email");
      return false; // Prevent form submission
    } else {
      getEmail.push({ "email": email });
      localStorage.setItem("newsLetter", JSON.stringify(getEmail));
      alert("subscription successful");
      return true; // Allow form submission
    }
  }







  