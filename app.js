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
            let attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }

    },

    computed: {

        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },

        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        }

    }

});

app.mount('#game');