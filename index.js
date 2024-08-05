let computerChoice = 'Hello';
        let resultMsg = ''
        function generateCompChoice(){
        let randomnumber = Math.random() *3;
        if (randomnumber>0 && randomnumber<1){
            computerChoice = 'Rock'
        } else if ( randomnumber>1 && randomnumber<2){
            computerChoice = 'Paper'
        } else {
            computerChoice = 'Scissors'
        }
    }

    let score = {
        win :0,
        tie:0,
        lost : 0
    }
    function displayscores(){
    document.querySelector('#wins').innerText = score.win;
    document.querySelector('#lost').innerText = score.lost;
    document.querySelector('#tie').innerText = score.tie;
}
    
