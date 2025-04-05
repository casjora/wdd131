const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray=getChapterList() || [];

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 

      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
    


  });

  function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent='❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage. 
        input.focus();
      });
      console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

//  function getChapterList(chaptersArray){

  //}

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }
  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
  
  function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
  }