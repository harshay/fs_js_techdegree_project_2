/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Creator Name : Harshay Raipancholi
Contact : rharshay@gmail.com
Targeted Project Level : Exceeds Expectation
******************************************/

/**********************************************************************************************************/

//Get all student list elements  
const studList  = document.getElementsByClassName("student-item cf"); 
//get element that contains the student list (html)
const listDiv   = document.getElementsByClassName("student-list")[0]; 
//Get all tags containing student names (used for search functionality)
const studNameList  = document.getElementsByTagName("h3");
// select element that contains the header and student list elements
const highPage = document.getElementsByClassName("page")[0];
//element will contain the message that will be displayed if the search does not return any results
const noResultMessage = document.createElement("p"); 
highPage.appendChild(noResultMessage); 
noResultMessage.textContent = "No Results have been found";

/**********************************************************************************************************/
// create function which will display a maximum of 10 stuent list items from the page selected

const showPage = (selectedPage,listIn) => {

   //hide no results message by default
   noResultMessage.style.display = "none";

   //display a maximum of 10 students on the page when the page loads or when the page number is clicked
      const firstPage = selectedPage; 
   //highest student number (from the array) displayed on the selected page
      const upperLimit   = (firstPage * 10) - 1;  
   //lowest  student number (from the array) displayed on the selected page
      const lowerLimit   = (upperLimit - 9); 
   //calculate number of students on the page 
      let studNum   = listIn.length; 

   if(studNum === 0) { 
      
      //display no results message if no results are found. 
      noResultMessage.style.display = "";

   };
   

     
   //for loop will loop through all student items and only display the items within the calculated
   //limits above which change depending on the page selected
      for(let i = 0; i < studNum; i += 1) {
   
         let studListElem = listIn[i];
   
            if(i >= lowerLimit  && i <= upperLimit)  {    
               studListElem.style.display = ''; 
            }
            else {
               studListElem.style.display = 'none';
            }      
      }
   }
/**********************************************************************************************************/
   //on page load display first 10 items from the list
   showPage(1,studList);

/**********************************************************************************************************/
//create pagination elements depending on the number of pages required


const pagination = (listIn) => {   

   //capture div element ; used for getting ul tag's parent element
   const studUl = document.getElementsByTagName("ul")[0];
   //get parent element to which navigation/pagination buttons will be appended
   const studDiv = studUl.parentNode; 
   //number of students on the page 
   let studNum   = listIn.length; 
   //total number of pages to split the list by
   const pagesNum  = Math.ceil((studNum/10)); 
   ////////////////////////////////////////////////////////
   //create div element which will contain pagination
   const navDiv = document.createElement("div"); 
   studDiv.appendChild(navDiv); 
   navDiv.className = "pagination"; 

//loop will create all the buttons required for the navigation 
   for(let i = 0; i < pagesNum; i += 1) {

      //create list item
      let navListItem = document.createElement('li'); 
      //append list item to navigation div
      navDiv.appendChild(navListItem);
      //create a tag which will trigger the showPage function depending on the selecte page
      let navListLink = document.createElement('a');
      
      navListLink.textContent =  (i + 1);   
      
         if(i === 0)  {
            navListLink.className = "active"; 
         }

      navListItem.appendChild(navListLink);     

   };
};

/**********************************************************************************************************/
//on page load create pagination elements
pagination(studList);


/**********************************************************************************************************/
//add click event listner to all nav links

// get all links by tag name
const addLink = (listIn) => {

   const links = document.getElementsByTagName("a"); 

   for(let i = 0; i < links.length; i += 1) {

   //add click event listener which triggers a function based on the page selected
      links[i].addEventListener('click', (event) => { 
         
         //remove class names from all elements
         for(let j = 0; j < links.length; j += 1) {
            links[j].className = "";
         };

         //run show page function based on the selected page number
         showPage(links[i].textContent,listIn);

         //change class name to active for 
         event.target.className = "active";  

      });

   };

};

addLink(studList); 

/**********************************************************************************************************/
//add search functionality 

//create div which will contain the search box
const searchDiv = document.createElement("div"); 
searchDiv.className = "student-search";

//get parent element to which the search div will be inserted
const searchParent = document.getElementsByClassName("page-header cf")[0]; 

//append search div to parent element
searchParent.appendChild(searchDiv); 

//create div which will contain the search box
const searchBox = document.createElement("input"); 
searchBox.type = "text";

//append search box to search div 
searchDiv.appendChild(searchBox); 

//create search button
let searchButton = document.createElement('button'); 
searchButton.textContent = "Search";
//append list item to navigation div
searchDiv.appendChild(searchButton);


// element index numbers which match the text which was searched will be pushed to this array
let searchMatch = []; 

searchButton.addEventListener('click', (event) => {  
   
// clear array for a new search
searchMatch = []; 

//remove existing pagination
const pagin   = document.getElementsByClassName("pagination")[0]; 

if(pagin) { 
 pagin.remove();
};

// pick up all student list elements that match and push their index number to an array
   for(let k = 0; k < studNameList.length; k += 1) {   

      studList[k].style.display = "none";

      if(studNameList[k].textContent.toUpperCase().includes(searchBox.value.toUpperCase())) {;
          searchMatch.push(studList[k]); 
         };
   };

   //alter show page and pagination functions based on student list elements which matched the search value
   //attach click event listener to all links
   showPage(1,searchMatch);
   pagination(searchMatch);
   addLink(searchMatch); 

});

/**********************************************************************************************************/