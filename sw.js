


self.addEventListener('fetch', event => {

    if ( event.request.url.includes('styles.css') ) {
        
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        
        `, {
            headers : {
                'Contet-Type': 'text/css'
            }
        });

        event.respondWith( respuesta );
    }


    


});


