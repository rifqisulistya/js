# ADT JAM dalam JavaScript

Dalam File script.js, akan didefinisikan TYPE JAM dalam bentuk <HH:MM:SS> dalam bahasa JavaScript dengan syarat sebagai berikut:
type Hour : integer [0..23]
type Minute : integer [0..59]
type Second : integer [0..59]
type JAM : 
HH : Hour, { Hour [0..23] }
MM : Minute, { Minute [0..59] }
SS : Second { Second [0..59] }

## Getting Started

file ini menjelaskan TYPE JAM dalam beberapa bagian yaitu:
* Kelompok validasi terhadap TYPE
* Konstruktor: Membentuk sebuah JAM dari komponen-komponennya
* Selektor dan pengubahan nilai pada komponen
	** GetHour
	** GetMinute
	** GetSecond
	** SetHour
	** SetMinute
	** SetSecond
* Kelompok konversi terhadap TYPE
	** Konversi Jam ke Detik
	** Konversi Detik ke Jam
* Kelompok operasi terhadap TYPE
	** Operator Relasional
	** Operator Aritmatika


## Authors

* **Rifqi Fajar Sulistya** - * Peserta kelas JavaScript* - [Techlab Institute](https://techlab.institute)



