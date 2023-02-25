   const startbtn=document.querySelector(".intro-button")
   const matchDiv=document.querySelector(".match")
   const introDiv=document.querySelector(".intro")
   const playBtn=document.querySelectorAll(".option")
   const playerHand=document.querySelector(".player-hand")
   const computerHand=document.querySelector(".computer-hand")
   const winnerText=document.querySelector("#winner")
   const pScore=document.querySelector("#player")
   const cScore=document.querySelector("#computer")  
   const pColor=document.querySelector(".pColor")
   const cColor=document.querySelector(".cColor")
   const block=document.querySelector(".options")
   const winningPng=document.querySelector(".winning-png")
   
   let computerScore=0; 
   let playerScore=0;

      function showIntroScreen(){
        startbtn.addEventListener("click",()=>{
        introDiv.classList.add("fadeout")
        matchDiv.classList.remove("fadeout");
      })
     }   showIntroScreen()

    function match(){ 
       playBtn.forEach(buttons=>{
       	buttons.addEventListener("click",()=>{

 setTimeout(()=>{
 changeImg()
  whoWins()
  updateScore();
  roundEnd();
  notBlock()
 },1900)



       		function GetOptions(){
       			computerOptions=["rock","paper","scissor"]
            	playerChoise=buttons.textContent;
             	computerChoise=computerOptions[Math.floor(Math.random(computerOptions)*3)];

     }  GetOptions()

            function changeImg(){
                computerHand.src=`assets/${computerChoise}.png`
                playerHand.src=`assets/${playerChoise}.png`
           }

             function whoWins(){
           
             	if(playerChoise===computerChoise){
             		winnerText.textContent="This is a tie"
                    return;
             	}

             	if(playerChoise==="rock"){
             		if(computerChoise==="paper"){
             		winnerText.textContent="Computer wins"
             		computerScore++;
             		updateScore()
             		return;
             		}
             		else{winnerText.textContent="Player wins"}
             			playerScore++;
		         		updateScore();
		         		return;
             	}

               if(playerChoise==="paper"){
             		if(computerChoise==="rock"){
             		 winnerText.textContent="Player wins"
             		 playerScore++;
             	  	 updateScore();
             		return;
             		}
             		else{
             		 winnerText.textContent="Computer wins"
             		 computerScore++;
             		 updateScore()
             		return;
             	   }
             	}

              if(playerChoise==="scissor"){
             		if(computerChoise==="rock"){
             		winnerText.textContent="Computer wins"
             		computerScore++;
             		updateScore()
             		return;
             		}
             		else{
             		winnerText.textContent="Player wins"
             	      playerScore++;
		         	  updateScore()
		         	   return;
             	}
             	}
             }
       
            function updateScore(){
              cScore.textContent=computerScore;
              pScore.textContent=playerScore;
            } 

            function addingAnimi(){
            	computerHand.classList.toggle("computer-animation")
            	playerHand.classList.toggle("player-animation")
            	setTimeout(()=>{
            	computerHand.classList.remove("computer-animation")
            	playerHand.classList.remove("player-animation")},1900)
              notshowingWinningPng()
            }addingAnimi()
            function roundEnd(){
            	if (playerScore===5&&playerScore++){
                   winnerText.textContent="Player won this round"
                   playerScore=0;
                   computerScore=0;
                  pColor.classList.add("pColorGreen")
                  cColor.classList.add("cColorRed")
                  showingWinningPng()
                   return;
            	}    
            	 else{
                   	 pColor.classList.remove("pColorGreen")
                  cColor.classList.remove("cColorRed")

                   }
            	if(computerScore===5&&computerScore++){
            		winnerText.textContent="Computer won this round"
                   playerScore=0;
                   computerScore=0;
                     pColor.classList.add("pColorRed")
                  cColor.classList.add("cColorGreen")
                  showingWinningPng()
                   return;
            	}else{
            		   pColor.classList.remove("pColorRed")
                  cColor.classList.remove("cColorGreen")
            	}
            }
            function blocking(){
            	block.classList.add("block")
            }blocking()
            function notBlock(){
            block.classList.remove("block")
            }
       	})})
 
        function showingWinningPng(){
        winningPng.style.display="block"
        }
        function notshowingWinningPng(){
          winningPng.style.display="none"
        }
     } match()
    
