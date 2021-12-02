var kbc={
    // 6 questions in total.  worth total= 2Lac

    'question_list':[
        {
            'text': "In the game of ludo the discs or tokens are of how many colours?",
            'options': ["One", "Two", "Three", "Four"],
            'correct_answer': "Four",
            'price_amount': 10000
        },
        {
            'text': "Where was the BRICS summit held in 2014?",
            'options': ["Brazil", "India", "Russia", "China"],
            'correct_answer': "Brazil",
            'price_amount': 10000



        },
        {
            'text': "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
            'options': ["P.B. Shelley", "Alfred Tennyson", "W.B. Yeats", "T.S. Elliot"],
            'correct_answer': "W.B. Yeats",
            'price_amount': 10000

        },{
            'text': "Which of these leaders was a recipient of a gallantry award in 1987 by a state government for saving two girls from drowning?",
            'options': ["Anandiben Patel", "Vasundhara Raje Scindia", "Uma Bharti", "Mamata Banerjee"],
            'correct_answer': "Anandiben Patel",
            'price_amount': 20000
        },
        {
            'text': "Which of these terms can only be used for women?",
            'options': ["Dirghaayu", "Suhagan", "Chiranjeevi", "Sushil"],
            'correct_answer': "Suhagan",
            'price_amount': 50000
        },
        {
            'text': "Which of these sports requires you to shout out a word loudly during play?",
            'options': ["Ludo", "Kho-kho", "Playing cards", "Chess"],
            'correct_answer': "Kho-kho",
            'price_amount': 100000
        }],    
        
        
    'winning_prize': function(question_list,current){
        var price=this.question_list[current].price_amount;
        return price;
    }, //The total amount which the player has won. //need to calculate.

    'current_question_no': function(num){
        return num;
    },
    'print_question': function (question_list,val) {

        console.log(this.question_list[val].text);
        document.write(this.question_list[val].text,"<br>");
        console.log(this.question_list[val].options);
        document.write(this.question_list[val].options,"<br>");

     },

    'select_answer': function(real_ans,answer) {
        if(real_ans==answer){

            console.log("correct answer");
            document.write("correct answer","<br>");
            return true;

        }
        else{
            console.log("Wrong answer");
            document.write("Wrong answer","<br>");
            return false;
        }
        
    }, //This function will check whether the selected answer for the current question is correct or not.
    //If correct, increment the counter (That means, move on to the next question),
    //If incorrect. then show message saying you have lost and end the game.

    'main_fun':function(){
        var final_price=0;

        for(var i=0;i<kbc.question_list.length;i++){
            var val=kbc.current_question_no(i);
            
            var answer=prompt(kbc.print_question(kbc.question_list,val));
            var bool=kbc.select_answer(kbc.question_list[i].correct_answer,answer);
            if(bool==true){
                final_price+=kbc.winning_prize(kbc.question_list,val);
                console.log('Prize money till now',final_price);
                document.write('Prize money till now',final_price,"<br>");

                if(i==kbc.question_list.length-1){
                    console.log("Congratulations!!! You have won",final_price);
                    document.write("Congratulations!!! You have won",final_price,"<br>");
                }
            }
            else{
                console.log("Better Luck next time ");
                document.write("Better Luck next time ","<br>");
                break;
            }

    



        }

    }

}



console.log('--Welcome to Kaun Banega Crorepati--');

kbc.main_fun();
