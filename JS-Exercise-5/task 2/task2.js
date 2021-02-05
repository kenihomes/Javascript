let names =[
    "Ashish Shah",
    "Rashmin Chhatrala",
    "Yash Dubey",
    "Prakash Jain",
    "Yashraj Singh",
    "Viraj Sinha",
    "Rajesh Kumar",
    "Mahesh Marwadi",
    "Suresh Sahni",
    "Savan Ahera",
    "Amar Vilas",
    "Virdas Singhania",
    "Rajeshwari Bindra",
    "Birendra Bhalerao",
    "Virendra Bhupati",
    "Bhupendra Singh",
    "Bhuvam Bam",
    "Shri Raj",
    "Prashant Kamle",
    "Kamlesh Tomar",
    "Risabh Khare",
    "Rishi Kohli",
    "Kunwar Kharwanda",
    "Kartik Koli",
    "Komal Jain",
    "Kartikey Pandey"
];


let filterText = document.getElementById('searchText');

    filterText.addEventListener('keyup',filter);

     let ul = document.getElementById('names');

    for(let val of names){
        let li = document.createElement('li');
        li.style.display = "block"
        let p = document.createElement('p');
        let text = document.createTextNode(val);
        p.appendChild(text);
        li.appendChild(p);
        ul.appendChild(li);
    }


    function filter(){
        let filterValue = document.getElementById('searchText').value;
       
        let li = ul.querySelectorAll('li');

        for (i in li) {
            let p = li[i].getElementsByTagName('p')[0];
            
            //if text matches
            if(p.innerText.indexOf(filterValue) > -1){
                let regx =new RegExp(filterValue,"gi");
                p.innerHTML = names[i].replace(regx,`<b class="highlight">${filterValue}</b>`)
                li[i].style.display = '';
            }
            else{
                li[i].style.display = 'none';
            }
            if(filterValue == ""){
                li[i].style.display ='none'
            }
        }
    }