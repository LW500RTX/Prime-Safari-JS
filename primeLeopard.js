const eo = {
    leopard01:'',
    leopard02:'',
    leopard05:'',
    leopard03:'',
    leopard04:'',
    leo01:'',
    leo02:'',
    leo03:'',
    wil02:'',
    wil03:'',
    hot01:'',
    hot02:'',
    threat:'',
    con01L:'',
    con02L:'',
    con03L:'',
    con04L:'',
    con05L:'',
    hum01:'',
    hum02:'',
    hum03:'',
    hum04:'',
    hum05:'',
    banner05:'',
    footer:'',
    footer02:'',
   
}
fetch('prime_leopard.json')
    .then(response => response.json())
    .then(data => {
        
        eo.leopard01 = data.leopard01;
        eo.leopard02 = data.leopard02;
        eo.leopard03 = data.leopard03;
        eo.leopard04 = data.leopard04;
        eo.leopard05 = data.leopard05;
        eo.leo01 = data.leo01;
        eo.leo02 = data.leo02;
        eo.leo03 = data.leo03;
        eo.wil02 = data.wil02;
        eo.wil03 = data.wil03;
        eo.hot01 = data.hot01;
        eo.hot02 = data.hot02;
        eo.threat = data.threat;
        eo.con01L = data.con01L; 
        eo.con02L = data.con02L;
        eo.con03L = data.con03L;
        eo.con04L = data.con04L;
        eo.con05L = data.con05L;
        eo.hum01 = data.hum01;
        eo.hum02 = data.hum02;
        eo.hum03 = data.hum03;
        eo.hum04 = data.hum04;
        eo.hum05 = data.hum05;
        eo.banner05 = data.banner05;
        eo.footer = data.footer;
        eo.footer02 = data.footer02;



        localStorage.setItem('eo',JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));













    function loadDataFromLocalStorage() {
        const storedData = localStorage.getItem("eo2");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            eo.leopard01 = parsedData.leopard01;
            eo.leopard02 = parsedData.leopard02;
            eo.leopard03 = parsedData.leopard03;
            eo.leopard04 = parsedData.leopard04;
            eo.leopard05 = parsedData.leopard05;
            eo.leo01 = parsedData.leo01;
            eo.leo02 = parsedData.leo02;
            eo.leo03 = parsedData.leo03;
            eo.wil02 = parsedData.wil02;
            eo.wil03 = parsedData.wil03;
            eo.hot01 = parsedData.hot01;
            eo.hot02 = parsedData.hot02;
            eo.threat = parsedData.threat;
            eo.con01L = parsedData.con01L;
            eo.con02L = parsedData.con02L;
            eo.con03L = parsedData.con03L;
            eo.con04L = parsedData.con04L;
            eo.con05L = parsedData.con05L;
            eo.hum01 = parsedData.hum01;
            eo.hum02 = parsedData.hum02;
            eo.hum03 = parsedData.hum03;
            eo.hum04 = parsedData.hum04;
            eo.hum05 = parsedData.hum05;
            eo.banner05 = parsedData.banner05;
            eo.footer = parsedData.footer;
            eo.footer02 = parsedData.footer02;
          
            console.log("Data loaded from local storage:", eo);
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
        pop.innerText = document.getElementById('leo100').innerText;

        const pop01 = document.getElementById('pop01');
        pop01.innerText = document.getElementById('leo200').innerText;

        const pop02  = document.getElementById('pop02');
        pop02.innerText = document.getElementById('leo300').innerText;

        const pop03 = document.getElementById('pop03');
        pop03.innerText = document.getElementById('leo400').innerText;

        const pop04 = document.getElementById('pop04');
        pop04.innerText = document.getElementById('leo500').innerText;

        const pop05 = document.getElementById('pop05');
        pop05.innerText = document.getElementById('leo600').innerText;

        const pop06 = document.getElementById('pop06');
        pop06.innerText = document.getElementById('leo700').innerText;

        const pop07 = document.getElementById('pop07');
        pop07.innerText = document.getElementById('leo800').innerText;

        const pop08 = document.getElementById('pop08');
        pop08.innerText = document.getElementById('wil100').innerText;

        const pop09 = document.getElementById('pop09');
        pop09.innerText = document.getElementById('wil200').innerText;

        const pop10 = document.getElementById('pop10');
        pop10.innerText = document.getElementById('hot100').innerText;

        const pop11 = document.getElementById('pop11');
        pop11.innerText = document.getElementById('hot200').innerText;

        const pop12 = document.getElementById('pop12');
        pop12.innerText = document.getElementById('thre100').innerText;

        const pop13 = document.getElementById('pop13');
        pop13.innerText = document.getElementById('con100').innerText;

        const pop14 = document.getElementById('pop14');
        pop14.innerText = document.getElementById('con200').innerText;

        const pop15 = document.getElementById('pop15');
        pop15.innerText = document.getElementById('con300').innerText;

        const pop16 = document.getElementById('pop16');
        pop16.innerText = document.getElementById('con400').innerText;

        const pop17 = document.getElementById('pop17');
        pop17.innerText = document.getElementById('con500').innerText;

        const pop18 = document.getElementById('pop18');
        pop18.innerText = document.getElementById('hum100').innerText;

        const pop19 = document.getElementById('pop19');
        pop19.innerText = document.getElementById('hum200').innerText;

        const pop20 = document.getElementById('pop20');
        pop20.innerText = document.getElementById('hum300').innerText;

        const pop21 = document.getElementById('pop21');
        pop21.innerText = document.getElementById('hum400').innerText;

        const pop22 = document.getElementById('pop22');
        pop22.innerText = document.getElementById('hum500').innerText;

        const pop23 = document.getElementById('pop23');
        pop23.innerText = document.getElementById('ban1000').innerText;

        const pop24 = document.getElementById('pop24');
        pop24.innerText = document.getElementById('fo654').innerText;

        const pop25 = document.getElementById('pop25');
        pop25.innerText = document.getElementById('foot456').innerText;
        

    

    

    
        
    }
    
    const btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", editTitle);
    
    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", closeDialog);
    
    
    
    
    
    function editTitle() {
        const newTitle = document.getElementById("pop").innerText;
        eo.leopard01 = newTitle;

        const newTitle1 = document.getElementById("pop01").innerText;
        eo.leopard02 = newTitle1;

        const newTitle2 = document.getElementById('pop02').innerText;
        eo.leopard05 = newTitle2;

        const newTitle3 = document.getElementById('pop03').innerText;
        eo.leopard03 = newTitle3;

        const newTitle4 = document.getElementById('pop04').innerText;
        eo.leopard04 = newTitle4;

        const newTitle5 = document.getElementById('pop05').innerText;
        eo.leo01 = newTitle5;

        const newTitle6 = document.getElementById('pop06').innerText;
        eo.leo02 = newTitle6;

        const newTitle7 = document.getElementById('pop07').innerText;
        eo.leo03 = newTitle7;

        const newTitle8 = document.getElementById('pop08').innerText;
        eo.wil02 = newTitle8;

        const newTitle9 = document.getElementById('pop09').innerText;
        eo.wil03 = newTitle9;

        const newTitle10 = document.getElementById('pop10').innerText;
        eo.hot01 = newTitle10;

        const newTitle11 = document.getElementById('pop11').innerText;
        eo.hot02 = newTitle11;

        const newTitle12 = document.getElementById('pop12').innerText;
        eo.threat = newTitle12;

        const newTitle13 = document.getElementById('pop13').innerText;
        eo.con01L = newTitle13;

        const newTitle14 = document.getElementById('pop14').innerText;
        eo.con02L = newTitle14;

        const newTitle15 = document.getElementById('pop15').innerText;
        eo.con03L = newTitle15;

        const newTitle16 = document.getElementById('pop16').innerText;
        eo.con04L = newTitle16;

        const newTitle17 = document.getElementById('pop17').innerText;
        eo.con05L = newTitle17;

        const newTitle18 = document.getElementById('pop18').innerText;
        eo.hum01 = newTitle18;

        const newTitle19 = document.getElementById('pop19').innerText;
        eo.hum02 = newTitle19;

        const newTitle20 = document.getElementById('pop20').innerText;
        eo.hum03 = newTitle20;

        const newTitle21 = document.getElementById('pop21').innerText;
        eo.hum04 = newTitle21;

        const newTitle22 = document.getElementById('pop22').innerText;
        eo.hum05 = newTitle22;

        const newTitle23 = document.getElementById('pop23').innerText;
        eo.banner05 = newTitle23;

        const newTitle24 = document.getElementById('pop24').innerText;
        eo.footer = newTitle24;

        const newTitle25 = document.getElementById('pop25').innerText;
        eo.footer02 = newTitle25;

    
        
    
        
    
        document.title = newTitle; // Change the document title as well
    
    
        localStorage.setItem("eo2", JSON.stringify(eo)); // Update local storage
    
        document.getElementById("leo100").innerText = newTitle;
        document.getElementById("leo200").innerText = newTitle1;
        document.getElementById("leo300").innerText = newTitle2;
        document.getElementById("leo400").innerText = newTitle3;
        document.getElementById("leo500").innerText = newTitle4;
        document.getElementById("leo600").innerText = newTitle5;
        document.getElementById("leo700").innerText = newTitle6;
        document.getElementById("leo800").innerText = newTitle7;
        document.getElementById("wil100").innerText = newTitle8;
        document.getElementById("wil200").innerText = newTitle9;
        document.getElementById("hot100").innerText = newTitle10;
        document.getElementById("hot200").innerText = newTitle11;
        document.getElementById("thre100").innerText = newTitle12;
        document.getElementById("con100").innerText = newTitle13;
        document.getElementById("con200").innerText = newTitle14;
        document.getElementById("con300").innerText = newTitle15;
        document.getElementById("con400").innerText = newTitle16;
        document.getElementById("con500").innerText = newTitle17;
        document.getElementById("hum100").innerText = newTitle18;
        document.getElementById("hum200").innerText = newTitle19;
        document.getElementById("hum300").innerText = newTitle20;
        document.getElementById("hum400").innerText = newTitle21;
        document.getElementById("hum500").innerText = newTitle22;
        document.getElementById("ban1000").innerText = newTitle23;
        document.getElementById("fo654").innerText = newTitle24;
        document.getElementById("foot456").innerText = newTitle25;
    
    }
    function closeDialog() {
        loginDialog.close(); // Close the dialog
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    