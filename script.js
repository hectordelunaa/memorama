
        let intentos=0;
        let iconos = []
        let selecciones = []
        let contando=document.getElementById('contador')

        generarTablero()

        function cargarIconos() {
            fotos = [
                '<img src="img/prueba.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba2.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba3.jpg" heigh:"90%" width="80%">',
                '<img src="img/img4.jpg" heigh:"90%" width="80%">',
                '<img src="img/img5.jpg" heigh:"90%" width="80%">',
                '<img src="img/img6.jpg" heigh:"80%" width="70%">',
                '<img src="img/img7.jpg" heigh:"90%" width="80%">',
                '<img src="img/img8.jpg" heigh:"90%" width="80%">',
                '<img src="img/img9.jpg" heigh:"90%" width="80%">',
                '<img src="img/img10.jpg" heigh:"90%" width="80%">',
                '<img src="img/img11.jpg" heigh:"90%" width="80%">',
                '<img src="img/img12.jpg" heigh:"90%" width="80%">',
                '<img src="img/img13.jpg" heigh:"90%" width="80%">',
                '<img src="img/img14.jpg" heigh:"90%" width="80%">',
                '<img src="img/img15.jpg" heigh:"90%" width="80%">',
                '<img src="img/img16.jpg" heigh:"90%" width="80%">',
                '<img src="img/img17.jpg" heigh:"90%" width="80%">',
                '<img src="img/img18.jpg" heigh:"90%" width="80%">',
                '<img src="img/img19.jpg" heigh:"90%" width="80%">',
                '<img src="img/img20.jpg" heigh:"90%" width="80%">',
                '<img src="img/img21.jpg" heigh:"90%" width="80%">',
                '<img src="img/img22.jpg" heigh:"90%" width="80%">',
                '<img src="img/img23.jpg" heigh:"90%" width="80%">',
                '<img src="img/img24.jpg" heigh:"90%" width="80%">',
                '<img src="img/img25.jpg" heigh:"90%" width="80%">',
                '<img src="img/img26.jpg" heigh:"90%" width="80%">',
                '<img src="img/img27.jpg" heigh:"90%" width="80%">',
                '<img src="img/img28.jpg" heigh:"90%" width="80%">',
                '<img src="img/img29.jpg" heigh:"90%" width="80%">',
                '<img src="img/img30.jpg" heigh:"90%" width="80%">',
                '<img src="img/img31.jpg" heigh:"90%" width="80%">',
                '<img src="img/img32.jpg" heigh:"90%" width="80%">',
            ]
            iconos=fotos.sort(() => Math.random() - 0.5);
        }

        function generarTablero() {
            cargarIconos()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 16; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
            contando.innerHTML='<h4>Intentos Realizados: '+intentos+'</h4>'
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                let cartas= document.getElementsByClassName("area-tarjeta");

                deseleccionar(selecciones)
                selecciones = []
                intentos++;
                contando.innerHTML='<h4>Intentos Realizados: '+intentos+'</h4>'
            }
        }

        function deseleccionar(selecciones) {

            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
                trasera1.style.background = "red"
                trasera2.style.background = "red"
            }
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                    trasera1.style.background = "rgb(100, 100, 234)"
                    trasera2.style.background = "rgb(100, 100, 234)"
                }else{
                    trasera1.style.background = "green"
                    trasera2.style.background = "green"
                }
            }, 1000);
        }
