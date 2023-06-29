const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'sistem_manajemen_bengkel',
    port: 3306
});



// login
app.get('/', (req, res) => {
    res.render('login.ejs');
});
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query('SELECT * FROM users where email=?',[email],(error,results)=> {
        console.log(results)
        if(results.length > 0){
            if(results[0].password === password){
                res.redirect('/index')
            }else {
                res.redirect('/');
            }      
        } else {
            res.redirect('/');  
        }      
    })
})
// dasboard
app.get('/index',(req,res) => {
    res.render('index.ejs',{
        title: 'Dashboard'
    });
});

// data karyawan
app.get('/karyawan',(req,res) => {
    res.render('data_karyawan.ejs',{
        title: 'Data Pegawai',
    });
});
app.get('/dataKaryawan',(req,res) => {
    connection.query('SELECT * FROM mekanik',(errors,result)=> {
        res.json({ data: result });
    })
})
// delete data
app.get('/delete_karyawan/:kode',(req, res)=>{
    connection.query('DELETE FROM mekanik where kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/karyawan');
    })
})
// data baru
app.get('/new_karyawan',(req,res)=> {
    res.render('crud_data/new_karyawan.ejs',{
        title: 'Tambah Data pegawai'
    });
});
app.post('/create_karyawan',(req,res)=> {
    const query = 'INSERT INTO mekanik (kode,nama,pekerjaan,alamat,telepon) VALUES (?,?,?,?,?)';
    const data = [req.body.id, req.body.nama,req.body.pekerjaan, req.body.alamat, req.body.telepon];
    connection.query(query, data,(error,results)=> {
        res.redirect('/karyawan');
    })
})
// update data
app.get('/edit_karyawan/:kode',(req,res)=> {
    connection.query('SELECT * FROM mekanik WHERE kode=?',[req.params.kode],(error,results)=> {
        res.render('crud_data/edit_karyawan.ejs',{
            title: 'edit Data pekerjaan',
            data:results
        });
        // console.log(results);
    })
});
app.post('/update_karyawan/:kode',(req,res)=> {
    const query = 'UPDATE mekanik set nama=?,pekerjaan=?,alamat=?,telepon=? where kode=?';
    const data = [req.body.nama,req.body.pekerjaan,req.body.alamat,req.body.telepon,req.params.kode];
    connection.query(query,data,(error,results)=> {
        res.redirect('/karyawan');
        console.log('berhasil coy')
    })
})


// data konsumen
app.get('/konsumen',(req,res) => {
    res.render('data_konsumen.ejs',{
        title: 'Data Konsumen'
    })
})
app.get('/dataKonsumen',(req,res) => {
    connection.query('SELECT * FROM konsumen',(errors,result)=> {
        res.json({ data: result });
        //console.log(result)
    })
});
// data baru
app.get('/new_konsumen',(req,res)=> {
    res.render('crud_data/new_konsument.ejs',{
        title: 'Tambah Data Konsumen'
    });
});
app.post('/create_konsumen',(req,res)=> {
    const query = 'INSERT INTO konsumen (kode,nama,alamat,telepon,deskripsi_service) VALUES (?,?,?,?,?)';
    const data = [req.body.id, req.body.nama, req.body.alamat, req.body.telepon,req.body.deskripsi];
    connection.query(query, data,(error,results)=> {
        res.redirect('/konsumen');
        console.log(data);
    })
})
// update data
app.get('/edit_konsumen/:kode',(req,res)=> {
    connection.query('SELECT * FROM konsumen WHERE kode=?',[req.params.kode],(error,results)=> {
        res.render('crud_data/edit_konsumen.ejs',{
            title: 'edit Data Konsumen',
            data:results
        });
        // console.log(results);
    })
});
app.post('/update_konsumen/:kode',(req,res)=> {
    const query = 'UPDATE konsumen set nama=?,alamat=?,telepon=?,deskripsi_service=? where kode=?';
    const data = [req.body.nama,req.body.alamat,req.body.telepon,req.body.deskripsi,req.params.kode];
    connection.query(query,data,(error,results)=> {
        res.redirect('/konsumen');
        console.log('berhasil coy')
    })
})
// delete data
app.get('/delete_konsumen/:kode',(req, res)=>{
    connection.query('DELETE FROM konsumen where kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/konsumen');
    })
})

// histori 
app.get('/historiServ',(req,res) => {
    res.render('histori_service.ejs',{
        title: 'Histori service'
    })
})
app.get('/dataHistori',(req,res) => {
    connection.query('SELECT * FROM histori_service',(errors,result)=> {
        res.json({ data: result });
        //console.log(result)
    })
})
// delete data
app.get('/delete_histori/:kode',(req, res)=>{
    connection.query('DELETE FROM histori_service where kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/historiServ');
    })
})
// data baru histori
app.get('/new_histori',(req,res)=> {
    connection.query('SELECT kode FROM mekanik',(error,results)=> {
        res.render('crud_data/new_histori.ejs',{
            title: 'Tambah Data service',
            data: results
        });
    })
});
app.post('/create_histori',(req,res)=> {
    const query = 'INSERT INTO histori_service (kode,id_transaksi,tanggal,id_pelanggan,id_mekanik) VALUES (?,?,?,?,?)';
    const data = [req.body.idService,req.body.idTransaksi,req.body.tanggal,req.body.idPelanggan,req.body.idMekanik];
    connection.query(query, data,(error,results)=> {
        res.redirect('/historiServ');
    })
})

