//TEMPLATE
const template = (id, img, vid, nama, jabatan, nim, ttl, angkatan, namaPanggilan, quote, hobi) => {
  $('#'+id).append(`
  <div class="card m-3 shadow" style="width: 18rem;">
      <img src="${img}" style="width: 100%; class="card-img-top" loading="lazy" alt="${nama}_photo">
      <div class="card-body text-center">
       <h5 class="card-title">${nama}</h5>
       <h5 class="card-subtitle text-muted mb-2" style="font-size: .9em!important">${jabatan}</h5>
       <a style="background-color: #7000F8!important;" data-id="btn_kenalan" class="btn my-3 text-light shadow border" data-toggle="modal" data-target="#modal_pengurus" data-link-img="${img}" data-link-vid="${vid}" data-nama="${nama}" data-nim="${nim}" data-jabatan="${jabatan}" data-ttl="${ttl}" data-nama-panggilan="${namaPanggilan}" data-quote="${quote}" data-angkatan="${angkatan}" data-hobi="${hobi}">
       Yuk kenalan
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
         <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
         <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
       </svg>
       </a>
     </div>
 </div>
  `);
}

//AJAX 
$.ajax({
  url : 'struktur_kepengurusan.json',
  type : 'GET',
  dataType : 'JSON',
  success : (result) => {
    const pengurus = result.pengurus;
    $.each(pengurus, (index, data) => {
      const ID = data.ID;
      //console.log(data.nama +" = "+ ID)
      switch (ID[0]) {
        case 'ketum' : 
        case 'waketum' :
        case 'bendahara' :
        case 'sekretaris' : template('pengurus_inti', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
        break;
        
        case 'sdm' : template('sdm', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
        break;
        
        case 'kominfo' : template('kominfo', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
          break;
        
        case 'konten_kreatif' :template('konten_kreatif', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
          break;
        
        case 'minat_bakat' : template('minat_bakat', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
          break;
        
        case 'kewirausahaan' : template('kewirausahaan', data.link_img, data.link_vid, data.nama, data.jabatan, data.nim, data.ttl, data.angkatan, data.nama_panggilan, data.quote, data.hobi);
          break;
      }
    })
  }
})

//EVENT TOMBOL KENALAN
const container = document.getElementById('parent_struktur');
container.addEventListener('click', function (el) {

  if (el.target.dataset.id == 'btn_kenalan') {
   $('#modal_pengurus').html('');
   const btn = el.target;
   const ttlArr = btn.dataset.ttl.split(',');
    
    $('#modal_pengurus').append(`
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">${btn.dataset.nama} - TI'${btn.dataset.angkatan[2] + btn.dataset.angkatan[3]}</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <div class="ratio ratio-1x1">
                                      <video class="shadow rounded-md" width="200" height="300" poster="https://hima-ti-polihasnur.github.io/assets/img/preloader.jpg" autoplay loop muted>
                                        <source src="${btn.dataset.linkVid}" type="video/mp4">
                                        Your browser does not support the video tag.
                                      </video>
                                    </div>
                                    <!-- Portfolio Modal - Text-->
                                    
                                    <figure class="text-left my-4">
                                      <blockquote class="blockquote">
                                        <p>
                                          Hay kalian bisa panggil saya ${ btn.dataset.namaPanggilan}, saya dilahirkan di ${ttlArr[0]} tepatnya pada tanggal ${ttlArr[1]}. Saya memiliki hobi ${btn.dataset.hobi}. <br>Salam kenal 
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                                          </svg>
                                        </p>
                                      </blockquote>
                                    </figure>
                                    <hr class="w-50" />
                                    
                                    <figure class="text-center">
                                      <blockquote class="blockquote text-uppercase">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                                        </svg>
                                        <p style="font-size: .7em!important">${btn.dataset.quote}</p>
                                      </blockquote>
                                      <figcaption class="blockquote-footer">
                                        Quote of the day by <cite title="Source Title">${btn.dataset.namaPanggilan}</cite>
                                      </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `);
  }
});
