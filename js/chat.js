const posibleQuestionAndAnswer =
[
    {question:"Բարև Ձեզ, «Տան որսը» գրքի pdf տարբերակը կա", answer: "Ողջույն, հարգելի ընթերցող, ցավում եմ, բայց ոչ; Կարող եմ առաջարկել նույնաժանր գրքեր :)" },
    {question:"Բարև Ձեզ, ինչ գրքեր կառաջարկեք", answer: "Ողջույն, հարգելի ընթերցող, խնդրում եմ նշել Ձեր սիրելի ժանրը, նախընտրությունները, որպեսզի կարողանամ գրքեր առաջարկել <3" },
    {question:"Չեմ հասկանում, ինչպե՞ս ներբեռնեմ գրքերը", answer: "Ողջույն, հարգելի ընթերցող։ Մուտք գործեք կայքի «Գրքեր» ենթաբաժինը, ընտրեք ցանկալի գիրքը, ներքևի հատվածում կնկատեք «նեբնեռնել» կոճակը, սեղմեք կոճակին և կբեռնվի :)" }
]
class Chat {
     constructor (){
      const  messages = []
     }

     findQuestiion(){
        let inputValue = document.getElementById("inputtext").nodeValue;
        let foundQuestion = posibleQuestionAndAnswer.find(qa => qa.question.toLocaleLowerCase === inputValue.toLocaleLowerCase);

        return foundQuestion ? foundQuestion.answer : "Ողջույն սիրելի ընթերցող, մեր օպերատորները շուտով կարձագանքենն Ձեզ"
         }


}