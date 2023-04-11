function clock () {

   var img = document.getElementById("imagem")


    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();
    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart( 2, "0");

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}` //${} place holders, se usa as ``

    const frase = document.querySelector('.frase');

    dia = new Array ('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    //Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.

    mes = new Array ('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');

    hoje = new Date();

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]}  de ${hoje.getFullYear()} `;

    if ( formatoHoras >= 0 && formatoHoras < 6){
       document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/35/5/OuflGT.jpg)"
       //img.scr = "https://cdn.pixabay.com/photo/2022/12/03/16/26/crater-7633036_960_720.png"
       document.getElementById("img-morning").innerHTML = "<img src='https://i.redd.it/yttdwn3y0z181.jpg'>"
    }
    

    else if ( formatoHoras >= 6 && formatoHoras <15){
       document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/24/aa/da/24aada6a5f57de49bcfc515d93b53346.jpg)"
       //img.scr = "  (https://cdn.pixabay.com/photo/2022/12/02/21/17/crater-7631669_960_720.png) "
       document.getElementById("img-afternoon").innerHTML = "<img src='https://wallpaperaccess.com/full/5170170.png'>"
    }

    else if (formatoHoras >= 15 && formatoHoras <18) {
      document.body.style.backgroundImage = "url(https://wallpapers.com/images/featured/7xpryajznty61ra3.jpg)"
      //img.scr = " (https://cdn.pixabay.com/photo/2022/12/03/16/26/crater-7633035_960_720.png) "
      document.getElementById("img-night").innerHTML = "<img src='https://wallpapers.com/images/hd/blue-orange-firewatch-tower-wvnoqi9lqoxfj6ob.jpg'>"
    }

    else {
       document.body.style.backgroundImage = "url(https://i0.wp.com/i.redd.it/xev9j4x7ok371.jpg?ssl=1)"
       //img.scr = " (https://cdn.pixabay.com/photo/2022/12/03/17/44/little-red-riding-hood-7633157_640.png)  "
       document.getElementById("img-madruga").innerHTML = "<img src='https://i.pinimg.com/originals/d8/16/94/d81694d202eb63f975af5b6b0d8e37ac.png'>"
    }


}

setInterval (clock, 1000);

//usagif.com/wp-content/uploads/gifs/car-driving-77.gif

//https://64.media.tumblr.com/abb3394992cb5c8eea2ccdedb610e5b9/8e6322c0dc842ca7-70/s640x960/cf9f80aba28397408cbd1ae3344a7378b49bbef2.gif

//https://giffiles.alphacoders.com/211/211793.gif

//https://64.media.tumblr.com/f6cae2c3b1f01125e3b1d2ae50fd021c/b6430c13a74a7a7e-90/s540x810/fa9d7212841c80e3140a7ac44779b41295f12e9b.gifv