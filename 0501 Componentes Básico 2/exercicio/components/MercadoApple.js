import RelacaoDolar from './RelacaoDolar.js';

export default {
    name: 'MercadoApple',
    
    data() {
        return {
            valor: ""
        }
    },
    components: {
        RelacaoDolar: RelacaoDolar
    },
    methods: {
        getValor() {
            fetch('https://api.origamid.dev/stock/aapl/quote')
            .then(response => response.json())
            .then(json => {
                this.valor = json.marketCap
            })
        }
    },
    created() {
        this.getValor();
    },
    template: `
        <div>
            <p>Ação Apple hoje: {{valor}} </p>
            <relacao-dolar></relacao-dolar>
        </div>
    `
}