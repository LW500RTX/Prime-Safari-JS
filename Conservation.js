const cons = {
    depc:'',
    depc01:'',
    wildC03:'',
    wild04:'',
    wild05:'',
    wild06:'',
    banner06:'',
    pro:'',
    footer:'',
    footer02:'',
};

fetch('Conservation.json')
    .then(response => response.json())
    .then(data => {
            cons.depc = data.cons;
            cons.depc01 = data.depc01;
            cons.wildC03 = data.wildC03;
            cons.wild04 = data.wild04;
            cons.wild05 = data.wild05;
            cons.wild06 = data.wild06;
            cons.banner06 = data.banner06;
            cons.pro = data.pro;
            cons.footer = data.footer;
            cons.footer02 = data.footer02;


            localStorage.setItem('cons2',JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));







    function loadDataFromLocalStorage() {
        const storedData = localStorage.getItem("cons2");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            cons.depc = parsedData.depc;
            cons.depc01 = parsedData.depc01;
            cons.wildC03 = parsedData.wildC03;
            cons.wild04 = parsedData.wild04;
            cons.wild05 = parsedData.wild05;
            cons.wild06 = parsedData.wild06;
            cons.banner06 = parsedData.banner06;
            cons.pro = parsedData.pro;
            cons.footer = parsedData.footer;
            cons.footer02 = parsedData.footer02;
            
          
            console.log("Data loaded from local storage:", cons);
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
        pop.innerText = document.getElementById('de').innerText;

        const pop01 = document.getElementById('pop01');
        pop01.innerText = document.getElementById('dep').innerText;

        const pop02 = document.getElementById('pop02');
        pop02.innerText = document.getElementById('wil600').innerText;

        const pop03 = document.getElementById('pop03');
        pop03.innerText = document.getElementById('wil700').innerText;

        const pop04 = document.getElementById('pop04');
        pop04.innerText = document.getElementById('wil800').innerText;

        const pop05 = document.getElementById('pop05');
        pop05.innerText = document.getElementById('wil900').innerText;

        const pop06 = document.getElementById('pop06');
        pop06.innerText = document.getElementById('ban600').innerText;

        const pop07 = document.getElementById('pop07');
        pop07.innerText = document.getElementById('fo123').innerText;

        const pop08 = document.getElementById('pop08');
        pop08.innerText = document.getElementById('fo321').innerText;

       
        

    

    

    
        
    }
    
    const btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", editTitle);
    
    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", closeDialog);
    
    
    
    
    
    function editTitle() {
        const newTitle = document.getElementById("pop").innerText;
        cons.depc = newTitle;

        const newTitle01 = document.getElementById("pop01").innerText;
        cons.depc01 = newTitle01;

        const newTitle02 = document.getElementById("pop02").innerText;
        cons.wildC03 = newTitle02;

        const newTitle03 = document.getElementById("pop03").innerText;
        cons.wild04 = newTitle03; 

        const newTitle04 = document.getElementById("pop04").innerText;
        cons.wild05 = newTitle04;

        const newTitle05 = document.getElementById("pop05").innerText;
        cons.wild06 = newTitle05;

        const newTitle06 = document.getElementById("pop06").innerText;
        cons.banner06 = newTitle06;

        const newTitle07 = document.getElementById("pop07").innerText;
        cons.footer = newTitle07;

        const newTitle08 = document.getElementById("pop08").innerText;
        cons.footer02 = newTitle08;

    
        
    
        
    
        document.title = newTitle; // Change the document title as well
    
    
        localStorage.setItem("cons2", JSON.stringify(cons)); // Update local storage
    
        document.getElementById("de").innerText = newTitle;
        document.getElementById("dep").innerText = newTitle01;
        document.getElementById("wil600").innerText = newTitle02;
        document.getElementById("wil700").innerText = newTitle03;
        document.getElementById("wil800").innerText = newTitle04;
        document.getElementById("wil900").innerText = newTitle05;
        document.getElementById("ban600").innerText = newTitle06;
        document.getElementById("fo123").innerText = newTitle07;
        document.getElementById("fo321").innerText = newTitle08;
    }    
    function closeDialog() {
        loginDialog.close(); // Close the dialog
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    