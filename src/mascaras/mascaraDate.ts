// export function mascaraDate (date : Date) {
//     return console.log(((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear())
// }

export function dataAtualFormatada(data: Date): string {
    const dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}