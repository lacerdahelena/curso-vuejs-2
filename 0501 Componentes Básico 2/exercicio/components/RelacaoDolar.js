export default {
    name: 'RelacaoDolar',
    data() {
        return {
            relacao: ""
        }
    },
    methods: {
        getRelacao() {
            fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(response => response.json())
            .then(json => {
                this.relacao = json.rates.BRL;
            })
        }
    },
    created() {
        this.getRelacao();
    },
    template: `<p>Dolar hoje: {{relacao}} </p>`,
}