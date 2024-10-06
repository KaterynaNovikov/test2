document.addEventListener("DOMContentLoaded", function() {
    const $btnKick = document.getElementById('btn-kick');
    const $btnSpecialKick = document.getElementById('btn-special-kick');
    const $btnHeavyAttack = document.getElementById('btn-heavy-attack');

    const character = {
        name: "Pikachu",
        defaultHP: 100,
        damageHP: 100,
        greet: function() {
            return 'Hi, my name is ' + this.name;
        },
        changeHP: function(damage) {
            this.damageHP -= damage;
            if (this.damageHP < 0) this.damageHP = 0;
            this.renderHPLife();

            if (this.damageHP === 0) {
                alert(`${this.name} проиграл!`);
                disableButtons();
            }
        },
        renderHPLife: function() {
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
    }

    const enemy1 = {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        greet: function() {
            return 'Hi, my name is ' + this.name;
        },
        changeHP: function(damage) {
            this.damageHP -= damage;
            if (this.damageHP < 0) this.damageHP = 0;
            this.renderHPLife();

            if (this.damageHP === 0) {
                alert(`${this.name} проиграл!`);
                disableButtons();
            }
        },
        renderHPLife: function() {
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
    }

    const enemy2 = {
        name: 'Bulbasaur',
        defaultHP: 100,
        damageHP: 100,
        greet: function() {
            return 'Hi, my name is ' + this.name;
        },
        changeHP: function(damage) {
            this.damageHP -= damage;
            if (this.damageHP < 0) this.damageHP = 0;
            this.renderHPLife();

            if (this.damageHP === 0) {
                alert(`${this.name} проиграл!`);
                disableButtons();
            }
        },
        renderHPLife: function() {
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
    }

    function enemyAttack(character) {
        const randomEnemy = Math.random() > 0.5 ? enemy1 : enemy2;
        const damageFromEnemy = random(10);
        console.log(`${randomEnemy.name} атакует Pikachu и наносит ${damageFromEnemy} урона!`);
        character.changeHP(damageFromEnemy);
    }

    $btnKick.addEventListener('click', function () {
        fight(random(10), random(10));
    });

    $btnSpecialKick.addEventListener('click', function () {
        fight(random(20), random(15));
    });

    $btnHeavyAttack.addEventListener('click', function () {
        fight(random(30), random(25));
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

    console.log(character.greet());
    console.log(enemy1.greet());
    console.log(enemy2.greet());
});
