
// dataTable 
let i = 0
const nomer = { 
  data: null,
  title: 'No',
  "render": function (data, type, row, meta) {
    return meta.row + 1;
  }
}
function dataTable(ajax,columns,idTable) {
  let array = columns
  $(document).ready(function() {
      $(idTable).DataTable({
        ajax: ajax,
        columns: array,
        initComplete: function() {
          $(idTable).addClass('mx-6');
          $('.dataTables_filter input').addClass('shadow appearance-none border rounded py-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2');
        }
      });
  });
}

// data karyawan
const dataKaryawan = [
  nomer,
  { data: 'kode', title:' id pegawai' },
  { data: 'nama', title: 'nama'},
  { data: 'pekerjaan', title: 'pekerjaan'},
  { data: 'alamat', title: 'alamat'},
  { data: 'telepon', title: 'telepon'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/edit_karyawan/${row.kode}" class="mr-2"><i
      class="fi fi-rr-edit"></i></a>`;
      actionButton += `<a href="/delete_karyawan/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
];
dataTable('/dataKaryawan',dataKaryawan,'#tableKaryawan');
// data konsumen
const konsumen = [
  nomer,
  { data: 'kode', title:' id Konsumen' },
  { data: 'nama', title: 'nama'},
  { data: 'alamat', title: 'alamat'},
  { data: 'telepon', title: 'telepon'},
  { data: 'deskripsi_service', title: 'deskripsi service'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/edit_konsumen/${row.kode}" class="mr-2"><i
      class="fi fi-rr-edit"></i></a>`;
      actionButton += `<a href="/delete_konsumen/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
]
dataTable('/dataKonsumen',konsumen,'#tableKonsumen');
// data histori service
const histori = [
  nomer,
  { data: 'kode', title:'id histori' },
  { data: 'id_transaksi', title: 'id transaksi'},
  { data: 'tanggal', title: 'Tanggal'},
  { data: 'id_mekanik', title: 'id mekanik'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/delete_histori/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
]
dataTable('/dataHistori',histori,'#tableHistori');
// data produk
const produk = [
  nomer,
  { data: 'kode', title:' id barang' },
  { data: 'kode_barcode', title: 'kode barcode'},
  { data: 'Nama_barang', title: 'NAMA BARANG'},
  { data: 'supplier', title: 'kode supplier'},
  { data: 'jenis', title:'jenis' },
  { data: 'rak', title: 'rak'},
  { data: 'harga_beli', title: 'harga beli'},
  { data: 'harga_jual', title: 'harga jual'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/edit_produk/${row.kode}" class="mr-2"><i
      class="fi fi-rr-edit"></i></a>`;
      actionButton += `<a href="/delete_produk/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
]
dataTable('/dataProduk',produk,'#tableProduk');
// data supplier
const supplier = [
  nomer,
  { data: 'kode', title:' id supplier' },
  { data: 'supplier', title: 'nama'},
  { data: 'alamat', title: 'alamat'},
  { data: 'telepon', title: 'telepon'},
  { data: 'email', title: 'email'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/edit_supplier/${row.kode}" class="mr-2"><i
      class="fi fi-rr-edit"></i></a>`;
      actionButton += `<a href="/delete_supplier/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
]
dataTable('/dataSupplier',supplier,'#tableSupplier');
// data transaksi
const transaksi = [
  nomer,
  { data: 'kode', title:' id transaksi' },
  { data: 'tanggal', title: 'tanggal'},
  { data: 'kd_pelanggan', title: 'id pelanggan'},
  { data: 'kd_barang', title: 'id barang'},
  { data: 'jumlah_barang', title:'jumlah barang' },
  { data: 'total', title: 'total'},
  { data: 'id_mekanik', title: 'id mekanik'},
  { data: 'status_transaksi', title: 'status transaksi'},
  {
    title: 'Aksi',
    render: function(data, type, row) {
      let actionButton = `<a href="/edit_transaksi/${row.kode}" class="mr-2"><i
      class="fi fi-rr-edit"></i></a>`;
      actionButton += `<a href="/delete_transaksi/${row.kode}" onclick="return confirm('Are you sure you want to delete')"><i
      class="fi fi-rr-trash"></i></a>`;
      return actionButton;
    }
  }
]
dataTable('/dataTransaksi',transaksi,'#tableTransaksi');










