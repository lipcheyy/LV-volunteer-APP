<template>
    <div class="main">
        <div class="donation" v-if="donation">
            <div v-model="name" class="user-name">{{ donation.user.name }}</div>
            <div class="donation-title">{{ donation.title }}</div>
            <div class="donation-content" v-html="resizeImage(formatContent(donation.content))"></div>
            <div class="form">
                <input type="text" class="form-input" placeholder="Ім'я платника" v-model="payerName">
                <input type="text" class="form-input" placeholder="Номер картки" v-model="cardNumber">
                <input type="text" class="form-input" placeholder="Термін дії картки" v-model="cardExpiration">
                <input type="submit" @click.prevent="donate" value="Задонатити" id="pay" class="form-submit">
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "DonateComponent",
    data() {
        return {
            donation: null,
            id: parseInt(this.$route.params.id),
            payerName: null,
            cardNumber: null,
            cardExpiration: null
        };
    },
    mounted() {
        this.getDonation();
    },
    methods: {
        donate() {
            if (this.payerName && this.cardNumber && this.cardExpiration) {
                const name = document.querySelector(".user-name").textContent;
                confirm(`Ви готові здійснити переказ на картку ${name}`);
                this.$Progress.start();
                setTimeout(() => {
                    this.$Progress.finish();
                }, 2500);
                this.payerName=''
                this.cardNumber=''
                this.cardExpiration=''

            } else {
                alert("Будь ласка, заповніть всі поля");
            }
        },
        getDonation() {
            api.get(`/api/auth/donations/${this.id}`).then(res => {
                this.donation = res.data.data;
            });
        },
        formatContent(content) {
            const imgWithClass = content.replace(/<img/g, '<img class="donation-image"');
            return imgWithClass;
        },
        resizeImage(content) {
            const div = document.createElement("div");
            div.innerHTML = content;
            const images = div.querySelectorAll("img");

            images.forEach(image => {
                image.width = 500;
                image.height = 400;
            });

            return div.innerHTML;
        }
    }
};
</script>

<style scoped>
.main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.donation {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
}
img{
    max-width: 100%;
}
.user-name {
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}

.donation-title {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
}

.donation-content .donation-image {
    max-width: 100% !important;
    height: auto;

}
.form {
    display: flex;
    flex-direction: column;
}

.form-input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-submit {
    background-color: #008000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>







