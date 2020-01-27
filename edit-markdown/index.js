new Vue({
    el: '#editor',
    data: {
        update: null
    },
    computed: {
        compiledMarkdown: function () {
            if (this.update !=null)
                return marked(this.update, { sanitize: true })
        }
    }
})