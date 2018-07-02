var app = Sammy('#main', function() {

    this.get('#/', cargarVistaPrincipal);
    this.get('#/cereales', cargarVistaPrincipal);
    this.get('#/granos', cargarVistaSeccionGranos);
    this.get('#/verduras',cargarVistaSeccionVerduras);
    this.get('#/gaseosas', cargarVistaSeccionGaseosas);
    this.get('#/jugos', cargarVistaSeccionJugos);
    this.get('#/productos-personal', cargarVistaSeccionProductosPersonales);
    this.get('#/productos-aseo', cargarVistaSeccionProductosAseo);

    function cargarVistaPrincipal(){
        $( "#main" ).load("templates/productos/cereales.html");
    }

    function cargarVistaSeccionGranos(){
        $( "#main" ).load("templates/productos/granos.html");
    }

    function cargarVistaSeccionVerduras(){
        $( "#main" ).load("templates/productos/verduras.html");
    }

    function cargarVistaSeccionGaseosas(){
        $( "#main" ).load("templates/productos/gaseosas.html");
    }

    function cargarVistaSeccionJugos(){
        $( "#main" ).load("templates/productos/jugos.html");
    }

    function cargarVistaSeccionProductosPersonales(){
        $( "#main" ).load("templates/productos/productosPersonal.html");
    }

    function cargarVistaSeccionProductosAseo(){
        $( "#main" ).load("templates/productos/productosAseo.html");
    }
 

    // this.get('#/', loadTurnList);
    // this.get('#/turn-list', loadTurnList);
    // this.get('#/dependence-list', loadDependenceList);
    // this.get('#/service-list',loadServiceList);
    // this.get('#/admin-normaluser', loadAdminUser);
    // this.get('#/admin-adminuser', loadAdminSpecialUser);
	
    // function loadTurnList(){
    //     $( "#main" ).load( "templates/turns/turn-list.html");
    // }
    // function loadDependenceList(){
    //     $( "#main" ).load( "templates/dependencies/dependence-list.html");
    // }
    // function loadServiceList(){
    //     $( "#main" ).load( "templates/services/service-list.html");
    // }
    
    // function loadAdminUser(){
    //     $( "#main" ).load( "templates/users/admin-user.html");
    // }

    // function loadAdminSpecialUser(){
    //     $( "#main" ).load( "templates/users/admin-user2.html");
    // }
});

app.run('#/');