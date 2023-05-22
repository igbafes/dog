 
     // global element
 const body = document.querySelector('body');
  const mainDiv = document.getElementById('main');
     //CREATING ELEMENT
     const app = document.createElement('div');
     app.setAttribute('class', 'app')
      body.prepend(app);
      // const header = document.createElement('div')
      //  app.append(header);
     const h1 = document.createElement('h1')
      h1.innerHTML = 'Dog web app';
      

        const img = document.createElement('img');
         img.src = 'image/dog.webp';

         const DIV = document.createElement('div');
         DIV.setAttribute('id','header');
         DIV.append(img);
         app.prepend(DIV);
          header.append(mainDiv);
          DIV.prepend(h1)

        let ANODA = document.createElement('div');
        ANODA.setAttribute('class','div2');
             ANODA.innerHTML =`<input type = "text" placeholder ="Search favorite dog">
             
              <button>search</button> `;

                DIV.prepend(ANODA);

                const slideShow = document.createElement('div');
                 slideShow.setAttribute('class', 'slideshow')
                  slideShow.setAttribute('id', 'slideshow');
                  
                 app.append(slideShow)
               
                  const slide = document.createElement('div');
                   slide.setAttribute('class','slide')
                    
                    slideShow.append(slide);
     
                // API LOGIC
            async function begin() {
            const res =  await  fetch('https://dog.ceo/api/breeds/list/all')
            const data =  await  res.json()
             //console.log(data)
             breedCategories(data.message);
               
      }

    begin();

    function breedCategories(category){
       
      document.getElementById('main').innerHTML = `
      
      <select onchange = "displayCategory(this.value)">
      <option> Choose a dog category</option>
        ${Object.keys(category).map(function(list){
            return `<option>${list}</option>`
        }). join('')};

      </select>
      `

    }

     // TO LOAD THE DATA

     async function displayCategory(category){
       //alert(category)
         if (category !== "Choose a dog category"){
           const res = await fetch(`https://dog.ceo/api/breed/${category}/images`)
           const data = await res.json()
            console.log(data);
            createSlideshow(data.message);

           }


    }

     // CREATE HTML TO EMPTY SLIDESHOW
    function createSlideshow(images){
      //console.log(images)
      document.getElementById('slideshow').innerHTML = `
    <div class="slide" style = 'background-image: url('${images[0]}');></div>
      
      `
    } 