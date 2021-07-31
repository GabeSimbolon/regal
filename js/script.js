$(function(){
    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nip').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
    });
    $('.tampilModalUbah').on('click', function(){

        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');

        const id = $(this).data('id');
        $.ajax({
            
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){
               
                $('#id').val(data.id);
                $('#nama').val(data.nama);
                $('#nip').val(data.nip);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
            }
        })
    })
    
})