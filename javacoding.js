// list of Answers
const correctAnswers= ['A', 'A','A','A'];

// Form 
const form = document.querySelector('.quiz-form')


// Result 
const result = document.querySelector('.result')

// form Event
form.addEventListener('submit',e=>{
       e.preventDefault()

       const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
        let score = 0;
       userAnswers.forEach((answer,index)=>{
           if(answer ===  correctAnswers[index]){
                score += 25;
           }

           result.classList.remove('d-none');

           scrollTo(0,0);

           let output = 0;

           const timer= setInterval(()=>{
               result.querySelector('span').textContent = `${output}%`;
               if(output===score){
                   clearInterval(timer)
               }else{
                   output++
               }

           },15)
           
       }) //end for foreach


})//end event listener

