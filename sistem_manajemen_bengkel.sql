-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Bulan Mei 2023 pada 17.25
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistem_manajemen_bengkel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `barang`
--

CREATE TABLE `barang` (
  `kode` char(6) NOT NULL,
  `kode_barcode` varchar(20) NOT NULL,
  `Nama_barang` varchar(20) NOT NULL,
  `supplier` char(6) NOT NULL,
  `jenis` varchar(20) NOT NULL,
  `rak` char(3) NOT NULL,
  `harga_beli` varchar(20) NOT NULL,
  `harga_jual` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `barang`
--

INSERT INTO `barang` (`kode`, `kode_barcode`, `Nama_barang`, `supplier`, `jenis`, `rak`, `harga_beli`, `harga_jual`) VALUES
('BRG1', '000111', 'barang', 'suppli', 'jenis', '001', '10000', '12000'),
('BRG2', '000222', 'barang1', '111222', 'jenis', '002', '10000', '12000'),
('BRG3', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000'),
('BRG4', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000'),
('BRG5', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000'),
('BRG6', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000'),
('BRG7', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000'),
('BRG8', '000333', 'barang1', '111333', 'jenis', '002', '100000', '130000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `histori_service`
--

CREATE TABLE `histori_service` (
  `kode` char(6) NOT NULL,
  `id_transaksi` char(6) NOT NULL,
  `tanggal` datetime NOT NULL,
  `id_pelanggan` char(6) NOT NULL,
  `id_mekanik` char(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `histori_service`
--

INSERT INTO `histori_service` (`kode`, `id_transaksi`, `tanggal`, `id_pelanggan`, `id_mekanik`) VALUES
('HST000', 'TRA000', '2023-05-07 04:10:59', '111AAA', 'MK1'),
('HST111', 'TRA111', '2021-09-07 09:12:19', '222AAA', 'MK4'),
('HST222', 'TRA112', '2023-06-09 09:12:53', '333AAA', 'MK2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `konsumen`
--

CREATE TABLE `konsumen` (
  `kode` char(6) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `telepon` varchar(15) NOT NULL,
  `deskripsi_service` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `konsumen`
--

INSERT INTO `konsumen` (`kode`, `nama`, `alamat`, `telepon`, `deskripsi_service`) VALUES
('1', 'Iqbal Maulana', 'KP. CURUG PESANTREN RT 01 RW 0', '08888888888', ''),
('KSM1', 'konsumen', 'Bekasi', '08888812345', 'lengkap'),
('KSM10', 'konsumen7', 'Garut', '08888812345', 'ringan'),
('KSM11', 'konsumen7', 'Garut', '08888812345', 'ringan'),
('KSM2', 'konsumen2', 'Bekasi', '08888812345', 'ringan'),
('KSM3', 'konsumen3', 'Bekasi', '08888854321', 'lengkap'),
('KSM4', 'sahlan', 'Bekasi', '08888812345', 'lengkap'),
('KSM7', 'tsalman', 'Garut', '08888888454', 'ringan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mekanik`
--

CREATE TABLE `mekanik` (
  `kode` char(6) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `pekerjaan` varchar(20) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `telepon` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `mekanik`
--

INSERT INTO `mekanik` (`kode`, `nama`, `pekerjaan`, `alamat`, `telepon`) VALUES
('MK1', 'mekanik', 'mekanik', 'Garut', '111111222222'),
('MK2', 'mekanik1', 'mekanik', 'Garut', '111111333333'),
('MK20', 'sahrudin', 'mekanik', 'Garut', '080333932823'),
('MK3', 'mekanik2', 'mekanik', 'Bandung', '111111444444'),
('MK30', 'putri', 'kasir', 'Garut', '08782571111'),
('MK4', 'mekanik3', 'mekanik', 'Bandung', '111111555555'),
('MK5', 'mekanik4', 'mekanik', 'Garut', '111111666666');

-- --------------------------------------------------------

--
-- Struktur dari tabel `supplier`
--

CREATE TABLE `supplier` (
  `kode` char(6) NOT NULL,
  `supplier` varchar(20) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `telepon` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `supplier`
--

INSERT INTO `supplier` (`kode`, `supplier`, `alamat`, `telepon`, `email`) VALUES
('SUPP01', 'nama supplier', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP02', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP03', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP04', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP05', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP06', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com'),
('SUPP07', 'nama supplier1', 'Bekasi', '08888812345', 'hamzamnur@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `kode` char(6) NOT NULL,
  `tanggal` datetime NOT NULL,
  `kd_pelanggan` char(6) NOT NULL,
  `nama_pelanggan` varchar(20) NOT NULL,
  `harga_barang` varchar(20) NOT NULL,
  `jumlah_barang` varchar(20) NOT NULL,
  `total` varchar(20) NOT NULL,
  `id_mekanik` char(6) NOT NULL,
  `nama_mekanik` varchar(20) NOT NULL,
  `status_transaksi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `transaksi`
--

INSERT INTO `transaksi` (`kode`, `tanggal`, `kd_pelanggan`, `nama_pelanggan`, `harga_barang`, `jumlah_barang`, `total`, `id_mekanik`, `nama_mekanik`, `status_transaksi`) VALUES
('TRA000', '2023-05-07 04:15:04', 'KSM1', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'lunas'),
('TRA001', '2023-05-07 04:15:04', 'KSM2', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'lunas'),
('TRA002', '2023-05-07 04:15:04', 'KSM3', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'lunas'),
('TRA003', '2023-05-07 04:15:04', 'KSM4', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'belum lunas'),
('TRA004', '2023-05-07 04:15:04', 'KSM5', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'lunas'),
('TRA005', '2023-05-07 04:15:04', 'KSM6', 'pelanggan1', '120000', '3', '80000', 'MK1', 'mekanik1', 'lunas');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`) VALUES
(1, 'admin', 'adminqwerty@gmail.com', '123'),
(12, 'user2', 'user2@gmail.com', '123'),
(13, 'user4', 'user4@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `histori_service`
--
ALTER TABLE `histori_service`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `konsumen`
--
ALTER TABLE `konsumen`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `mekanik`
--
ALTER TABLE `mekanik`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`kode`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
