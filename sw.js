


self.addEventListener('fetch', event => {

    
    if ( event.request.url.includes('main,jps') ) {

        //event.responseWith( fetch('img/main-patas-arriba.jpg') );
    
        let resp = fetch('img/main-patas-arriba.jpg');

        event.respondWith( resp );

    }


});


