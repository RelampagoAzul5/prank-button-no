    const mainScreen = document.querySelector('.main-screen');
    const textScreen = document.querySelector('.text-screen');
    const btnYes = document.querySelector('.btn-yes')

    let timer;
    let yes = false;
    let contSizeButton = 3
    let contSizePadding = 35

    function resizeButton(){
        contSizeButton++
        contSizePadding = contSizePadding - 1
        btnYes.style.setProperty('--fontSize',`${contSizeButton}rem`)
        mainScreen.style.setProperty('--paddingTop',`${contSizePadding}rem`)
    }

    function changePage(){
        textScreen.classList.remove('invisible');
        mainScreen.classList.add('invisible');
        yes = true; 
        clearInterval(timer);
    }

    document.addEventListener('click', (e)=>{
        const el = e.target;
        if (el.classList.contains('btn-yes')) changePage();
    })

    document.querySelector('#btn-no').addEventListener('mouseenter',function (){
        let h = window.innerHeight - 50;
        let w = window.innerWidth - 50;
        this.style.position = 'absolute';
        this.style.top = Math.random() * h + 'px';
        this.style.left = Math.random() * w + 'px';
        if (!yes && !timer) {
            timer = setTimeout(() => {
                alert('Você não tem o direito de falar não');
                timer = null;
        }, 4000);
        }
        resizeButton()
    })
