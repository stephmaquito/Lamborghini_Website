
window.onload = showmodel1();
    function showmodel1(){
      document.getElementById('model').style.display ='block';
      document.getElementById('img1').style.backgroundImage="url(images/MSModel1/MSFront.png)";
      document.getElementById('img2').style.backgroundImage="url(images/MSModel1/MSBack.png)";
      document.getElementById('img3').style.backgroundImage="url(images/MSModel1/MSInterior.png)";

    document.getElementById('specs1').style.display = 'block';

    document.getElementById('specs2').style.display = 'none';
    document.getElementById('specs3').style.display = 'none';
}


function showmodel2(){

   document.getElementById('model').style.display ='block';
   document.getElementById('img1').style.backgroundImage="url(images/MSModel2/MSFront.png)";
   document.getElementById('img2').style.backgroundImage="url(images/MSModel2/MSBack.png)";
   document.getElementById('img3').style.backgroundImage="url(images/MSModel2/MSInterior.png)";

   document.getElementById('specs2').style.display = 'block';

   document.getElementById('specs1').style.display = 'none';
   document.getElementById('specs3').style.display = 'none';
}

function showmodel3(){
   document.getElementById('model').style.display ='block';
   document.getElementById('img1').style.backgroundImage="url(images/MSModel3/MSFront.png)";
   document.getElementById('img2').style.backgroundImage="url(images/MSModel3/MSBack.png)";
   document.getElementById('img3').style.backgroundImage="url(images/MSModel3/MSInterior.png)";

   document.getElementById('specs3').style.display = 'block';

   document.getElementById('specs1').style.display = 'none';
   document.getElementById('specs2').style.display = 'none';
}