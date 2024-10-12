document.addEventListener("DOMContentLoaded", function() {
    const $btnKick = document.getElementById('btn-kick');
    const $btnSpecialKick = document.getElementById('btn-special-kick');
    const $btnHeavyAttack = document.getElementById('btn-heavy-attack');

    const $pikachu = document.querySelector('.character');         
    const $charmander = document.querySelector('#name-charmander'); 
    const $bulbasaur = document.querySelector('#name-bulbasaur');   

    function greet(greeting) {
        return greeting + ', my name is ' + this.name;
    }


    function showGreeting(element, greetingMessage) {
        const $greetingDiv = document.createElement('div');  
        $greetingDiv.classList.add('greeting');              
        $greetingDiv.innerText = greetingMessage;            
        element.appendChild($greetingDiv);                  
    }

    // Функция для удаления приветствия
    function hideGreeting(element) {
        const $greetingDiv = element.querySelector('.greeting');
        if ($greetingDiv) {
            element.removeChild($greetingDiv);               
        }
    }

    const character = {
        name: "Pikachu",
        defaultHP: 100,
        damageHP: 100,
        greet: greet,         
        changeHP: changeHP,   
        renderHPLife: renderHPLife  
    };


    const enemy1 = {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        greet: greet,        
        changeHP: changeHP,   
        renderHPLife: renderHPLife 
    };


    const enemy2 = {
        name: 'Bulbasaur',
        defaultHP: 100,
        damageHP: 100,
        greet: greet,         
        changeHP: changeHP,  
        renderHPLife: renderHPLife 
    };


    $pikachu.addEventListener('mouseenter', function() {
        showGreeting(this, character.greet('Hi'));   
    });
    $pikachu.addEventListener('mouseleave', function() {
        hideGreeting(this);  
    });

    $charmander.addEventListener('mouseenter', function() {
        showGreeting(this.parentElement, enemy1.greet('Hello'));   
    });
    $charmander.addEventListener('mouseleave', function() {
        hideGreeting(this.parentElement);   
    });

    $bulbasaur.addEventListener('mouseenter', function() {
        showGreeting(this.parentElement, enemy2.greet('Hey'));   
    });
    $bulbasaur.addEventListener('mouseleave', function() {
        hideGreeting(this.parentElement);   
    });


    function changeHP(damage) {
        this.damageHP -= damage;
        if (this.damageHP < 0) this.damageHP = 0;
        this.renderHPLife();

        if (this.damageHP === 0) {
            alert(`${this.name} проиграл!`);
            disableButtons();
        }
    }


    function renderHPLife() {
        const $healthText = document.getElementById(`health-${this.name.toLowerCase()}`);
        const $progressbar = document.getElementById(`progressbar-${this.name.toLowerCase()}`);
        $healthText.innerText = `${this.damageHP} / ${this.defaultHP}`;
        $progressbar.style.width = `${(this.damageHP * 100 / this.defaultHP)}%`;

        if (this.damageHP < this.defaultHP * 0.3) {
            $progressbar.style.backgroundColor = 'red';
        } else if (this.damageHP < this.defaultHP * 0.6) {
            $progressbar.style.backgroundColor = 'yellow';
        } else {
            $progressbar.style.backgroundColor = 'green';
        }
    }


    function enemyAttack(character) {
        const randomEnemy = Math.random() > 0.5 ? enemy1 : enemy2;
        const damageFromEnemy = random(10);
        console.log(`${randomEnemy.name} атакует Pikachu и наносит ${damageFromEnemy} урона!`);
        character.changeHP(damageFromEnemy);
    }

    // Обработчики кнопок
    $btnKick.addEventListener('click', function () {
        fight(random(10), 0); 
    });

    $btnSpecialKick.addEventListener('click', function () {
        fight(random(20), random(10)); 
    });

    $btnHeavyAttack.addEventListener('click', function () {
        fight(random(30), random(15)); 
    });

    function fight(damageToEnemy1, damageToEnemy2) {
        enemy1.changeHP(damageToEnemy1); 
        enemy2.changeHP(damageToEnemy2); 
        enemyAttack(character);          
    }


    function random(num) {
        return Math.ceil(Math.random() * num);
    }


    function disableButtons() {
        $btnKick.disabled = true;
        $btnSpecialKick.disabled = true;
        $btnHeavyAttack.disabled = true;
    }

    console.log(character.greet('Hi'));                    
    console.log(enemy1.greet.call(character, 'Hello'));    
    console.log(enemy2.greet.apply(character, ['Hihi']));  
});
