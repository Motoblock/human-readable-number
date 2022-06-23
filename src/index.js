module.exports = function toReadable (number) {
  let str = String(number);
  let mas = [['','one','two','three','four','five','six','seven','eight','nine'],
             ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
             ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
             ['hundred','thousand','million']];

  let propis = '';
  let str_kusok = '';
  let str_end = str;
  let result =  [];
  if(number == 0 || number == '') return 'zero';
  for(let j = 0; j < Math.ceil(str.length/3); j++ )
  {
    str_kusok = str_end.slice(-3);
    if(str_kusok[0] === '0') str_kusok = str_kusok.slice(1);   
    str_end = str_end.substring(0, str_end.length - 3);
    let number_new = parseInt(str_kusok);
    for(let i = 0; i < str_kusok.length; i++ )
    {
      if(i != 0) propis += ' ';
      if(number_new < 10) {propis += mas[0][number_new]; break;}
      else if(number_new >= 10 && number_new <= 19) {
        propis += mas[1][(number_new % 10)];
        break;
      }
      else if(number_new >= 20 && number_new < 100) {
        propis += mas[2][str_kusok[i]];
        if(number_new % 10 === 0) break;
        else number_new = number_new % 10;
      }
      else {
        propis += mas[0][str_kusok[i]];
        propis += ' ' + mas[3][0];
        number_new -= (100 * parseInt(str_kusok[i]));
      }
    }
    if(j > 0) propis = propis + ' ' + mas[3][j];
    result[j] = propis;
    propis = '';
  }

  return result.reverse().join(" ").trim();
  
}
