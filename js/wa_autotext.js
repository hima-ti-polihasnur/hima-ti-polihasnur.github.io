const replaceSymbol = (sampel) => {
  $.each(sampel, (i, data) => {
    switch (data) {
      case ' ':
        sampel[i] = '%20';
        break;
      case ',':
        sampel[i] = '%2C';
        break;
      case '!':
        sampel[i] = '%21';
        break;
      case ':':
        sampel[i] = '%3A';
        break;
    }
  })
  const result = sampel;
  return result;
}

const autoText = () => {
  const admin = '6285256485612';
  const namaArr = replaceSymbol( $('#name_sender').val().split('') );
  const instansiArr = replaceSymbol( $('#instansi_sender').val().split('') );
  const pesanArr = replaceSymbol( $('#message_sender').val().split('') );
  
  const pesan = pesanArr.join('');
  const nama = namaArr.join('');
  const instansi = instansiArr.join('');
  
  const url = 'https://api.whatsapp.com/send?phone='+ admin +'&text=from%20web%20HIMA%20TI%0A%0A'+ pesan +'%0A%0A'+ nama +'%20-%20'+ instansi;
  $('#btn_send').attr('href', url);
}

$('#name_sender').on('input', () => {
  autoText();
});

$('#instansi_sender').on('input', () => {
  autoText();
});

$('#message_sender').on('input', () => {
  autoText();
});
