const app = {
    data() {
        return {
            photos: [
                { src: 'image/tree1.jpg', alt: 'view 1', caption: 'Moist Evergreen Forest' },
                { src: 'image/tree2.jpg', alt: 'view 2', caption: 'Dry Evergreen Forest' },
                { src: 'image/tree3.jpg', alt: 'view 3', caption: 'Hill Evergreen Forest' },
            ],

        }
    },
    methods: {
        toggleheart(index){
            this.photos[index].done = !this.photos[index].done
        }
    },
    computed: {
        countphoto(){
            return this.photos.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#container')