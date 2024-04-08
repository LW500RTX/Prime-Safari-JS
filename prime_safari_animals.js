const animals = {
    elephant: '',
    elephant01: '',
    elephant02:'',
    bear:'',
    bear01:'',
    bear02:'',
    langur:'',
    langur01:'',
    langur02:'',
    toque:'',
    toque01:'',
    toque02:'',
    deer:'',
    deer01:'',
    deer02:'',
    crocodile:'',
    crocodile01:'',
    crocodile02:'',
    wild:'',
    wild01:'',
    yale:'',
    wild02:'',
    wil:'',
    wild03:'',
    hor:'',
    banner:'',
    footer:'',
    footer02:'',
};

fetch('primeAnimals.json')
    .then(response => response.json())
    .then(data => {
        animals.elephant = data.elephant;
        animals.elephant01 = data.elephant01;
        animals.elephant02 = data.elephant02;
        animals.bear = data.bear;
        animals.bear01 = data.bear01;
        animals.bear02 = data.bear02;
        animals.langur = data.langur;
        animals.langur01 = data.langur01;
        animals.langur02 = data.langur02;
        animals.toque = data.toque;
        animals.toque01 = data.toque01;
        animals.toque02 = data.toque02;
        animals.deer = data.deer;
        animals.deer01 = data.deer01;
        animals.deer02 = data.deer02;
        animals.crocodile = data.crocodile;
        animals.crocodile01 = data.crocodile01;
        animals.crocodile02 = data.crocodile02;
        animals.wild = data.wild;
        animals.wild01 = data.wild01;
        animals.yale = data.yale;
        animals.wild02 = data.wild02;
        animals.wil = data.wil;
        animals.wild03 = data.wild03;
        animals.hor = data.hor;
        animals.banner = data.banner;
        animals.footer = data.footer;
        animals.footer02 = data.footer02;


        localStorage.setItem('animals2',JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));











    function loadDataFromLocalStorage() {
        const storedData = localStorage.getItem("animals2");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            animals.elephant = parsedData.elephant;
            animals.elephant01 = parsedData.elephant01;
            animals.elephant02 = parsedData.elephant02;
            animals.bear = parsedData.bear;
            animals.bear01 = parsedData.bear01;
            animals.bear02 = parsedData.bear02;
            animals.langur = parsedData.langur;
            animals.langur01 = parsedData.langur01;
            animals.langur02 = parsedData.langur02;
            animals.toque = parsedData.toque;
            animals.toque01 = parsedData.toque01;
            animals.toque02 = parsedData.toque02;
            animals.deer = parsedData.deer;
            animals.deer01 = parsedData.deer01;
            animals.deer02 = parsedData.deer02;
            
          
            console.log("Data loaded from local storage:", animals);
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
        pop01.innerText = document.getElementById('elp').innerText;

        const pop02 = document.getElementById('pop02');
        pop02.innerText = document.getElementById('elp01').innerText;

        const pop03 = document.getElementById('pop03');
        pop03.innerText = document.getElementById('elp02').innerText;

        const pop04 = document.getElementById('pop04');
        pop04.innerText = document.getElementById('be').innerText;

        const pop05 = document.getElementById('pop05');
        pop05.innerText = document.getElementById('be01').innerText;

        const pop06 = document.getElementById('pop06');
        pop06.innerText = document.getElementById('be02').innerText;

        const pop07 = document.getElementById('pop07');
        pop07.innerText = document.getElementById('lan').innerText;

        const pop08 = document.getElementById('pop08');
        pop08.innerText = document.getElementById('lan01').innerText;

        const pop09 = document.getElementById('pop09');
        pop09.innerText = document.getElementById('lan02').innerText;

        const pop10 = document.getElementById('pop10');
        pop10.innerText = document.getElementById('to01').innerText;

        const pop11 = document.getElementById('pop11');
        pop11.innerText = document.getElementById('to02').innerText;

        const pop12 = document.getElementById('pop12');
        pop12.innerText = document.getElementById('to03').innerText;

        const pop13 = document.getElementById('pop13');
        pop13.innerText = document.getElementById('de').innerText;

        const pop14 = document.getElementById('pop14');
        pop14.innerText = document.getElementById('de01').innerText;

        const pop15 = document.getElementById('pop15');
        pop15.innerText = document.getElementById('de02').innerText;

        const pop16 = document.getElementById('pop16');
        pop16.innerText = document.getElementById('cro').innerText;

        const pop17 = document.getElementById('pop17');
        pop17.innerText = document.getElementById('cro01').innerText;

        const pop18 = document.getElementById('pop18');
        pop18.innerText = document.getElementById('cro02').innerText;

        const pop19 = document.getElementById('pop19');
        pop19.innerText = document.getElementById('wi').innerText;

        const pop20 = document.getElementById('pop20');
        pop20.innerText = document.getElementById('wi100').innerText;

        const pop21 = document.getElementById('pop21');
        pop21.innerText = document.getElementById('ya01').innerText;

        const pop22 = document.getElementById('pop22');
        pop22.innerText = document.getElementById('wil200').innerText;

        const pop23 = document.getElementById('pop23');
        pop23.innerText = document.getElementById('wil300').innerText;

        const pop24 = document.getElementById('pop24');
        pop24.innerText = document.getElementById('wil600').innerText;

        const pop25 = document.getElementById('pop25');
        pop25.innerText = document.getElementById('hor200').innerText;

        const pop26 = document.getElementById('pop26');
        pop26.innerText = document.getElementById('ba100').innerText;

        const pop27 = document.getElementById('pop27');
        pop27.innerText = document.getElementById('fo100').innerText;

        const pop28 = document.getElementById('pop28');
        pop28.innerText = document.getElementById('fo200').innerText;

        
    
    
       

        
    }
    
    const btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", editTitle);
    
    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", closeDialog);
    
    
    
    
    
    function editTitle() {
        const newTitle = document.getElementById("pop01").innerText;
        animals.elephant = newTitle;

        const newTitle1 = document.getElementById("pop02").innerText;
        animals.elephant01 = newTitle1;

        const newTitle2 = document.getElementById("pop03").innerText;
        animals.elephant02 = newTitle2;

        const newTitle3 = document.getElementById("pop04").innerText;
        animals.bear = newTitle3;

        const newTitle4 = document.getElementById("pop05").innerText;
        animals.bear01 = newTitle4;

        const newTitle5 = document.getElementById('pop06').innerText;
        animals.bear02 = newTitle5;

        const newTitle6 = document.getElementById('pop07').innerText;
        animals.langur = newTitle6;

        const newTitle7 = document.getElementById('pop08').innerText;
        animals.langur01 = newTitle7;

        const newTitle8 = document.getElementById('pop09').innerText;
        animals.langur02 = newTitle8;

        const newTitle9 = document.getElementById('pop10').innerText;
        animals.toque = newTitle9;

        const newTitle10 = document.getElementById('pop11').innerText;
        animals.toque01 = newTitle10;

        const newTitle11 = document.getElementById('pop12').innerText;
        animals.toque02 = newTitle11;

        const newTitle12 = document.getElementById('pop13').innerText;
        animals.deer = newTitle12;

        const newTitle13 = document.getElementById('pop14').innerText;
        animals.deer01 = newTitle13;

        const newTitle14 = document.getElementById('pop15').innerText;
        animals.deer02 = newTitle14;

        const newTitle15 = document.getElementById('pop16').innerText;
        animals.crocodile = newTitle15;

        const newTitle16 = document.getElementById('pop17').innerText;
        animals.crocodile01 = newTitle16;

        const newTitle17 = document.getElementById('pop18').innerText;
        animals.crocodile02 = newTitle17;

        const newTitle18 = document.getElementById('pop19').innerText;
        animals.wild = newTitle18;

        const newTitle19 = document.getElementById('pop20').innerText;
        animals.wild01 = newTitle19;

        const newTitle20 = document.getElementById('pop21').innerText;
        animals.yale = newTitle20;

        const newTitle21 = document.getElementById('pop22').innerText;
        animals.wild02 = newTitle21;

        const newTitle22 = document.getElementById('pop23').innerText;
        animals.wil = newTitle22;

        const newTitle23 = document.getElementById('pop24').innerText;
        animals.wild03 = newTitle23;

        const newTitle24 = document.getElementById('pop25').innerText;
        animals.hor = newTitle24;

        const newTitle25 = document.getElementById('pop26').innerText;
        animals.banner = newTitle25;

        const newTitle26 = document.getElementById('pop27').innerText;
        animals.footer = newTitle26;

        const newTitle27 = document.getElementById('pop28').innerText;
        animals.footer02 = newTitle27;

    
    
     
    
       
    
        document.title = newTitle; // Change the document title as well
    
    
        localStorage.setItem("animals2", JSON.stringify(animals)); // Update local storage
    
        document.getElementById("elp").innerText = newTitle;
        document.getElementById("elp01").innerText = newTitle1;
        document.getElementById("elp02").innerText = newTitle2;
        document.getElementById("be").innerText = newTitle3;
        document.getElementById("be01").innerText = newTitle4;
        document.getElementById("be02").innerText = newTitle5;
        document.getElementById("lan").innerText = newTitle6;
        document.getElementById("lan01").innerText = newTitle7;
        document.getElementById("lan02").innerText = newTitle8;
        document.getElementById("to01").innerText = newTitle9;
        document.getElementById("to02").innerText = newTitle10;
        document.getElementById("to03").innerText = newTitle11;
        document.getElementById("de").innerText = newTitle12;
        document.getElementById("de01").innerText = newTitle13;
        document.getElementById("de02").innerText = newTitle14;
        document.getElementById("cro").innerText = newTitle15;
        document.getElementById("cro01").innerText = newTitle16;
        document.getElementById("cro02").innerText = newTitle17;
        document.getElementById("wi").innerText = newTitle18;
        document.getElementById("wi100").innerText = newTitle19;
        document.getElementById("ya01").innerText = newTitle20;
        document.getElementById("wil200").innerText = newTitle21;
        document.getElementById("wil300").innerText = newTitle22;
        document.getElementById("wil600").innerText = newTitle23;
        document.getElementById("hor200").innerText = newTitle24;
        document.getElementById("ba100").innerText = newTitle25;
        document.getElementById("fo100").innerText = newTitle26;
        document.getElementById("fo200").innerText = newTitle27;
    
    
    }
    function closeDialog() {
        loginDialog.close(); // Close the dialog
    }
    
    
    
    
    
    
    