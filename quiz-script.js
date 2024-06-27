var anchor = document.getElementById("downloadButton");
//const imageUrl='';
const imageUrls = [
    'Vata.jpg','Pitta.jpg','kapha.jpg','Vata-Pitta.jpg','Pitha-Kapha.jpg','kapha-vata.jpg'
    ];
    

    
function calculateResult() {
    const form = document.getElementById("survey-form");
    const answers = {
        'A': 0,
        'B': 0,
        'C': 0
    };

    for (let i = 1; i <= 15; i++) {
        const questionName = `q${i}`;
        const selectedOption = form.elements[questionName].value;
        answers[selectedOption]++;
    }


    let bodyType=''
    let c=answers['A']+answers['B']+answers['C'];
    if(c==15)
    {
        let a=answers['A']
        let b=answers['B']
        let c=answers['C']
            if(   (  (a==b) || (Math.abs(a-b)==1) ||(Math.abs(a-b)==2) || (Math.abs(a-b)==3) )   && (a>c && b>c)     )
            {
                bodyType=" is Vata Pitta"
                anchor.href=imageUrls[3]
            }
            else if(   (  (b==c) || (Math.abs(b-c)==1) ||(Math.abs(b-c)==2) || (Math.abs(b-c)==3) )   && (b>a && c>a)     )
            {
                bodyType=" is Pitta Kapha"
                anchor.href=imageUrls[4]
            }
            else if(   (  (c==a) || (Math.abs(c-a)==1) ||( Math.abs(c-a)==2) || (Math.abs(c-a)==3) )   && (c>b && a>b)     )
            {
                bodyType=" is Kapha Vata"
                anchor.href=imageUrls[5]
            }
            else if(a>b && a>c)
            {
                bodyType=" is Vata."
                anchor.href=imageUrls[0]
            }
            else if(b>a && b>c)
            {
                bodyType="is Pitta."
                anchor.href=imageUrls[1]

            }
            else if(c>a && c>b)
            {
                bodyType="is Kapha."
                anchor.href=imageUrls[2]
            }
            else
            {
                bodyType="is Tridosa"
            }
        document.getElementById("most-selected").textContent = bodyType;
        document.getElementById("result").style.display = "block";
        document.getElementById("downloadButton").style.display = "block";
    }
    else
    {
        document.getElementById("most-selected").textContent = "can't be determined answer all questions";
        document.getElementById("result").style.display = "block";    
        
    }
    
}

