function formatoRut(texto, inputText) {
    objRut = document.getElementById(inputText);
    var rut_aux = "";
    for (i = 0; i < texto.length; i++)
        if (texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-')
            rut_aux = rut_aux + texto.charAt(i);

    largo = rut_aux.length;

    if (largo == 0) return false;
    if (largo < 2) return false;

    for (i = 0; i < largo; i++) {
        var letra = rut_aux.charAt(i);
        if (!letra.match(/^([0-9]|[kK])$/)) return false;
    }
    var rut_inv = "";
    for (i = (largo - 1), j = 0; i >= 0; i--, j++) rut_inv = rut_inv + rut_aux.charAt(i);

    var dtexto = "";
    dtexto = dtexto + rut_inv.charAt(0);
    dtexto = dtexto + '-';
    cnt = 0;

    for (i = 1, j = 2; i < largo; i++, j++) {
        if (cnt == 3) {
            dtexto = dtexto + '.';
            j++;
            dtexto = dtexto + rut_inv.charAt(i);
            cnt = 1;
        } else {
            dtexto = dtexto + rut_inv.charAt(i);
            cnt++;
        }
    }

    rut_inv = "";
    for (i = (dtexto.length - 1), j = 0; i >= 0; i--, j++) rut_inv = rut_inv + dtexto.charAt(i);

    objRut.value = rut_inv.toUpperCase()
}