// data produk
app.get('/produk',(req,res) => {
    res.render('produk.ejs',{
        title: 'Produk'
    })
})
app.get('/dataProduk',(req,res) => {
    connection.query('SELECT * FROM barang',(errors,result)=> {
        res.json({ data: result });
        //console.log(result)
    })
})
app.get('/edit_produk/:id',(req,res)=> {
    connection.query('SELECT * FROM barang WHERE kode=?',[req.params.id],(error,results)=>{
        res.render('crud_data/edit_produk.ejs',{
            data:results,
            title: 'edit Data Produk'
        });
    })
});
app.post('/update_produk/:id',(req,res)=> {
    const sql = 'UPDATE barang SET kode_barcode=?,Nama_barang=?,supplier=?,jenis=?,rak=?,harga_beli=?,harga_jual=? WHERE kode=?';
    const data = [req.body.kode_barcode, req.body.nama_barang, req.body.supplier, req.body.jenis, req.body.rak, req.body.harga_beli, req.body.harga_jual, req.params.id];
    connection.query(sql,data,(error,results)=>{
        res.redirect('/produk');
        console.log(data)
    })
})
app.get('/new_produk',(req,res)=> {
    res.render('crud_data/new_produk.ejs',{
        title: 'tambah data produk'
    })
});
app.post('/create_produk',(req,res)=> {
    const sql = 'INSERT INTO barang (kode,kode_barcode,Nama_barang,supplier,jenis,rak,harga_beli,harga_jual) VALUES (?,?,?,?,?,?,?,?)';
    const data = [req.body.kode_barang,req.body.kode_barcode, req.body.nama_barang, req.body.supplier, req.body.jenis, req.body.rak, req.body.harga_beli, req.body.harga_jual];
    connection.query(sql,data,(error,results)=> {
        res.redirect('/produk');
        // console.log(data);
    })
})
app.get('/delete_produk/:kode',(req, res)=>{
    connection.query('DELETE FROM barang where kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/produk');
    })
})


// data suplier
app.get('/supplier',(req,res) => {
    res.render('supplier.ejs',{
        title: 'Data Supplier'
    })
})
app.get('/dataSupplier',(req,res) => {
    connection.query('SELECT * FROM supplier',(errors,result)=> {
        res.json({ data: result });
        //console.log(result)
    })
})
app.get('/delete_supplier/:kode',(req, res)=>{
    connection.query('DELETE FROM supplier where kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/supplier');
    })
})
app.get('/edit_supplier/:id',(req,res)=> {
    connection.query('SELECT * FROM supplier WHERE kode=?',[req.params.id],(error,results)=> {
        res.render('crud_data/edit_supplier.ejs',{
            title:'edit data supplier',
            data:results
        });
        // console.log(results)
    })
})
app.post('/update_supplier/:id',(req,res)=> {
    const sql = 'UPDATE supplier SET supplier=?,alamat=?,telepon=?,email=? WHERE kode=?';
    const data = [req.body.supplier,req.body.alamat,req.body.telepon,req.body.email, req.params.id];
    connection.query(sql,data,(error,results)=> {
        // console.log(data);
        res.redirect('/supplier');
    })
})
app.get('/new_supplier',(req,res)=> {
    res.render('crud_data/new_produk.ejs',{
        title: 'tambah data supplier'
    })
});
app.post('/create_supplier',(req,res)=> {
    const sql = 'INSERT INTO barang (kode,supplier,alamat,telepon,email) VALUES (?,?,?,?,?)';
    const data = [req.body.kode,req.body.supplier,req.body.alamat,req.body.telepon,req.body.email];
    connection.query(sql,data,(error,results)=> {
        res.redirect('/supplier');
        // console.log(data);
    })
})

// data transaksi
app.get('/transaksi',(req,res) => {
    res.render('transaksi.ejs', {
        title: 'Data Transaksi'
    })
});
app.get('/dataTransaksi',(req,res) => {
    connection.query('SELECT * FROM transaksi',(errors,result)=> {
        res.json({ data: result });
        // console.log(result)
    })
})
app.get('/delete_transaksi/:kode',(req, res)=>{
    connection.query('DELETE FROM transaksi WHERE kode=?',[req.params.kode],(error,results)=> {
        res.redirect('/transaksi');
    })
});
app.get('/edit_transaksi/:id',(req,res)=> {
    connection.query('SELECT * FROM transaksi WHERE kode=?',[req.params.id],(error,results)=> {
        res.render('crud_data/edit_transaksi.ejs',{
            title:'edit data transaksi',
            data:results
        });
        // console.log(results)
    })
});
app.post('/update_transaksi/:id',(req,res)=> {
    const sql = 'UPDATE transaksi SET tanggal=?,kd_pelanggan=?,kd_barang=?,jumlah_barang=?,total=?,id_mekanik=?,status_transaksi=? WHERE kode=?';
    const data = [req.body.tanggal, req.body.kd_pelanggan, req.body.kd_barang, req.body.jumlah_barang,req.body.total, req.body.id_mekanik, req.body.status_transaksi, req.params.id];
    connection.query(sql,data,(error,results)=> {
        res.redirect('/transaksi');
        console.log(data)
    })
});
app.get('/new_transaksi',(req,res)=> {
    res.render('crud_data/new_transaksi.ejs',{
        title: 'tambah data transaksi'
    })
});
app.post('/create_transaksi',(req,res)=> {
    const sql = 'INSERT INTO transaksi (kode,tanggal,kd_pelanggan,kd_barang,jumlah_barang,total,id_mekanik,status_transaksi) VALUES (?,?,?,?,?,?,?,?)';
    const data = [req.body.kode, req.body.tanggal, req.body.kd_pelanggan, req.body.kd_barang, req.body.jumlah_barang,req.body.total, req.body.id_mekanik, req.body.status_transaksi];
    connection.query(sql,data,(error,results)=> {
        res.redirect('/transaksi');
        console.log(data);
    })
})













app.listen(3000,()=> {
    console.log('listening on prot http://localhost:3000');
})