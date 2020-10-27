//  Regular JS Function
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },

    methods: {

        attackMonster() {
            this.currentRound++;
            let attackValue = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
        },
        //  Max Value 15 - Lowest Value 8
        attackPlayer() {
            let attackValue = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
        },

        specialAttackMonster() {
            this.currentRound++;
            let attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }

    },

    computed: {

        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },

        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },

        mayUseSpecialAttack() {
            //  Special attack is only available every 3 rounds
            return this.currentRound % 3 !== 0;
        }

    }

});

app.mount('#game');