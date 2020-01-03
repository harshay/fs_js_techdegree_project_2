/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Notes

/**********************************************************************************************************/

//Get all student list elements by class name 
const studList  = document.getElementsByClassName("student-item cf"); 
//number of students on the page 
const studNum   = studList.length; 
//total number of pages to split the list by
const pagesNum  = Math.ceil((studNum/10)); 
//get class that contains the student list html
const listDiv   = document.getElementsByClassName("student-list")[0]; 
//capture div element ; used for appending buttons
const studUl = document.getElementsByTagName("ul")[0];
//get parent element to which navigation/pagination buttons will be appended
const studDiv = studUl.parentNode; 


/**********************************************************************************************************/

// function will display first 10 student items when the page loads
const loadPage = () => {

//display first 10 students on the page when the page loads
   const firstPage = 1; 
//highest student number (from the array) displayed on the selected page
   const upperLimit   = (firstPage * 10) - 1;  
//lowest  student number (from the array) displayed on the selected page
   const lowerLimit   = (upperLimit - 9); // 
//for loop will loop through all student items and only display the first 10 items on the page
   for(let i = 0; i < studNum; i += 1) {

      let studListElem = studList[i];

      if(i >= lowerLimit  && i <= upperLimit)  {    
         studListElem.style.display = ''; 
      }
      else {
         studListElem.style.display = 'none';
      }      
   }
}

//run load page function
loadPage();
/**********************************************************************************************************/

// function will display 10 stuents items from the page selected
const showPage = (selectedPage) => {

   //display first 10 students on the page when the page loads
      const firstPage = selectedPage; 
   //highest student number (from the array) displayed on the selected page
      const upperLimit   = (firstPage * 10) - 1;  
   //lowest  student number (from the array) displayed on the selected page
      const lowerLimit   = (upperLimit - 9); // 
   //for loop will loop through all student items and only display the items on the selected page
      for(let i = 0; i < studNum; i += 1) {
   
         let studListElem = studList[i];
   
         if(i >= lowerLimit  && i <= upperLimit)  {    
            studListElem.style.display = ''; 
         }
         else {
            studListElem.style.display = 'none';
         }      
      }
   }


/**********************************************************************************************************/


const navButton = document.createElement("button"); 

//loop will create all the buttons required for the navigation & apply click event listener to each
for(let i = 0; i < pagesNum; i += 1) {

   //create button
   let navButton = document.createElement('button'); 
   //add page number to the button
   navButton.textContent =  (i + 1);
   //append button to the div 
   studDiv.appendChild(navButton);
   //add click event listener which triggers a function based on the page selected
   navButton.addEventListener('click', () => { 

      showPage(navButton.textContent); 

   })
       
}


// studDiv.className = "pagination";

/**********************************************************************************************************/