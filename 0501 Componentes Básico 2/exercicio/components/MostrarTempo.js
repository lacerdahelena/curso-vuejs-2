export default {
    name: 'MostrarTempo',
    data() {
        return {
            tempo: {}
        }
    },
    methods: {
        getTempo() {
            fetch('https://www.metaweather.com/api/location/455825/')
            .then(response => response.json())
            .then(json => {
                this.tempo = json.consolidated_weather[0].max_temp;
            })
        }
    },
    created() {
        this.getTempo();
    },
    template: `<p>Tempo Hoje: {{tempo}} </p>`,
}